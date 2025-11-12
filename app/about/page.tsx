import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Msitu Technologies</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Msitu Technologies is an innovative environmental technology company bridging the gap between ecological
              conservation and digital transformation.
            </p>

            <div className="my-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our name "Msitu" (Swahili for "forest") reflects our core mission: to cultivate growth whether in
                ecosystems, businesses, or technological capabilities through integrated, sustainable approaches. We
                combine cutting-edge technology with environmental stewardship to create sustainable solutions for
                businesses, communities, and conservation initiatives.
              </p>
            </div>

            <div className="my-12">
              <h2 className="text-3xl font-bold mb-6">Our Brand Structure</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Msitu Technologies operates as the parent company and master brand, providing strategic oversight and
                shared resources across all operations. Our specialized business units allow us to serve different
                market segments while maintaining operational efficiency.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>How Our Brands Work</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Brand Differentiated:</strong> Each line develops its own market
                    identity and customer relationships
                  </div>
                  <div>
                    <strong className="text-foreground">Operationally Connected:</strong> We leverage shared expertise,
                    technology, and values
                  </div>
                  <div>
                    <strong className="text-foreground">Unified Structure:</strong> All brands operate under Msitu
                    Technologies corporate structure
                  </div>
                  <div>
                    <strong className="text-foreground">Flexible for Growth:</strong> Each line can scale independently
                    or become a separate subsidiary as needed
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="my-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Pushing boundaries in environmental technology to create solutions that didn't exist before.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sustainability</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Every decision we make considers long-term environmental and social impact.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Transparency</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Building trust through open, traceable, and verifiable processes and data.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Partnership</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Collaborating with communities, organizations, and businesses to multiply our impact.
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="my-12 bg-muted/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Legal Note</h2>
              <p className="text-muted-foreground leading-relaxed">
                Project Msitu, Msitu Consultancies, and Msitu Eco Survey Services are strategic business units operating
                under Msitu Technologies. These are brand names that allow us to differentiate our services while
                maintaining operational unity. As we grow, specific lines may become separate legal entities based on
                market dynamics and strategic needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
