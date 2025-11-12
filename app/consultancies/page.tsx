import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Cpu, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ConsultanciesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Msitu Consultancies</h1>
          <p className="text-xl text-muted-foreground mb-4 text-balance leading-relaxed">
            Expert Guidance for a Sustainable Future
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive advisory services combining environmental expertise with technological innovation. We help
            organizations navigate the complex intersection of sustainability compliance, digital transformation, and
            environmental impact.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Consultancy Services</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eco Consultancy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Msitu Eco Consultancy</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Environmental expertise to help your organization understand, measure, and improve its ecological
                impact.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Environmental Audits & Assessments</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive evaluation of your environmental footprint and compliance status.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Sustainability Strategy Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom roadmaps to achieve your environmental goals and commitments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Carbon Footprint Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed measurement and reduction planning for greenhouse gas emissions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Environmental Compliance Advisory</h4>
                    <p className="text-sm text-muted-foreground">
                      Navigate complex regulations and ensure ongoing compliance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Biodiversity Impact Assessments</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluate and mitigate your operations' impact on ecosystems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Climate Risk Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify vulnerabilities and develop resilience strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Consultancy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Msitu Tech Consultancy</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Technology solutions that enable transparency, traceability, and efficiency in environmental
                initiatives.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Tokenization-as-a-Service</h4>
                    <p className="text-sm text-muted-foreground">
                      Digitize environmental assets for transparent tracking and trading.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Blockchain Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement transparent, immutable systems for environmental data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">IoT Deployment for Monitoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time environmental data collection and monitoring systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Data Analytics & Intelligence</h4>
                    <p className="text-sm text-muted-foreground">
                      Transform environmental data into actionable insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Technology Integration for Conservation</h4>
                    <p className="text-sm text-muted-foreground">
                      Deploy tech solutions that enhance conservation project effectiveness.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Digital Transformation for Sustainability</h4>
                    <p className="text-sm text-muted-foreground">
                      Modernize operations with sustainability-focused digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Consultancy Process</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Discovery & Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We begin by understanding your current state, goals, and challenges through comprehensive interviews and
                data analysis.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Strategy Development
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Our experts craft a customized roadmap that aligns with your objectives and industry best practices.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  Implementation Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We guide you through execution, providing hands-on support and adjusting strategies as needed.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  Monitoring & Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Continuous tracking of key metrics ensures your initiatives deliver maximum impact and value.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Enterprises</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Organizations seeking comprehensive sustainability transformation and technology integration.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NGOs & Conservation Groups</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Non-profits needing technical capacity and environmental expertise to amplify their impact.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Government Agencies</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Public sector organizations developing environmental policies and monitoring programs.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Development Organizations</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                International and local development agencies integrating environmental considerations.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Transform Your Sustainability Journey</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
            Partner with our experts to navigate the complex intersection of environmental responsibility and
            technological innovation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
