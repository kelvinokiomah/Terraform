import JobCard from '../components/JobCard'
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-6xl font-bold mb-6">
          Outside IR35 Jobs Scanner
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Daily scans of Azure DevOps Outside-IR35 contract opportunities across the UK.
        </p>

        <Link
          href="/jobs"
          className="bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-900 transition"
        >
          Browse Jobs
        </Link>
      </motion.div>
    </main>
  );
}
