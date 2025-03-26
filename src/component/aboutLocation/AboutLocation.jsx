import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutLocation = () => {
  const { t } = useTranslation()

  const locations = [
    { 
      id: 1, 
      top: "20%", 
      left: "25%", 
      address: "Iraq - Kurdistan, Sulaymaniyah",
      image: "/images/iraq-office.jpg",
      phone: "+964 770 142 2200",
      email: "info@toptaj.net"
    },
    { 
      id: 2, 
      top: "30%", 
      left: "60%", 
      address: "Iran - Kordestan, Baneh City",
      image: "/images/iran-office.jpg",
      phone: "+98 873 422 0619",
      email: "toptajiran@gmail.com"
    },
    { 
      id: 3, 
      top: "15%", 
      left: "80%", 
      address: "China - Guangzhou",
      image: "/images/china-office.jpg"
    },
    { 
      id: 4, 
      top: "18%", 
      left: "52%", 
      address: "UAE - Dubai, Deira",
      image: "/images/dubai-office.jpg",
      phone: "+971 55 288 7014",
      email: "toptajuae@gmail.com"
    }
  ];

  const officeDetails = [
    {
      title: "Iraq Office",
      address: "Mawlawi St. Baba Shekh Building No.:20, Sulaymaniyah, Kurdistan",
      phone: ["+964 770 142 2200", "+964 750 142 2200"],
      email: ["info@toptaj.net ", "toptajcargo@gmail.com"],
      whatsapp: true
    },
    {
      title: "Iran Office",
      address: "Jihad Square, Sports Boulevard, Corner of Azizi Passage Alley and Tanin, Baneh City, Kordestan",
      phone: ["+98 873 422 0619", "+98 918 875 4615"],
      email: ["toptajiran@gmail.com"]
    },
    {
      title: "CHINA – Guangzhou Office",
      address: "Guangzhou, Baiyun District, Baiyun Avenue, No.: 2, Building 2, Room 201",
      phone: ["+86 755 888 8888"],
      email: ["toptajchina@gmail.com"]
     
    },
    {
      title: "UAE Office",
      address: "Al Maktoum Hospital Street, Jackes Building No.:102, Deira, Dubai",
      phone: ["+971 55 288 7014"],
      email: ["toptajuae@gmail.com"]
    }
  ];

  return (
    <section className="get-in-touch font-Jost py-[140px] mx-auto relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-0 gap-8">
          {/* Left Section */}
          <div className="space-y-10 px-4">
            <span className="italic text-yellow-400 font-bold font-inter text-xl mb-4 block">
              Global Presence, Local Excellence
            </span>
            <h1 className="text-5xl text-gray-700 font-bold font-inter mb-8">
              Our Offices
            </h1>
            
            <div className="space-y-8 grid lg:grid-cols-2 gap-5  font-Jost">
              {officeDetails.map((office, index) => (
                <div 
                  key={index}
                  className=" rounded-lg  p-6 mt-8 border bg-slate-100  hover:shadow-lg transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{office.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                  <div className="space-y-2">
                    {office.phone.map((num, idx) => (
                      <a 
                        key={idx}
                        href={`tel:${num}`}
                        className="block text-yellow-400 hover:text-yellow-500 transition-colors"
                      >
                        {num} {office.whatsapp && idx === 0 && "(WhatsApp)"}
                      </a>
                    ))}
                    {office.email.map((mail, idx) => (
                      <a 
                        key={idx}
                        href={`mailto:${mail}`}
                        className="block text-gray-600 hover:text-yellow-400 transition-colors"
                      >
                        {mail}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="relative w-full h-full">
            <img
              src="https://wowtheme7.com/tf/logistick/assets/images/shapes/map-img.png"
              alt="Global Presence Map"
              className="w-full h-auto"
            />

            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute cursor-pointer group"
                style={{ top: location.top, left: location.left }}
              >
                <span className="w-3 h-3 rounded-full bg-yellow-400 block
                               animate-ping absolute opacity-75">
                </span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 block relative">
                </span>
                
                <div className="absolute w-48 bottom-full left-1/2 -translate-x-1/2 mb-2 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-lg shadow-lg p-3">
                    <p className="font-semibold text-sm text-gray-800">{location.address}</p>
                    {location.phone && (
                      <p className="text-xs text-gray-600 mt-1">{location.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLocation