'use client';

import { useState } from 'react';
import { Info, AlertCircle, CheckCircle2, Upload, Download, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { KYCForm } from '@/components/kyc-form';

type KYCStatus = 'not-initiated' | 'form' | 'pending' | 'verified';

export function PaymentOptions() {
  const [kycStatus, setKycStatus] = useState<KYCStatus>('not-initiated');
  const [qrPaymentEnabled, setQrPaymentEnabled] = useState(false);

  const handleApply = () => {
    setKycStatus('form');
  };

  const handleFormSubmit = () => {
    setKycStatus('pending');
  };

  const handleFormCancel = () => {
    setKycStatus('not-initiated');
  };

  const handleConnect = () => {
    // Handle connection logic
    console.log('Connecting payment service...');
  };

  const simulateApproval = () => {
    setKycStatus('verified');
    setQrPaymentEnabled(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Blanxer Dashboard
        </h1>
        <p className="text-gray-600 text-lg">Manage your payment options and business verification</p>
      </div>

      {/* Payment Options Section */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Payment Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Blanxer Payment Fulfillment Service */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Blanxer Payment Fulfillment Service</h3>
              <Info className="h-4 w-4 text-gray-400" />
            </div>

            {/* Status-based content */}
            {kycStatus === 'not-initiated' && (
              <>
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-800">Feature Not Available</AlertTitle>
                  <AlertDescription className="text-red-700">
                    Please complete KYC Verification to enable Blanxer Payment Fulfillment Service
                  </AlertDescription>
                </Alert>
                <Button onClick={handleApply} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Apply
                </Button>
              </>
            )}

            {kycStatus === 'pending' && (
              <>
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
              </>
            )}

            {kycStatus === 'verified' && (
              <>
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">KYC Verified Successfully</AlertTitle>
                  <AlertDescription className="text-green-700">
                    You can now enable Blanxer Payment Fulfillment Service.
                  </AlertDescription>
                </Alert>
                <Button onClick={handleConnect} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Connect
                </Button>
              </>
            )}

            {/* QR Payment Option */}
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
                  <Switch
                    checked={qrPaymentEnabled}
                    onCheckedChange={setQrPaymentEnabled}
                    disabled={kycStatus !== 'verified'}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Demo Button (for testing states) */}
      {kycStatus === 'pending' && (
        <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Demo: Simulate KYC Approval</p>
            <Button variant="outline" onClick={simulateApproval} size="sm">
              Approve KYC (Demo)
            </Button>
          </CardContent>
        </Card>
      )}

      {/* KYC Form */}
      {kycStatus === 'form' && (
        <KYCForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
      )}
    </div>
  );
}