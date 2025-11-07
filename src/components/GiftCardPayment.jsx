import React, {useState} from 'react'

const providers = [
  // use a reliable SVG for Amazon logo hosted on Wikimedia
  { id: 'amazon', name: 'Amazon', url: 'https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 'apple', name: 'Apple', url: 'https://www.apple.com/shop/gift-cards', logo: 'https://cdn.simpleicons.org/apple/000000' },
  { id: 'google', name: 'Google Play', url: 'https://play.google/giftcards/', logo: 'https://cdn.simpleicons.org/googleplay/00A0FF' },
]

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text)
  }
  const el = document.createElement('textarea')
  el.value = text
  document.body.appendChild(el)
  el.select()
  try { document.execCommand('copy') } catch(e) {}
  document.body.removeChild(el)
  return Promise.resolve()
}

export default function GiftCardPayment(){
  const [email, setEmail] = useState('charitynexusorg@gmail.com')
  const [copied, setCopied] = useState(false)

  function handleCopy(){
    copyToClipboard(email).then(()=>{
      setCopied(true)
      setTimeout(()=> setCopied(false), 1600)
    })
  }

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-gray-50">
        <div className="text-sm font-medium">Redeem Gift Card</div>
        <div className="text-xs text-gray-500">If you'd like to buy a gift card for this purchase, use one of the links below and send it to the destination email.</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {providers.map(p => (
          <div key={p.id} className="flex flex-col items-start gap-2 p-3 border rounded-lg bg-white">
            <div className="flex items-center gap-3 w-full">
              <img src={p.logo} alt={`${p.name} logo`} className="w-8 h-8" />
              <div className="flex-1">
                <div className="text-sm font-medium">{p.name}</div>
                <div className="text-xs text-gray-500">Recommended</div>
              </div>
            </div>
            <a className="mt-1 inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700" href={p.url} target="_blank" rel="noreferrer">Buy on {p.name}</a>
          </div>
        ))}
      </div>

      <div className="p-3 border rounded-lg bg-white flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1 w-full">
          <div className="text-sm text-gray-700 font-medium">Destination email</div>
          <div className="text-xs text-gray-500">This is the email where the purchased gift card should be sent</div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input value={email} onChange={e=>setEmail(e.target.value)} className="flex-1 min-w-0 p-2 border rounded-md text-sm font-mono w-full" />
          <button onClick={handleCopy} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50 whitespace-nowrap">
            {copied ? (
              <span className="text-sm text-green-600">Copied</span>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                <span className="text-sm">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="text-xs text-gray-500">
        Tip: After purchasing, check the gift card email and forward or provide the code here to redeem. We recommend sending gift cards to the destination email above so our system can automatically process them.
      </div>
    </div>
  )
}
