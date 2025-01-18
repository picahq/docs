# Pica - The Open-Source Catalyst for Autonomous AI

Pica is a powerful platform that provides APIs and tools to build, deploy, and scale AI agents with seamless access to over 100+ integrations. It simplifies the process of connecting AI agents to real-world tools and services through a unified interface.

## Key Features

- **OneTool SDK**: A single SDK that connects AI agents seamlessly to all APIs and tools, handling schema definitions, authentication, and execution processes automatically
- **Unified API**: Access 100+ integrations through standardized endpoints with common models
- **Vault API**: Manage your integrations securely through comprehensive connection management
- **Built-in Authentication**: Robust authentication system with AuthKit for secure API access
- **Multiple SDK Support**: Integration with popular frameworks including Vercel AI SDK, Anthropic MCP (coming soon), Vapi (coming soon), and Langchain (coming soon)

## Quick Start

1. Create a Pica Secret Key from the [API Keys page](https://app.picaos.com/settings/api-keys)
2. Connect your integration via the [OneTool Tab](https://app.picaos.com/connections)
3. Install OneTool and start building with the Pica AI SDK

```typescript
import { Pica } from "@picahq/ai-sdk";

const pica = new Pica(process.env.Pica_SECRET_KEY, {
  agentName: "Pica",
  availableTools: ['quickbook', 'slack', 'gmail'],
  accessLevel: 'full',
});

// Your AI automatically gets a system prompt with any caveats
const system = await pica.generateSystemPrompt();
```

## Supported Integrations

Connect your AI to leading platforms including:
- QuickBooks
- Salesforce
- HubSpot
- Shopify
- And [many more](https://www.picaos.com/community/connectors)

## Documentation Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where mint.json is)

```
mintlify dev
```

### Publishing Changes

Install our Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to production automatically after pushing to the default branch. Find the link to install on your dashboard. 

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`
