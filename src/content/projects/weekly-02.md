---
title: weekly-02-rust-mock-cli
description: Blazing-fast API Mock Server CLI with dynamic data generation
tags:
  - Rust
  - CLI
  - Backend
github: https://github.com/k175jp/weekly-02-rust-mock-cli
---

# Overview

A lightweight, blazing-fast API Mock Server CLI built with Rust.

It allows frontend developers to instantly spin up a mock HTTP server from a single JSON configuration file, streamlining local prototyping and integration testing.

---

# Tech Stack

- Rust
- axum / tokio (Asynchronous Networking)
- serde / serde_json (High-performance Serialization)
- clap (Command-line Argument Parsing)
- uuid / rand (Dynamic Token/ID Generation)

---

# Features

- **Dynamic Query Routing**: Differentiates and serves distinct responses based on request query parameters (e.g., `?role=admin`).
- **Request Body Echoing**: Automatically echoes back incoming POST/PUT request bodies as the response payload for rapid webhook testing.
- **Asynchronous Latency Simulation**: Simulates network delays using non-blocking asynchronous timers (`tokio::time::sleep`).
- **Dynamic Template Replacement**: Replaces placeholders like `{{uuid}}` and `{{random_id}}` at runtime to serve dynamic mock data.
- **Built-in CORS Handling**: Automatically responds to CORS preflight (OPTIONS) requests and appends CORS headers to all mock responses.
- **Zero-Dependency Runtime**: Compiles into a single standalone binary for frictionless distribution.

---

# Notes

Focused on practicing Rust's strict ownership model, compile-time trait safety (using `RngExt` etc.), and high-performance asynchronous request handling.