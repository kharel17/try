'use client';

import { useState } from 'react';
import { Upload, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface KYCFormProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export function KYCForm({ onSubmit, onCancel }: KYCFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    registeredAddress: '',
    businessPhone: '',
    panNumber: '',
    bankName: '',
    accountNumber: '',
    accountName: '',
    bankBranch: '',
  });

  const [files, setFiles] = useState({
    registrationDocs: null as File | null,
    signedAgreement: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFiles(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data here
    console.log('Form submitted:', { formData, files });
    onSubmit();
  };

  const downloadAgreement = () => {
    // Simulate file download
    console.log('Downloading agreement...');
  };

  return (
    <Card className="shadow-xl border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl text-gray-900">Business Registration Information</CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              Please provide accurate information for KYC verification
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
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
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Enter business name"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessPhone">Business Phone Number *</Label>
                <Input
                  id="businessPhone"
                  value={formData.businessPhone}
                  onChange={(e) => handleInputChange('businessPhone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="registeredAddress">Registered Address *</Label>
              <Textarea
                id="registeredAddress"
                value={formData.registeredAddress}
                onChange={(e) => handleInputChange('registeredAddress', e.target.value)}
                placeholder="Enter complete registered address"
                className="min-h-[80px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="panNumber">PAN Number *</Label>
              <Input
                id="panNumber"
                value={formData.panNumber}
                onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase())}
                placeholder="ABCDE1234F"
                className="h-11"
                required
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
                  value={formData.bankName}
                  onChange={(e) => handleInputChange('bankName', e.target.value)}
                  placeholder="Enter bank name"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number *</Label>
                <Input
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                  placeholder="Enter account number"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accountName">Bank Account Name *</Label>
                <Input
                  id="accountName"
                  value={formData.accountName}
                  onChange={(e) => handleInputChange('accountName', e.target.value)}
                  placeholder="Enter account holder name"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bankBranch">Bank Account Branch *</Label>
                <Input
                  id="bankBranch"
                  value={formData.bankBranch}
                  onChange={(e) => handleInputChange('bankBranch', e.target.value)}
                  placeholder="Enter branch name"
                  className="h-11"
                  required
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
                  <p className="text-sm text-gray-600 mb-2">
                    {files.registrationDocs ? files.registrationDocs.name : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange('registrationDocs', e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".png,.jpg,.jpeg,.pdf"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Signed Agreement PDF *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={downloadAgreement}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Agreement
                  </Button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    {files.signedAgreement ? files.signedAgreement.name : 'Click to upload signed agreement'}
                  </p>
                  <p className="text-xs text-gray-500">PDF up to 10MB</p>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange('signedAgreement', e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <Button
              type="submit"
              className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
            >
              Save & Request for KYC Verification
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 h-12 border-gray-300 hover:bg-gray-50"
            >
              Cancel & Go Back
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}