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

- Go
- Docker / Docker Compose

---

# Features

- Reverse Proxy Core
- Docker-native Healthchecking
- Vulnerable Sandbox Environment
- Request Validator (In Development)

---

# Notes

Focused on practicing network socket programming, HTTP proxy routing in Go, multi-container infrastructure orchestration, and understanding WAF architectures.
