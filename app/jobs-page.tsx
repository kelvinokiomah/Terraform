"use client";

import { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/jobs")
      .then(res => res.json())
      .then(setJobs)
      .catch(() => setJobs([]));
  }, []);

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Azure DevOps Outside IR35 Jobs</h1>

      {jobs.length === 0 && (
        <p className="text-gray-500">No jobs available at the moment.</p>
      )}

      <div className="space-y-6">
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </main>
  );
}
