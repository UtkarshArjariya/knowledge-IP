import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Database, BookOpen, Users, Eye, Download, GitBranch, Coins } from "lucide-react"

const mockIPAssets = [
  {
    id: "IP-ABC123",
    title: "Machine Learning Fundamentals Dataset",
    author: "Dr. Sarah Chen",
    institution: "MIT",
    type: "dataset",
    license: "AI Training License",
    royaltyRate: "3%",
    downloads: 1247,
    derivatives: 23,
    description: "Comprehensive dataset for machine learning education and research",
    tags: ["machine-learning", "education", "python"],
  },
  {
    id: "IP-DEF456",
    title: "Quantum Computing: A Comprehensive Guide",
    author: "Prof. Michael Rodriguez",
    institution: "Stanford University",
    type: "research-paper",
    license: "Educational Use Only",
    royaltyRate: "0%",
    downloads: 892,
    derivatives: 12,
    description: "In-depth exploration of quantum computing principles and applications",
    tags: ["quantum-computing", "physics", "research"],
  },
  {
    id: "IP-GHI789",
    title: "Advanced Calculus Course Materials",
    author: "Dr. Emily Watson",
    institution: "Harvard University",
    type: "courseware",
    license: "Commercial License",
    royaltyRate: "5%",
    downloads: 634,
    derivatives: 8,
    description: "Complete courseware package for advanced calculus instruction",
    tags: ["mathematics", "calculus", "education"],
  },
  {
    id: "IP-JKL012",
    title: "Climate Change Data Analysis Framework",
    author: "Dr. James Park",
    institution: "UC Berkeley",
    type: "dataset",
    license: "Open License",
    royaltyRate: "0%",
    downloads: 2156,
    derivatives: 45,
    description: "Open-source framework for analyzing climate change data",
    tags: ["climate-science", "data-analysis", "environment"],
  },
]

export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Knowledge IP Registry</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and access tokenized academic content powered by Story Protocol
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Search IP Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Input placeholder="Search by title, author, or keywords..." />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Content Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="research-paper">Research Papers</SelectItem>
                    <SelectItem value="dataset">Datasets</SelectItem>
                    <SelectItem value="courseware">Courseware</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="License Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Licenses</SelectItem>
                    <SelectItem value="open">Open License</SelectItem>
                    <SelectItem value="educational">Educational Only</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="ai-training">AI Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registry Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-sm text-gray-600">Total IP Assets</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">89</div>
              <div className="text-sm text-gray-600">Active Derivatives</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">$12.4K</div>
              <div className="text-sm text-gray-600">Royalties Distributed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">456</div>
              <div className="text-sm text-gray-600">Verified Authors</div>
            </CardContent>
          </Card>
        </div>

        {/* IP Assets Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mockIPAssets.map((asset) => (
              <Card key={asset.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {asset.type === "dataset" && <Database className="h-5 w-5 text-blue-600" />}
                      {asset.type === "research-paper" && <FileText className="h-5 w-5 text-green-600" />}
                      {asset.type === "courseware" && <BookOpen className="h-5 w-5 text-purple-600" />}
                      <Badge variant="outline">{asset.id}</Badge>
                    </div>
                    <Badge
                      className={
                        asset.license === "Open License"
                          ? "bg-green-100 text-green-800"
                          : asset.license === "Educational Use Only"
                            ? "bg-blue-100 text-blue-800"
                            : asset.license === "Commercial License"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                      }
                    >
                      {asset.license}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{asset.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>
                        {asset.author} • {asset.institution}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{asset.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {asset.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-gray-500" />
                      <span>{asset.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="h-4 w-4 text-gray-500" />
                      <span>{asset.derivatives} derivatives</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Coins className="h-4 w-4 text-gray-500" />
                      <span>{asset.royaltyRate} royalty</span>
                    </div>
                  </div>

                  <div className="bg-blue-800/25 p-3 rounded-lg mb-4">
                    <h4 className="font-semibold text-sm mb-1">Story Protocol Features:</h4>
                    <ul className="text-xs space-y-1">
                      <li>• On-chain IP ownership verification</li>
                      <li>• Automated PIL license enforcement</li>
                      <li>• Attribution tracking for derivatives</li>
                      <li>• Smart contract royalty distribution</li>
                    </ul>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Protocol Integration Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader>
              <CardTitle>Powered by Story Protocol</CardTitle>
              <CardDescription className="text-blue-100">
                Every IP asset in this registry is secured by blockchain technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">IP Asset Registry</h4>
                  <p className="text-sm text-blue-100">
                    Each piece of content is registered as a unique IP Asset with immutable ownership records and
                    metadata.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">PIL Smart Contracts</h4>
                  <p className="text-sm text-blue-100">
                    Programmable IP Licenses automatically enforce usage terms and handle royalty distributions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Attribution Graph</h4>
                  <p className="text-sm text-blue-100">
                    On-chain tracking of all derivative works and their relationship to original content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Royalty Engine</h4>
                  <p className="text-sm text-blue-100">
                    Automated payment distribution to creators when their IP is used commercially or in AI training.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
