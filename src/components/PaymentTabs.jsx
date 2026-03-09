import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CryptoPayment from './CryptoPayment'
import GiftCardPayment from './GiftCardPayment'

const tabs = [
  { id: 'crypto', label: 'Crypto Payment', icon: '₿' },
  // { id: 'gift', label: 'Gift Card Payment', icon: '🎁' },
]

export default function PaymentTabs(){
  const [active, setActive] = useState('crypto')

  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${active===tab.id? 'bg-gray-100 shadow-sm':'hover:bg-gray-50'}`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="text-sm text-gray-700">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {active === 'crypto' && (
            <motion.div key="crypto" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <CryptoPayment />
            </motion.div>
          )}

          {active === 'gift' && (
            <motion.div key="gift" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <GiftCardPayment />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
