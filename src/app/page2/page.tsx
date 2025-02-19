import Image from "next/image";
import Link from "next/link";



export default function Page2() {
    return(
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
        <main className="flex min-h-[calc(100vh-73px)] items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">En Construcción</h1>
        </main>
    </div>

    )
}