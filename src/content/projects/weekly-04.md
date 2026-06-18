title: weekly-04-oidc-idp
description: Secure OIDC Identity Provider with BFF pattern client
tags:
  - Go
  - OIDC
  - Security
  - Next.js
  - Backend
github: https://github.com/k175jp/weekly-04-oidc-idp
---

# Overview

A custom OIDC (OpenID Connect) Identity Provider (IdP) implemented in Go, accompanied by a secure Next.js frontend application.

The project demonstrates a production-grade authentication architecture using ensuring secure token management and OIDC standard compliance.

---

# Tech Stack

- **Identity Provider**: Go (Golang)
- **Frontend**: Next.js, React, TypeScript
- **Infrastructure**: Docker, Docker Compose

---

# Features

- **Standard OIDC Implementation**: Full OIDC Discovery (`.well-known`), Authorization Code Flow with PKCE, and JWKS exposure.
- **BFF Pattern**: Implemented a secure authentication architecture where access and refresh tokens are stored in `httpOnly`, `Secure` cookies, preventing direct client-side (JavaScript) token access.
- **Dynamic Client Management**: Client configurations (client IDs, redirect URIs) are loaded dynamically from a JSON file.
- **Advanced Security Features**:
    - Automatic RSA key rotation with multi-key verification (`kid`).
    - High-entropy, cryptographically secure random session ID generation.
    - Dynamic CORS policy validation based on client configurations.
    - IdP-hosted login flow, strictly separating authentication from the frontend application.

---

# Notes

Focused on implementing a secure authentication architecture from scratch. The project highlights the importance of the BFF pattern, secure cookie management, and OIDC standard compliance, moving beyond simple authentication to build a robust identity service.
