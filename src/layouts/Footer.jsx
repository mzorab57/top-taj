import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import topTajLogo from "/assets/img/TOPTAJCARGOPSD.png";

const Footer = () => {
  const location = useLocation().pathname;

  const officeLocations = [
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
    <>
      {location === "/dashboard" ? (
        ""
      ) : (
        <footer
          name="contacts"
          className="bg-gray-900 text-white relative tracking-wider font-sans"
        >
          {/* Shape Weight Background */}
          <div className="absolute right-0 bottom-14 z-10">
            <img
              src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/weight.png"
              alt="Shape Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="py-24 ">
            <div className="container mx-auto px-4 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
                {/* About Widget */}
                <div className="space-y-4 w-fit text-center">
                  <Link to="/" onClick={() => window.scrollTo(0, A0)}>
                    <img
                      src={topTajLogo}
                      alt="TopTaj Cargo Logo"
                      className="scale-150  "
                    />
                  </Link>
                </div>

                {/* pages links */}
                <div className="grid md:grid-cols-2 place-items-start">
                  <div className="space-y-1 grid">
                    <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-medium ">
                      Pages
                    </h5>

                    <Link
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-block tracking-wider  text-white  py-2 rounded hover:text-yellow-400 transition"
                    >
                      Home
                    </Link>
                    <Link
                      to="about"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-block  text-white  py-2 rounded hover:text-yellow-400 transition"
                    >
                      About Us
                    </Link>
                    <Link
                      to="services"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-block tracking-wider  text-white  py-2 rounded hover:text-yellow-400 transition"
                    >
                      Services
                    </Link>
                    <Link
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-block tracking-wider  text-white  py-2 rounded hover:text-yellow-400 transition"
                    >
                      Tracking
                    </Link>
                  </div>
                  {/* social links */}
                  <div className="my-10 md:my-0">
                    <span className="block text-2xl font-medium border-b w-fit border-b-gray-600 mb-2 tracking-wider ">
                      Social Network
                    </span>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-xl"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Office Locations */}
              <div className="col-span-2 space-y-6 px-4 lg:px-0">
                <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-medium">
                  Our Offices
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 lg:gap-6">
                  {officeLocations.map((office, index) => (
                    <div
                      key={index}
                      className={`space-y-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors
                        ${index === 4 ? "col-span-full lg:col-span-2" : ""}`}
                    >
                      <h6 className="font-semibold text-yellow-400 text-lg">
                        {office.title}
                      </h6>
                      <div className="flex items-start gap-2">
                        <FaMapMarkerAlt
                          className="mt-1 text-yellow-400 flex-shrink-0"
                          size={16}
                        />
                        <p className="text-sm text-gray-300 break-words">
                          {office.address}
                        </p>
                      </div>
                      {office.phone.length > 0 && (
                        <div className="flex items-start gap-2">
                          <div className="relative flex-shrink-0">
                            <FaPhone
                              className="mt-1 text-yellow-400"
                              size={16}
                            />
                            {office.hasWhatsapp && (
                              <FaWhatsapp
                                className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full"
                                size={8}
                              />
                            )}
                          </div>
                          <div className="flex flex-col text-sm text-gray-300">
                            {office.phone.map((num, idx) => (
                              <a
                                key={idx}
                                href={`tel:${num}`}
                                className="hover:text-yellow-400 transition-colors"
                              >
                                {num}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      {office.email.length > 0 && (
                        <div className="flex items-start gap-2">
                          <FaEnvelope
                            className="mt-1 text-yellow-400 flex-shrink-0"
                            size={16}
                          />
                          <div className="flex flex-col text-sm text-gray-300">
                            {office.email.map((mail, idx) => (
                              <a
                                key={idx}
                                href={`mailto:${mail}`}
                                className="hover:text-yellow-400 transition-colors break-all"
                              >
                                {mail}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div dir="ltr" className="text-center font-sans text-white   pb-10">
            <p>
              © 2025 Top Taj.
              <a
                href="https://wa.me/+9647701411893"
                className="mx-1 hover:text-gray-300  "
              >
                <span className="mx-1">Developed By TOP SOFT.</span>
                All Rights Reserved
              </a>
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
