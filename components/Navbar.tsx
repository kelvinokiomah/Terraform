import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6 py-4 bg-white shadow-sm flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Outside IR35 Jobs Scanner
      </Link>

      <Link href="/jobs" className="text-gray-700 hover:text-black">
        Jobs
      </Link>
    </nav>
  );
}
