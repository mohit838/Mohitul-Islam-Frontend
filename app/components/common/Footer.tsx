import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <section>
        <div className="footer-section">
          {/* Logo */}
          <div className="site-logo">
            <Link href={"/"}>
              <h2>Mohitul</h2>
            </Link>
          </div>

          {/* Social Media */}
          <div className="footer-social-media">
            <div>Facebook</div>
            <div>Linkedin</div>
            <div>GitHub</div>
          </div>

          {/* Copyright text */}
          <div>
            <p className="text-sm md:text-base">
              Copyright © {new Date().getFullYear()} made by ❤️ Mohitul
              Islam
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
