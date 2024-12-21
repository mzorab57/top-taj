import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Booking = () => {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="relative bg-black py-16 bg-cover bg-center flex items-center">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          
          {/* Titles Section */}
          <div className="text-white max-w-lg">
            <p className="text-lg font-medium mb-4 opacity-90 animate-fadeInUp">
              {t('need_table')}
            </p>
            <h3 className="text-4xl font-bold mb-4 animate-fadeInUp delay-200">
              {t('booking_title')}
            </h3>
          </div>
          
          {/* Button Section */}
          <div className="mt-6 lg:mt-0 animate-fadeInUp delay-400">
            <a
              href="/"
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary transition duration-300"
            >
              <span>{t('booking_button')}</span>
              <i className="fas fa-chevron-right ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
