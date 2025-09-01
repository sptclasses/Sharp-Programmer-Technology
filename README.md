<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


# 📦 Sharp Programmer Technology — Next.js Project

This is a **Next.js** project developed and maintained by **Shikom Solutions**.  
Follow the steps below to clone, set up, and run the project locally.

---

## 🚀 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) **v18.18+** (recommended: v20+)
- [pnpm](https://pnpm.io/) **v8+** (package manager)
- [Git](https://git-scm.com/)

---

## 📥 Clone the Repository

```bash
# Clone using SSH (preferred)
git clone git@github-shikom:shikomsolutions/sharp-programmer-technology.git

# Or using HTTPS
git clone https://github.com/shikomsolutions/sharp-programmer-technology.git
```

Move into the project directory:

```bash
cd sharp-programmer-technology
```

## 📦 Install Dependencies

```bash
pnpm install
```

## ▶️ Run the Project

```bash
pnpm dev
```

This will start the Next.js dev server (Click below)

👉 http://localhost:3000

## 🏗️ Build for Production

```bash
pnpm build
pnpm start
```

## 🧪 Run Linting & Tests

```bash
pnpm lint
pnpm test
```

## 🌱 Branching Strategy

- **`main`** → Production-ready code  
- **`pre-deployment`** → Staging branch for testing before production  
- **`feature/*`** → Feature-specific branches (e.g., `feature/auth`, `feature/payment`)  

---

## 👥 Contribution Guidelines

To maintain code quality and ensure production safety, please follow these rules strictly:

1. **Never push directly to the `main` branch** 🚫  
   - The `main` branch is **production-only**.  
   - Any direct push to `main` is strictly prohibited to avoid production glitches or accidental outages.  

2. **Always create a new branch for your work** 🌱  
   - Branch names should follow the pattern:  
     ```
     feature/<your-feature-name>
     bugfix/<your-bug-name>
     hotfix/<your-hotfix-name>
     ```
   - Example: `feature/user-authentication`, `bugfix/navbar-overlap`

3. **Push your changes to your branch only** 📤  

   ```bash
   git checkout -b feature/my-feature
   # make changes
   git push origin feature/my-feature
   ```
4. **Raise a Pull Request (PR) → `pre-deployment` branch** 🔄 

- All feature branches must be merged into the **`pre-deployment`** branch via PR.  
- The **`pre-deployment`** branch serves as the staging/testing environment.  

5. **Code Review & Testing** ✅ 

- PRs will be reviewed by **mentors/senior developers**.  
- Once tested and approved, changes will be merged into **`main`** by maintainers.  


### ⚠️ Important Warning

Direct commits or pushes to **`main`** are **not allowed under any circumstances**.  

---

## 📜 License

This project is private and maintained by **Shikom Solutions**.  
Unauthorized use, distribution, or modification is not permitted.