import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import style from "./styles.module.css";

export default function Layout({ children }) {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    {
      id: "services",
      label: "Services",
      href: "/services",
    },

    {
      id: "guides",
      label: "Guides",
      href: "/guides",
    },
    {
      id: "app",
      label: "OurApp",
      href: "/app",
    },
    {
      id: "blog",
      label: "Blog",
      href: "/blog",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.topbar}>
        <nav className={style.linksContainer}>
          <Link
            href="/"
            className={`${style.logoLink} ${scrollY ? "" : style.largeLogo}`}
          >
            GG
            <span className="text-[#E73331] uppercase">C</span>
          </Link>

          <div>
            <ul className={style.navLinksContainer}>
              {navLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className={`${style.navLink} ${
                      router.route == href ? style.currentLink : ""
                    } ${scrollY ? "" : style.verticalExpand}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <main className="flex-grow bg-white">{children}</main>

      <div>Footer</div>
    </div>
  );
}
