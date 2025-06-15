"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Coins,
  GitBranch,
  ArrowRight,
  Zap,
  Globe,
  Brain,
  TrendingUp,
  Network,
  Lock,
  Unlock,
  DollarSign,
  FileText,
  Database,
  GraduationCap,
  Upload,
} from "lucide-react"
import Link from "next/link"

export default function OverviewPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-up")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-pulse-glow">
            Complete System Overview
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            ResearchX Deep Dive
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive overview of how ResearchX transforms academic and research IP through decentralized
            infrastructure, programmable licensing, and automated royalty distribution.
          </p>
        </div>

        {/* System Architecture */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">System Architecture</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-effect hover:shadow-lg transition-all duration-300 fade-in-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>1. Content Upload</CardTitle>
                <CardDescription>Researchers upload their work</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Papers, datasets, course content</li>
                  <li>• Metadata: title, co-authors, domain</li>
                  <li>• License type selection</li>
                  <li>• Decentralized storage on Arweave/IPFS</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>2. IP Tokenization</CardTitle>
                <CardDescription>Powered by Story Protocol</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Registered with attribution & usage rights</li>
                  <li>• Unique on-chain IP Asset ID</li>
                  <li>• PIL smart contract deployment</li>
                  <li>• Immutable ownership records</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>3. Usage & Royalties</CardTitle>
                <CardDescription>Automated enforcement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Attribution tracking for derivatives</li>
                  <li>• Smart contract royalty distribution</li>
                  <li>• DAO governance for institutions</li>
                  <li>• Transparent payment flows</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* License Types */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Programmable License Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-effect hover:shadow-lg transition-all duration-300 fade-in-up">
              <CardHeader>
                <Unlock className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">Open License</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">CC-style for free academic use</p>
                <Badge variant="secondary" className="text-xs">
                  0% Royalty
                </Badge>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">Educational</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Education-only with attribution</p>
                <Badge variant="secondary" className="text-xs">
                  0-2% Royalty
                </Badge>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <DollarSign className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg">Commercial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Full commercial rights</p>
                <Badge variant="secondary" className="text-xs">
                  3-10% Royalty
                </Badge>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <Brain className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle className="text-lg">AI Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">AI model training with attribution</p>
                <Badge variant="secondary" className="text-xs">
                  1-5% Royalty
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Real-World Examples</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="glass-effect fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  Professor Alice's Textbook Chapter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Professor Alice publishes a machine learning textbook chapter → tokenized on-chain with educational
                    license
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Story Protocol Integration:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• IP Asset created with unique identifier</li>
                      <li>• PIL contract enforces educational-only terms</li>
                      <li>• Attribution automatically tracked for derivatives</li>
                    </ul>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      Startup licenses for AI tutor
                    </span>
                    <span className="flex items-center">
                      <Coins className="h-4 w-4 mr-1 text-yellow-500" />
                      Alice earns 3% royalties
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-green-500" />
                  Student Bob's Derivative Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Student Bob builds a derivative lecture series using Alice's work with proper attribution
                  </p>
                  <div className="bg-green-500/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Attribution Tree:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Bob's work automatically linked to Alice's IP</li>
                      <li>• Smart contract enforces attribution requirements</li>
                      <li>• Revenue split: 70% Bob, 30% Alice</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5 text-purple-500" />
                  AI Company Dataset Licensing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    AI company trains on 10,000 tokenized academic texts with fair compensation
                  </p>
                  <div className="bg-purple-500/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Automated Royalty Distribution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Smart contracts calculate per-asset usage</li>
                      <li>• Fair royalties paid to all contributing researchers</li>
                      <li>• Transparent on-chain payment tracking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Differentiation */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Why ResearchX is Different</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect fade-in-up">
              <CardHeader>
                <CardTitle className="text-red-400">Traditional Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-red-400" />
                  <span className="text-sm">ArXiv/ResearchGate: No ownership or monetization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-red-400" />
                  <span className="text-sm">Google Scholar: Just indexing, no traceability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-red-400" />
                  <span className="text-sm">Traditional Journals: Publisher-controlled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-red-400" />
                  <span className="text-sm">AI Dataset Scraping: No attribution or royalties</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-green-400">ResearchX Advantages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Unlock className="h-4 w-4 text-green-400" />
                  <span className="text-sm">True ownership, licensing, and monetization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Unlock className="h-4 w-4 text-green-400" />
                  <span className="text-sm">On-chain traceability and attribution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Unlock className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Community-governed, open remix culture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Unlock className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Fair, opt-in royalty-based AI licensing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Revenue & Incentives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-effect text-center fade-in-up">
              <CardHeader>
                <DollarSign className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>License Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Paid by AI labs, edtech startups, and publishers</p>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <GitBranch className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Remix Royalties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Split between original and derivative creators</p>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <Coins className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>On-Chain Tipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">From students, researchers, and readers</p>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-purple-500 mb-4" />
                <CardTitle>DAO Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Institutions govern licensing rules and revenue shares</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Protocol Deep Dive */}
        <section className="mb-20">
          <Card className="glass-effect max-w-4xl mx-auto fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Zap className="mr-2 h-6 w-6 text-primary" />
                Story Protocol Integration Deep Dive
              </CardTitle>
              <CardDescription>How we leverage Story Protocol's infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Core Components</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">IP Asset Registry</p>
                        <p className="text-sm text-muted-foreground">
                          Every piece of content becomes a unique, tradeable IP asset
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">PIL Framework</p>
                        <p className="text-sm text-muted-foreground">
                          Programmable licenses with custom terms and enforcement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Attribution Graph</p>
                        <p className="text-sm text-muted-foreground">
                          On-chain tracking of all derivative relationships
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Advanced Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Royalty Engine</p>
                        <p className="text-sm text-muted-foreground">
                          Automated distribution based on usage and license terms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Composability</p>
                        <p className="text-sm text-muted-foreground">
                          IP assets can be combined and remixed programmatically
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Interoperability</p>
                        <p className="text-sm text-muted-foreground">
                          Works across different platforms and applications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center fade-in-up">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 border-primary/20 glass-effect">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Join the Research Revolution
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">
                We're building the academic IP registry of the future. Be part of the transformation.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                  <p className="font-medium">Researchers & Professors</p>
                  <p className="text-sm text-muted-foreground">Pilot the platform</p>
                </div>
                <div className="text-center">
                  <Brain className="h-8 w-8 mx-auto text-green-500 mb-2" />
                  <p className="font-medium">AI Labs & EdTech</p>
                  <p className="text-sm text-muted-foreground">Adopt fair licensing</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto text-purple-500 mb-2" />
                  <p className="font-medium">Developers & Creators</p>
                  <p className="text-sm text-muted-foreground">Co-build remix culture</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="animate-pulse-glow">
                  <Link href="/upload">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass-effect">
                  <Link href="/registry">Explore Registry</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
