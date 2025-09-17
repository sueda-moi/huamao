// src/app/Pg200/page.tsx

'use client'; // フックを使用するため、クライアントコンポーネントとして宣言

import React from 'react';
import Link from 'next/link';
import styles from './ServicesPage.module.css';
import { 
  FaGlobe, FaLaptopCode, FaCity, FaShoppingCart, FaHeartbeat, FaTshirt 
} from 'react-icons/fa';
import PageHero from '@/components/common/PageHero';
import { useMessage } from '@/lib/useMessage';

// JSONから受け取るサービスデータの型定義
type Service = {
  icon: string; // JSONではアイコン名を文字列として受け取る
  title: string;
  description: string;
};

// アイコン名（文字列）を実際のアイコンコンポーネントに対応させるためのマップ
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

  // JSONからサービスリストを取得（データがない場合は空の配列を返す）
  const rawServices = getMessage('Pg700', 'services_list');
  const servicesData: Service[] = Array.isArray(rawServices) ? rawServices : [];

  return (
    <main className={styles.servicesPage}>
      {/* 1. Hero Section: JSONからタイトルとサブタイトルを取得 */}
      <PageHero 
        title={getMessage('Pg700', 'hero.title')} 
        subtitle={getMessage('Pg700', 'hero.subtitle')} 
      />

      {/* 2. Main section: JSONから導入文とサービスリストを取得 */}
      <section className={styles.servicesListSection}>
        <div className={styles.container}>
          <div className={styles.introText}>
            {/* CSSで white-space: pre-line; を適用すると改行(\n)が反映されます */}
            <p>
              {getMessage('Pg700', 'intro.paragraph')}
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => {
              // iconMapを使って、文字列から正しいアイコンコンポーネントを取得
              const IconComponent = iconMap[service.icon];
              return (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.cardIcon}>
                    {/* アイコンが存在する場合のみレンダリング */}
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

      {/* 3. Call to Action Section: JSONからテキストを取得 */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{getMessage('Pg700', 'cta.title')}</h2>
          <p className={styles.ctaSubtitle}>
            {getMessage('Pg700', 'cta.subtitle')}
          </p>
          <Link href="/Pg600" className={styles.ctaButton}>
            {getMessage('Pg700', 'cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;