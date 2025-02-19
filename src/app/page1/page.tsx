import Image from "next/image";
import Link from "next/link";

export default function Page1() {
  return (
    <div>
      <header className="p-4">
        <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="Logo"
                width={100}                        
                height={24}
                />
            </Link>

            <div className="flex gap-6">
              <Link href="/" className="text-white hover:text-gray-200">
               Home
              </Link>
              <Link href="/page1" className="text-white hover:text-gray-200">
                Page 1
              </Link>
              <Link href="/page2" className="text-white hover:text-gray-200">
                Page 2
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="flex flex-row items-center gap-4 justify-center">
            <Image
              src="/porsche.png"
              alt="Image 1"
              width={150}
              height={100}
              className="rounded-lg shadow-md"
            />
            <p className="text-lg">
              Esto es un parrafoooo
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <p className="text-lg">
              Esto es otro parrafoooo
            </p>
            <Image
              src="/bulldogAms.jpeg"
              alt="Image 2"
              width={150}
              height={100}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/Paulaner.png"
              alt="Image 1"
              width={150}
              height={100}
              className="rounded-lg shadow-md"
            />
            <p className="text-lg">
              Esto es un parrafoooo
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
