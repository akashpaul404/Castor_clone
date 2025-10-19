import React from "react";
import { useParams } from "react-router-dom";
import borderLine from "../assets/border.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";


const cityData = {
  siliguri: {
    title: "Siliguri",
    subtitle: "The Gateway to the North East",
    bannerImage:
      "https://images.pexels.com/photos/45987/pexels-photo-45987.jpeg",
    description: `Nestled at the foothills of the Himalayas, **Siliguri** is more than just a stopover town - it's the **gateway to North East India**. Connecting major destinations like Darjeeling, Sikkim, Dooars, and Bhutan, this bustling city is often overlooked, but holds hidden gems of its own.`,
    content: `
      <h3>Where is Siliguri Located?</h3>
      <p>Siliguri lies in the Darjeeling district of West Bengal and sits on the banks of the Mahananda River.</p>
      
      <h2>Top Things to Do in Siliguri</h2>
      <h3>Visit ISKCON Temple</h3>
      <p>This white-marble spiritual landmark is one of the city's most peaceful spaces.</p>
      <p><strong>Timing:</strong> 4:30 AM - 8:30 PM | <strong>Entry:</strong> Free</p>
      
      <h3>Explore Bengal Safari Park</h3>
      <p>A must-visit for wildlife lovers featuring tigers, leopards, elephants, and deer.</p>
      
      <h3>Go Tea Garden Hopping</h3>
      <p>Visit Sourenee Tea Estate or Makai Bari to see tea processing and taste fresh brews.</p>
      
      <h3>Where to Shop in Siliguri</h3>
      <ul>
        <li><strong>Hong Kong Market</strong> - Affordable electronics and fashion</li>
        <li><strong>Bidhan Market</strong> - Local handicrafts</li>
        <li><strong>City Centre Mall</strong> - Modern shopping</li>
      </ul>
      
      <h3>What & Where to Eat</h3>
      <ul>
        <li><strong>Momos & Thukpa</strong> - Try "Ti Amo"</li>
        <li><strong>Kosha Mangsho & Luchi</strong> - Bengali classics</li>
        <li><strong>Cafés</strong> - The Tribe Café</li>
      </ul>
    `,
    hotel: {
      name: "Surya Grand By Castor Siliguri",
      description: "Elegant Comfort in Siliguri",
      slug: "surya-grand-by-castor-siliguri",
    },
  },

  gangtok: {
    title: "Gangtok",
    subtitle: "Discover the Soul of Sikkim",
    bannerImage:
      "https://images.pexels.com/photos/2324780/pexels-photo-2324780.jpeg",
    description: `Perched at 5,500 feet above sea level, **Gangtok** is a fusion of misty mountains, Buddhist culture, and crisp mountain air. From colorful monasteries to buzzing bazaars and scenic ropeways, Gangtok is not just a hill station - it's the heart of Sikkim.`,
    content: `
    <p>Whether you're chasing peaceful moments, planning adventure getaways, or simply want to unplug - Gangtok in 2025 offers it all.</p>
    
    <h2>Where is Gangtok Located?</h2>
    <p>Gangtok lies in <strong>East Sikkim</strong>, connected via NH10 from Siliguri. It serves as the base for those heading to <strong>Nathula Pass, Tsomgo Lake, North Sikkim (Lachen & Lachung)</strong>, and more.</p>
    <ul>
      <li><strong>Nearest Airport:</strong> Pakyong (40 mins) or Bagdogra (4.5 hrs)</li>
      <li><strong>Nearest Railhead:</strong> New Jalpaiguri (5 hrs drive)</li>
    </ul>
    
    <h2>Top Things to Do in Gangtok</h2>
    
    <h3>1. MG Marg - The Heart of the City</h3>
    <p>This traffic-free boulevard is ideal for shopping, café hopping, and soaking up Gangtok's relaxed vibe. In the evenings, it's beautifully lit with street performances and live music.</p>
    
    <h3>2. Rumtek Monastery</h3>
    <p>One of Sikkim's most sacred monasteries, Rumtek is a spiritual and architectural marvel located 24 km from town. Don't miss the prayer wheels and panoramic valley views.</p>
    
    <h3>3. Tashi View Point</h3>
    <p>Get stunning views of Mt. Kanchenjunga during sunrise. Arrive early, bring your camera, and sip local tea as the mountains light up in gold.</p>
    
    <h3>4. Hanuman Tok & Ganesh Tok</h3>
    <p>Both temples offer peace, spirituality, and unbeatable viewpoints. Hanuman Tok is managed by the Indian Army and has a quiet, divine atmosphere.</p>
    
    <h3>5. Namgyal Institute of Tibetology</h3>
    <p>This Tibetan research center and museum houses rare manuscripts, thangka paintings, and Buddhist relics. A must-visit for history lovers.</p>
    
    <h3>6. Ropeway Ride Over Gangtok</h3>
    <p>Float above the city in a scenic cable car ride offering breathtaking aerial views. Great for families and photographers.</p>
    
    <h3>7. Tsomgo Lake & Baba Mandir <em>(Day Trip)</em></h3>
    <p>Only 40 km away, Tsomgo Lake is a high-altitude glacial lake surrounded by snow-capped peaks. Baba Mandir, nearby, is a military shrine honoring a soldier's spirit.</p>
    <p><strong>Permit Required:</strong> Yes (Indian nationals only)</p>
    
    <h3>8. Nathula Pass <em>(Highly Recommended)</em></h3>
    <p>Located at 14,000 ft on the Indo-China border, Nathula is dramatic and awe-inspiring. Visit only with proper permits arranged a day in advance.</p>
    
    <h3>Where to Shop in Gangtok</h3>
    <ul>
      <li><strong>Lal Bazaar</strong> - Local produce, woollens, and spices</li>
      <li><strong>Handicrafts Emporium</strong> - Authentic Sikkimese handlooms, carpets, masks, and thangkas</li>
      <li><strong>MG Marg</strong> - Souvenirs, tea, jewelry, and Tibetan artifacts</li>
    </ul>
    
    <h3>What to Eat in Gangtok</h3>
    <p>Gangtok's cuisine blends <strong>Tibetan, Nepali, and North East Indian flavors</strong>. Don't leave without trying:</p>
    <ul>
      <li><strong>Phagshapa</strong> - Pork stew with radish</li>
      <li><strong>Sel Roti & Aloo Dum</strong> - Nepali street food combo</li>
      <li><strong>Shaphaley & Thukpa</strong> - Tibetan favorites</li>
      <li><strong>Chhurpi soup</strong> - Fermented cheese-based comfort food</li>
      <li><strong>Tongba</strong> - Fermented millet beer served hot</li>
    </ul>
    
    <p><strong>Recommended Places:</strong></p>
    <ul>
      <li><strong>Nimtho</strong> - Traditional Sikkimese thali</li>
      <li><strong>Taste of Tibet</strong> - Authentic and affordable</li>
      <li><strong>The Alpine Table</strong> - Elegant dining at Surya Dzongkar Residency By Castor</li>
    </ul>
    
    <h3>Explore More from Gangtok</h3>
    <p>If you're spending 4-5 days, add these to your itinerary:</p>
    
    <p><strong>Ravangla (2.5 hrs)</strong></p>
    <p>Home to the towering Buddha Park and panoramic Himalayan views. Great for photography and spiritual vibes.</p>
    
    <h3>Namchi (3 hrs)</h3>
    <p>Visit the giant statue of Guru Padmasambhava, Char Dham complex, and enjoy sweeping landscapes.</p>
    
    <h3>Travel Tips for Gangtok</h3>
    <ul>
      <li><strong>Best Time to Visit:</strong> March-June (clear views), October–December (festivals & chill)</li>
      <li><strong>Permits:</strong> Required for Nathula, North Sikkim, Tsomgo (apply via registered travel agent)</li>
      <li><strong>Altitude Caution:</strong> Stay hydrated, especially for high-altitude trips</li>
      <li><strong>Transport:</strong> Shared cabs, taxis, and local guides available</li>
      <li><strong>Weather:</strong> Carry layers - evenings are chilly even in summer</li>
    </ul>
    
    <hr>
    
    <p>Gangtok is Sikkim's beating heart - spiritual, scenic, and refreshingly clean. Whether you're here for food, faith, or fresh air, the city has something for every kind of traveler. With organized streets, smiling locals, and nature always within reach, Gangtok feels like a retreat in the truest sense.</p>
    
    <p>Plan your trip, stay at Surya Dzongkar Residency, and let the hills work their magic on you.</p>
  `,
    hotel: {
      name: "Surya Dzongkar Residency By Castor Gangtok",
      description: "Hillside Views & Warm Hospitality",
      slug: "surya-dzongkar-residency-by-castor-gangtok",
    },
  },
};

function Explore() {
  const { city } = useParams(); // Get city from URL
  const data = cityData[city];

  
  if (!data) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center">
          <h2>City not found</h2>
          <p>
            <a href="/">Back to Home</a>
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div
        className="banner-header inner valignend bg-img bg-center prelative"
        style={{ backgroundImage: `url('${data.bannerImage}')` }}
      >
        <div className="container-fluid py-5 prelative zindex3 ofhidden">
          <div className="caption prelative zindex3">
            <div className="prelative d-inline-block">
              <h1 className="text-uppercase white m-0 fadeInUp wow animated">
                <span>{data.title}</span>
              </h1>
            </div>
            <p className="h3 white fadeInUp wow animated">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-4 py-lg-5 ofhidden ">
        <div className="container  p-5">
          <div
            className="sneho pjustify "
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </section>

      {/* Hotel Section */}
      <section className="py-4 py-lg-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-4">
            <span
              className="fw-400 text-uppercase mb-2 d-block"
              style={{ color: "#6c757d", letterSpacing: "2px" }}
            >
              Accommodation in {data.title}
            </span>
            <h3 className="h2 fw-500 text-uppercase">
              <span>{data.hotel.name}</span>
            </h3>
          </div>
          <div className="text-center">
            <a
              href={`/hotels/${data.hotel.slug}`}
              className="main-btn main-btn1"
            >
              Explore Hotel{" "}
              <i className="ms-2 bi bi-arrow-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </section>

     
      <section className="py-2 bready">
        <div className="container">
          <ol className="font14 breadcrumb justify-content-center dark mb-0 text-uppercase">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Explore {data.title}</li>
          </ol>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Explore;
