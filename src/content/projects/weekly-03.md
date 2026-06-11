---
title: weekly-03-go-waf-proxy
description: Lightweight Reverse Proxy and Minimal WAF Sandbox with Container Healthchecking
tags:
  - Go
  - Security
  - Docker
  - Backend
github: https://github.com/k175jp/weekly-03-go-waf-proxy
---

# Overview

A lightweight, defensive Reverse Proxy and Minimal WAF (Web Application Firewall) environment built with Go and Docker Compose.

It includes an intentional Reflected XSS vulnerable sandbox application, allowing developers to immediately test and verify attack payloads and defensive filtering mechanisms in an isolated container network.

---

# Tech Stack

- Go (Golang)
- Docker / Docker Compose

---

# Features

- **Reverse Proxy Core**: Forwards client traffic to upstream backend services using Go's standard `httputil.ReverseProxy`.
- **Docker-native Healthchecking**: Orchestrates service dependencies using `depends_on` with `condition: service_healthy` to ensure zero-downtime startup.
- **Vulnerable Sandbox Environment**: Packaged with a dedicated mock search application containing an active Reflected XSS vulnerability for real-time exploit simulation.
- **Request Validator (In Development)**: Inspects query parameters and request bodies against security signatures to drop malicious payloads with a `403 Forbidden` status while preserving raw data integrity for backend services.

---

# Notes

Focused on practicing network socket programming, low-level HTTP proxy routing in Go, multi-container infrastructure orchestration, and understanding the core architectural responsibility of WAFs as gatekeepers rather than data mutators.