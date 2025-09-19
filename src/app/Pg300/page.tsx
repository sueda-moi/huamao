'use client';

import ArticleList from '@/components/pg300/ArticleList';
import { getAllCoreArticles } from '@/lib/data/articles';
import { useMessage } from '@/lib/useMessage';
import PageHero from '@/components/common/PageHero';
import { useLocaleStore } from '@/store/useLocaleStore';

export default function Page300() {
  const getMessage = useMessage();
  const { locale } = useLocaleStore();

  const coreArticles = getAllCoreArticles();

  // Hydrate the core article data with translated content for display.
  const articlesForList = coreArticles.map(article => {
    const titleKey = `${article.id.toLowerCase()}_title`;
    const excerptKey = `${article.id.toLowerCase()}_excerpt`;
    // Use the correct property 'categoryKey' to build the translation key
    const categoryTranslationKey = `category_${article.categoryKey}`;

    return {
      // --- Data for Logic ---
      id: article.id,
      categoryKey: article.categoryKey, // Pass the key for filtering
      
      // --- Data for Display ---
      href: `/news/${article.id}`,
      image: article.image,
      title: getMessage('articles', titleKey) || '',
      excerpt: getMessage('articles', excerptKey) || '',
      categoryLabel: getMessage('articles', categoryTranslationKey) || '', // Populate the label
      date: new Date(article.date).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  });

  const articleListData = {
    filterTabs: [
      { key: 'all', label: getMessage('Pg300', 'tab_all') || '' },
      { key: 'news', label: getMessage('Pg300', 'tab_news') || '' },
      { key: 'press_release', label: getMessage('Pg300', 'tab_press_release') || '' },
      { key: 'business', label: getMessage('Pg300', 'tab_business') || '' },
      { key: 'blog', label: getMessage('Pg300', 'tab_blog') || '' },
    ],
    articles: articlesForList,
    searchPlaceholder: getMessage('Pg300', 'search_placeholder') || '',
  };

  return (
    <>
      <PageHero
        title={getMessage('Pg300', 'header_title') || ''}
        subtitle={getMessage('Pg300', 'header_subtitle') || ''}
      />
      <main>
        <ArticleList {...articleListData} />
      </main>
    </>
  );
}