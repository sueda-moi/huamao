// Page500.tsx (Careers main page)

'use client';
import JobListings from '@/components/pg500/JobListings';
import { useMessage } from '@/lib/useMessage';
import { useLocaleStore } from '@/store/useLocaleStore';
import { getAllCoreJobs } from '@/lib/data/jobs'; // Use the new core function
import PageHero from '@/components/common/PageHero';

export default function Page500() {
  const getMessage = useMessage();
  const { locale } = useLocaleStore();
  
  const coreJobs = getAllCoreJobs();

  // Hydrate the core job data with translated strings
  const jobsForList = coreJobs.map(job => {
    const title = getMessage('jobs', `${job.jobId}_title`) || '';
    const tagsResult = getMessage('jobs', `${job.jobId}_tags`);
    const tags = Array.isArray(tagsResult) ? tagsResult : [];

    return {
      title: title,
      tags: tags,
      image: job.image,
      href: `/careers/${job.jobId}`
    };
  });

  return (
    <>
      <PageHero 
        title={getMessage('Pg500', 'header_title') || ''}
        subtitle={getMessage('Pg500', 'header_subtitle') || ''}
      />
      <main>
        <JobListings jobs={jobsForList} />
      </main>
    </>
  );
}