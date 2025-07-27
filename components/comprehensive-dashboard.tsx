'use client';

import { Eye, EyeOff, Info, AlertCircle, CheckCircle2, Upload, Download, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

export function ComprehensiveDashboard() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Blanxer Complete Design System with Fonepay Integration
        </h1>
        <p className="text-gray-600 text-lg">Complete 9-step user journey for Figma export</p>
      </div>

      {/* Step 1: Initial State - KYC Not Initiated */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-red-50 text-red-700 border-red-200">
            Step 1: Initial State - KYC Not Initiated
          </Badge>
        </div>
        
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Blanxer Payment Fulfillment Service</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>

              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-800">Feature Not Available</AlertTitle>
                <AlertDescription className="text-red-700">
                  Please complete KYC Verification to enable Blanxer Payment Fulfillment Service
                </AlertDescription>
              </Alert>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-300" />
                      <div>
                        <h4 className="font-medium text-gray-400">QR Payment</h4>
                        <p className="text-sm text-gray-300">Supports all wallets and mobile banking applications</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled 
                      className="opacity-40 cursor-not-allowed text-gray-400 border-gray-200"
                    >
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Verify Your Business
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 2: KYC Form */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
            Step 2: KYC Form - Business Registration Information
          </Badge>
        </div>

        <Card className="shadow-xl border-0 bg-white max-w-4xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-lg">
            <CardTitle className="text-2xl text-gray-900">Business Registration Information</CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              Please provide accurate information for KYC verification
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Business Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Registered Business Name *</Label>
                    <Input
                      id="businessName"
                      value="Samaya Electronics"
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessPhone">Business Phone Number *</Label>
                    <Input
                      id="businessPhone"
                      value="+977 9841234567"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registeredAddress">Registered Address *</Label>
                  <Textarea
                    id="registeredAddress"
                    value="Putalisadak, Kathmandu, Nepal - 44600"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="panNumber">PAN Number *</Label>
                  <Input
                    id="panNumber"
                    value="123456789"
                    className="h-11"
                  />
                </div>
              </div>

              {/* Banking Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Banking Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name (Business Account) *</Label>
                    <Input
                      id="bankName"
                      value="Nepal Investment Bank"
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number *</Label>
                    <Input
                      id="accountNumber"
                      value="01234567890123"
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accountName">Bank Account Name *</Label>
                    <Input
                      id="accountName"
                      value="Samaya Electronics Pvt. Ltd."
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bankBranch">Bank Account Branch *</Label>
                    <Input
                      id="bankBranch"
                      value="New Road Branch"
                      className="h-11"
                    />
                  </div>
                </div>
              </div>

              {/* Document Uploads */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Document Uploads
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Registration Documents *</Label>
                    <p className="text-sm text-gray-600 mb-2">Upload Registration Photo & PAN Photo</p>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Signed Agreement PDF *</Label>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Agreement
                      </Button>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Click to upload signed agreement</p>
                      <p className="text-xs text-gray-500">PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <Button className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold">
                  Save & Request for KYC Verification
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 border-gray-300 hover:bg-gray-50"
                >
                  Cancel & Go Back
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 3: KYC Pending */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-yellow-50 text-yellow-700 border-yellow-200">
            Step 3: KYC Pending - Under Review
          </Badge>
        </div>
        
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Blanxer Payment Fulfillment Service</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>

              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800">KYC Verification Pending</AlertTitle>
                <AlertDescription className="text-yellow-700">
                  Your KYC verification is under review. This process can take up to 3–4 business days.
                </AlertDescription>
              </Alert>

              <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                Pending
              </Badge>

              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <p>📋 KYC Verification can take up to 3–4 business days.</p>
              </div>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                      <div>
                        <h4 className="font-medium text-gray-500">QR Payment</h4>
                        <p className="text-sm text-gray-400">Supports all wallets and mobile banking applications</p>
                      </div>
                    </div>
                    <Switch checked={false} disabled={true} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 4: KYC Verified - Apply for Fonepay */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-green-50 text-green-700 border-green-200">
            Step 4: KYC Verified - Apply for Fonepay
          </Badge>
        </div>
        
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Blanxer Payment Fulfillment Service</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>

              <Alert className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">KYC Verified Successfully</AlertTitle>
                <AlertDescription className="text-green-700">
                  You can now enable Blanxer Payment Fulfillment Service.
                </AlertDescription>
              </Alert>

              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Apply for Fonepay
              </Button>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">QR Payment</h4>
                        <p className="text-sm text-gray-600">Supports all wallets and mobile banking applications</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-purple-600 border-purple-200 hover:bg-purple-50"
                    >
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 5: Submit Business Details to Fonepay */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
            Step 5: Submit Your Business Detail to Fonepay
          </Badge>
        </div>

        <Card className="shadow-xl border-0 bg-white max-w-4xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-lg">
            <CardTitle className="text-2xl text-gray-900">Submit Your Business Detail to Fonepay</CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              Please recheck if you need to change anything
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Business Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName2">Registered Business Name *</Label>
                    <Input
                      id="businessName2"
                      value="Samaya Electronics"
                      className="h-11"
                      readOnly
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessPhone2">Business Phone Number *</Label>
                    <Input
                      id="businessPhone2"
                      value="+977 9841234567"
                      className="h-11"
                      readOnly
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registeredAddress2">Registered Address *</Label>
                  <Textarea
                    id="registeredAddress2"
                    value="Putalisadak, Kathmandu, Nepal - 44600"
                    className="min-h-[80px]"
                    readOnly
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="panNumber2">PAN Number *</Label>
                  <Input
                    id="panNumber2"
                    value="123456789"
                    className="h-11"
                    readOnly
                  />
                </div>
              </div>

              {/* Banking Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Banking Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="bankName2">Bank Name (Business Account) *</Label>
                    <Input
                      id="bankName2"
                      value="Nepal Investment Bank"
                      className="h-11"
                      readOnly
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber2">Account Number *</Label>
                    <Input
                      id="accountNumber2"
                      value="01234567890123"
                      className="h-11"
                      readOnly
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accountName2">Bank Account Name *</Label>
                    <Input
                      id="accountName2"
                      value="Samaya Electronics Pvt. Ltd."
                      className="h-11"
                      readOnly
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bankBranch2">Bank Account Branch *</Label>
                    <Input
                      id="bankBranch2"
                      value="New Road Branch"
                      className="h-11"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Document Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Document
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Uploaded Documents</Label>
                    <p className="text-sm text-gray-600 mb-2">Registration files documents</p>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Signed Agreement PDF *</Label>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Agreement
                      </Button>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Click to upload signed agreement</p>
                      <p className="text-xs text-gray-500">PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-sm text-gray-700">
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Important Information</h4>
                  </div>
                </div>
                <p className="mb-2">
                  <strong>Note:</strong> The Fonepay Terminal is exclusively available to Blanxer clients and is fully integrated to 
                  work seamlessly within the Blanxer platform. A transaction fee applies to each payment processed 
                  through the Fonepay Terminal.
                </p>
                <p className="mb-2">
                  For detailed information about fees, terms, and service instructions,
                </p>
                <p>
                  <strong>Please refer to your email for specific service charges.</strong>
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions and hereby submit my business details to Blanxer's payment service provider.
                </Label>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <Button className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold">
                  Apply for Fonepay
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 border-gray-300 hover:bg-gray-50"
                >
                  Cancel & Go Back
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 6: Fonepay Pending */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-yellow-50 text-yellow-700 border-yellow-200">
            Step 6: Fonepay Application Pending
          </Badge>
        </div>
        
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Blanxer Payment Fulfillment Service</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>

              <Alert className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">KYC Verified Successfully</AlertTitle>
                <AlertDescription className="text-green-700">
                  You can now enable Blanxer Payment Fulfillment Service.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                    Fonepay Application
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                  Pending
                  </Badge>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-semibold">⏳</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-900">Processing Your Application</h4>
                      <p className="text-sm text-blue-700">
                        Your Fonepay application is being processed. This can take up to 24-48 hours.
                      </p>
                      <p className="text-sm text-blue-700">
                        Once approved, you'll receive an SMS with your Fonepay Terminal ID. Download the Fonepay App, 
                        login with your credentials, and click the Connect button below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">QR Payment</h4>
                        <p className="text-sm text-gray-600">Supports all wallets and mobile banking applications</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 7: Connect Fonepay Terminal */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-purple-50 text-purple-700 border-purple-200">
            Step 7: Connect Your Fonepay Terminal with Blanxer
          </Badge>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Connect Your Fonepay Terminal with Blanxer
              </CardTitle>
              <CardDescription className="text-gray-600">
                Enter your Fonepay app password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fonepayUsername">Fonepay Username</Label>
                  <Input
                    id="fonepayUsername"
                    placeholder="Enter your username"
                    className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fonepayPassword">Password</Label>
                  <div className="relative">
                    <Input
                      id="fonepayPassword"
                      type="password"
                      placeholder="Enter your password"
                      className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Step 8: Payment Service Connected */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-emerald-50 text-emerald-700 border-emerald-200">
            Step 8: Payment Service Connected
          </Badge>
        </div>
        
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              Payment Options
              <Badge className="bg-green-100 text-green-800 border-green-200">Connected</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Blanxer Payment Fulfillment Service</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>

              <Alert className="border-emerald-200 bg-emerald-50">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <AlertTitle className="text-emerald-800">Payment Service Connected</AlertTitle>
                <AlertDescription className="text-emerald-700">
                  Your Blanxer Payment Fulfillment Service is now active and ready to process payments.
                </AlertDescription>
              </Alert>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-medium text-green-900">QR Payment</h4>
                        <p className="text-sm text-green-700">Supports all wallets and mobile banking applications</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                      Disconnect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 9: KYC Verified - QR Payment Pending */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
            Step 9: KYC Verified - QR Payment Available
          </Badge>
        </div>
        
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Blanxer Payment Fulfillment Service</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>

              <Alert className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">KYC Verified Successfully</AlertTitle>
                <AlertDescription className="text-green-700">
                  You can now enable Blanxer Payment Fulfillment Service.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                  Pending
                </Badge>
              </div>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">QR Payment</h4>
                        <p className="text-sm text-gray-600">Supports all wallets and mobile banking applications</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design System Notes */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-blue-50 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Complete Design System with Fonepay Integration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-purple-900">🎨 Enhanced Features</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 9-step user journey</li>
                <li>• Fonepay Terminal integration</li>
                <li>• Business verification flow</li>
                <li>• Document reconfirmation</li>
                <li>• Terms & conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-900">📱 Payment States</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Initial KYC not initiated</li>
                <li>• KYC form submission</li>
                <li>• KYC pending review</li>
                <li>• Fonepay application</li>
                <li>• Terminal connection</li>
                <li>• Connected state</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-900">🔧 Technical Features</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Responsive design</li>
                <li>• Form validation</li>
                <li>• File upload areas</li>
                <li>• Status indicators</li>
                <li>• Interactive toggles</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
