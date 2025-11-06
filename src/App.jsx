import React from 'react'
import PaymentTabs from './components/PaymentTabs'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Complete Your Payment</h1>
        <p className="text-sm text-gray-500 mb-6">Choose a payment method to continue</p>
        <PaymentTabs />
      </div>
    </div>
  )
}
