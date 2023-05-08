import Link from "next/link";
import { useRouter } from 'next/router'
import style from './styles.module.css'

export default function Layout({ children }) {
  const router = useRouter()

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    {
      id: "services", label: "Services", href: "/services"
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.topbar}>
        <nav className={style.linksContainer}>
          <Link href="/" className={style.logoLink}>
            Life
            <span className="text-[#E73331] uppercase">sg</span>
          </Link>

          <div>
            <ul className={style.navLinksContainer}>
              {navLinks.map(({ id, label, href }) => (<li key={id}>
                <Link href={href} className={`${style.navLink} ${router.route == href ? style.currentLink : ''}`} >{label}</Link>
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
