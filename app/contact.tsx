import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      {}
      <header className="w-full flex justify-between items-center p-6 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Strata Management</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-4xl font-bold text-center sm:text-left">
          Contact Us
        </h2>
        <p className="text-lg text-center sm:text-left max-w-xl">
          Have questions or need strata management assistance? Reach out to our team.
        </p>
        
        <form className="flex flex-col gap-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 border border-gray-300 rounded-md"
          />
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </main>

      {}
      <footer className="w-full text-center py-4 bg-gray-800 text-white">
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
