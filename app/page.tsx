'use client';

import { useState } from 'react';
import { ComprehensiveDashboard } from '@/components/comprehensive-dashboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ComprehensiveDashboard />
    </div>
  );
}