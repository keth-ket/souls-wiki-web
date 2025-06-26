## Getting Started

After cloning the repo to your laptop, first install all dependencies with:

```bash
yarn

```

Then, run the development server:

```bash
yarn dev

```

### Add packages with yarn

```bash
yarn add -dev package-name

```

### Linting with yarn

```bash
yarn lint

# to fix linting errors
yarn lint --fix
```

Add the following extensions to your VSCODE:

- ESLint
- Prettier ESLint
- Prettier - Code Formatter
- Prettier ESLint TypeScript

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Design

Inspiration will mainly come from: [Stardew Valley Wiki](https://www.stardewvalleywiki.com/Stardew_Valley_Wiki)

## Components 

We will use components library [Shadcn](https://ui.shadcn.com/), this will be the template for our components.

To add any components with shadcn run:
```bash
yarn shadcn add [component]

#For example to add button component
yarn shadcn add button

```
## Icons

We will be using [lucide react icon](https://lucide.dev/icons/)

## For contributors

- Always use "yarn" to add package
- Run "yarn lint" to fix any linting issue before making a pull request
- Make sure the page is responsive
- Develop your customized component in widgets. 
- Please don't commit directly to the main branch, make a branch and create a pull request once you are done.

## Good luck cooking


