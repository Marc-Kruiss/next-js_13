import Image from "next/image";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between space-x-2 font-normal px-10 py-5 bg-gray-100 dark:bg-slate-900 h-[80px] shadow-xl">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/images/logo.PNG"}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <p className="text-lg font-medium italic">Marc Kruiß Blog</p>
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <Link href="/" className="px-5 py-3">
          Technologien
        </Link>
        <DarkModeButton/>
      </div>
    </header>
  );
}

export default Header;
