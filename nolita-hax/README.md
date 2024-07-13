## Introduction

This repository includes everything you need to bootstrap an online-enabled, LLM-powered web agent.

**Prerequisites**

You'll first want to `cp .env.example .env` and configure your LLM.

Then, to get started hacking, just run `npm run dev`. To run this repo in production, you can run `npm run build && npm run start`.

In development, your app is available at `http://localhost:5173`, talking to the server at `http://localhost:3040`. By default, in production your app is available at `http://localhost`.

### `agent`

This folder includes the configuration for your agent, which is powered by your LLM. Your LLM has its own system and agent prompt. Both are configurable here.

### `app`

This folder contains the front-end components of your application, powered by [Vite](https://github.com/vitejs/vite) and TypeScript.

The example in this repository is simple: it provides a typed list of restaurants for the West Village of Manhattan, NY.

### `extensions`

In this folder you can configure custom type schemas -- ensuring output from your LLM agent matches a typed response -- and provide an inventory of personal data, should you need credentials to log in to another service or need to share personal information for any purpose in a confidential way.

### `server`

This folder runs an Express server that serves the browser back-end, as well as static hosting if you wish to mount the server in production with the Vite.js front-end build.

It imports your browser customisations in the extensions folder and spins up a browser when requested.