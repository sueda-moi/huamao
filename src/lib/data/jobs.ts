import type { Locale } from '@/store/useLocaleStore';

export type Job = {
    jobId: string;
    title: string;
    tags: string[];
    image: string;
    summary: {
        location: string;
        salary: string;
        type: string;
    };
    description: string;
    responsibilities: string[];
    qualifications: string[];
    benefits: string[];
};

const jobs: Record<Locale, Job[]> = {
  // --- JAPANESE DATA ---
  ja: [
    {
      jobId: 'it-engineer',
      title: '【経験者採用】ITエンジニア : SE/PG・PL/PM候補募集',
      tags: ['中途採用 (正社員)', '本社 (東京都新宿区)'],
      image: '/images/pg500/job-it.jpg',
      summary: { location: '東京都新宿区早稲田鶴巻町', salary: '月給 35万円 〜 70万円 (経験・能力を考慮)', type: '正社員' },
      description: '華茂株式会社の多岐にわたる事業の中核を担うITエンジニアを募集します。国際貿易、不動産、ITシステム開発はもちろん、医療品デザイン、ファッション、ECサイト運営など、急成長する自社プロジェクトの上流工程から保守・運用まで幅広くお任せします。',
      responsibilities: ['WebアプリケーションおよびSaaSプロダクトの設計、開発、テスト', 'プロジェクトの進捗管理、チームメンバーのリード（PL/PM候補）', '顧客との仕様調整、要件定義', 'AWS, Azure等のクラウドインフラの構築・運用'],
      qualifications: ['Webアプリケーションの開発経験3年以上（言語問わず）', 'データベース（SQL/NoSQL）の設計・運用経験', 'チームでの開発経験、Git等のバージョン管理ツールの使用経験'],
      benefits: ['各種社会保険完備', '交通費全額支給', '昇給年1回、賞与年2回'],
    },
    // ... add other Japanese jobs here
  ],
  // --- ENGLISH DATA ---
  en: [
    {
      jobId: 'it-engineer',
      title: '[Experienced Hire] IT Engineer: SE/PG/PL/PM Candidate',
      tags: ['Full-time', 'Head Office (Shinjuku-ku, Tokyo)'],
      image: '/images/pg500/job-it.jpg',
      summary: { location: 'Waseda Tsurumaki-cho, Shinjuku-ku, Tokyo', salary: 'Monthly Salary: ¥350,000 - ¥700,000 (DOE)', type: 'Full-time Employee' },
      description: "We are looking for an engineer to be at the core of Kamo Inc.'s diverse businesses. You will be responsible for a wide range of tasks, from upstream processes to maintenance and operation, for our rapidly growing in-house projects spanning not only international trade, real estate, and IT system development, but also medical product design, fashion, and e-commerce operation.",
      responsibilities: ['Design, development, and testing of web applications and SaaS products', 'Project progress management and team leadership (for PL/PM candidates)', 'Specification adjustment and requirements definition with clients', 'Construction and operation of cloud infrastructure such as AWS, Azure, etc.'],
      qualifications: ['3+ years of web application development experience (language agnostic)', 'Experience with database design and operation (SQL/NoSQL)', 'Experience with team-based development and version control tools like Git'],
      benefits: ['Full social insurance coverage', 'Full transportation allowance', 'Annual salary review, Bi-annual bonuses'],
    },
    // ... Add other English jobs here
  ],
  // --- CHINESE DATA ---
  zh: [
    {
      jobId: 'it-engineer',
      title: '【社招】IT工程师 : 诚聘SE/PG/PL/PM候选人',
      tags: ['正式员工', '总公司 (东京都新宿区)'],
      image: '/images/pg500/job-it.jpg',
      summary: { location: '东京都新宿区早稻田鹤巻町', salary: '月薪 35万日元 〜 70万日元 (依经验和能力)', type: '正式员工' },
      description: '我们正在招聘能在华茂株式会社的多元化业务中担当核心角色的IT工程师。您将广泛负责公司内部快速成长的各类项目，不仅包括国际贸易、房地产、IT系统开发，还涵盖医疗产品设计、时尚、电商网站运营等，覆盖从上游工程到维护运营的全部流程。',
      responsibilities: ['Web应用程序及SaaS产品的设计、开发与测试', '项目进度管理、团队成员领导（PL/PM候选人）', '与客户进行规格协调、需求定义', 'AWS、Azure等云基础设施的构建与运维'],
      qualifications: ['3年以上的Web应用程序开发经验（不限语言）', '数据库（SQL/NoSQL）的设计与运维经验', '团队开发经验、Git等版本管理工具的使用经验'],
      benefits: ['各类社会保险齐全', '交通费全额报销', '每年一次加薪、每年两次奖金'],
    },
    // ... add other Chinese jobs here
  ],
};

// --- Data Fetching Functions ---
export const getAllJobs = (locale: Locale): Job[] => {
  return jobs[locale] || [];
};

export const getJobById = (jobId: string, locale: Locale): Job | undefined => {
  return (jobs[locale] || []).find(job => job.jobId === jobId);
};