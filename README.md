# Pica Documentation

Pica is a powerful platform that provides APIs and tools to build, deploy, and scale AI agents with seamless access to over 140+ integrations. It simplifies the process of connecting AI agents to real-world tools and services through a unified interface.

Documentation is available at [docs.picaos.com](https://docs.picaos.com) and built with [Mintlify](https://www.mintlify.app/).

## Focal Features

- **AuthKit**: A secure, multi-tenant authentication component that lets your users connect their third-party tools and services directly in your app.
- **OneTool SDK**: A single SDK that connects AI agents seamlessly to all APIs and tools, handling schema definitions, authentication, and execution processes automatically
- **Passthrough API**: Access 21,000+ actions through standardized endpoints
- **BuildKit**: Add integration logic to your app with a single prompt.

## Documentation Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where mint.json is)

```
mintlify dev
```

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`
