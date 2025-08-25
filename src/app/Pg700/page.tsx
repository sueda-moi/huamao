// src/app/Pg200/page.tsx

import React from 'react';
import Link from 'next/link';
import styles from './ServicesPage.module.css';
import { FaGlobe, FaLaptopCode, FaCity } from 'react-icons/fa'; // Importing business icons
import PageHero from '@/components/common/PageHero';

// Define the structure for a single service
type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Data for your services. This makes it easy to add or change services later.
const servicesData: Service[] = [
  {
    icon: FaGlobe,
    title: "国際貿易・グローバル流通支援",
    description: "日本と世界を結ぶ信頼の架け橋として、効率的で安定したグローバルサプライチェーンを構築・支援します。",
  },
  {
    icon: FaLaptopCode,
    title: "情報処理・SaaS開発",
    description: "ビジネスの非効率を解消する、最先端のSaaSアプリケーションを自社開発。企業のDXを強力に推進します。",
  },
  {
    icon: FaCity,
    title: "不動産企画・収益化支援",
    description: "データとITを駆使し、遊休不動産の再生から運営までを一貫してサポート。資産価値の最大化を実現します。",
  },
];

const ServicesPage = () => {
  return (
    <main className={styles.servicesPage}>
      {/* 1. Hero Section for the page title */}
      <PageHero 
        title="事業内容" 
        subtitle="私たちの専門領域と、お客様に提供する独自の価値" 
      />

      {/* 2. Main section for listing the services */}
      <section className={styles.servicesListSection}>
        <div className={styles.container}>
          <div className={styles.introText}>
            <p>
              華茂は、国際貿易、最先端IT、不動産価値創造の3つのコア領域で事業を展開しています。<br />
              それぞれの分野で培った深い知見とネットワークを融合させ、お客様の課題に最適なソリューションを提供します。
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.cardIcon}>
                  <service.icon />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call to Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>あなたのビジネスを、次のステージへ</h2>
          <p className={styles.ctaSubtitle}>
            私たちの専門知識が、あなたの課題を解決します。まずはお気軽にご相談ください。
          </p>
          <Link href="/Pg600" className={styles.ctaButton}>
            お問い合わせ
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;