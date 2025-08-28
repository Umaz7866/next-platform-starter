import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer id="site-footer" className="site-footer bg-secondary text-secondary-foreground py-6 sm:py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="footer-content space-y-4">
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-nav-list flex justify-center gap-4 sm:gap-6 flex-wrap">
              <li className="footer-nav-item">
                <Link
                  href="/about"
                  className="footer-nav-link hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1"
                >
                  About
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link
                  href="/services"
                  className="footer-nav-link hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1"
                >
                  Services
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link
                  href="/contact"
                  className="footer-nav-link hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1"
                >
                  Contact
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link
                  href="/privacy"
                  className="footer-nav-link hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer-copyright text-sm text-muted-foreground">
            <p>&copy; 2024 My Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
