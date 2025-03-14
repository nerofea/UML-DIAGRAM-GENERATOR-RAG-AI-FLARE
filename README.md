Nerofea project submission for Flare + Google Cloud Verifiable AI Hackathon, RAG track!

🔥 Summary of Features
✅ Text input field for user to describe their web3 app/product/platform
✅ Upload PDF/TXT files, extract text
✅ User upload multiple images so that more metacharacters, elements and visuals can be brainstormed by Gemini
✅ Paste a Twitter profile link, fetch images so that more metacharacters, elements and visuals can be brainstormed by Gemini
✅ Fetch real-time FTSO data from Flare for dynamic rendering of the web3 components of the UML diagram
✅ Send everything to Gemini AI, Gemini can also take the pre-defined mermaid.js json metadata, to also plan the UML diagram after narrating.
✅ Convert Gemini response to Mermaid.js syntax (the mermaidjs parser)
✅ Render UML dynamically onscreen
✅ User shares the UML via a link, and the UML architecture is always real-time
✅ BidDataQuery 
✅ AI-powered UML suggestions based on live blockchain & GitHub trends
✅ Interactive UML editor with real-time updates & cloud storage
✅ Embed UML in websites with auto-sync to latest architecture changes

/app-architecture-uml-generator
│── public/                        # Static assets (if needed)
│── pages/                          # Next.js pages (if using App Router, replace with 'app')
│   ├── index.js                    # Home Page (Main UML Generator UI)
│   ├── api/                         # API Routes (Server-side)
│   │   ├── uml-diagram.js           # API to fetch & process UML diagrams
│   │   ├── gemini-metadata.js       # API for fetching metadata from Gemini AI
│   │   ├── trends-data.js           # API for fetching Google Trends data
│   │   ├── github-data.js           # API to fetch GitHub repo & commit data
│   │   ├── blockchain-data.js       # API to fetch live blockchain transactions
│   │   ├── image-regeneration.js    # API for AI-generated branding images
│── components/                      # Reusable UI Components
│   ├── UMLRenderer.js               # Component for rendering Mermaid UML diagrams
│   ├── UMLControls.js               # Upload/Export Controls
│   ├── TrendAnalysis.js             # Component for visualizing Google Trends data
│   ├── BlockchainVisualizer.js      # Component for real-time blockchain UML updates
│   ├── AIImageGenerator.js          # AI branding image regeneration component
│── utils/                           # Utility functions
│   ├── mermaidParser.js             # Converts Gemini AI metadata to Mermaid syntax
│   ├── fetchGemini.js               # Function to get Gemini AI data
│   ├── fetchTrends.js               # Fetch Google Trends data
│   ├── fetchGitHub.js               # Fetch GitHub repository & commit data
│   ├── fetchBlockchain.js           # Fetch blockchain transactions (Ethereum, TON, etc.)
│   ├── imageProcessing.js           # AI image processing functions (SDXL, DALL·E)
│── styles/                          # CSS or Tailwind configurations
│── types/                           # TypeScript Interfaces & Type Definitions
│   ├── uml.d.ts                     # Type definitions for UML metadata
│   ├── trends.d.ts                  # Type definitions for Google Trends data
│   ├── github.d.ts                  # Type definitions for GitHub repo data
│   ├── blockchain.d.ts               # Type definitions for blockchain transactions
│── tests/                           # Unit & Integration Tests
│   ├── umlParser.test.js            # Tests for Mermaid UML parsing
│   ├── githubData.test.js           # Tests for GitHub API data processing
│   ├── blockchainData.test.js       # Tests for blockchain transaction fetching
│── package.json                     # Dependencies
│── next.config.js                    # Next.js configuration
│── README.md                         # Project Documentation


## **🚀 What’s New in This Folder Structure?**

| **New Addition**                     | **Why it's Important?**                                              |
| ------------------------------------ | -------------------------------------------------------------------- |
| `api/github-data.js`                 | ✅ Fetches GitHub commits & repo data for UML evolution tracking      |
| `api/blockchain-data.js`             | ✅ Fetches **live blockchain transactions** for real-time Web3 UMLs   |
| `api/image-regeneration.js`          | ✅ AI-generated UML components from branding (via DALL·E, SDXL)       |
| `components/BlockchainVisualizer.js` | ✅ Displays blockchain UMLs dynamically                               |
| `components/AIImageGenerator.js`     | ✅ Handles Flare-branded AI-generated UML elements                    |
| `utils/fetchGitHub.js`               | ✅ Fetches latest **open-source developer activity** for tech trends  |
| `utils/fetchBlockchain.js`           | ✅ Pulls **live token transactions & smart contract interactions**    |
| `utils/imageProcessing.js`           | ✅ Converts Twitter branding images into **interactive UML elements** |
| `types/`                             | ✅ TypeScript **type definitions** to improve development stability   |
| `tests/`                             | ✅ Unit tests for **UML parsing, GitHub data, blockchain data**       |


- **🔹 More modularity** → Clear **separation of concerns** between UML generation, AI image branding, and blockchain visualization.
- **🔹 Scalability** → API endpoints ready to **fetch & integrate live Web3 + AI-powered branding**.
- **🔹 Real-time interactivity** → Blockchain UML diagrams can **update dynamically** with live **token transactions**.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
