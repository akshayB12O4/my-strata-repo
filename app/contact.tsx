import Image from "next/image";


export default function ContactPage() {
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
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">Get in touch with our strata management team.</p>
      </main>

      {}
      <footer className="w-full text-center p-4 bg-gray-800 text-white">
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
    
  );
}
