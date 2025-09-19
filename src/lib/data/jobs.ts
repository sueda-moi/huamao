// lib/data/jobs.ts

// The core structure of a job, without translatable text
export interface CoreJob {
    jobId: string;
    image: string;
}

// The final Job type used in components, including all translated fields
export interface Job extends CoreJob {
    title: string;
    tags: string[];
    summary: {
        location: string;
        salary: string;
        type: string;
    };
    description: string;
    responsibilities: string[];
    qualifications: string[];
    benefits: string[];
}

// The single source of truth for core job data
const coreJobs: CoreJob[] = [
    {
        jobId: 'it-engineer',
        image: '/images/pg500/job-it.jpg',
    },
    // ... add other core job data here
];

// --- Data Fetching Functions ---
export const getAllCoreJobs = (): CoreJob[] => {
    return coreJobs;
};

export const getCoreJobById = (jobId: string): CoreJob | undefined => {
    return coreJobs.find(job => job.jobId === jobId);
};