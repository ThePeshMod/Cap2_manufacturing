# Capitalism 2 Manufacturing Calculator & Recipe Viewer

An interactive, responsive single-page web application built with **React**, **TypeScript**, and **Vite** for the business simulation game **Capitalism 2**. It allows players to calculate manufacturing production capabilities based on raw materials and seaport imports, navigate recipe dependencies recursively, and identify missing goods.

---

## 🎨 Features

-   **Dynamic Resource Sidebar**:
    -   Automatically tracks base raw materials and custom import settings.
    -   Live filter search box.
    -   Bulk actions: select all raw materials, clear all, or reset configurations.
    -   State persistence using browser `localStorage`.
-   **Polished Product Browser**:
    -   Displays cards for all products in the game with clear color-coded statuses (Emerald checkmark for producible items, grey cross for missing inputs).
    -   Filter by industry categories or producibility status.
    -   Persistent search and filter configurations that remain intact when navigating back from a product's detail page.
-   **Interactive Production Tree & Specifications Card**:
    -   Recursively builds and renders the entire recipe tree.
    -   Color-codes each ingredient state: Sourced (active resource), Producible (active recipes), or Missing (supply line break).
    -   Displays product metrics: output quantity, production speed, required machinery, and technology weights.
-   **Mod Support**:
    -   Supports loading custom game scripts and mods. Upload custom `ItemInfo.csv` and `Manufacturing.csv` databases directly in-browser.
    -   Exposes reference downloadable CSV templates for both files directly in the load menu.

---

## 📂 Project Architecture

Here is the directory structure:

-   [package.json](file:///C:/dev/web/Cap2_manufacturing/package.json) - Application scripts and dependencies.
-   [vite.config.ts](file:///C:/dev/web/Cap2_manufacturing/vite.config.ts) - Vite build configuration.
-   [tsconfig.json](file:///C:/dev/web/Cap2_manufacturing/tsconfig.json) - TypeScript compiler configurations.
-   [index.html](file:///C:/dev/web/Cap2_manufacturing/index.html) - Application viewport and root container.
-   `src/`
    -   [main.tsx](file:///C:/dev/web/Cap2_manufacturing/src/main.tsx) - Application mounting and entry point.
    -   [App.tsx](file:///C:/dev/web/Cap2_manufacturing/src/App.tsx) - Core layout, state synchronization, and mod loader logic.
    -   [index.css](file:///C:/dev/web/Cap2_manufacturing/src/index.css) - Vanilla CSS styling and premium design tokens.
    -   `data/`
        -   [defaultData.ts](file:///C:/dev/web/Cap2_manufacturing/src/data/defaultData.ts) - Hardcoded pre-extracted database elements of standard Capitalism 2 recipes.
    -   `utils/`
        -   [calculator.ts](file:///C:/dev/web/Cap2_manufacturing/src/utils/calculator.ts) - DFS cycle-detecting checks ([canProduce](file:///C:/dev/web/Cap2_manufacturing/src/utils/calculator.ts#L6)) and tree constructors ([buildRecipeTree](file:///C:/dev/web/Cap2_manufacturing/src/utils/calculator.ts#L47)).
        -   [csvParser.ts](file:///C:/dev/web/Cap2_manufacturing/src/utils/csvParser.ts) - Client-side csv parsing utility ([parseCSV](file:///C:/dev/web/Cap2_manufacturing/src/utils/csvParser.ts#L5)).
    -   `components/`
        -   [Sidebar.tsx](file:///C:/dev/web/Cap2_manufacturing/src/components/Sidebar.tsx) - Left-side panel checkbox drawer.
        -   [ProductGrid.tsx](file:///C:/dev/web/Cap2_manufacturing/src/components/ProductGrid.tsx) - Right-side main browser grid.
        -   [ProductCard.tsx](file:///C:/dev/web/Cap2_manufacturing/src/components/ProductCard.tsx) - Grid display card widget.
        -   [DetailView.tsx](file:///C:/dev/web/Cap2_manufacturing/src/components/DetailView.tsx) - Sub-panel split details, recipe trees, and factory specifications.

---

## 🚀 Getting Started

### 1. Installation
Install the project dependencies (Node.js required):
```bash
npm install
```

### 2. Run Locally in Development Mode
Start the local Vite dev server:
```bash
npm run dev
```
Open the output URL (usually `http://localhost:5173`) in your browser to test.

### 3. Build & Production Deployment
Compile and build static assets:
```bash
npm run build
```
This outputs a compiled static bundle in the `dist/` directory.

### 4. Hosting on Pages Services
Because this app is a fully static client-side single-page app (SPA), hosting is extremely simple:
- **Cloudflare Pages**: Connect your repository to Cloudflare Pages. Set the build command to `npm run build` and output directory to `dist`.
- **GitHub Pages**: You can host it by pushing the build to a `gh-pages` branch, or setting up a GitHub Actions workflow to compile and deploy automatically.
- **Relative Base Paths**: The `base` parameter in [vite.config.ts](file:///C:/dev/web/Cap2_manufacturing/vite.config.ts) is set to `./` so it will serve correctly on both root domains (Cloudflare Pages) and subfolders (like `https://username.github.io/Cap2_manufacturing/`).
