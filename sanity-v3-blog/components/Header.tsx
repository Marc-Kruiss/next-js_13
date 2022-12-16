import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 text-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQEb1glLCUnlrg/profile-displayphoto-shrink_400_400/0/1671044012953?e=1676505600&v=beta&t=-MXWy0ZVwd9o13qhxXLanieYZDpXsW4MO4tmAVEFwu4"
            alt="logo"
            className="rounded-full object-cover"
            width={50}
            height={50}
          />
        </Link>
        <h1>Kruiß</h1>
      </div>
      <div>
        <Link
          href={"https://www.linkedin.com/in/marc-kruiß-87a239220/"}
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Check out Linkedin
        </Link>
      </div>
    </header>
  );
}

export default Header;
