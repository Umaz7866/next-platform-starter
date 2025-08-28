import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ToolCard from "@/components/tool-card"
import { toolsData } from "@/lib/tools-data"

export default function HomePage() {
  return (
    <div className="home-page min-h-screen flex flex-col">
      <SiteHeader />

      <div className="main-content flex-1 flex flex-col xl:flex-row">
        <main id="main-section" className="main-section flex-1 py-8 sm:py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="section-content max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <div className="hero-content">
                <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4 sm:mb-6">
                  Welcome to Our Website
                </h2>
                <p className="section-description text-base sm:text-lg text-muted-foreground text-pretty mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Discover amazing content and services that will help you achieve your goals. We provide high-quality
                  solutions tailored to your needs.
                </p>
                <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    href="/services"
                    className="cta-primary bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] flex items-center justify-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/about"
                    className="cta-secondary bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 min-h-[44px] flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="features-grid grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-12">
                <div className="feature-card bg-card p-4 sm:p-6 rounded-lg border">
                  <h3 className="feature-title text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Quality Service</h3>
                  <p className="feature-description text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We deliver exceptional quality in everything we do.
                  </p>
                </div>
                <div className="feature-card bg-card p-4 sm:p-6 rounded-lg border">
                  <h3 className="feature-title text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Expert Team</h3>
                  <p className="feature-description text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Our experienced professionals are here to help you succeed.
                  </p>
                </div>
                <div className="feature-card bg-card p-4 sm:p-6 rounded-lg border md:col-span-2 lg:col-span-1">
                  <h3 className="feature-title text-lg sm:text-xl font-semibold mb-2 sm:mb-3">24/7 Support</h3>
                  <p className="feature-description text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Get assistance whenever you need it with our round-the-clock support.
                  </p>
                </div>
              </div>

              <div className="tools-section mt-12 sm:mt-16">
                <h2 className="tools-title text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-balance">
                  Our Tools & Services
                </h2>
                <div className="tools-grid grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-fr">
                  {toolsData.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                      href={tool.href}
                      colorScheme={tool.colorScheme}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside id="main-aside" className="main-aside xl:w-80 bg-muted/50 py-6 sm:py-8 xl:py-12">
          <div className="aside-content px-4 sm:px-6 space-y-6 sm:space-y-8">
            <section className="sidebar-section">
              <h3 className="sidebar-title text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Latest News</h3>
              <div className="news-list space-y-3 sm:space-y-4">
                <article className="news-item">
                  <h4 className="news-title font-medium mb-1 sm:mb-2">
                    <Link
                      href="/news/1"
                      className="news-link hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                    >
                      New Features Released
                    </Link>
                  </h4>
                  <p className="news-excerpt text-sm text-muted-foreground leading-relaxed">
                    Check out our latest updates and improvements.
                  </p>
                </article>
                <article className="news-item">
                  <h4 className="news-title font-medium mb-1 sm:mb-2">
                    <Link
                      href="/news/2"
                      className="news-link hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                    >
                      Company Milestone
                    </Link>
                  </h4>
                  <p className="news-excerpt text-sm text-muted-foreground leading-relaxed">
                    We've reached an important milestone in our journey.
                  </p>
                </article>
              </div>
            </section>

            <section className="sidebar-section">
              <h3 className="sidebar-title text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="quick-links space-y-2">
                <li className="quick-link-item">
                  <Link
                    href="/faq"
                    className="quick-link text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1 block"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="quick-link-item">
                  <Link
                    href="/support"
                    className="quick-link text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1 block"
                  >
                    Support
                  </Link>
                </li>
                <li className="quick-link-item">
                  <Link
                    href="/blog"
                    className="quick-link text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1 block"
                  >
                    Blog
                  </Link>
                </li>
                <li className="quick-link-item">
                  <Link
                    href="/newsletter"
                    className="quick-link text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 py-1 block"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </aside>
      </div>

      <SiteFooter />
    </div>
  )
}
