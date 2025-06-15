"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Shield, Coins, GitBranch, Brain, Users, ArrowRight, Zap, Globe, Lock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-pulse-glow">
            Powered by Story Protocol
          </Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
            ResearchX
          </h1>
          <p className="text-2xl text-muted-foreground mb-4 font-medium">
            Decentralized Infrastructure for Academic and Research IP
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Powering collaborative science and education through on-chain IP and programmable licensing. Transform your
            research into composable intellectual property assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 animate-pulse-glow">
              <Link href="/upload">
                <Zap className="mr-2 h-5 w-5" />
                Tokenize Your Research
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass-effect">
              <Link href="/overview">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-red-500/20 bg-red-500/5 fade-in-up">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                <Lock className="mr-2 h-6 w-6" />
                Academic IP is Broken
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Paywalled journals block knowledge from the public</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Publishers own IP, not researchers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Researchers rarely earn from their work</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">No simple licensing for AI training or collaboration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Hard to trace idea lineage or remix contributions</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Globe className="mr-2 h-6 w-6" />
                Our Decentralized Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Tokenize research as composable IP assets</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Programmable licenses via Story Protocol PIL</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Track citations and derivatives with attribution trees</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Automate royalty flows from AI models and courses</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-muted-foreground">Empower researchers to govern their IP</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section ref={featuresRef} className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Revolutionary Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 glass-effect fade-in-up">
            <CardHeader>
              <BookOpen className="h-12 w-12 mx-auto text-primary mb-4 animate-float" />
              <CardTitle>IP Tokenization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Transform research papers, datasets, and academic content into on-chain IP assets using Story Protocol
              </p>
            </CardContent>
          </Card>

          <Card
            className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 glass-effect fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <Shield
                className="h-12 w-12 mx-auto text-green-500 mb-4 animate-float"
                style={{ animationDelay: "1s" }}
              />
              <CardTitle>Programmable Licensing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Set custom license terms with PIL (Programmable IP License) for different use cases
              </p>
            </CardContent>
          </Card>

          <Card
            className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 glass-effect fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <GitBranch
                className="h-12 w-12 mx-auto text-purple-500 mb-4 animate-float"
                style={{ animationDelay: "2s" }}
              />
              <CardTitle>Attribution Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automatic on-chain attribution tree for derivative works and remixes
              </p>
            </CardContent>
          </Card>

          <Card
            className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 glass-effect fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader>
              <Coins
                className="h-12 w-12 mx-auto text-yellow-500 mb-4 animate-float"
                style={{ animationDelay: "3s" }}
              />
              <CardTitle>Royalty Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automated royalty payments when IP is used in AI training or commercial products
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Transforming Research Collaboration</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 glass-effect fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                For Professors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tokenize and monetize courseware, lecture materials, and educational content with programmable licensing
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all duration-300 glass-effect fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-green-500" />
                For Researchers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                License research papers for ethical AI model training while maintaining attribution and earning
                royalties
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all duration-300 glass-effect fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5 text-purple-500" />
                For Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create derivative works and remixes with automatic attribution to original creators
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all duration-300 glass-effect fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-orange-500" />
                For Institutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Govern and monetize collective intellectual property through decentralized governance
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 border-primary/20 glass-effect fade-in-up">
          <CardContent className="p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Ready to Revolutionize Academic IP?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Join the decentralized future of knowledge ownership and collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="animate-pulse-glow">
                <Link href="/upload">
                  Start Tokenizing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass-effect">
                <Link href="/registry">Browse Registry</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
