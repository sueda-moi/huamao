// Defines the core article structure without translatable fields.
export interface CoreArticle {
  id: string;
  categoryKey: 'news' | 'press_release' | 'business' | 'blog'; // Category key
  date: string; // ISO 8601 format (YYYY-MM-DD) for easier parsing
  image?: string;
}

// Defines the final, hydrated article type used in components.
export interface Article extends CoreArticle {
  title: string;
  content: string;
  excerpt: string;
  categoryLabel: string;
}

// The single source of truth for core article data.
const coreArticles: CoreArticle[] = [
  { id: 'Pg301', categoryKey: 'news', date: '2024-06-27' },
  { id: 'Pg302', categoryKey: 'press_release', date: '2024-09-15' },
  { id: 'Pg303', categoryKey: 'business', date: '2025-06-20' },
  { id: 'Pg304', categoryKey: 'blog', date: '2025-07-10', image: '/images/Pg300/blog-real-estate.jpg' },
  { id: 'Pg305', categoryKey: 'blog', date: '2025-07-24', image: '/images/Pg300/blog-trade.jpg' }
];

// Function to get all core articles.
export const getAllCoreArticles = (): CoreArticle[] => {
  return coreArticles;
};

// Function to find a single core article by its ID.
export const getCoreArticleById = (id: string): CoreArticle | undefined => {
  return coreArticles.find(article => article.id === id);
};