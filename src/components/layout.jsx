import Link from "next/link";

export default function Layout({ children }) {
  const navLinks = [
    { id: "home", label: "Home", href: "/" }
];
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="navbar px-[1.5rem] bg-white">
        <nav className="w-full max-w-[720px] lg:max-w-[1300px] mx-auto flex items-center justify-between">
          <Link href="/" className="text-[#3C3C3B] capitalize text-5xl font-bold">
            Life
            <span className="text-[#E73331] uppercase">sg</span>
          </Link>

          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </nav>
      </div>

      <main className="flex-grow">{children}</main>
    </div>
  );
}
