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
      title: "Iraq Kurdistan Office",
      address:
        "Mawlawi St. Baba Shekh Building No.:20, Sulaymaniyah, Kurdistan",
      phone: ["+964 770 142 2200", "+964 750 142 2200"],
      email: ["info@toptaj.net"],
      hasWhatsapp: true,
    },
    {
      title: "Iran Office",
      address:
        "Jihad Square, Sports Boulevard, Corner of Azizi Passage Alley and Tanin, Baneh City, Kordestan",
      phone: ["+98 873 422 0619", "+98 918 875 4615"],
      email: ["Iran@toptaj.net"],
    },
    {
      title: "China Office",
      address:
        "Guangzhou,Wanstar Warehouse, No. 2 Tuanjie Road, Xinya Street, Huadu District, Guangzhou navigation Guangzhou Jinda Electronic Technology Co., LTD",
      phone: ["19128272526", "18679919532"],
      email: ["china.gz@toptaj.net"],
    },
   
    {
      title: "UAE Office",
      address:
        "Al Maktoum Hospital Street, Jackes Building No.:102, Deira, Dubai",
      phone: ["+971 55 288 7014"],
      email: ["dubai@toptaj.net"],
    },
    {
      title: "China Office",
      address:
        "仓库地址：广州市花都区新雅街团结路2号万仕达仓库（广州金达电子电子有限公司对面仓库），导航广州金达电子科技有限公司 联系电话: 聂先生:19128272526(微信同号);办公室: olay陈小姐:18679919532 微信同号 (送货前提前联系办公室确认唛头和装箱单)",

      phone: ["19128272526", "18679919532"],
      email: ["china.gz@toptaj.net"],
    },
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
            
            <div className="grid sm:grid-cols-2 gap-6">
              {officeDetails.map((office, index) => (
                <div
                  key={index}
                  className={`rounded-lg ${
                    index === 4 ? "col-span-full" : ""
                  } p-6 bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {office.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {office.address}
                  </p>
                  <div className="space-y-2">
                    {office.phone.map((num, idx) => (
                      <a
                        key={idx}
                        href={`tel:${num}`}
                        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>{num}</span>
                        {office.hasWhatsapp && idx === 0 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.93 11.72c-.39.39-1.02.39-1.41 0l-2.12-2.12a1 1 0 01-.21-.33L9.2 9.54a1 1 0 01.21-1.09l1.41-1.41a1 1 0 011.42 0l2.12 2.12a1 1 0 010 1.41l-1.42 1.42z" />
                          </svg>
                        )}
                      </a>
                    ))}
                    {office.email.map((mail, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${mail}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-yellow-400 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="break-all">{mail}</span>
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