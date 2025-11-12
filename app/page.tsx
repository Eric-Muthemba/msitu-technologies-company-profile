import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Leaf, BarChart3, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 text-foreground">
              Growing Sustainable Futures Through Technology and Nature
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
              Msitu Technologies bridges conservation and technology, creating sustainable solutions for businesses,
              communities, and conservation initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/project-msitu">
                  Explore Our Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product & Service Lines</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Specialized solutions under the Msitu Technologies umbrella, each designed to address specific market
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Project Msitu</CardTitle>
                <CardDescription className="text-base">Flagship Marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A digital marketplace connecting buyers and sellers in the green economy. Trade carbon credits,
                  biodiversity offsets, and sustainable products with transparency and impact tracking.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/project-msitu">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Msitu Consultancies</CardTitle>
                <CardDescription className="text-base">Professional Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive advisory services combining environmental expertise with technological innovation. From
                  audits to tokenization, we guide your sustainability transformation.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/consultancies">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Eco Survey Services</CardTitle>
                <CardDescription className="text-base">Field Operations & Data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive environmental data collection and analysis. Precision data through partnerships with
                  specialized field teams and research institutions.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/survey-services">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Does "Msitu" Mean?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Msitu" is Swahili for "forest"   reflecting our core mission to cultivate growth in ecosystems,
                businesses, and technological capabilities through integrated, sustainable approaches.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We operate multiple specialized service lines under the Msitu Technologies umbrella, each designed to
                address specific market needs while contributing to our overarching vision of technology-enabled
                environmental sustainability.
              </p>
              <Button asChild>
                <Link href="/about">Learn About Our Story</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg h-64 md:h-96 overflow-hidden">
              <img
                src="/lush-green-forest-canopy-aerial-view.jpg"
                alt="Forest canopy representing Msitu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Build a Sustainable Future?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-balance leading-relaxed">
            Whether you're looking to trade environmental assets, transform your sustainability practices, or collect
            precise environmental data, we have the solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
