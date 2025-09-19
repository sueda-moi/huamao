'use client';

import { getCoreArticleById } from '@/lib/data/articles';
import { useLocaleStore } from '@/store/useLocaleStore';
import Link from 'next/link';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import type { Article } from '@/lib/data/articles';
import { useMessage } from '@/lib/useMessage';

type Props = {
  params: { articleId: string };
};

export default function ArticleDetailPage({ params }: Props) {
  const getMessage = useMessage();
  const { locale } = useLocaleStore();
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    const coreArticle = getCoreArticleById(params.articleId);

    if (coreArticle) {
      // Get localized fallback texts from common.json
      const loadingTitle = getMessage('common', 'loading_title') || 'Loading...';
      const loadingContent = getMessage('common', 'loading_content') || '<p>Loading...</p>';

      // Construct dynamic keys for translation lookup
      const titleKey = `${coreArticle.id.toLowerCase()}_title`;
      const contentKey = `${coreArticle.id.toLowerCase()}_content`;
      const categoryKey = `category_${coreArticle.categoryKey}`;
      
      const hydratedArticle: Article = {
        ...coreArticle,
        title: getMessage('articles', titleKey) || loadingTitle,
        content: getMessage('articles', contentKey) || loadingContent,
        categoryLabel: getMessage('articles', categoryKey) || '',
        excerpt: '', // Not needed on the detail page
        date: new Date(coreArticle.date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
      };
      setArticle(hydratedArticle);
    }
  }, [params.articleId, locale, getMessage]);

  if (!article) {
    return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading...</div>;
  }
  
  return (
    <main className={styles.pageContainer}>
        <article className={styles.article}>
            <header className={styles.header}>
            <div className={styles.meta}>
                <span className={styles.date}>{article.date}</span>
                <span className={styles.category}>{article.categoryKey}</span>
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            </header>

            <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: article.content }} 
            />

            <div className={styles.backButtonContainer}>
            <Link href="/Pg300" className={styles.backButton}>
                {getMessage('Pg300', 'newsArticlePagelink') || ''}
            </Link>
            </div>
        </article>
    </main>
  );
}