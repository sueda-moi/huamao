'use client';

import React from 'react';
import styles from './ServicesPage.module.css';
import { 
  FaGlobe, FaLaptopCode, FaCity, FaShoppingCart, FaHeartbeat, FaTshirt 
} from 'react-icons/fa';
import PageHero from '@/components/common/PageHero';
import { useMessage } from '@/lib/useMessage';

type Service = {
  icon: string;
  title: string;
  description: string;
};

const iconMap: { [key: string]: React.ElementType } = {
  FaGlobe,
  FaLaptopCode,
  FaCity,
  FaShoppingCart,
  FaHeartbeat,
  FaTshirt,
};

const ServicesPage = () => {
  const getMessage = useMessage();

  const rawServices = getMessage('Pg700', 'services_list');
  const servicesData: Service[] = Array.isArray(rawServices) ? rawServices : [];

  return (
    <main className={styles.servicesPage}>
      {/* 1. Hero Section: Use flattened keys and add fallbacks */}
      <PageHero 
        title={getMessage('Pg700', 'hero_title') || ''} 
        subtitle={getMessage('Pg700', 'hero_subtitle') || ''} 
      />

      {/* 2. Main section */}
      <section className={styles.servicesListSection}>
        <div className={styles.container}>
          <div className={styles.introText}>
            <p>
              {/* Use the new flattened key */}
              {getMessage('Pg700', 'intro_paragraph') || ''}
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.cardIcon}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    

    </main>
  );
};

export default ServicesPage;