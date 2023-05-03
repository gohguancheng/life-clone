import Link from "next/link";
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
  ];

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="navbar px-[1.5rem] bg-white shadow-black shadow-md">
        <nav className="w-full max-w-[720px] lg:max-w-[1300px] mx-auto flex items-center justify-between">
          <Link href="/" className="text-[#3C3C3B] capitalize text-5xl font-bold">
            Life
            <span className="text-[#E73331] uppercase">sg</span>
          </Link>

          <div>
            <ul className="flex gap-[1rem]">
              {navLinks.map(({ id, label, href }) => (<li key={id}>
                <Link href={href} className={`block py-[20px] text-black border-b-[4px] ${router.route == href ? 'border-blue-600 font-semibold' : 'border-white'}`} >{label}</Link>
              </li>))}
            </ul>
          </div>
        </nav>
      </div>

      <main className="flex-grow bg-white">{children}</main>

      <div>Footer</div>
    </div>
  );
}
