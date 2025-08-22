import type { Locale } from '@/store/useLocaleStore';

export type ArticleCategory = 'news' | 'press_release' | 'business' | 'blog';

export type Article = {
  id: string;
  category: ArticleCategory;
  date: string;
  title: string;
  content: string;
  excerpt?: string;
  image?: string;
};

// The object containing article data for all languages
const articles: Record<Locale, Article[]> = {
  // --- JAPANESE DATA ---
  ja: [
    { id: 'Pg301', 
      category: 'news', 
      date: '2024.01.19', 
      title: '次世代型グローバル企業を目指す「華茂株式会社」設立のお知らせ', 
      content: `<p>本日、令和6年1月19日、私たちは「華茂株式会社」（Hanamo Co., Ltd.）を設立いたしましたことをご報告申し上げます。</p><p>社名に込めた「華茂」の想いは、お客様やパートナー様と共に、事業の可能性という蕾を大きく育て、華々しい成功を咲かせるという私たちの決意を表しています。</p><h3>私たちのビジョン</h3><p>「華やかなる成長を、革新の力で次世代へ」を経営理念に、国際貿易、ITインフラ・SaaS開発、不動産企画・収益化支援の三つの事業を柱とし、それぞれの専門知識を融合させることで、世界市場で競争力を持つ日本発の次世代型グローバル企業を目指します。</p><p>今後の華茂株式会社の挑戦にご期待ください。</p>`, 
      excerpt: '本日、令和6年1月19日、私たちは「華茂株式会社」（Hanamo Co., Ltd.）を設立いたしました…' },
    { id: 'Pg302', 
      category: 'press_release', 
      date: '2024.04.15', 
      title: 'グローバル事業拡大の拠点として、シンガポールオフィスを開設しました。', 
      content: `<p>アジアのビジネスハブであるシンガポールに初の海外拠点を開設しました。これにより、グローバルなサプライチェーン支援と海外投資家ネットワークの強化を図ります。</p>`, 
      excerpt: 'アジアのビジネスハブであるシンガポールに初の海外拠点を開設しました…' },
    { id: 'Pg303', 
      category: 'business', 
      date: '2025.06.20', 
      title: 'ITとデータを活用した新サービス「不動産収益化支援」を正式にローンチしました。', 
      content: `<p>本日より、不動産オーナー様および投資家様向けに、データ分析とITを駆使した新しいコンサルティングサービスの提供を開始します。詳細はサービスページをご覧ください。</p>`, 
      excerpt: '本日より、不動産オーナー様および投資家様向けに、データ分析とITを駆使した…' },
    { id: 'Pg304', 
      category: 'blog', 
      date: '2025.07.10', 
      title: '不動産投資で高い成長を実現する「価値創造型戦略」とは？', 
      content: `<h3>競争ではなく、価値を創造する市場へ</h3><p>「価値創造型戦略」とは、価格競争が激しい既存市場（レッドオーシャン）に留まるのではなく、革新的なアイデアで新たな付加価値を生み出し、競争優位性を築く経営戦略です。</p><p>不動産投資においてもこの考え方は極めて重要です。多くの投資家が同じような指標で物件を奪い合う中、私たちはデータ分析とITの力で、まだ誰も気づいていない物件の隠れた価値や、新しい活用法を発見します。これが華茂株式会社が実践する不動産コンサルティングの核心です。</p>`, 
      excerpt: '競争の激しい市場でも、新たな価値を創造し高収益を生み出す「価値創造型戦略」…', 
      image: '/images/Pg300/blog-real-estate.jpg' },
    { id: 'Pg305', 
      category: 'blog', 
      date: '2025.07.24', 
      title: '初めての海外輸出入：失敗しないための5つのチェックポイント', 
      content: `<p>グローバルビジネスの第一歩である輸出入業務には、多くの落とし穴が存在します。華茂の専門家が、成功への鍵となる5つの必須チェックポイントを解説します。</p><ol><li><strong>インコタームズの正しい理解:</strong> 費用とリスクの責任分解点（FOB, CIF等）を契約前に明確にしましょう。</li><li><strong>正確なHSコードの特定:</strong> 関税率を決定する最も重要なコードです。誤ると追徴課税のリスクがあります。</li><li><strong>該非判定と輸出許可:</strong> 輸出する製品が輸出規制品（該非判定）に該当しないか必ず確認が必要です。</li><li><strong>輸送手段と保険の選定:</strong> 製品の特性、コスト、リードタイムを考慮し、最適な輸送手段（船便、航空便）と保険を選びます。</li><li><strong>信頼できるパートナー選定:</strong> 現地の通関業者や配送業者など、信頼できるパートナーとの連携が成功の鍵です。</li></ol><p>華茂株式会社では、これら全てのステップを専門家がサポートします。</p>`, 
      excerpt: 'グローバルビジネスの第一歩、輸出入業務。複雑な手続きや文化の違いなど、多くの落とし穴が…', 
      image: '/images/Pg300/blog-trade.jpg' }
  ],
  // --- ENGLISH DATA ---
  en: [
    { id: 'Pg301',
      category: 'news',
      date: 'Jan 19, 2024',
      title: "Announcing the Establishment of 'Hanamo Co., Ltd.', a Next-Generation Global Company",
      content: `<p>We are pleased to announce the establishment of Hanamo Co., Ltd. as of today, January 19, 2024.</p><p>The name 'Hanamo' (華茂) embodies our determination to nurture the budding potential of businesses alongside our clients and partners, allowing them to bloom into brilliant success.</p><h3>Our Vision</h3><p>With the corporate philosophy 'Bringing Brilliant Growth to the Next Generation with the Power of Innovation,' we aim to become a next-generation global company from Japan that is competitive in the world market, based on our three pillars: international trade, IT infrastructure & SaaS development, and real estate planning & profitability support.</p><p>Please look forward to the future endeavors of Hanamo Co., Ltd.</p>`,
      excerpt: 'We are pleased to announce the establishment of Hanamo Co., Ltd. as of today, January 19, 2024…'
    },
    { id: 'Pg302',
      category: 'press_release',
      date: 'Apr 15, 2024',
      title: 'Singapore Office Opened as a Hub for Global Business Expansion',
      content: `<p>We have opened our first overseas office in Singapore, the business hub of Asia. This will strengthen our global supply chain support and our network with overseas investors.</p>`,
      excerpt: 'We have opened our first overseas office in Singapore, the business hub of Asia…'
    },
    { id: 'Pg303',
      category: 'business',
      date: 'Jun 20, 2025',
      title: 'New "Real Estate Profitability Support" Service Launched, Utilizing IT and Data',
      content: `<p>Starting today, we are launching a new consulting service for real estate owners and investors that utilizes data analysis and IT. Please see our service page for details.</p>`,
      excerpt: 'Starting today, we are launching a new consulting service for real estate owners and investors…'
    },
    { id: 'Pg304',
      category: 'blog',
      date: 'Jul 10, 2025',
      title: "What is the 'Value Creation Strategy' in Real Estate Investment?",
      content: `<h3>Creating Value, Not Just Competing</h3><p>The 'Value Creation Strategy' is a business approach that focuses on building a competitive advantage by generating new added value through innovative ideas, rather than remaining in saturated, price-competitive markets (red oceans).</p><p>This concept is extremely important in real estate investment. While many investors compete for properties based on the same metrics, we use data analysis and IT to discover hidden value and new uses for properties that no one else has noticed. This is the core of the real estate consulting practiced by Hanamo Co., Ltd.</p>`,
      excerpt: "The 'Value Creation Strategy' creates new value and generates high returns even in highly competitive markets…",
      image: '/images/Pg300/blog-real-estate.jpg'
    },
    { id: 'Pg305',
      category: 'blog',
      date: 'Jul 24, 2025',
      title: 'First Time Importing/Exporting: 5 Checkpoints to Avoid Failure',
      content: `<p>Import/export, the first step in global business, is full of pitfalls. The experts at Hanamo explain the five essential checkpoints for success.</p><ol><li><strong>Correct Understanding of Incoterms:</strong> Clearly define the division of costs and risks (FOB, CIF, etc.) before signing a contract.</li><li><strong>Accurate HS Code Identification:</strong> This is the most crucial code for determining tariff rates. Errors can lead to penalties.</li><li><strong>Export Control Compliance:</strong> You must always check if the products are subject to export regulations.</li><li><strong>Selection of Transport and Insurance:</strong> Choose the optimal transportation method (sea or air freight) and insurance based on product characteristics, cost, and lead time.</li><li><strong>Choosing Reliable Partners:</strong> Collaboration with trustworthy local customs brokers and delivery services is key to success.</li></ol><p>Hanamo Co., Ltd. provides expert support for all of these steps.</p>`,
      excerpt: "Import/export, the first step in global business, is full of pitfalls. The experts at Hanamo explain…",
      image: '/images/Pg300/blog-trade.jpg'
    }
  ],
  // --- CHINESE DATA ---
  zh: [
    { id: 'Pg301',
      category: 'news',
      date: '2024年1月19日',
      title: '关于旨在成为次世代全球化企业「华茂株式会社」成立的通知',
      content: `<p>我们在此荣幸地宣布，于本日，2024年1月19日，我们正式成立了“华茂株式会社”（Hanamo Co., Ltd.）。</p><p>公司名称“华茂”所蕴含的意念，代表了我们与客户及合作伙伴一道，将事业潜力的蓓蕾精心培育，使其绽放出辉煌成功的决心。</p><h3>我们的愿景</h3><p>我们以“以辉煌成长，凭革新之力，启迪次代”为经营理念，以国际贸易、IT基础建设与SaaS开发、不动产企划与收益化支持为三大业务支柱，通过融合各领域的专业知识，旨在成为源于日本且在全球市场具备竞争力的新一代全球化企业。</p><p>敬请期待华茂株式会社未来的挑战。</p>`,
      excerpt: '我们在此荣幸地宣布，于本日，2024年1月19日，我们正式成立了“华茂株式会社”…'
    },
    { id: 'Pg302',
      category: 'press_release',
      date: '2024年4月15日',
      title: '作为全球业务扩张的枢纽，新加坡办事处已成立',
      content: `<p>我们在亚洲的商业中心新加坡设立了首个海外据点。此举旨在加强我们的全球供应链支持能力以及与海外投资者的网络联系。</p>`,
      excerpt: '我们在亚洲的商业中心新加坡设立了首个海外据点…'
    },
    { id: 'Pg303',
      category: 'business',
      date: '2025年6月20日',
      title: '活用IT与数据的新服务“不动产收益化支持”正式上线',
      content: `<p>自今日起，我们正式为不动产所有者及投资者，提供运用数据分析与IT技术的全新咨询服务。详情请参阅我们的服务页面。</p>`,
      excerpt: '自今日起，我们正式为不动产所有者及投资者，提供运用数据分析与IT技术的全新咨询服务…'
    },
    { id: 'Pg304',
      category: 'blog',
      date: '2025年7月10日',
      title: '不动产投资中的「价值创造战略」是什么？',
      content: `<h3>创造价值，而非单纯竞争</h3><p>所谓“价值创造战略”，是一种旨在通过革新理念产生新的附加价值，从而构筑竞争优势的经营策略，而非停留在价格竞争激烈的现有市场（红海）。</p><p>这一理念在不动产投资中也至关重要。当众多投资者都依据相似的指标争抢房产时，我们则利用数据分析和IT的力量，去发现那些无人注意的房产隐藏价值或新的活用方法。这便是华茂株式会社所实践的不动产咨询的核心所在。</p>`,
      excerpt: '即便在竞争激烈的市场中也能创造新价值、产生高收益的“价值创造战略”…',
      image: '/images/Pg300/blog-real-estate.jpg'
    },
    { id: 'Pg305',
      category: 'blog',
      date: '2025年7月24日',
      title: '初次海外进出口：避免失败的5个要点',
      content: `<p>作为全球化业务的第一步，进出口业务存在着复杂手续、文化差异等诸多陷阱。华茂的专家将为您解说通往成功的5个关键要点。</p><ol><li><strong>正确理解国际贸易术语(Incoterms):</strong> 在签订合同前，必须明确费用与风险的责任分界点（如FOB, CIF等）。</li><li><strong>确定准确的HS编码:</strong> 这是决定关税率的最重要代码，一旦出错将有被追加征税的风险。</li><li><strong>该非判定与出口许可:</strong> 必须确认出口产品是否属于出口管制物品（该非判定）。</li><li><strong>选择运输方式与保险:</strong> 需考虑产品特性、成本和运输周期，选择最合适的运输方式（海运、空运）和保险。</li><li><strong>选择可靠的合作伙伴:</strong> 与当地值得信赖的报关行、物流公司等伙伴的合作是成功的关键。</li></ol><p>华茂株式会社为所有这些步骤提供专家支持。</p>`,
      excerpt: '作为全球化业务的第一步，进出口业务存在着复杂手续、文化差异等诸多陷阱…',
      image: '/images/Pg300/blog-trade.jpg'
    }
  ],
};

// --- Data Fetching Functions ---

export const getAllArticles = (locale: Locale): Article[] => {
  return articles[locale] || [];
};

export const getArticleById = (id: string, locale: Locale): Article | undefined => {
  return (articles[locale] || []).find(article => article.id === id);
};