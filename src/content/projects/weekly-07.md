---
title: weekly-07-totp
description: RFC 6238 compliant TOTP generation and validation service implemented in Go
tags:
  - Go
  - Security
  - TOTP
---

# Overview

A TOTP (Time-based One-Time Password) generation and validation service implemented in Go, compliant with RFC 6238.

The project demonstrates the core mechanisms of TOTP, including HMAC-SHA1 algorithm implementation, dynamic truncation, and clock-drift-aware validation using a rolling time window.

---

# Tech Stack

- Go
- Docker / Docker Compose

---

# Features

- RFC 6238 compliant TOTP generation
- Secret generation (Base32)
- Drift-aware validation ([-1, 0, +1] interval)
- HTTP API
- Simple HTML frontend for demonstration

---

# Notes

Focused on understanding the mechanics of RFC 6238, handling time-based synchronization in security protocols, and implementing robust validation logic in Go within a containerized environment.
