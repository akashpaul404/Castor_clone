package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Amenity struct {
	Icon string `json:"icon"`
	Name string `json:"name"`
}

type Room struct {
	Name      string    `json:"name"`
	Slug      string    `json:"slug"`
	Image     string    `json:"image"`
	Tagline   string    `json:"tagline"`
	Amenities []Amenity `json:"amenities"`
	Link      string    `json:"link"`
}

type CelebrateItem struct {
	Type    string `json:"type"` 
	Name    string `json:"name"`
	Image   string `json:"image"`
	Tagline string `json:"tagline"`
	Details string `json:"details"`
	Link    string `json:"link"`
}

type FAQ struct {
	Question string `json:"question"`
	Answer   string `json:"answer"`
}

type Location struct {
	Address       string `json:"address"`
	MapLink       string `json:"mapLink"`
	AirportText   string `json:"airportText"`
	TransportText string `json:"transportText"`
	MapEmbed      string `json:"mapEmbed"`
}

type Overview struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	CoverImage  string `json:"coverImage"`
}

type Hotel struct {
	ID          int             `json:"id"`
	Slug        string          `json:"slug"`
	Name        string          `json:"name"`
	Description string          `json:"description"`
	Overview    Overview        `json:"overview"`
	Rooms       []Room          `json:"rooms"`
	Amenities   []Amenity       `json:"amenities"`
	Celebrate   []CelebrateItem `json:"celebrate"`
	Gallery     []string        `json:"gallery"` // All images for pagination
	Location    Location        `json:"location"`
	FAQs        []FAQ           `json:"faqs"`
}

type Offer struct {
	Name        string `json:"name"`
	Validity    string `json:"validity"`
	Description string `json:"description"`
	Terms       string `json:"terms"`
}
type HotelData struct {
	Terms  interface{} `json:"terms"`
	Hotels []Hotel     `json:"hotels"`
}
type BookingInquiry struct {
	Checkin     string `json:"checkin"`
	Checkout    string `json:"checkout"`
	HotelName   string `json:"hotelname"`
	RoomType    string `json:"roomtype"`
	Rooms       int    `json:"rooms"`
	Adult       int    `json:"adult"`
	Child       int    `json:"child"`
	Message     string `json:"message"`
	Name        string `json:"name"`
	Phone       string `json:"phone"`
	Email       string `json:"email"`
	Address     string `json:"address"`
	SubmittedAt string `json:"submittedAt"`
}
type ContactInquiry struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Phone     string    `json:"phone"`
	Email     string    `json:"email"`
	Address   string    `json:"address"`
	Subject   string    `json:"subject"`
	Message   string    `json:"message"`
	CreatedAt time.Time `json:"created_at"`
}

func main() {
	r := gin.Default()

	// CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// API Endpoints
	r.GET("/api/hotels", getHotels)
	r.GET("/api/hotels/:slug", getHotel)
	r.GET("/api/hotels/:slug/gallery", getGallery)
	r.GET("/api/offers", getOffers)
	r.POST("/api/contact", postContact)
	r.POST("/api/booking-inquiry", createBookingInquiry)
	r.POST("/api/contact", submitContactInquiry)

	// Serve static files
	r.Static("/assets", "./assets")
	r.Static("/static", "./static/static")

	// Serve main React assets
	r.StaticFile("/", "./static/index.html")
	r.StaticFile("/favicon.ico", "./static/favicon.ico")
	r.StaticFile("/manifest.json", "./static/manifest.json")
	r.StaticFile("/logo192.png", "./static/logo192.png")
	r.StaticFile("/logo512.png", "./static/logo512.png")
	r.StaticFile("/robots.txt", "./static/robots.txt")

	// Catch-all for React Router
	r.NoRoute(func(c *gin.Context) {
		c.File("./static/index.html")
	})

	log.Println("Server starting on :8080")
	r.Run(":8080")
}

func getHotels(c *gin.Context) {
	data, err := os.ReadFile("data/hotels.json")
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to read hotels data: " + err.Error()})
		log.Println("Error reading hotels.json:", err)
		return
	}

	var hotelData HotelData
	if err := json.Unmarshal(data, &hotelData); err != nil {
		c.JSON(500, gin.H{"error": "Failed to parse hotels data: " + err.Error()})
		log.Println("Error parsing hotels.json:", err)
		return
	}

	c.JSON(200, hotelData.Hotels)
}

func getHotel(c *gin.Context) {
	slug := c.Param("slug")
	data, err := os.ReadFile("data/hotels.json")
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to read hotels data: " + err.Error()})
		return
	}

	var hotelData HotelData
	if err := json.Unmarshal(data, &hotelData); err != nil {
		c.JSON(500, gin.H{"error": "Failed to parse hotels data: " + err.Error()})
		return
	}

	for _, h := range hotelData.Hotels {
		if h.Slug == slug {
			c.JSON(200, h)
			return
		}
	}
	c.JSON(404, gin.H{"error": "Hotel not found"})
}

func getGallery(c *gin.Context) {
	slug := c.Param("slug")
	offsetStr := c.Query("offset")
	limitStr := c.Query("limit")
	offset, _ := strconv.Atoi(offsetStr)
	limit, _ := strconv.Atoi(limitStr)

	if offset < 0 {
		offset = 0
	}
	if limit <= 0 {
		limit = 9
	}

	data, err := os.ReadFile("data/hotels.json")
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to read hotels data: " + err.Error()})
		return
	}

	var hotelData HotelData
	if err := json.Unmarshal(data, &hotelData); err != nil {
		c.JSON(500, gin.H{"error": "Failed to parse hotels data: " + err.Error()})
		return
	}

	for _, h := range hotelData.Hotels {
		if h.Slug == slug {
			if h.Gallery == nil {
				c.JSON(200, gin.H{"images": []string{}, "hasMore": false})
				return
			}

			end := offset + limit
			if end > len(h.Gallery) {
				end = len(h.Gallery)
			}
			images := h.Gallery[offset:end]
			c.JSON(200, gin.H{"images": images, "hasMore": end < len(h.Gallery)})
			return
		}
	}
	c.JSON(404, gin.H{"error": "Hotel not found"})
}

func getOffers(c *gin.Context) {
	data, err := os.ReadFile("data/offers.json")
	if err != nil {
		
		c.JSON(200, []interface{}{})
		return
	}
	var offers []Offer
	if err := json.Unmarshal(data, &offers); err != nil {
		c.JSON(500, gin.H{"error": "Failed to parse offers data: " + err.Error()})
		return
	}
	c.JSON(200, offers)
}

func postContact(c *gin.Context) {
	var contact map[string]string
	if err := c.BindJSON(&contact); err != nil {
		c.JSON(400, gin.H{"error": "Invalid JSON: " + err.Error()})
		return
	}

	
	log.Printf("Contact form submission: %+v", contact)

	c.JSON(200, gin.H{"message": "Thank you for your message. We'll get back to you soon!"})
}
func createBookingInquiry(c *gin.Context) {
	var booking BookingInquiry

	if err := c.ShouldBindJSON(&booking); err != nil {
		log.Printf("ERROR: Failed to bind JSON: %v", err)
		c.JSON(400, gin.H{"error": "Invalid request data"})
		return
	}

	log.Printf("INFO: Received booking data: %+v", booking)

	
	booking.SubmittedAt = time.Now().Format(time.RFC3339)

	
	if _, err := os.Stat("data"); os.IsNotExist(err) {
		log.Println("INFO: Creating data directory...")
		os.Mkdir("data", 0755)
	}

	
	var bookings []BookingInquiry
	filePath := "data/booking_inquiry.json"

	file, err := os.ReadFile(filePath)
	if err != nil {
		log.Printf("WARNING: Could not read existing file (might not exist): %v", err)
		
		bookings = []BookingInquiry{}
	} else {
		if err := json.Unmarshal(file, &bookings); err != nil {
			log.Printf("ERROR: Failed to unmarshal existing bookings: %v", err)
			bookings = []BookingInquiry{}
		}
		log.Printf("INFO: Found %d existing bookings", len(bookings))
	}

	
	bookings = append(bookings, booking)
	log.Printf("INFO: Total bookings after append: %d", len(bookings))

	// Write back to file
	data, err := json.MarshalIndent(bookings, "", "  ")
	if err != nil {
		log.Printf("ERROR: Failed to marshal bookings: %v", err)
		c.JSON(500, gin.H{"error": "Failed to save booking"})
		return
	}

	log.Printf("INFO: Writing %d bytes to %s", len(data), filePath)

	if err := ioutil.WriteFile(filePath, data, 0644); err != nil {
		log.Printf("ERROR: Failed to write file: %v", err)
		c.JSON(500, gin.H{"error": "Failed to write booking data"})
		return
	}

	log.Printf("SUCCESS: Booking saved successfully")

	c.JSON(200, gin.H{
		"message": "Booking inquiry submitted successfully",
		"booking": booking,
	})
}
func submitContactInquiry(c *gin.Context) {
	var inquiry ContactInquiry

	if err := c.ShouldBindJSON(&inquiry); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Read existing inquiries
	file, err := ioutil.ReadFile("data/contact_inquiry.json")
	var inquiries []ContactInquiry
	if err == nil {
		json.Unmarshal(file, &inquiries)
	}

	// Add new inquiry
	inquiry.ID = len(inquiries) + 1
	inquiry.CreatedAt = time.Now()
	inquiries = append(inquiries, inquiry)

	// Save to file
	data, _ := json.MarshalIndent(inquiries, "", "  ")
	err = ioutil.WriteFile("data/contact_inquiry.json", data, 0644)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save inquiry"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Contact inquiry submitted successfully",
		"id":      inquiry.ID,
	})
}
