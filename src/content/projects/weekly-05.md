---
title: weekly-05-terraform-lambda
description: Deploying a simple AWS Lambda function using Terraform
tags:
  - Terraform
  - AWS Lambda
  - Python
  - IaC
  - Cloud
github: https://github.com/k175jp/weekly-05-terraform-lambda
---

# Overview

A simple, scalable AWS Lambda function project deployed using Terraform.

The project demonstrates fundamental Infrastructure as Code (IaC) principles by managing AWS resources (Lambda, IAM, CloudWatch Logs) programmatically. It is configured to stay within the AWS Free Tier, including cost-conscious settings like short log retention policies.

---

# Tech Stack

- **Infrastructure**: Terraform
- **Lambda Function**: Python
- **Cloud Provider**: AWS (Lambda, IAM, CloudWatch)

---

# Features

- **Automated Infrastructure**: Full lifecycle management of AWS resources using Terraform (`init`, `plan`, `apply`, `destroy`).
- **Cost-Effective Design**: Implemented CloudWatch Log Group with a 7-day retention policy to minimize storage costs.
- **Infrastructure as Code**: Definitive HCL configuration for Lambda and associated IAM roles, following best practices.

---

# Notes

Focused on learning IaC principles and serverless deployment on AWS. This project serves as a starting point for managing cloud infrastructure programmatically while prioritizing cost-awareness and maintainability.
