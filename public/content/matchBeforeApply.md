<div style="text-align: center; margin: 0 auto; width: 200px;">
  <img src="/content/MBA-logo.png" alt="Logo" style="max-width: 100%; height: auto;" />
</div>

**MatchBeforeApply — AI-Powered CV ↔ Job Matcher & Application Tracker**

## Description

MatchBeforeApply is a tool I built to make job applications more intentional by helping candidates understand how well they match a role before applying.

Instead of relying on a single prompt, the system is designed using a multi-agent approach, where each component focuses on a specific task in the evaluation process.

## Key Features

- **Analyze and compare** CVs with job descriptions to generate a match score and highlight gaps
- **Multi-agent architecture** (CV, Job Description, Match, and ATS agents) to improve accuracy and structure
- **Application tracker** with status updates and a Kanban board for managing job applications
- **Commenting system** for notes and reflections on each application

## Multi-Agent Architecture

The system is built around **4 specialized agents**, each responsible for a specific part of the pipeline:

- **CV Agent** — extracts and structures relevant information from the CV
- **JD Agent** — analyzes job descriptions and identifies key requirements
- **Match Agent** — compares both sides and generates alignment insights
- **ATS Agent** — evaluates compatibility with ATS-style screening logic

This modular approach proved more reliable and flexible than using a single prompt, allowing better control over outputs and easier iteration.

## Tech Stack

FastAPI · SvelteKit · PostgreSQL · JWT Auth · Google Sign-In · Resend · AI multi-agent pipeline

- **Frontend**: Svelte 5, Vite, Tailwind CSS
- **Backend / AI**: Google ADK, Python, FastAPI, PostgreSQL, JWT Auth, Google Sign-In, OTP Auth
- **Architecture**: AI multi-agent pipeline

## What I Learned

- Designing AI systems beyond single prompts using modular agent-based thinking
- Balancing simplicity and functionality when building for real-world use
- Turning a personal problem into a scalable product concept

## Why I Built It

This started during my own job search.

Tracking applications was easy.  
Knowing whether I was actually a good fit was not.

Instead of just organizing applications,  
I built a tool to **evaluate them first — and track them properly after.**

## Screenshots

<div>
    <img src="/content/results.png"  width=70% height=70%>
    <img src="/content/kanban-board.png"  width=70% height=70%>
</div>

## Links

👉 Try it: [MatchBeforeApply](https://matchbeforeapply.com)
