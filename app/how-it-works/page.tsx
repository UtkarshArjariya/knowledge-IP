import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Upload, Settings, GitBranch, Coins, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn how Story Protocol powers our decentralized knowledge IP registry
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
            </div>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-6 w-6 text-blue-600" />
                  Upload & Tokenize IP
                </CardTitle>
                <Badge className="w-fit bg-blue-100 text-blue-800">Story Protocol Integration</Badge>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Upload your research paper, dataset, or academic content to our platform.</p>
                <div className="bg-blue-800/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Story Protocol Usage:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Content metadata stored on Arweave/IPFS</li>
                    <li>• IP Asset created using Story Protocol's IP Asset Registry</li>
                    <li>• Unique IP ID generated for on-chain tracking</li>
                    <li>• Ownership rights established through smart contracts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
            </div>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-6 w-6 text-green-600" />
                  Choose License Terms
                </CardTitle>
                <Badge className="w-fit bg-green-100 text-green-800">PIL (Programmable IP License)</Badge>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Select from various licensing options or create custom terms.</p>
                <div className="bg-green-800/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Story Protocol PIL Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Open License (CC-style) for free academic use</li>
                    <li>• Commercial License with royalty requirements</li>
                    <li>• AI Training License with attribution mandates</li>
                    <li>• Custom license terms programmed into smart contracts</li>
                    <li>• Automatic enforcement through Story Protocol's License Registry</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
            </div>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="mr-2 h-6 w-6 text-purple-600" />
                  Attribution Tree
                </CardTitle>
                <Badge className="w-fit bg-purple-100 text-purple-800">On-Chain Graph Tracking</Badge>
              </CardHeader>
              <CardContent>
                <p className="mb-4">When your IP is reused or remixed, attribution is automatically tracked.</p>
                <div className="bg-purple-800/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Story Protocol Attribution System:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Parent-child relationships recorded on-chain</li>
                    <li>• Derivative works linked to original IP Assets</li>
                    <li>• Attribution graph maintained in Story Protocol's registry</li>
                    <li>• Immutable provenance and citation tracking</li>
                    <li>• Automatic compliance with license terms</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
            </div>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coins className="mr-2 h-6 w-6 text-yellow-600" />
                  Royalty Distribution
                </CardTitle>
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Automated Revenue Sharing</Badge>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Earn royalties when your IP is used in AI training, educational products, or commercial applications.
                </p>
                <div className="bg-yellow-800/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Story Protocol Royalty Engine:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Smart contracts automatically distribute payments</li>
                    <li>• Royalty splits defined in PIL terms</li>
                    <li>• Revenue flows to original creators and derivative work authors</li>
                    <li>• Transparent on-chain payment tracking</li>
                    <li>• Support for complex royalty hierarchies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">IP Tokenization</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-blue-100 text-blue-800">Story Protocol</Badge>
                <p className="text-sm text-gray-500 mt-2">Core infrastructure for IP Asset creation and management</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Storage Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-green-100 text-green-800">Arweave / IPFS</Badge>
                <p className="text-sm text-gray-500 mt-2">Decentralized storage for content and metadata</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-purple-100 text-purple-800">Solidity (EVM)</Badge>
                <p className="text-sm text-gray-500 mt-2">Custom contracts built on Story Protocol foundation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Licensing Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-orange-100 text-orange-800">PIL Framework</Badge>
                <p className="text-sm text-gray-500 mt-2">Programmable IP License for flexible terms</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Attribution</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-red-100 text-red-800">On-chain Graph</Badge>
                <p className="text-sm text-gray-500 mt-2">Immutable relationship tracking</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-gray-100 text-gray-800">Next.js / Tailwind</Badge>
                <p className="text-sm text-gray-500 mt-2">Modern web interface</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/upload">
              Start Tokenizing Your Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
