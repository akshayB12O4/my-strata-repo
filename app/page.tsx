import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      {}
      <header className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Strata Management</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl">
        <h2 className="text-3xl font-bold text-center sm:text-left">Reliable Strata Management Services</h2>
        <p className="text-lg text-gray-700 text-center sm:text-left">
          We provide professional strata management services to ensure your property is well-maintained and efficiently managed.
        </p>
        <Image src="/strata.jpg" alt="Strata Building" width={600} height={400} className="rounded-lg shadow-md" />
        <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get in Touch</a>
      </main>

      {}
      <footer className="w-full text-center p-4 bg-gray-800 text-white">
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
