# Payment Checkout (React + Tailwind + PayPal backend)

This project is a minimal single-page checkout UI built with React, Tailwind CSS, and Framer Motion, plus a small Express server that demonstrates PayPal order creation (sandbox).

Features
- Responsive centered card layout
- Three payment methods with tabs and smooth transitions: Crypto, PayPal, Gift Card
- Minimal aesthetic with white rounded card, soft shadowing
- Express server using @paypal/checkout-server-sdk (sandbox)

Setup
1. Clone or copy the repo to your machine.
2. From project root, install dependencies:

```bash
npm install
```

3. Create a `.env` file at project root with PayPal sandbox credentials:

```
PAYPAL_CLIENT_ID=YourSandboxClientId
PAYPAL_SECRET=YourSandboxSecret
PORT=4000
```

4. Start the frontend dev server and the backend server (two terminals recommended):

Frontend:
```bash
npm run dev
```

Backend:
```bash
npm run server
```

Alternatively start both with concurrently:
```bash
npm start
```

Notes
- The frontend calls `/api/create-order` which the Express server handles. This is a demonstration; in production you'd secure endpoints and integrate the frontend's PayPal JS SDK properly.
- Tailwind requires PostCSS and Vite; the config files are included.

What's included
- `src/` - React app and components
- `server/` - Express backend with PayPal sample endpoints
- `tailwind.config.cjs`, `postcss.config.cjs`, `package.json`

Next steps
- Wire client-side PayPal JS SDK to open a real checkout popup.
- Add form validations and better UX flows (loading states, errors).
- Add unit/tests if required.
