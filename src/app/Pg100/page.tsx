// TopPage.tsx

'use client';

import HeroSection from '@/components/top/HeroSection';
import FeatureSection from '@/components/top/FeatureSection';
import MvvSection from '@/components/top/MvvSection';
import NewsSection from '@/components/top/NewsSection';
import AboutUsSection from '@/components/top/AboutUsSection';
import { useMessage } from '@/lib/useMessage';
import { getAllCoreArticles } from '@/lib/data/articles'; 
import { useLocaleStore } from '@/store/useLocaleStore';

export default function TopPage() {
  const getMessage = useMessage();
  const { locale } = useLocaleStore();

  const heroData = {
    title: getMessage('Pg100', 'hero_title') || '',
    subtitle: getMessage('Pg100', 'hero_subtitle') || ''
  };

  const featureData = {
    title: getMessage('Pg100', 'feature_title') || '',
    description: getMessage('Pg100', 'feature_desc') || '',
    imageAlt: getMessage('Pg100', 'feature_title') || ''
  };

  const mvvData = {
    title: getMessage('Pg100', 'vision_title') || '',
    mainPhrase: getMessage('Pg100', 'vision_main') || '',
    subtitle: getMessage('Pg100', 'vision_sub') || ''
  };
  
  const coreArticles = getAllCoreArticles();
  const latestNews = coreArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3); 

  const newsItems = latestNews.map(article => {
    const titleKey = `${article.id.toLowerCase()}_title`;
    const categoryKey = `category_${article.category}`;

    return {
      date: new Date(article.date).toLocaleDateString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
      category: getMessage('articles', categoryKey) || '',
      title: getMessage('articles', titleKey) || '',
      href: `/news/${article.id}`
    };
  });

  const newsData = {
    sectionTitle: getMessage('Pg100', 'news_title') || '',
    buttonText: getMessage('Pg100', 'news_button') || '',
    newsItems: newsItems
  };

  const aboutData = {
    sectionTitle: getMessage('Pg100', 'about_title') || '',
    subtitle: getMessage('Pg100', 'about_subtitle') || '',
    links: [
      { title: getMessage('Pg100', 'about_link_1_title') || '', description: getMessage('Pg100', 'about_link_1_desc') || '', href: '/Pg400#ceo-message' },
      { title: getMessage('Pg100', 'about_link_2_title') || '', description: getMessage('Pg100', 'about_link_2_desc') || '', href: '/Pg400#profile' },
      { title: getMessage('Pg100', 'about_link_3_title') || '', description: getMessage('Pg100', 'about_link_3_desc') || '', href: '/Pg400#access' }
    ]
  };

  return (
    <>
      <HeroSection {...heroData} />
      <FeatureSection {...featureData} />
      <MvvSection {...mvvData} />
      <NewsSection {...newsData} />
      <AboutUsSection {...aboutData} />
    </>
  );
}