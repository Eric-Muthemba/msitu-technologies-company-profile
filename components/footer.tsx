import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Msitu Technologies</h3>
            <p className="text-sm text-primary-foreground/80">
              Growing sustainable futures through technology and nature.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/project-msitu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Project Msitu
                </Link>
              </li>
              <li>
                <Link
                  href="/consultancies"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Msitu Consultancies
                </Link>
              </li>
              <li>
                <Link
                  href="/survey-services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Eco Survey Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-primary-foreground/80">info@msitutechnologies.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Msitu Technologies. All rights reserved.</p>
          <p className="mt-2">All brands are divisions of Msitu Technologies</p>
        </div>
      </div>
    </footer>
  )
}
