# Bitte AI Agent - Rating Assitant

The Twitter Rating Assistant evaluates tweets on a scale from 0 to 10, based solely on how clearly and deeply they relate to blockchain and cryptocurrency concepts.

A higher score reflects strong use of technical language, meaningful insights, and a demonstrated understanding of crypto and blockchain topics.

Use Example:

1. Input tweet url:

```bash
# Input tweet url:
https://x.com/LIQPRODIGY/status/1934452798869127514?t=29dmwrhl-xESB7jmXx2v0A&s=08
```

2. Output:

```bash
6
```

## Quick Start

1. Clone this repository
2. Configure environment variables (create a `.env` or `.env.local` file)

```bash
# Get your API key from https://key.bitte.ai, https://rapidapi.com/davethebeast/api/twitter241
BITTE_API_KEY='your-api-key'
RAPIDAPI_KEY = 'your-rapidapi-key'
ACCOUNT_ID='your-account.near'
```

3. Install dependencies:
```bash
pnpm install
```
4. Start the development server:
```bash
pnpm run dev
```

