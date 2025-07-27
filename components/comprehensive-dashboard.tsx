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
          Blanxer Complete Design System
        </h1>
        <p className="text-gray-600 text-lg">All design states for Figma export</p>
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

              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Apply
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 2: KYC Form */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
            Step 2: KYC Form - Business Registration
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
                      placeholder="Enter business name"
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessPhone">Business Phone Number *</Label>
                    <Input
                      id="businessPhone"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registeredAddress">Registered Address *</Label>
                  <Textarea
                    id="registeredAddress"
                    placeholder="Enter complete registered address"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="panNumber">PAN Number *</Label>
                  <Input
                    id="panNumber"
                    placeholder="ABCDE1234F"
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
                      placeholder="Enter bank name"
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number *</Label>
                    <Input
                      id="accountNumber"
                      placeholder="Enter account number"
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accountName">Bank Account Name *</Label>
                    <Input
                      id="accountName"
                      placeholder="Enter account holder name"
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bankBranch">Bank Account Branch *</Label>
                    <Input
                      id="bankBranch"
                      placeholder="Enter branch name"
                      className="h-11"
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
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

      {/* Step 4: KYC Verified */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-green-50 text-green-700 border-green-200">
            Step 4: KYC Verified - Ready to Connect
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
                Connect
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
                    <Switch checked={true} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 5: Login Page */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-purple-50 text-purple-700 border-purple-200">
            Step 5: Login Page - User Authentication
          </Badge>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome Back to Blanxer
              </CardTitle>
              <CardDescription className="text-gray-600">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Button variant="link" className="text-sm text-purple-600 hover:text-purple-700 p-0">
                    Forgot Password?
                  </Button>
                </div>

                <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                  Login
                </Button>
              </div>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-2 text-sm text-gray-500">or login with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-12 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>

              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Button variant="link" className="text-purple-600 hover:text-purple-700 font-semibold p-0">
                    Sign Up
                  </Button>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Step 6: Connected State */}
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-emerald-50 text-emerald-700 border-emerald-200">
            Step 6: Connected State - Payment Service Active
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

              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  ✓ Connected
                </Badge>
                <Button variant="outline" size="sm" className="text-gray-600">
                  Manage Settings
                </Button>
              </div>

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
                    <Switch checked={true} />
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Payment Statistics</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">₹0</p>
                    <p className="text-sm text-blue-700">Total Processed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">0</p>
                    <p className="text-sm text-blue-700">Transactions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">0%</p>
                    <p className="text-sm text-blue-700">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design System Notes */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-blue-50 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Design System Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-purple-900">🎨 Color Palette</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Primary: Purple (#8B5CF6) to Blue (#3B82F6)</li>
                <li>• Success: Green (#10B981)</li>
                <li>• Warning: Yellow (#F59E0B)</li>
                <li>• Error: Red (#EF4444)</li>
                <li>• Neutral: Gray scale</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-900">📐 Layout System</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 8px spacing grid</li>
                <li>• Card-based design</li>
                <li>• Responsive breakpoints</li>
                <li>• Soft shadows & blur effects</li>
                <li>• Rounded corners (8px)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-900">⚡ Components</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Interactive buttons</li>
                <li>• Form inputs & validation</li>
                <li>• Alert notifications</li>
                <li>• Toggle switches</li>
                <li>• File upload areas</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}