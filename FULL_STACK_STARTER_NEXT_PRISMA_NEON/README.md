# LIGMA Stack

Welcome to the LIGMA Stack! This project serves as a starting point for full stack applications using Next.js, complete with backend API integration, authentication, and more.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Roadmap](#roadmap)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This boilerplate is configured to provide a solid foundation for building scalable and maintainable web applications using Next.js. It includes both frontend and backend setup, so you can focus on building your features right away.

## Features

- **Server-Side Rendering**: Leverage the power of Next.js for server-side rendering.
- **API Routes**: Built-in API routes for backend operations.
- **Authentication**: Basic authentication setup with JWT.
- **Database Integration**: Ready for database integration with ORM (e.g., Prisma).
- **State Management**: Context API setup for state management.
- **Styling**: Configured with CSS-in-JS library (e.g., styled-components).
- **Linting and Formatting**: ESLint and Prettier configured for code quality.
- **Unit and Integration Testing**: Jest and React Testing Library setup for testing.
- **Client side validation**: using **Zod**

## Roadmap
- [x] ~Add MDX support for basic pages~
- [ ] Payments using Stripe
- [ ] Responsive styles
- [ ] Add OG image for blog using @vercel/og
- [ ] Build marketing pages

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Backend**: [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- **Database**: [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/) (configurable)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Components**: [Shadcn](https://ui.shadcn.com/)
- **Authentication**: [NextAuth](https://next-auth.js.org/)
- **Payment Integration**: [Stripe](https://stripe.com/)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jbwashington/ligma-stack.git
   cd ligma-stack
   ```

2. **Setup AWS account:**
- configure secret key in AWS Console
- install awscli
- configure awscli

2. **Install dependencies:**

   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Environment variables:**

   Rename `.env.example` to `.env.local` file and add your environment variables. For example:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/mydb
   JWT_SECRET=your_jwt_secret
   ```

### Folder Structure

```plaintext
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Running Locally

To start the development server, run:

`yarn dev` or `npm run dev`

Your app should now be running on http://localhost:3000.

### Deployment

To deploy your application, we are using SST, which deploys seamlessly to AWS.

### Contributing

Thank you for considering contributing to this project! Feel free to open issues or submit pull requests.

### Steps to contribute

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name
Make your changes.
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin feature/your-feature-name
Open a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for more information.

Feel free to customize this template further based on your specific needs and preferences!
