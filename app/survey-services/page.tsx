import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Camera, Database, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SurveyServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Msitu Eco Survey Services</h1>
          <p className="text-xl text-muted-foreground mb-4 text-balance leading-relaxed">
            Precision Data for Environmental Decisions
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive on-the-ground environmental data collection and analysis. Through partnerships with
            specialized field teams and research institutions, we deliver accurate, timely, and actionable environmental
            data.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Request Survey Services</Link>
          </Button>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Survey Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Biodiversity Surveys</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Comprehensive species identification, population assessments, and ecosystem health monitoring using
                modern survey techniques.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Land Use Assessments</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Detailed land cover mapping and change detection to understand environmental transformations over time.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Environmental Baseline Studies</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Establish comprehensive environmental baselines before project implementation for accurate impact
                measurement.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ecological Health Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Ongoing monitoring of ecosystem indicators to track environmental health trends and changes.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Species Population Assessments</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Detailed population studies of key species for conservation planning and impact assessment.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soil & Water Quality Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Laboratory-grade analysis of soil and water samples to assess contamination and ecosystem health.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GIS Mapping & Spatial Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Advanced geospatial data collection and analysis to visualize environmental patterns and changes.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Engagement Surveys</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Participatory surveys that incorporate local knowledge and community perspectives into environmental
                assessments.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Custom Survey Design</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Tailored survey methodologies designed to meet your specific environmental data needs and objectives.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology & Technology */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Survey Methodologies</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We employ internationally recognized survey protocols combined with cutting-edge technology to ensure
                  data accuracy and reliability.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">Camera trap monitoring</li>
                  <li className="list-disc">Transect surveys</li>
                  <li className="list-disc">Point count methods</li>
                  <li className="list-disc">Environmental DNA (eDNA) sampling</li>
                  <li className="list-disc">Remote sensing integration</li>
                  <li className="list-disc">Participatory rural appraisal</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Technology & Tools</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Our field teams use state-of-the-art equipment and software to collect, manage, and analyze
                  environmental data.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">GPS and GIS mapping tools</li>
                  <li className="list-disc">Drone-based aerial surveys</li>
                  <li className="list-disc">Mobile data collection apps</li>
                  <li className="list-disc">Environmental sensors and loggers</li>
                  <li className="list-disc">Satellite imagery analysis</li>
                  <li className="list-disc">Cloud-based data management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Partnership Model</h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Msitu Eco Survey Services operates through strategic partnerships with specialized field teams, research
                institutions, and local experts. This collaborative approach ensures:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Access to local expertise and traditional ecological knowledge</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Specialized technical capabilities for diverse survey requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Cost-effective deployment across multiple regions and ecosystems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Quality assurance through independent verification and peer review</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Capacity building within local communities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Who Needs Our Survey Services?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Conservation Projects</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Baseline assessments, monitoring, and impact evaluation for conservation initiatives.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Development Agencies</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Environmental impact assessments and monitoring for development projects.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Institutions</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Field data collection support for academic and scientific research programs.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Corporate Environmental Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Data collection for regulatory compliance and environmental reporting requirements.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Government Departments</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Environmental monitoring and natural resource management data.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Land Managers</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Ecosystem health assessments and sustainable land management planning.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Get Accurate Environmental Data</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
            Partner with us for reliable, professional environmental survey services that inform better conservation and
            development decisions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Discuss Your Survey Needs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
