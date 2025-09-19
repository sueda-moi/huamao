// CareerDetailPage.tsx

'use client';
import { getCoreJobById, Job } from '@/lib/data/jobs'; // Import Core function and Job type
import JobDetailLayout from '@/components/careers/JobDetailLayout';
import { useLocaleStore } from '@/store/useLocaleStore';
import { useState, useEffect } from 'react'; // Import hooks
import { useMessage } from '@/lib/useMessage';

type Props = {
  params: { jobId: string };
};

export default function CareerDetailPage({ params }: Props) {
  const { locale } = useLocaleStore();
  const getMessage = useMessage();
  const [job, setJob] = useState<Job | undefined>(undefined);

  useEffect(() => {
    const coreJob = getCoreJobById(params.jobId);
    if (coreJob) {
      // Hydrate the job object with translations
      const hydratedJob: Job = {
        ...coreJob,
        title: getMessage('jobs', `${coreJob.jobId}_title`) || 'Loading title...',
        tags: getMessage('jobs', `${coreJob.jobId}_tags`) || [],
        summary: {
          location: getMessage('jobs', `${coreJob.jobId}_summary_location`) || '',
          salary: getMessage('jobs', `${coreJob.jobId}_summary_salary`) || '',
          type: getMessage('jobs', `${coreJob.jobId}_summary_type`) || '',
        },
        description: getMessage('jobs', `${coreJob.jobId}_description`) || '',
        responsibilities: getMessage('jobs', `${coreJob.jobId}_responsibilities`) || [],
        qualifications: getMessage('jobs', `${coreJob.jobId}_qualifications`) || [],
        benefits: getMessage('jobs', `${coreJob.jobId}_benefits`) || [],
      };
      setJob(hydratedJob);
    }
  }, [params.jobId, locale, getMessage]);

  if (!job) {
    return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading Job Details...</div>;
  }

  return <JobDetailLayout job={job} />;
}