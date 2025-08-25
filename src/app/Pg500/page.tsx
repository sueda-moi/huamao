'use client';
import JobListings from '@/components/pg500/JobListings';

import { useMessage } from '@/lib/useMessage';
import { useLocaleStore } from '@/store/useLocaleStore';
import { getAllJobs } from '@/lib/data/jobs';
import PageHero from '@/components/common/PageHero';


export default function Page500() {
  const getMessage = useMessage();
  const { locale } = useLocaleStore();
  const jobsFromData = getAllJobs(locale);

  const jobsForList = jobsFromData.map(job => ({
    title: job.title,
    tags: job.tags,
    image: job.image,
    href: `/careers/${job.jobId}`
  }));
  return (
    <>

      <PageHero 
        title={getMessage('Pg500', 'header_title')}
        subtitle={getMessage('Pg500', 'header_subtitle')}
      />
      <main>
        <JobListings jobs={jobsForList} />
      </main>
    </>
  );
}