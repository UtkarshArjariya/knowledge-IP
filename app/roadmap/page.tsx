import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, Users, Gavel, BarChart3 } from "lucide-react"

const roadmapItems = [
  {
    phase: "Phase 1: Foundation",
    status: "completed",
    items: [
      { title: "Define metadata schema for academic IP", completed: true },
      { title: "Integrate Story Protocol tokenization", completed: true },
      { title: "Basic PIL license templates", completed: true },
      { title: "Content upload and storage system", completed: true },
    ],
  },
  {
    phase: "Phase 2: Core Features",
    status: "in-progress",
    items: [
      { title: "Advanced license selection and enforcement", completed: true },
      { title: "Attribution and forking logic implementation", completed: false },
      { title: "Royalty tracking and payment flows", completed: false },
      { title: "Search and discovery interface", completed: true },
    ],
  },
  {
    phase: "Phase 3: Advanced Features",
    status: "planned",
    items: [
      { title: "DAO governance for institutions and creators", completed: false },
      { title: "AI training dataset licensing marketplace", completed: false },
      { title: "Automated citation and reference tracking", completed: false },
      { title: "Cross-platform integration APIs", completed: false },
    ],
  },
  {
    phase: "Phase 4: Ecosystem",
    status: "future",
    items: [
      { title: "Educational institution partnerships", completed: false },
      { title: "AI company licensing agreements", completed: false },
      { title: "Academic publisher integrations", completed: false },
      { title: "Global research collaboration tools", completed: false },
    ],
  },
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Development Roadmap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey to revolutionize academic IP ownership and monetization through Story Protocol
          </p>
        </div>

        {/* Story Protocol Integration Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader>
              <CardTitle>Story Protocol Integration Milestones</CardTitle>
              <CardDescription className="text-blue-100">
                Key integrations that power our decentralized knowledge registry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <div>
                      <h4 className="font-semibold">IP Asset Registry</h4>
                      <p className="text-sm text-blue-100">Content tokenization and ownership tracking</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <div>
                      <h4 className="font-semibold">PIL Framework</h4>
                      <p className="text-sm text-blue-100">Programmable licensing smart contracts</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-yellow-300" />
                    <div>
                      <h4 className="font-semibold">Attribution Graph</h4>
                      <p className="text-sm text-blue-100">On-chain derivative work tracking</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-yellow-300" />
                    <div>
                      <h4 className="font-semibold">Royalty Engine</h4>
                      <p className="text-sm text-blue-100">Automated payment distribution</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Circle className="h-5 w-5 text-gray-300" />
                    <div>
                      <h4 className="font-semibold">Governance Module</h4>
                      <p className="text-sm text-blue-100">DAO-based IP management</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Circle className="h-5 w-5 text-gray-300" />
                    <div>
                      <h4 className="font-semibold">Cross-chain Bridge</h4>
                      <p className="text-sm text-blue-100">Multi-blockchain IP portability</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Roadmap */}
        <div className="max-w-4xl mx-auto space-y-8">
          {roadmapItems.map((phase, index) => (
            <Card
              key={index}
              className={`${
                phase.status === "completed"
                  ? "border-green-200 bg-green-800/10"
                  : phase.status === "in-progress"
                    ? "border-blue-200 bg-blue-800/10"
                    : phase.status === "planned"
                      ? "border-yellow-200 bg-yellow-800/10"
                      : "border-gray-200 bg-blue-800/10"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3">
                    {phase.status === "completed" && <CheckCircle className="h-6 w-6 text-green-600" />}
                    {phase.status === "in-progress" && <Clock className="h-6 w-6 text-blue-600" />}
                    {phase.status === "planned" && <Circle className="h-6 w-6 text-yellow-600" />}
                    {phase.status === "future" && <Circle className="h-6 w-6 text-gray-400" />}
                    <span>{phase.phase}</span>
                  </CardTitle>
                  <Badge
                    className={
                      phase.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : phase.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : phase.status === "planned"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-600"
                    }
                  >
                    {phase.status === "completed"
                      ? "Completed"
                      : phase.status === "in-progress"
                        ? "In Progress"
                        : phase.status === "planned"
                          ? "Planned"
                          : "Future"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      {item.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={item.completed ? "text-green-800" : "text-gray-600"}>{item.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Metrics & Goals */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>10,000+</CardTitle>
                <CardDescription>Registered Researchers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Active creators tokenizing their academic work</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>$1M+</CardTitle>
                <CardDescription>Royalties Distributed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Revenue returned to knowledge creators</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Gavel className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>100+</CardTitle>
                <CardDescription>Institution Partners</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Universities and research organizations</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story Protocol Benefits */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Why Story Protocol?</CardTitle>
              <CardDescription>The infrastructure advantages that make our vision possible</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Composable IP Framework</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Story Protocol's modular architecture allows us to build complex IP relationships and licensing
                    terms that traditional systems cannot support.
                  </p>

                  <h4 className="font-semibold mb-2 text-green-600">Automated Enforcement</h4>
                  <p className="text-sm text-gray-600">
                    Smart contracts automatically enforce license terms, eliminating the need for manual oversight and
                    reducing disputes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600">Interoperability</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    IP assets can be used across different platforms and applications while maintaining their licensing
                    and attribution requirements.
                  </p>

                  <h4 className="font-semibold mb-2 text-orange-600">Transparent Royalties</h4>
                  <p className="text-sm text-gray-600">
                    All royalty distributions are transparent and verifiable on-chain, building trust between creators
                    and users.
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
