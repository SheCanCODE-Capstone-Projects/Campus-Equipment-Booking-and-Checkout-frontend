# Campus Equipment Booking and Checkout System

### A smarter way to request, manage, allocate, and track campus equipment.

**Campus Equipment Booking and Checkout** is a role-based web application designed to simplify and organize how campus equipment is requested, approved, checked out, returned, inspected, and made available for future use.

The system provides a shared platform for participants and staff, replacing a fragmented equipment management process with a structured and transparent workflow.

Instead of relying on informal requests and manual tracking, participants can submit equipment requests and follow their status, while staff can review requests, manage equipment allocation, track borrowed items, and inspect returned equipment.

The goal is simple: **make campus equipment management more organized, accountable, transparent, and efficient.**

---

## Table of Contents

1. [Project Overview](#-project-overview)
2. [The Problem](#-the-problem)
3. [Our Solution](#-our-solution)
4. [Project Objectives](#-project-objectives)
5. [System Users and Roles](#-system-users-and-roles)
6. [Core Features](#-core-features)
7. [Equipment Management Workflow](#-equipment-management-workflow)
8. [Equipment Types](#-equipment-types)
9. [System Architecture](#-system-architecture)
10. [Technology Stack](#-technology-stack)
11. [Project Structure](#-project-structure)
12. [Getting Started](#-getting-started)
13. [Application Routes](#-application-routes)
14. [Data Management](#-data-management)
15. [Future Improvements](#-future-improvements)
16. [Project Impact](#-project-impact)
17. [Contributing](#-contributing)
18. [Project Team](#-project-team)

---

## 1. Project Overview

Educational institutions often provide equipment and resources that participants need for learning activities, academic events, and institutional programs.

Managing these resources requires more than knowing whether an item is available. It also requires knowing:

- Who requested the equipment?
- What equipment was requested?
- When is it needed?
- Has the request been reviewed?
- Who approved the request?
- Has the equipment been assigned?
- Has it been returned?
- Has the returned item been inspected?
- Is the equipment ready for another participant?

Campus Equipment Booking and Checkout addresses these questions through a centralized equipment management workflow.

The application is designed around two separate interfaces:

- **Participant Interface:** Enables participants to request equipment and follow their requests.
- **Staff Interface:** Enables authorized staff to review requests, manage allocations, track equipment outside the inventory, and inspect returns.

Both interfaces are designed to work with shared equipment and request information so that changes made during the management process can be reflected across the system.

---

## 2. The Problem

Traditional equipment management can become difficult when requests, approvals, and returns are handled through disconnected processes.

Common challenges include:

- Difficulty tracking equipment requests.
- Lack of visibility into request approval status.
- Manual equipment allocation and record keeping.
- Uncertainty about which equipment is available or currently borrowed.
- Difficulty tracking equipment that has been returned but still needs inspection.
- Limited accountability throughout the borrowing process.
- Risk of inaccurate inventory records.

These challenges can lead to delays, confusion, poor resource utilization, and unnecessary administrative work.

**The real problem is not simply borrowing equipment. It is managing the entire equipment lifecycle.**

---

## 3. Our Solution

We are developing a centralized web application that connects participants and staff through a structured equipment management process.

Participants can submit requests, provide the necessary information, and follow the progress of their requests.

Staff can review submitted requests, approve or reject them, assign equipment, monitor checked-out items, and process returned equipment through inspection.

The system distinguishes between equipment that is available, requested, checked out, awaiting inspection, and unavailable for further allocation.

This creates a clearer record of equipment movement and helps ensure that inventory availability reflects the actual condition and status of each item.

---

## 4. Project Objectives

The main objectives are to:

1. **Digitize equipment requests** by providing participants with an accessible online request process.
2. **Improve approval management** by giving staff a dedicated interface for reviewing requests.
3. **Strengthen accountability** by maintaining clear records of equipment requests and allocations.
4. **Improve inventory visibility** by distinguishing available equipment from equipment currently in use.
5. **Organize return management** by introducing a dedicated return and inspection process.
6. **Reduce administrative confusion** through separate interfaces for participants and staff.
7. **Support better resource utilization** by updating equipment availability after the return process is completed.

---

## 5. System Users and Roles

The application is organized around two primary user roles.

### A. Participant

Participants are the people who request and borrow campus equipment.

The Participant Dashboard is designed to provide a simple experience where users can:

- Access their dashboard.
- View available equipment.
- Submit equipment booking requests.
- Select the type of equipment required.
- Provide the requested dates and purpose.
- Provide additional information required for specific equipment.
- Monitor pending and approved requests.
- View assigned equipment information when approved.
- Request equipment returns.
- Follow the return and inspection status.
- Review their request history.

Participants should only see participant-related navigation and functionality. Staff management pages are kept separate from the participant experience.

### B. Staff

Staff members are responsible for managing equipment and processing participant requests.

The Staff Dashboard is designed to support:

- Reviewing incoming equipment requests.
- Approving or rejecting requests.
- Managing equipment allocations.
- Assigning laptop serial numbers before approval is finalized.
- Monitoring equipment currently checked out.
- Reviewing equipment return requests.
- Moving returned equipment into inspection.
- Completing return inspections.
- Updating equipment availability.
- Maintaining visibility into the equipment management process.

The staff interface focuses on operational control, accurate inventory records, and accountability.

---

## 6. Core Features

### 6.1 Role-Based Interfaces

The system provides distinct Participant and Staff experiences.

Each interface has its own navigation, dashboard, and responsibilities, helping users access only the functions relevant to their role.

### 6.2 Equipment Booking

Participants can request available equipment by providing relevant booking information, including:

- Equipment type.
- Requested dates.
- Purpose of the request.
- Additional equipment-specific details.

For graduation gowns, the participant can also provide the required gown size.

### 6.3 Request Approval Management

Submitted requests enter a review process.

Staff can examine request details and decide whether to approve or reject a request.

Laptop requests require a serial number before the approval and assignment process is completed. Graduation gown requests follow a simpler approval process.

### 6.4 Equipment Allocation

Approved equipment moves into the checked-out management stage.

The system is designed to keep the participant's request information and staff inventory records connected.

### 6.5 Equipment Return Management

Participants can request to return borrowed equipment.

Staff can review the return request and confirm the physical receipt of the equipment.

### 6.6 Equipment Inspection

Returned equipment is not automatically considered available.

Instead, it enters an inspection stage where staff can assess its condition before completing the return process.

### 6.7 Inventory Availability Management

Equipment availability should reflect the actual equipment lifecycle.

An item awaiting inspection must not be treated as ready for another booking.

This helps maintain more reliable inventory information.

---

## 7. Equipment Management Workflow

One of the most important parts of this project is the equipment lifecycle.

The system follows a structured process from the initial request to the final return.

### Step 1: Request Submission

A participant submits a request for a laptop or graduation gown.

The request is recorded with a pending status.

- Participant sees: **Pending Review**
- Staff sees: **Equipment Approvals**

### Step 2: Staff Review and Approval

Staff reviews the request and makes an approval decision.

The approval process depends on the equipment type:

**Laptop requests**
- Staff reviews the request.
- A laptop serial number is required before assignment is completed.
- Once approved and assigned, the laptop moves into the checked-out stage.

**Graduation gown requests**
- Staff reviews the request.
- The gown can be approved immediately without a laptop serial-number requirement.
- Once approved, the gown moves into the checked-out stage.

If a request is rejected, it leaves the active approval list but remains available in the participant's request history.

### Step 3: Equipment Checkout

After approval, the equipment is recorded as checked out.

- Staff sees the equipment under **Equipment Out**.
- Participant sees the request as approved.
- For laptops, the assigned serial number is available to the participant.

### Step 4: Return Request

When the participant is ready to return the equipment, they submit a return request.

- Participant sees: **Return Requested**
- Staff sees the return request under **Equipment Out**

### Step 5: Physical Return and Inspection

After staff confirms that the equipment has physically been received, it moves from Equipment Out to **Equipment Check**.

- Participant sees: **Returned – Awaiting Inspection**
- Staff can inspect the returned item.

### Step 6: Inspection Completion

Staff completes the return inspection.

If the equipment passes inspection, its inventory status is updated to available.

If it requires attention, it is placed on hold or marked for maintenance rather than being made available immediately.

Once the inspection is completed:

- The active Equipment Check entry disappears.
- The active checkout record is completed.
- The participant retains the request in their history with a completed return status.
- Inventory availability is updated according to the inspection result.

### Workflow Summary

| Stage | Participant Status | Staff Management |
|---|---|---|
| Request submitted | Pending Review | Equipment Approvals |
| Request approved | Approved | Equipment Out |
| Return requested | Return Requested | Equipment Out |
| Item received | Returned – Awaiting Inspection | Equipment Check |
| Inspection passed | Return Completed | Inventory Available |
| Inspection requires attention | Return Completed | Inventory on Hold / Maintenance |

**Important:** Approval, checkout, physical return, and inspection are separate events. Keeping them separate makes the system more reliable and prevents equipment from being marked available too early.

---

## 8. Equipment Types

The initial system focuses on two categories of campus equipment.

### Laptop

Laptops are important learning resources that require accurate allocation and tracking.

Laptop management includes:

- Request submission.
- Staff approval.
- Serial-number assignment.
- Checkout tracking.
- Return requests.
- Physical return confirmation.
- Condition inspection.
- Inventory availability updates.

The serial number provides an important equipment identification reference during allocation and tracking.

### Graduation Gown

Graduation gowns are managed through a booking and return process.

Gown management includes:

- Gown request submission.
- Gown size selection.
- Staff approval.
- Checkout tracking.
- Return requests.
- Physical return confirmation.
- Condition inspection.
- Availability updates.

Unlike laptops, gowns do not require serial-number assignment during approval.

---

## 9. System Architecture

The application is organized as a frontend project built with React.

The system separates user interfaces, reusable components, application pages, and supporting project resources.

The two dashboards are separate experiences, but they are designed around a shared equipment and request lifecycle.

### Main architectural principles

- **Component-based development:** Reusable interface elements are separated into components.
- **Separation of responsibilities:** Participant and Staff interfaces have distinct responsibilities.
- **Shared data:** Equipment and request records should remain consistent across both interfaces.
- **State-driven updates:** Changes in request and equipment status should be reflected in the interface.
- **Maintainability:** The project is structured to make future improvements easier.

---

## 10. Technology Stack

| Technology | Purpose |
|---|---|
| React | Building interactive user interfaces |
| JavaScript | Application logic and data handling |
| Vite | Development server and build tooling |
| HTML5 | Application structure |
| CSS3 | Styling and responsive layouts |
| Git | Version control |
| GitHub | Source code hosting and collaboration |

---

## 11. Project Structure

The frontend project is organized into dedicated folders for application pages, components, assets, services, content, and styles.

A simplified view of the structure:

```text
Campus-Equipment-Booking-and-Checkout-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── content/
│   │
│   ├── pages/
│   │   ├── Admin/
│   │   ├── Participant/
│   │   └── Staff/
│   │
│   ├── services/
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*The folder listing is a high-level representation; individual files and folders may change as development continues.*

---

## 12. Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Step 1: Clone the repository

```bash
git clone https://github.com/SheCanCODE-Capstone-Projects/Campus-Equipment-Booking-and-Checkout-frontend.git
```

### Step 2: Navigate into the project

```bash
cd Campus-Equipment-Booking-and-Checkout-frontend
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

### Step 5: Open the application

Vite will display a local development URL in your terminal, usually:

```text
http://localhost:5173
```

Open the displayed URL in your browser to access the application.

---

## 13. Application Routes

The application is organized around the following intended entry points:

| Route | Description |
|---|---|
| `/` | Landing page |
| `/participant/dashboard` | Participant dashboard |
| `/staff/dashboard` | Staff dashboard |

The Participant and Staff dashboards are separate interfaces with different navigation and responsibilities.

---

## 14. Data Management

The system is designed to maintain consistency between the Participant and Staff interfaces.

For example, when a participant submits a request, staff should be able to review that same request in Equipment Approvals.

When staff approves the request and assigns the equipment, the participant should see the updated status.

Likewise, when an item is returned and inspected, the updated inventory status should be reflected throughout the application.

The frontend development includes shared request and inventory state, with browser-based persistence used for the current implementation.

This approach supports the development of a connected workflow while leaving room for a future backend and centralized database.

---

## 15. Future Improvements

The project provides a foundation for a more complete campus equipment management platform.

Possible future improvements include:

- Backend API integration.
- Centralized database management.
- Secure user authentication and authorization.
- Dedicated staff account management.
- Equipment inventory reporting.
- Advanced search and filtering.
- Notifications for request approvals and return reminders.
- Equipment maintenance history.
- Booking conflict prevention.
- Audit logs for equipment allocation and return activities.
- More detailed analytics for equipment usage and availability.
- Support for additional categories of campus equipment.

These improvements can extend the system beyond its initial frontend implementation.

---

## 16. Project Impact

Campus Equipment Booking and Checkout is intended to improve how educational institutions manage shared resources.

### For Participants

- A clearer way to request equipment.
- Better visibility into request progress.
- Access to assigned equipment information.
- A more organized return process.

### For Staff

- Centralized request management.
- Clearer approval and allocation processes.
- Better tracking of borrowed equipment.
- A dedicated inspection workflow.
- More reliable inventory availability records.

### For the Institution

- Improved accountability.
- More organized resource management.
- Better visibility into equipment usage.
- Reduced dependence on disconnected manual processes.
- A foundation for future digital transformation.

---

## 17. Contributing

Contributions and improvements are welcome as the project evolves.

A typical contribution process:

1. Fork or clone the repository.
2. Create a feature branch.
3. Make focused changes.
4. Test the changes locally.
5. Commit your work with a meaningful message.
6. Submit a pull request for review.

Please keep changes organized and avoid introducing changes that break the shared equipment lifecycle.

---

## 18. Project Team

**Project:** Campus Equipment Booking and Checkout System

**Organization:** SheCanCODE Capstone Project

**Repository:** [Campus Equipment Booking and Checkout – Frontend](https://github.com/SheCanCODE-Capstone-Projects/Campus-Equipment-Booking-and-Checkout-frontend)

**Project Type:** Web Application – Frontend

---

## Final Note

Campus Equipment Booking and Checkout is built around an important idea:

**Equipment management does not end when a request is approved, and it does not end when an item is returned. It ends when the equipment has been properly received, inspected, and its availability has been accurately updated.**

By connecting participants and staff through one structured workflow, this project aims to make campus resource management more transparent, accountable, and efficient.

**Request. Approve. Allocate. Return. Inspect. Manage.**

