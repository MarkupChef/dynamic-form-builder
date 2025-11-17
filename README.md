# Protocol Hero Test -- Form Builder

A lightweight Form Builder application that allows users to create,
configure, preview, and manage dynamic forms.\
This project was built as a test assignment with the goal of
implementing the full logic of a form‑building system, including field
configuration and runtime validation.

## 🚀 Tech Stack

-   React.js
-   TypeScript
-   Redux Toolkit
-   Redux Persist
-   React Hook Form
-   Zod
-   Tailwind CSS
-   shadcn/ui
-   Vite

## 📁 Project Structure

    /src
      /components      → Reusable UI components
      /config          → Application-level configs
      /hooks           → Custom React hooks
      /layouts         → Layout wrappers
      /lib             → Shared utilities & helpers
      /pages           → Application pages
      /redux-store     → Store, slices, and persistence setup
      /schemas         → Zod schemas
      /types           → TypeScript types & interfaces
      /utils           → General utility functions

## ✨ Features

### 🔧 User Capabilities

-   Create new forms
-   View a generated forms
-   Add and customize fields
-   Preview a generated form
-   Delete forms

### 🧩 Supported Field Types

-   Text (can be switched to email inside field settings)
-   Number

Adding new field types is implemented according to similar logic.

### 🛡️ Built-in Validation

All user-created forms are validated using a dynamically generated Zod
schema\
based on the fields configured in the builder.

## 🧠 Core Technical Decisions

-   Dynamic Zod Schema Generation\
    Validation rules are generated at runtime according to field
    definitions.

-   Type-Safe Discriminated Union for InputProps\
    Eliminates duplicated types and ensures strict field-type--based
    narrowing.

-   State Management with Redux Toolkit\
    Stores builder state, field configurations, and user-created forms.

-   State Persistence via Redux Persist\
    Ensures that form builder progress is preserved across page reloads.

## ▶️ Getting Started

### Install dependencies

Use **Node.js 20.19+** or **Node.js 22.12+**

``` bash
npm install
```

### Run the development server

``` bash
npm run dev
```

### Build for production

``` bash
npm run build
```

### Preview the production build

``` bash
npm run preview
```

## 📄 License

This project is for test and demonstration purposes.