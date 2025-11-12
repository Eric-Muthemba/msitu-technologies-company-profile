import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, TrendingUp, Shield, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProjectMsituPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Project Msitu</h1>
          <p className="text-xl text-muted-foreground mb-4 text-balance leading-relaxed">
            Connecting Conservation with Commerce
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Our flagship digital marketplace serves as a central hub for environmental assets, carbon credits,
            biodiversity offsets, and sustainable products. We connect buyers, sellers, and stakeholders in the green
            economy.
          </p>
          <Button size="lg" asChild>
            <Link href="https://project-msitu.msitutechnologies.com" target="_blank" rel="noopener noreferrer">
              Get Started Today
            </Link>
          </Button>

        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Offerings</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Carbon Credit Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Trade verified carbon credits with full transparency and traceability. Connect with verified projects
                and offset your carbon footprint.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Biodiversity Offset Trading
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Access biodiversity credits and support conservation projects that protect and restore critical
                ecosystems.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Impact Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every transaction is backed by verified impact data, ensuring your investment creates real environmental
                change.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Sustainable Product Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Discover and purchase sustainable products from verified vendors committed to environmental stewardship.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact Tracking Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Monitor your environmental impact in real-time with comprehensive analytics and reporting tools.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stakeholder Engagement</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Connect with conservation organizations, impact investors, and sustainability leaders in our community.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Create Your Account</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sign up as a buyer, seller, or both. Complete verification to access the full marketplace.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Browse & Discover</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore verified environmental assets, from carbon credits to sustainable products, all with detailed
                  impact information.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transact with Confidence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make purchases or list your assets with full transparency, secure transactions, and verified impact
                  tracking.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Track Your Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor your environmental contributions with real-time analytics and comprehensive impact reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Who Benefits from Project Msitu?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Corporations</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Achieve carbon neutrality and sustainability goals through verified environmental assets and transparent
                impact tracking.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conservation Organizations</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Monetize conservation efforts and connect with funding sources while maintaining project integrity.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact Investors</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Invest in environmental assets with verified impact data and transparent reporting.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sustainable Vendors</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Reach environmentally conscious consumers and businesses committed to sustainable purchasing.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Join the Green Economy?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
            Whether you're looking to offset your carbon footprint, invest in conservation, or sell sustainable
            products, Project Msitu is your platform.
          </p>
          <Button size="lg" variant="secondary" asChild>
              <Link href="https://project-msitu.msitutechnologies.com" target="_blank" rel="noopener noreferrer">

              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
