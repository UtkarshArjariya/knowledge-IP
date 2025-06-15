"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Upload,
  FileText,
  Database,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Coins,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export default function UploadPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contentType: "",
    file: null as File | null,
    licenseType: "",
    royaltyRate: "",
    allowDerivatives: false,
    allowCommercial: false,
    requireAttribution: true,
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Tokenize Your Knowledge IP
            </h1>
            <p className="text-xl text-gray-600">
              Transform your research into programmable intellectual property
            </p>
            <Badge className="mt-4 bg-blue-100 text-blue-800">
              Powered by Story Protocol
            </Badge>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNum
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div
                      className={`w-16 h-1 ${
                        step > stepNum ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Upload Content */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-6 w-6" />
                  Upload Your Content
                </CardTitle>
                <CardDescription>
                  Upload your research paper, dataset, or academic content to
                  begin tokenization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter the title of your work"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your work"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="contentType">Content Type</Label>
                  <Select
                    value={formData.contentType}
                    onValueChange={(value: any) =>
                      setFormData((prev) => ({ ...prev, contentType: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research-paper">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          Research Paper
                        </div>
                      </SelectItem>
                      <SelectItem value="dataset">
                        <div className="flex items-center">
                          <Database className="mr-2 h-4 w-4" />
                          Dataset
                        </div>
                      </SelectItem>
                      <SelectItem value="courseware">
                        <div className="flex items-center">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Courseware
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="file">Upload File</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf,.doc,.docx,.csv,.json,.zip"
                    onChange={handleFileUpload}
                  />
                  {formData.file && (
                    <p className="text-sm text-green-600 mt-2">
                      <CheckCircle className="inline mr-1 h-4 w-4" />
                      {formData.file.name} uploaded
                    </p>
                  )}
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your content will be stored on Arweave/IPFS and tokenized as
                    an IP Asset using Story Protocol's registry.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={handleNext}
                  className="w-full"
                  disabled={!formData.title || !formData.file}
                >
                  Continue to Licensing
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: License Configuration */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Configure License Terms</CardTitle>
                <CardDescription>
                  Set up your Programmable IP License (PIL) terms using Story
                  Protocol
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>License Type</Label>
                  <Select
                    value={formData.licenseType}
                    onValueChange={(value: any) =>
                      setFormData((prev) => ({ ...prev, licenseType: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">
                        Open License (CC-style)
                      </SelectItem>
                      <SelectItem value="educational">
                        Educational Use Only
                      </SelectItem>
                      <SelectItem value="commercial">
                        Commercial License
                      </SelectItem>
                      <SelectItem value="ai-training">
                        AI Training License
                      </SelectItem>
                      <SelectItem value="custom">Custom License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="attribution"
                      checked={formData.requireAttribution}
                      onCheckedChange={(checked: boolean) =>
                        setFormData((prev) => ({
                          ...prev,
                          requireAttribution: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="attribution">Require Attribution</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="derivatives"
                      checked={formData.allowDerivatives}
                      onCheckedChange={(checked: boolean) =>
                        setFormData((prev) => ({
                          ...prev,
                          allowDerivatives: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="derivatives">Allow Derivative Works</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="commercial"
                      checked={formData.allowCommercial}
                      onCheckedChange={(checked: boolean) =>
                        setFormData((prev) => ({
                          ...prev,
                          allowCommercial: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="commercial">Allow Commercial Use</Label>
                  </div>
                </div>

                {formData.allowCommercial && (
                  <div>
                    <Label htmlFor="royalty">Royalty Rate (%)</Label>
                    <Input
                      id="royalty"
                      type="number"
                      placeholder="e.g., 5"
                      value={formData.royaltyRate}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          royaltyRate: e.target.value,
                        }))
                      }
                    />
                  </div>
                )}

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    These terms will be encoded into a PIL (Programmable IP
                    License) smart contract and automatically enforced by Story
                    Protocol.
                  </AlertDescription>
                </Alert>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="flex-1"
                    disabled={!formData.licenseType}
                  >
                    Continue to Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Review Your IP Asset</CardTitle>
                <CardDescription>
                  Review your content and license terms before tokenization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Content Details</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Title:</strong> {formData.title}
                      </p>
                      <p>
                        <strong>Type:</strong> {formData.contentType}
                      </p>
                      <p>
                        <strong>File:</strong> {formData.file?.name}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">License Terms</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>License:</strong> {formData.licenseType}
                      </p>
                      <p>
                        <strong>Attribution:</strong>{" "}
                        {formData.requireAttribution
                          ? "Required"
                          : "Not required"}
                      </p>
                      <p>
                        <strong>Derivatives:</strong>{" "}
                        {formData.allowDerivatives ? "Allowed" : "Not allowed"}
                      </p>
                      <p>
                        <strong>Commercial:</strong>{" "}
                        {formData.allowCommercial ? "Allowed" : "Not allowed"}
                      </p>
                      {formData.royaltyRate && (
                        <p>
                          <strong>Royalty:</strong> {formData.royaltyRate}%
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Story Protocol Integration:</strong> Your content
                    will be registered as an IP Asset with a unique on-chain
                    identifier. The PIL smart contract will automatically
                    enforce your license terms and handle attribution tracking.
                  </AlertDescription>
                </Alert>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button onClick={handleNext} className="flex-1">
                    Tokenize IP Asset
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  IP Asset Successfully Created!
                </CardTitle>
                <CardDescription>
                  Your knowledge IP has been tokenized and registered on Story
                  Protocol
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-800/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">What Happened:</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      ✅ Content uploaded to decentralized storage
                      (Arweave/IPFS)
                    </p>
                    <p>
                      ✅ IP Asset registered in Story Protocol's IP Asset
                      Registry
                    </p>
                    <p>
                      ✅ PIL smart contract deployed with your license terms
                    </p>
                    <p>
                      ✅ Unique IP ID generated:{" "}
                      <code className="bg-gray-500 px-2 py-1 rounded">
                        IP-
                        {Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </code>
                    </p>
                    <p>✅ Attribution tracking enabled for derivative works</p>
                    <p>✅ Royalty distribution system activated</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Coins className="mr-2 h-5 w-5" />
                        Monetization Ready
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Your IP is now ready to generate royalties from AI
                        training, educational use, and commercial applications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        Attribution Protected
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        All derivative works will automatically include proper
                        attribution through Story Protocol's on-chain tracking.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex space-x-4">
                  <Link href="/">
                    <Button onClick={() => setStep(1)} variant="outline">
                      Tokenize Another Asset
                    </Button>
                  </Link>
                  <Link href="/registry">
                    <Button className="flex-1">View in Registry</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
