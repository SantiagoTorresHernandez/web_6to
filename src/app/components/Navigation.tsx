import Image from "next/image"
import Link from "next/link"

export default function Navigation(){
    return(
        <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
            <div className="flex items-center gap-8">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={24}
                        className="invert"
                    />
                </Link>

                <div className="flex gap-6">
                    
                </div>
            </div>
        </nav>
    )
}