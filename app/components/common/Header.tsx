import ThemeToggler from "@/app/utils/ThemeToggler";
import Link from "next/link";

const Header = () => {
  return (
    <section>
      <div className="section-padding">
        <div className="header-area">
          {/* Logo */}
          <div className="site-logo">
            <Link href={"/"}>
              <h2>Mohitul</h2>
            </Link>
          </div>

          {/* Nav Menu */}
          <div className="menu-and-theme">
            <nav className="nav-menu">
              <ul className="nav-items">
                <li>
                  <Link href={"#about"}>About</Link>
                </li>
                <li>
                  <Link href={"#experiencs"}>Experiencs</Link>
                </li>
                <li>
                  <Link href={"#works"}>Works</Link>
                </li>
                <li>
                  <Link href={"#contact"}>Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Dark Mode Icon*/}
            <div className="header-icons">
              <ThemeToggler />
            </div>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
