# HVAC Pulse B2B - Workflow-Integrated E-commerce Ecosystem

## Architecture & Overview
HVAC Pulse is a workflow-integrated B2B platform moving away from traditional retail "shopping" and towards a "Field-to-Finance" lifecycle involving three distinct user roles: Sameer (Field Technician), Shilpa (Operations Supervisor), and Rajesh (Procurement Manager).

## 1. Role-Based Capabilities
- **Technician View (Sameer):** Mobile-first interface utilizing live `getUserMedia` hardware inputs to scan unit QRs. State locks quoting actions until verified, preventing incorrect catalog ordering from the field. 
- **Supervisor View (Shilpa):** Desktop-optimized command center utilizing reactive Zustand global state to intercept pushed technician Draft RFQs. Features a Kanban mapping tool and a direct Reactive Margin slider linked to an auto-generating PDF quote engine.
- **Procurement View (Rajesh):** High-density audit dashboard providing a "Technical Comparison Matrix". Replaces traditional B2B cards with a true 15-parameter spec sheet and dynamic diff-highlighting for mismatched stats (e.g. SEER2, Load Amps).

## 2. Core Modules Implemented
- **Operational Home/Dashboard:** Unified component utilizing hot-swapping Role Selectors to toggle interfaces seamlessly without forcing relogging for demos.
- **Technical Product Detail Page (PDP):** Vector schematic emphasis with dynamic "Verified Fit" widgets simulating external DB validation logic for parts.
- **B2B Transaction Layer:** End-state flow dropping credit card UIs for "Purchase Order (PO) Upload" dropzones and an integrated 30/60-day Line of Credit tracker. Validates net payload with built-in GST summary invoicing.

## 3. Design System Standards
- Pure Vanilla CSS (`index.css`) utilizing CSS Variables for strict tracking of an Atomic Design framework.
- Minimal white space emphasizing B2B data density.
- Status badging utilized uniformly (Green/Amber/Red) to communicate risk directly.

## Running Locally
This app is Vite/React based:

```bash
npm install
npm run dev
```
