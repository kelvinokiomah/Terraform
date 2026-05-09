export default function JobCard({ job }) {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company || "Company not listed"}</p>

      <div className="mt-2 text-sm text-gray-700">
        <p><b>Location:</b> {job.location}</p>
        <p><b>Rate:</b> {job.rate}</p>
        <p><b>Source:</b> {job.source}</p>
      </div>

      <a
        href={job.url}
        target="_blank"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Apply Now
      </a>
    </div>
  );
}
