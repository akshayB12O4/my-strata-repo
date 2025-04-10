import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      {}
      <header className="w-full flex justify-between items-center p-6 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Strata Management</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
            <Link href = "/">
              <a>Home</a>
            </Link>
            </li>
            <li>
            <Link href = "contact.html">
              <a>Contact</a>
            </Link>
            </li>
          </ul>
        </nav>
      </header>

      {}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-4xl font-bold text-center sm:text-left">
          Welcome to Strata Management
        </h2>
        <p className="text-lg text-center sm:text-left max-w-xl">
          Providing reliable strata management solutions to ensure smooth operations and community well-being.
        </p>
        <Image src="/strata.jpg" alt="Strata building" width={500} height={300} className="rounded-lg shadow-lg" />
        <Link href="/contact">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Contact Us
          </button>
        </Link>
        <p className="text-lg text-center sm:text-left max-w-xl">
          Look at Strata Management Legislations from NSW Government.
        </p>
        <Link href="/stratalaw.pdf" target="_blank">
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Read Now!
          </button>
        </Link>

      </main>

      {}
      <footer className="w-full text-center py-4 bg-gray-800 text-white">
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
