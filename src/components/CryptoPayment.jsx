import React, { useState } from 'react'

const addresses = [
  { id: 'btc', label: 'Bitcoin (BTC)', address: '1J1byRUX7S35PshAD1CJsKFsfeu36i8q4j' },
  { id: 'eth', label: 'Ethereum (BEP20)', address: '0x182c7f736e760b37f8b76065a7cb22e3e0238493' },
  { id: 'usdt', label: 'USDT (BEP20)', address: '0x182c7f736e760b37f8b76065a7cb22e3e0238493' },
  { id: 'sol', label: 'Solana (SOL)', address: 'Bk1PGSdEKX6SbVJnbxvECmpAoAQ5RLcfWEdNfWBbZa6o' },
]

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text)
  }
  // fallback
  const el = document.createElement('textarea')
  el.value = text
  document.body.appendChild(el)
  el.select()
  try {
    document.execCommand('copy')
  } catch (e) {
    // ignore
  }
  document.body.removeChild(el)
  return Promise.resolve()
}

export default function CryptoPayment(){
  const [copied, setCopied] = useState(null)

  function handleCopy(id, text){
    copyToClipboard(text).then(()=>{
      setCopied(id)
      setTimeout(()=> setCopied(null), 1800)
    }).catch(()=>{
      // ignore or show error
    })
  }

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-gray-50">
        <div className="text-sm font-medium">Pay with Crypto</div>
        <div className="text-xs text-gray-500">Send the exact amount to one of the addresses below</div>
      </div>

      <div className="space-y-3">
        {addresses.map(item => (
          <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-800">{item.label}</div>
              <div className="text-xs text-gray-500 truncate font-mono">{item.address}</div>
            </div>

            <div className="ml-4 flex-shrink-0">
              <button
                onClick={() => handleCopy(item.id, item.address)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50 transition"
                aria-label={`Copy ${item.label} address`}
              >
                {copied === item.id ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 5 11.586a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-green-700">Copied</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2" />
                      <rect x="8" y="8" width="12" height="12" rx="2" ry="2" />
                    </svg>
                    <span className="text-xs text-gray-700">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <button className="w-full inline-flex justify-center items-center py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">I have sent the funds</button>
      </div>
    </div>
  )
}
