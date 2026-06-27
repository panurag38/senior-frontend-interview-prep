# Senior Frontend Interview Prep

> **516 senior frontend interview questions** — system design, React, micro-frontends, browser internals, CSS, architecture, and more.

**Interactive guide:** https://panurag38.github.io/senior-frontend-interview-prep/

### Table of Contents

| No. | Questions |
| --- | --- |
| 1 | [Design the frontend for a Netflix-style video streaming app](#sysdesign-design-the-frontend-for-a-netflix-style-video-streaming-app) |
| 2 | [Design Google Docs–style collaborative rich text editor](#sysdesign-design-google-docs-style-collaborative-rich-text-editor) |
| 3 | [Design e-commerce checkout (cart → payment → confirmation)](#sysdesign-design-e-commerce-checkout-cart-payment-confirmation) |
| 4 | [Design a real-time fleet tracking dashboard (FleetPanda at scale)](#sysdesign-design-a-real-time-fleet-tracking-dashboard-fleetpanda-at-scale) |
| 5 | [Design a company-wide design system for 12 product teams](#sysdesign-design-a-company-wide-design-system-for-12-product-teams) |
| 6 | [Design multi-tenant SaaS auth (ACME vs Globex on same app)](#sysdesign-design-multi-tenant-saas-auth-acme-vs-globex-on-same-app) |
| 7 | [Design offline-first field inspection app](#sysdesign-design-offline-first-field-inspection-app) |
| 8 | [Migrate 500-route Webpack app to Vite (strangler)](#sysdesign-migrate-500-route-webpack-app-to-vite-strangler) |
| 9 | [Global notification center](#sysdesign-global-notification-center) |
| 10 | [Typeahead search at Amazon scale](#sysdesign-typeahead-search-at-amazon-scale) |
| 11 | [A/B testing platform integration](#sysdesign-a-b-testing-platform-integration) |
| 12 | [Admin analytics dashboard (10M rows)](#sysdesign-admin-analytics-dashboard-10m-rows) |
| 13 | [Social feed infinite scroll + media](#sysdesign-social-feed-infinite-scroll-media) |
| 14 | [Frontend platform team charter (50 devs)](#sysdesign-frontend-platform-team-charter-50-devs) |
| 15 | [Production white screen after deploy — incident response](#sysdesign-production-white-screen-after-deploy-incident-response) |
| 16 | [What happens when you type a URL in Chrome and press Enter](#journeys-what-happens-when-you-type-a-url-in-chrome-and-press-enter) |
| 17 | [What happens when you click a link on a page (same origin)](#journeys-what-happens-when-you-click-a-link-on-a-page-same-origin) |
| 18 | [DNS resolution — step by step](#journeys-dns-resolution-step-by-step) |
| 19 | [TCP and TLS handshake — frontend performance](#journeys-tcp-and-tls-handshake-frontend-performance) |
| 20 | [HTTP request/response — browser perspective](#journeys-http-request-response-browser-perspective) |
| 21 | [From HTML bytes to pixels (critical rendering path)](#journeys-from-html-bytes-to-pixels-critical-rendering-path) |
| 22 | [What happens when JavaScript runs after page load](#journeys-what-happens-when-javascript-runs-after-page-load) |
| 23 | [Browser cache layers — memory, disk, Service Worker](#journeys-browser-cache-layers-memory-disk-service-worker) |
| 24 | [Hard refresh vs normal navigation back](#journeys-hard-refresh-vs-normal-navigation-back) |
| 25 | [Cross-origin request from JavaScript — full path](#journeys-cross-origin-request-from-javascript-full-path) |
| 26 | [Traditional HTML form POST submission](#journeys-traditional-html-form-post-submission) |
| 27 | [WebSocket connection lifecycle](#journeys-websocket-connection-lifecycle) |
| 28 | [Service Worker — first visit vs repeat visit](#journeys-service-worker-first-visit-vs-repeat-visit) |
| 29 | [prefetch, preconnect, preload — when each](#journeys-prefetch-preconnect-preload-when-each) |
| 30 | [Third-party script load (GTM, analytics)](#journeys-third-party-script-load-gtm-analytics) |
| 31 | [SSL/TLS certificate errors in browser](#journeys-ssl-tls-certificate-errors-in-browser) |
| 32 | [Redirect chain (301/302) performance](#journeys-redirect-chain-301-302-performance) |
| 33 | [Download file vs render HTML in browser](#journeys-download-file-vs-render-html-in-browser) |
| 34 | [Page unload — beforeunload, pagehide, visibilitychange](#journeys-page-unload-beforeunload-pagehide-visibilitychange) |
| 35 | [Debug slow page load — full senior process](#journeys-debug-slow-page-load-full-senior-process) |
| 36 | [npm vs pnpm vs Yarn vs Bun — compare for production monorepos](#tooling-npm-vs-pnpm-vs-yarn-vs-bun-compare-for-production-monorepos) |
| 37 | [What are phantom dependencies and how does pnpm prevent them](#tooling-what-are-phantom-dependencies-and-how-does-pnpm-prevent-them) |
| 38 | [lockfiles — package-lock.json vs pnpm-lock.yaml vs yarn.lock](#tooling-lockfiles-package-lock-json-vs-pnpm-lock-yaml-vs-yarn-lock) |
| 39 | [npm workspaces vs pnpm workspaces — monorepo setup](#tooling-npm-workspaces-vs-pnpm-workspaces-monorepo-setup) |
| 40 | [peerDependencies — why React libs use them](#tooling-peerdependencies-why-react-libs-use-them) |
| 41 | [overrides / resolutions — force transitive dependency version](#tooling-overrides-resolutions-force-transitive-dependency-version) |
| 42 | [npm ci vs npm install in CI pipelines](#tooling-npm-ci-vs-npm-install-in-ci-pipelines) |
| 43 | [npx vs pnpm dlx vs yarn dlx — run packages without global install](#tooling-npx-vs-pnpm-dlx-vs-yarn-dlx-run-packages-without-global-install) |
| 44 | [.npmrc / .pnpmfile.cjs — common production settings](#tooling-npmrc-pnpmfile-cjs-common-production-settings) |
| 45 | [Supply chain — npm audit, Socket, lockfile integrity](#tooling-supply-chain-npm-audit-socket-lockfile-integrity) |
| 46 | [semver caret vs tilde](#tooling-semver-caret-vs-tilde) |
| 47 | [bundledDependencies](#tooling-bundleddependencies) |
| 48 | [optionalDependencies](#tooling-optionaldependencies) |
| 49 | [postinstall script security](#tooling-postinstall-script-security) |
| 50 | [package.json exports field](#tooling-package-json-exports-field) |
| 51 | [type module vs commonjs](#tooling-type-module-vs-commonjs) |
| 52 | [Node ESM vs CJS interop](#tooling-node-esm-vs-cjs-interop) |
| 53 | [Volta vs engines field](#tooling-volta-vs-engines-field) |
| 54 | [Corepack enable pnpm/yarn](#tooling-corepack-enable-pnpm-yarn) |
| 55 | [Private registry scope](#tooling-private-registry-scope) |
| 56 | [pnpm catalog (v9+)](#tooling-pnpm-catalog-v9) |
| 57 | [Interview narrative npm vs pnpm](#tooling-interview-narrative-npm-vs-pnpm) |
| 58 | [ESLint + Prettier + TypeScript — how they fit together](#fe-tooling-eslint-prettier-typescript-how-they-fit-together) |
| 59 | [Husky + lint-staged — pre-commit without slowing devs](#fe-tooling-husky-lint-staged-pre-commit-without-slowing-devs) |
| 60 | [Changesets vs semantic-release for versioning monorepos](#fe-tooling-changesets-vs-semantic-release-for-versioning-monorepos) |
| 61 | [Turborepo vs Nx — task orchestration](#fe-tooling-turborepo-vs-nx-task-orchestration) |
| 62 | [Environment variables — Vite vs Next vs Webpack](#fe-tooling-environment-variables-vite-vs-next-vs-webpack) |
| 63 | [Git merge vs rebase](#fe-tooling-git-merge-vs-rebase) |
| 64 | [Trunk-based development](#fe-tooling-trunk-based-development) |
| 65 | [Docker multi-stage FE build](#fe-tooling-docker-multi-stage-fe-build) |
| 66 | [pnpm store cache in GitHub Actions](#fe-tooling-pnpm-store-cache-in-github-actions) |
| 67 | [MSW Mock Service Worker](#fe-tooling-msw-mock-service-worker) |
| 68 | [bundlesize / size-limit CI](#fe-tooling-bundlesize-size-limit-ci) |
| 69 | [Lighthouse CI on preview](#fe-tooling-lighthouse-ci-on-preview) |
| 70 | [Sentry release + source maps](#fe-tooling-sentry-release-source-maps) |
| 71 | [Feature flags bootstrap](#fe-tooling-feature-flags-bootstrap) |
| 72 | [ADR Architecture Decision Records](#fe-tooling-adr-architecture-decision-records) |
| 73 | [Chromatic visual regression](#fe-tooling-chromatic-visual-regression) |
| 74 | [commitlint conventional](#fe-tooling-commitlint-conventional) |
| 75 | [CODEOWNERS path rules](#fe-tooling-codeowners-path-rules) |
| 76 | [Preview deploy PR comments](#fe-tooling-preview-deploy-pr-comments) |
| 77 | [Renovate grouped dependencies](#fe-tooling-renovate-grouped-dependencies) |
| 78 | [Explain the React reconciliation algorithm and what triggers a re-render](#react-explain-the-react-reconciliation-algorithm-and-what-triggers-a-re-render) |
| 79 | [What changed in React 19 that affects production apps](#react-what-changed-in-react-19-that-affects-production-apps) |
| 80 | [Controlled vs uncontrolled components — when to use each](#react-controlled-vs-uncontrolled-components-when-to-use-each) |
| 81 | [Explain useEffect vs useLayoutEffect vs useInsertionEffect](#react-explain-useeffect-vs-uselayouteffect-vs-useinsertioneffect) |
| 82 | [Why does React 18 StrictMode double-invoke effects in development](#react-why-does-react-18-strictmode-double-invoke-effects-in-development) |
| 83 | [What is the React Fiber architecture](#react-what-is-the-react-fiber-architecture) |
| 84 | [Explain Concurrent React and time slicing](#react-explain-concurrent-react-and-time-slicing) |
| 85 | [useMemo vs useCallback vs React.memo — when each matters](#react-usememo-vs-usecallback-vs-react-memo-when-each-matters) |
| 86 | [How do you prevent unnecessary re-renders in a large context tree](#react-how-do-you-prevent-unnecessary-re-renders-in-a-large-context-tree) |
| 87 | [Explain keys in lists — why not use index](#react-explain-keys-in-lists-why-not-use-index) |
| 88 | [Rules of Hooks — why do they exist](#react-rules-of-hooks-why-do-they-exist) |
| 89 | [Custom hook design — what makes a good custom hook](#react-custom-hook-design-what-makes-a-good-custom-hook) |
| 90 | [useRef vs useState — storage and re-render implications](#react-useref-vs-usestate-storage-and-re-render-implications) |
| 91 | [useReducer vs useState for complex state](#react-usereducer-vs-usestate-for-complex-state) |
| 92 | [How does useId work and why use it over Math.random()](#react-how-does-useid-work-and-why-use-it-over-math-random) |
| 93 | [useImperativeHandle — legitimate use cases](#react-useimperativehandle-legitimate-use-cases) |
| 94 | [Explain stale closures in hooks and how to fix them](#react-explain-stale-closures-in-hooks-and-how-to-fix-them) |
| 95 | [useEffect dependency array — exhaustive-deps debate](#react-useeffect-dependency-array-exhaustive-deps-debate) |
| 96 | [How to cancel async work in useEffect](#react-how-to-cancel-async-work-in-useeffect) |
| 97 | [useSyncExternalStore — when and why](#react-usesyncexternalstore-when-and-why) |
| 98 | [How do you profile React performance in production](#react-how-do-you-profile-react-performance-in-production) |
| 99 | [Code splitting strategies in React](#react-code-splitting-strategies-in-react) |
| 100 | [Virtualization for long lists — react-window vs react-virtuoso](#react-virtualization-for-long-lists-react-window-vs-react-virtuoso) |
| 101 | [React Server Components (RSC) — what problem do they solve](#react-react-server-components-rsc-what-problem-do-they-solve) |
| 102 | [Suspense for data fetching — patterns and pitfalls](#react-suspense-for-data-fetching-patterns-and-pitfalls) |
| 103 | [Compound components pattern with Context](#react-compound-components-pattern-with-context) |
| 104 | [Render props vs HOC vs hooks — evolution and trade-offs](#react-render-props-vs-hoc-vs-hooks-evolution-and-trade-offs) |
| 105 | [Error boundaries — limitations and patterns](#react-error-boundaries-limitations-and-patterns) |
| 106 | [Portals — use cases beyond modals](#react-portals-use-cases-beyond-modals) |
| 107 | [forwardRef deprecation in React 19 — migration](#react-forwardref-deprecation-in-react-19-migration) |
| 108 | [Lifting state up — when and why](#react-lifting-state-up-when-and-why) |
| 109 | [Prop drilling — solutions ranked](#react-prop-drilling-solutions-ranked) |
| 110 | [React.lazy and dynamic import — code splitting](#react-react-lazy-and-dynamic-import-code-splitting) |
| 111 | [Hydration mismatch — causes and fixes](#react-hydration-mismatch-causes-and-fixes) |
| 112 | [React 18 automatic batching](#react-react-18-automatic-batching) |
| 113 | [flushSync — when and why avoid](#react-flushsync-when-and-why-avoid) |
| 114 | [useDeferredValue vs debounce](#react-usedeferredvalue-vs-debounce) |
| 115 | [Synthetic events in React](#react-synthetic-events-in-react) |
| 116 | [dangerouslySetInnerHTML safely](#react-dangerouslysetinnerhtml-safely) |
| 117 | [Derived state anti-pattern](#react-derived-state-anti-pattern) |
| 118 | [TanStack Query vs useEffect data fetching](#react-tanstack-query-vs-useeffect-data-fetching) |
| 119 | [React Hook Form vs Formik](#react-react-hook-form-vs-formik) |
| 120 | [Testing Library query priority](#react-testing-library-query-priority) |
| 121 | [MSW in dev and test](#react-msw-in-dev-and-test) |
| 122 | [Module Federation + React singleton](#react-module-federation-react-singleton) |
| 123 | [React 19 Activity API](#react-react-19-activity-api) |
| 124 | [React Server Components boundary](#react-react-server-components-boundary) |
| 125 | [Server Actions pattern](#react-server-actions-pattern) |
| 126 | [useTransition pending UI](#react-usetransition-pending-ui) |
| 127 | [Error boundary reset with key](#react-error-boundary-reset-with-key) |
| 128 | [Ref callback cleanup pattern](#react-ref-callback-cleanup-pattern) |
| 129 | [StrictMode imperative library teardown](#react-strictmode-imperative-library-teardown) |
| 130 | [React Compiler adoption](#react-react-compiler-adoption) |
| 131 | [Profiler workflow for perf interviews](#react-profiler-workflow-for-perf-interviews) |
| 132 | [Micro-frontend lazy remote loading](#react-micro-frontend-lazy-remote-loading) |
| 133 | [Redux core principles and when NOT to use Redux](#redux-redux-core-principles-and-when-not-to-use-redux) |
| 134 | [Redux Toolkit vs classic Redux — what RTK solves](#redux-redux-toolkit-vs-classic-redux-what-rtk-solves) |
| 135 | [Explain middleware chain — dispatch flow](#redux-explain-middleware-chain-dispatch-flow) |
| 136 | [redux-thunk vs redux-saga vs RTK Query](#redux-redux-thunk-vs-redux-saga-vs-rtk-query) |
| 137 | [Normalized state shape — why entities + ids](#redux-normalized-state-shape-why-entities-ids) |
| 138 | [createSelector (Reselect) — memoization](#redux-createselector-reselect-memoization) |
| 139 | [RTK Query — cache lifecycle](#redux-rtk-query-cache-lifecycle) |
| 140 | [useSelector performance — equality checks](#redux-useselector-performance-equality-checks) |
| 141 | [Redux DevTools — time travel and action replay](#redux-redux-devtools-time-travel-and-action-replay) |
| 142 | [Immer in createSlice — how draft works](#redux-immer-in-createslice-how-draft-works) |
| 143 | [Action creators in Redux](#redux-action-creators-in-redux) |
| 144 | [combineReducers composition](#redux-combinereducers-composition) |
| 145 | [redux-persist](#redux-redux-persist) |
| 146 | [SSR Redux hydration](#redux-ssr-redux-hydration) |
| 147 | [Selector colocation](#redux-selector-colocation) |
| 148 | [Ducks / feature folder pattern](#redux-ducks-feature-folder-pattern) |
| 149 | [Giant slice anti-pattern](#redux-giant-slice-anti-pattern) |
| 150 | [Side effects NEVER in reducer](#redux-side-effects-never-in-reducer) |
| 151 | [RTK listener middleware](#redux-rtk-listener-middleware) |
| 152 | [RTK Query optimistic updates](#redux-rtk-query-optimistic-updates) |
| 153 | [Redux vs Context](#redux-redux-vs-context) |
| 154 | [Redux vs Zustand](#redux-redux-vs-zustand) |
| 155 | [Redux vs Jotai/Recoil](#redux-redux-vs-jotai-recoil) |
| 156 | [Batching in React 18 + Redux](#redux-batching-in-react-18-redux) |
| 157 | [Serializable check middleware](#redux-serializable-check-middleware) |
| 158 | [Auth token in RTK Query baseQuery](#redux-auth-token-in-rtk-query-basequery) |
| 159 | [createEntityAdapter](#redux-createentityadapter) |
| 160 | [RTK Query prefetch](#redux-rtk-query-prefetch) |
| 161 | [injectReducer (legacy code split)](#redux-injectreducer-legacy-code-split) |
| 162 | [Testing reducers](#redux-testing-reducers) |
| 163 | [Testing thunks](#redux-testing-thunks) |
| 164 | [extraReducers cross-slice](#redux-extrareducers-cross-slice) |
| 165 | [Global error slice + listener](#redux-global-error-slice-listener) |
| 166 | [Undo/redo with redux-undo](#redux-undo-redo-with-redux-undo) |
| 167 | [Industry trend 2025 — Redux role](#redux-industry-trend-2025-redux-role) |
| 168 | [Webpack core concepts: entry, output, loaders, plugins](#webpack-webpack-core-concepts-entry-output-loaders-plugins) |
| 169 | [Module federation — micro-frontends](#webpack-module-federation-micro-frontends) |
| 170 | [Contenthash vs chunkhash vs hash](#webpack-contenthash-vs-chunkhash-vs-hash) |
| 171 | [Tree shaking — requirements](#webpack-tree-shaking-requirements) |
| 172 | [Code splitting — dynamic import syntax](#webpack-code-splitting-dynamic-import-syntax) |
| 173 | [webpack-dev-server vs production build differences](#webpack-webpack-dev-server-vs-production-build-differences) |
| 174 | [Source maps strategies for production](#webpack-source-maps-strategies-for-production) |
| 175 | [Resolve alias and extensions](#webpack-resolve-alias-and-extensions) |
| 176 | [Asset modules (Webpack 5)](#webpack-asset-modules-webpack-5) |
| 177 | [Bundle analyzer — finding bloat](#webpack-bundle-analyzer-finding-bloat) |
| 178 | [Loader execution order](#webpack-loader-execution-order) |
| 179 | [babel-loader vs ts-loader](#webpack-babel-loader-vs-ts-loader) |
| 180 | [thread-loader parallelization](#webpack-thread-loader-parallelization) |
| 181 | [Webpack 5 filesystem cache](#webpack-webpack-5-filesystem-cache) |
| 182 | [externals configuration](#webpack-externals-configuration) |
| 183 | [HotModuleReplacement API](#webpack-hotmodulereplacement-api) |
| 184 | [DefinePlugin / EnvironmentPlugin](#webpack-defineplugin-environmentplugin) |
| 185 | [Webpack 5 removed Node polyfills](#webpack-webpack-5-removed-node-polyfills) |
| 186 | [MiniCssExtractPlugin vs style-loader](#webpack-minicssextractplugin-vs-style-loader) |
| 187 | [CSS Modules in webpack](#webpack-css-modules-in-webpack) |
| 188 | [PostCSS loader chain](#webpack-postcss-loader-chain) |
| 189 | [Duplicate package detection](#webpack-duplicate-package-detection) |
| 190 | [performance.maxAssetSize hints](#webpack-performance-maxassetsize-hints) |
| 191 | [Scope hoisting / concatenation](#webpack-scope-hoisting-concatenation) |
| 192 | [Webpack vs Rollup vs esbuild](#webpack-webpack-vs-rollup-vs-esbuild) |
| 193 | [Custom webpack plugin anatomy](#webpack-custom-webpack-plugin-anatomy) |
| 194 | [Module resolution failure debugging](#webpack-module-resolution-failure-debugging) |
| 195 | [SplitChunksPlugin strategy](#webpack-splitchunksplugin-strategy) |
| 196 | [Source map dev vs prod](#webpack-source-map-dev-vs-prod) |
| 197 | [Webpack to Vite migration checklist](#webpack-webpack-to-vite-migration-checklist) |
| 198 | [Why is Vite dev server faster than Webpack dev](#vite-why-is-vite-dev-server-faster-than-webpack-dev) |
| 199 | [Vite production build — what runs under the hood](#vite-vite-production-build-what-runs-under-the-hood) |
| 200 | [vite.config.ts essential options](#vite-vite-config-ts-essential-options) |
| 201 | [Environment variables in Vite](#vite-environment-variables-in-vite) |
| 202 | [SSR with Vite](#vite-ssr-with-vite) |
| 203 | [Vitest integration — why same config](#vite-vitest-integration-why-same-config) |
| 204 | [optimizeDeps — pre-bundling](#vite-optimizedeps-pre-bundling) |
| 205 | [Dynamic import and code splitting in Vite](#vite-dynamic-import-and-code-splitting-in-vite) |
| 206 | [Library mode](#vite-library-mode) |
| 207 | [Migrating Webpack → Vite checklist](#vite-migrating-webpack-vite-checklist) |
| 208 | [Vite HMR API import.meta.hot](#vite-vite-hmr-api-import-meta-hot) |
| 209 | [CSS code splitting in Vite build](#vite-css-code-splitting-in-vite-build) |
| 210 | [PostCSS in Vite](#vite-postcss-in-vite) |
| 211 | [Tailwind with Vite](#vite-tailwind-with-vite) |
| 212 | [Vite plugin order](#vite-vite-plugin-order) |
| 213 | [define config constants](#vite-define-config-constants) |
| 214 | [public/ directory behavior](#vite-public-directory-behavior) |
| 215 | [assetsInlineLimit](#vite-assetsinlinelimit) |
| 216 | [vite preview command](#vite-vite-preview-command) |
| 217 | [Vite mode and env files](#vite-vite-mode-and-env-files) |
| 218 | [loadEnv in vite.config](#vite-loadenv-in-vite-config) |
| 219 | [vite-plugin-pwa](#vite-vite-plugin-pwa) |
| 220 | [Monorepo Vite setup](#vite-monorepo-vite-setup) |
| 221 | [server.warmup (Vite 5+)](#vite-server-warmup-vite-5) |
| 222 | [Rolldown future in Vite ecosystem](#vite-rolldown-future-in-vite-ecosystem) |
| 223 | [Semantic HTML — why it matters for a11y and SEO](#html-semantic-html-why-it-matters-for-a11y-and-seo) |
| 224 | [Document loading — defer vs async scripts](#html-document-loading-defer-vs-async-scripts) |
| 225 | [Critical rendering path optimization](#html-critical-rendering-path-optimization) |
| 226 | [Accessibility: ARIA roles — first rule of ARIA](#html-accessibility-aria-roles-first-rule-of-aria) |
| 227 | [Form accessibility patterns](#html-form-accessibility-patterns) |
| 228 | [Content Security Policy (CSP)](#html-content-security-policy-csp) |
| 229 | [Shadow DOM vs Light DOM](#html-shadow-dom-vs-light-dom) |
| 230 | [Custom elements and React](#html-custom-elements-and-react) |
| 231 | [picture / srcset responsive images](#html-picture-srcset-responsive-images) |
| 232 | [SEO meta and Open Graph](#html-seo-meta-and-open-graph) |
| 233 | [DOCTYPE and standards mode](#html-doctype-and-standards-mode) |
| 234 | [lang attribute on html](#html-lang-attribute-on-html) |
| 235 | [tabindex values](#html-tabindex-values) |
| 236 | [Focus trap in modal](#html-focus-trap-in-modal) |
| 237 | [inert attribute](#html-inert-attribute) |
| 238 | [dialog element native modal](#html-dialog-element-native-modal) |
| 239 | [details/summary accordion](#html-details-summary-accordion) |
| 240 | [input type benefits](#html-input-type-benefits) |
| 241 | [autocomplete attributes](#html-autocomplete-attributes) |
| 242 | [CSP report-uri / report-to](#html-csp-report-uri-report-to) |
| 243 | [Subresource Integrity SRI](#html-subresource-integrity-sri) |
| 244 | [preload vs prefetch vs preconnect](#html-preload-vs-prefetch-vs-preconnect) |
| 245 | [iframe sandbox](#html-iframe-sandbox) |
| 246 | [postMessage cross-origin](#html-postmessage-cross-origin) |
| 247 | [Web Components slots](#html-web-components-slots) |
| 248 | [template element](#html-template-element) |
| 249 | [JSON-LD structured data](#html-json-ld-structured-data) |
| 250 | [WCAG 2.2 AA highlights](#html-wcag-2-2-aa-highlights) |
| 251 | [Hydration in HTML/SSR context](#html-hydration-in-html-ssr-context) |
| 252 | [Progressive enhancement baseline](#html-progressive-enhancement-baseline) |
| 253 | [CSS specificity calculation](#css-css-specificity-calculation) |
| 254 | [BFC (Block Formatting Context) — triggers and use](#css-bfc-block-formatting-context-triggers-and-use) |
| 255 | [Flexbox vs Grid — decision matrix](#css-flexbox-vs-grid-decision-matrix) |
| 256 | [CSS Grid subgrid](#css-css-grid-subgrid) |
| 257 | [Container queries vs media queries](#css-container-queries-vs-media-queries) |
| 258 | [CSS custom properties (variables) theming](#css-css-custom-properties-variables-theming) |
| 259 | [Stacking context and z-index bugs](#css-stacking-context-and-z-index-bugs) |
| 260 | [CLS prevention techniques](#css-cls-prevention-techniques) |
| 261 | [Modern CSS layout: :has() selector](#css-modern-css-layout-has-selector) |
| 262 | [CSS Modules vs CSS-in-JS vs Tailwind — trade-offs](#css-css-modules-vs-css-in-js-vs-tailwind-trade-offs) |
| 263 | [box-sizing border-box universal](#css-box-sizing-border-box-universal) |
| 264 | [margin collapse](#css-margin-collapse) |
| 265 | [position sticky requirements](#css-position-sticky-requirements) |
| 266 | [logical properties RTL](#css-logical-properties-rtl) |
| 267 | [clamp fluid typography](#css-clamp-fluid-typography) |
| 268 | [min max fit-content sizing](#css-min-max-fit-content-sizing) |
| 269 | [aspect-ratio property](#css-aspect-ratio-property) |
| 270 | [object-fit and object-position](#css-object-fit-and-object-position) |
| 271 | [will-change hint](#css-will-change-hint) |
| 272 | [contain property](#css-contain-property) |
| 273 | [content-visibility auto](#css-content-visibility-auto) |
| 274 | [@layer cascade layers](#css-layer-cascade-layers) |
| 275 | [@property registered custom props](#css-property-registered-custom-props) |
| 276 | [scroll-snap](#css-scroll-snap) |
| 277 | [overscroll-behavior](#css-overscroll-behavior) |
| 278 | [:focus-visible](#css-focus-visible) |
| 279 | [prefers-reduced-motion](#css-prefers-reduced-motion) |
| 280 | [prefers-color-scheme dark](#css-prefers-color-scheme-dark) |
| 281 | [@supports feature queries](#css-supports-feature-queries) |
| 282 | [Critical CSS strategy](#css-critical-css-strategy) |
| 283 | [Sass @use vs @import](#css-sass-use-vs-import) |
| 284 | [PostCSS pipeline role](#css-postcss-pipeline-role) |
| 285 | [View Transitions API](#css-view-transitions-api) |
| 286 | [CSS anchor positioning](#css-css-anchor-positioning) |
| 287 | [INP and compositor-only animation](#css-inp-and-compositor-only-animation) |
| 288 | [Design a large-scale frontend architecture for 50 engineers](#arch-design-a-large-scale-frontend-architecture-for-50-engineers) |
| 289 | [Micro-frontends — when worth it vs modular monolith](#arch-micro-frontends-when-worth-it-vs-modular-monolith) |
| 290 | [State management architecture — client vs server state](#arch-state-management-architecture-client-vs-server-state) |
| 291 | [API layer design — repository pattern](#arch-api-layer-design-repository-pattern) |
| 292 | [Authentication architecture in SPA](#arch-authentication-architecture-in-spa) |
| 293 | [CORS — explain preflight and fixes](#arch-cors-explain-preflight-and-fixes) |
| 294 | [Web Vitals — LCP, INP, CLS targets and fixes](#arch-web-vitals-lcp-inp-cls-targets-and-fixes) |
| 295 | [Design system — tokens, components, documentation](#arch-design-system-tokens-components-documentation) |
| 296 | [Feature flags architecture](#arch-feature-flags-architecture) |
| 297 | [Error handling strategy — layers](#arch-error-handling-strategy-layers) |
| 298 | [Testing pyramid for frontend at scale](#arch-testing-pyramid-for-frontend-at-scale) |
| 299 | [CI/CD pipeline for frontend](#arch-ci-cd-pipeline-for-frontend) |
| 300 | [Monorepo tooling — Nx vs Turborepo](#arch-monorepo-tooling-nx-vs-turborepo) |
| 301 | [SSR vs SSG vs ISR vs CSR — choose per page](#arch-ssr-vs-ssg-vs-isr-vs-csr-choose-per-page) |
| 302 | [Real-time architecture — WebSockets vs SSE vs polling](#arch-real-time-architecture-websockets-vs-sse-vs-polling) |
| 303 | [Event-driven UI decoupling](#arch-event-driven-ui-decoupling) |
| 304 | [Idempotency keys frontend](#arch-idempotency-keys-frontend) |
| 305 | [Optimistic UI 409 rollback](#arch-optimistic-ui-409-rollback) |
| 306 | [Offline-first architecture](#arch-offline-first-architecture) |
| 307 | [CDN caching strategy](#arch-cdn-caching-strategy) |
| 308 | [Blue-green / canary frontend](#arch-blue-green-canary-frontend) |
| 309 | [OpenTelemetry browser RUM](#arch-opentelemetry-browser-rum) |
| 310 | [XSS defense layers](#arch-xss-defense-layers) |
| 311 | [CSRF defense layers](#arch-csrf-defense-layers) |
| 312 | [Supply chain security](#arch-supply-chain-security) |
| 313 | [Bundle budget CI gate](#arch-bundle-budget-ci-gate) |
| 314 | [Lazy load third-party scripts](#arch-lazy-load-third-party-scripts) |
| 315 | [i18n architecture](#arch-i18n-architecture) |
| 316 | [a11y governance at scale](#arch-a11y-governance-at-scale) |
| 317 | [ADR documentation](#arch-adr-documentation) |
| 318 | [Domain-driven folder structure](#arch-domain-driven-folder-structure) |
| 319 | [Barrel file anti-pattern](#arch-barrel-file-anti-pattern) |
| 320 | [GraphQL vs REST frontend](#arch-graphql-vs-rest-frontend) |
| 321 | [tRPC / OpenAPI codegen](#arch-trpc-openapi-codegen) |
| 322 | [Edge middleware auth](#arch-edge-middleware-auth) |
| 323 | [Rate limit 429 UX](#arch-rate-limit-429-ux) |
| 324 | [Multi-tenant theming](#arch-multi-tenant-theming) |
| 325 | [Strangler fig legacy migration](#arch-strangler-fig-legacy-migration) |
| 326 | [Lighthouse CI per route](#arch-lighthouse-ci-per-route) |
| 327 | [Staff interview narrative structure](#arch-staff-interview-narrative-structure) |
| 328 | [When should you use Context vs props vs external store](#context-when-should-you-use-context-vs-props-vs-external-store) |
| 329 | [Why does a Context provider cause all consumers to re-render](#context-why-does-a-context-provider-cause-all-consumers-to-re-render) |
| 330 | [Split context pattern — state vs dispatch](#context-split-context-pattern-state-vs-dispatch) |
| 331 | [useContextSelector pattern without external library](#context-usecontextselector-pattern-without-external-library) |
| 332 | [Context + useReducer vs Redux for FleetPanda-style apps](#context-context-usereducer-vs-redux-for-fleetpanda-style-apps) |
| 333 | [How to test components that use useContext](#context-how-to-test-components-that-use-usecontext) |
| 334 | [Nested providers — ordering and pitfalls](#context-nested-providers-ordering-and-pitfalls) |
| 335 | [Default context value — why undefined + custom hook throw](#context-default-context-value-why-undefined-custom-hook-throw) |
| 336 | [Context vs React 19 use() hook](#context-context-vs-react-19-use-hook) |
| 337 | [Passing unstable functions through context](#context-passing-unstable-functions-through-context) |
| 338 | [Multiple contexts vs one mega context](#context-multiple-contexts-vs-one-mega-context) |
| 339 | [Context for form state](#context-context-for-form-state) |
| 340 | [Provider at route layout level](#context-provider-at-route-layout-level) |
| 341 | [SSR context per request](#context-ssr-context-per-request) |
| 342 | [Hydration context mismatch](#context-hydration-context-mismatch) |
| 343 | [createContext default value semantics](#context-createcontext-default-value-semantics) |
| 344 | [forwardRef + context together](#context-forwardref-context-together) |
| 345 | [Measuring context performance](#context-measuring-context-performance) |
| 346 | [Colocate provider closest to consumers](#context-colocate-provider-closest-to-consumers) |
| 347 | [Prop drilling threshold](#context-prop-drilling-threshold) |
| 348 | [Immutable context updates](#context-immutable-context-updates) |
| 349 | [Migration off mega context](#context-migration-off-mega-context) |
| 350 | [Explain the browser rendering pipeline end-to-end](#browser-explain-the-browser-rendering-pipeline-end-to-end) |
| 351 | [Reflow vs repaint vs composite — what triggers each](#browser-reflow-vs-repaint-vs-composite-what-triggers-each) |
| 352 | [Event loop — microtasks vs macrotasks (with full trace)](#browser-event-loop-microtasks-vs-macrotasks-with-full-trace) |
| 353 | [How many threads/processes in modern Chrome for a tab](#browser-how-many-threads-processes-in-modern-chrome-for-a-tab) |
| 354 | [Same-origin policy and CORS — browser perspective](#browser-same-origin-policy-and-cors-browser-perspective) |
| 355 | [Cookie attributes — Secure, HttpOnly, SameSite](#browser-cookie-attributes-secure-httponly-samesite) |
| 356 | [localStorage vs sessionStorage vs IndexedDB vs cookies](#browser-localstorage-vs-sessionstorage-vs-indexeddb-vs-cookies) |
| 357 | [Service Worker lifecycle and caching strategies](#browser-service-worker-lifecycle-and-caching-strategies) |
| 358 | [HTTP/1.1 vs HTTP/2 vs HTTP/3 for frontend perf](#browser-http-1-1-vs-http-2-vs-http-3-for-frontend-perf) |
| 359 | [Memory leaks in SPAs — common causes](#browser-memory-leaks-in-spas-common-causes) |
| 360 | [requestAnimationFrame](#browser-requestanimationframe) |
| 361 | [requestIdleCallback](#browser-requestidlecallback) |
| 362 | [Navigation Timing API](#browser-navigation-timing-api) |
| 363 | [PerformanceObserver](#browser-performanceobserver) |
| 364 | [Long tasks >50ms](#browser-long-tasks-gt-50ms) |
| 365 | [Web Workers](#browser-web-workers) |
| 366 | [SharedWorker](#browser-sharedworker) |
| 367 | [BroadcastChannel](#browser-broadcastchannel) |
| 368 | [Page Visibility API](#browser-page-visibility-api) |
| 369 | [bfcache back-forward cache](#browser-bfcache-back-forward-cache) |
| 370 | [beforeunload vs pagehide](#browser-beforeunload-vs-pagehide) |
| 371 | [navigator.sendBeacon](#browser-navigator-sendbeacon) |
| 372 | [Credential Management API](#browser-credential-management-api) |
| 373 | [Permissions API](#browser-permissions-api) |
| 374 | [Intersection Observer](#browser-intersection-observer) |
| 375 | [Resize Observer](#browser-resize-observer) |
| 376 | [Mutation Observer](#browser-mutation-observer) |
| 377 | [Content-Encoding gzip br](#browser-content-encoding-gzip-br) |
| 378 | [Resource Timing API](#browser-resource-timing-api) |
| 379 | [Third-party cookie deprecation](#browser-third-party-cookie-deprecation) |
| 380 | [Trusted Types CSP](#browser-trusted-types-csp) |
| 381 | [Speculative loading hints](#browser-speculative-loading-hints) |
| 382 | [DOM tree vs shadow DOM vs virtual DOM](#dom-dom-tree-vs-shadow-dom-vs-virtual-dom) |
| 383 | [Event propagation — capture, target, bubble](#dom-event-propagation-capture-target-bubble) |
| 384 | [Event delegation pattern](#dom-event-delegation-pattern) |
| 385 | [Passive event listeners — scroll performance](#dom-passive-event-listeners-scroll-performance) |
| 386 | [document.querySelector vs getElementById vs matches/closest](#dom-document-queryselector-vs-getelementbyid-vs-matches-closest) |
| 387 | [DOM manipulation performance — DocumentFragment](#dom-dom-manipulation-performance-documentfragment) |
| 388 | [Layout thrashing — read/write interleaving](#dom-layout-thrashing-read-write-interleaving) |
| 389 | [CustomEvent for decoupled DOM communication](#dom-customevent-for-decoupled-dom-communication) |
| 390 | [Imperative DOM in React — when acceptable](#dom-imperative-dom-in-react-when-acceptable) |
| 391 | [Accessibility tree vs DOM tree](#dom-accessibility-tree-vs-dom-tree) |
| 392 | [innerHTML vs textContent](#dom-innerhtml-vs-textcontent) |
| 393 | [insertAdjacentHTML](#dom-insertadjacenthtml) |
| 394 | [cloneNode deep](#dom-clonenode-deep) |
| 395 | [compareDocumentPosition](#dom-comparedocumentposition) |
| 396 | [getBoundingClientRect](#dom-getboundingclientrect) |
| 397 | [scrollIntoView](#dom-scrollintoview) |
| 398 | [focus preventScroll](#dom-focus-preventscroll) |
| 399 | [tabindex -1 programmatic focus](#dom-tabindex-1-programmatic-focus) |
| 400 | [Pointer events unified input](#dom-pointer-events-unified-input) |
| 401 | [once event listener option](#dom-once-event-listener-option) |
| 402 | [AbortSignal in addEventListener](#dom-abortsignal-in-addeventlistener) |
| 403 | [input vs change events](#dom-input-vs-change-events) |
| 404 | [Composition events IME](#dom-composition-events-ime) |
| 405 | [Shadow DOM event retargeting](#dom-shadow-dom-event-retargeting) |
| 406 | [Slot assignment projection](#dom-slot-assignment-projection) |
| 407 | [DOMParser safe parse](#dom-domparser-safe-parse) |
| 408 | [Range Selection API](#dom-range-selection-api) |
| 409 | [Don't fight React with DOM](#dom-don-t-fight-react-with-dom) |
| 410 | [Event loop + async/await execution order](#js-event-loop-async-await-execution-order) |
| 411 | [Closures — practical use and memory implications](#js-closures-practical-use-and-memory-implications) |
| 412 | [Prototype chain vs class syntax](#js-prototype-chain-vs-class-syntax) |
| 413 | [TypeScript structural typing vs nominal](#js-typescript-structural-typing-vs-nominal) |
| 414 | [Generics — constrain and infer](#js-generics-constrain-and-infer) |
| 415 | [Discriminated unions for API results](#js-discriminated-unions-for-api-results) |
| 416 | [Promise.all vs allSettled vs race](#js-promise-all-vs-allsettled-vs-race) |
| 417 | [Debounce vs throttle — implement debounce](#js-debounce-vs-throttle-implement-debounce) |
| 418 | [WeakMap / WeakSet use cases](#js-weakmap-weakset-use-cases) |
| 419 | [ES modules — static vs dynamic import](#js-es-modules-static-vs-dynamic-import) |
| 420 | [null vs undefined](#js-null-vs-undefined) |
| 421 | [== vs ===](#js-vs) |
| 422 | [Object.is](#js-object-is) |
| 423 | [Optional chaining](#js-optional-chaining) |
| 424 | [Nullish coalescing](#js-nullish-coalescing) |
| 425 | [Map vs Object records](#js-map-vs-object-records) |
| 426 | [Set deduplication](#js-set-deduplication) |
| 427 | [structuredClone](#js-structuredclone) |
| 428 | [AbortController cancel](#js-abortcontroller-cancel) |
| 429 | [Temporal proposal](#js-temporal-proposal) |
| 430 | [satisfies operator TS](#js-satisfies-operator-ts) |
| 431 | [as const assertion](#js-as-const-assertion) |
| 432 | [unknown vs any](#js-unknown-vs-any) |
| 433 | [never exhaustive check](#js-never-exhaustive-check) |
| 434 | [Utility types Partial Omit Pick Record](#js-utility-types-partial-omit-pick-record) |
| 435 | [Conditional types](#js-conditional-types) |
| 436 | [infer in conditional types](#js-infer-in-conditional-types) |
| 437 | [Module augmentation](#js-module-augmentation) |
| 438 | [strictNullChecks](#js-strictnullchecks) |
| 439 | [Zod runtime validation](#js-zod-runtime-validation) |
| 440 | [Compare CSS, SCSS, and Tailwind — when to choose each](#styling-compare-css-scss-and-tailwind-when-to-choose-each) |
| 441 | [SCSS nesting — best practices and pitfalls](#styling-scss-nesting-best-practices-and-pitfalls) |
| 442 | [SCSS mixins vs CSS @layer — modern alternative](#styling-scss-mixins-vs-css-layer-modern-alternative) |
| 443 | [Tailwind @apply — when acceptable](#styling-tailwind-apply-when-acceptable) |
| 444 | [Tailwind JIT and purging — how bundle stays small](#styling-tailwind-jit-and-purging-how-bundle-stays-small) |
| 445 | [Design tokens — implement across CSS/SCSS/Tailwind](#styling-design-tokens-implement-across-css-scss-tailwind) |
| 446 | [CSS Modules vs Tailwind in React](#styling-css-modules-vs-tailwind-in-react) |
| 447 | [SCSS @use vs deprecated @import](#styling-scss-use-vs-deprecated-import) |
| 448 | [Tailwind dark mode strategies](#styling-tailwind-dark-mode-strategies) |
| 449 | [CSS-in-JS vs Tailwind in 2025 — senior take](#styling-css-in-js-vs-tailwind-in-2025-senior-take) |
| 450 | [BEM naming convention](#styling-bem-naming-convention) |
| 451 | [ITCSS / SMACSS layers](#styling-itcss-smacss-layers) |
| 452 | [PostCSS in all stacks](#styling-postcss-in-all-stacks) |
| 453 | [Sass @forward re-export](#styling-sass-forward-re-export) |
| 454 | [Tailwind plugins extend](#styling-tailwind-plugins-extend) |
| 455 | [cva class-variance-authority](#styling-cva-class-variance-authority) |
| 456 | [tailwind-merge twMerge](#styling-tailwind-merge-twmerge) |
| 457 | [Container queries Tailwind](#styling-container-queries-tailwind) |
| 458 | [Logical properties Tailwind](#styling-logical-properties-tailwind) |
| 459 | [Critical CSS extraction](#styling-critical-css-extraction) |
| 460 | [Sass @import deprecation](#styling-sass-import-deprecation) |
| 461 | [Native CSS nesting](#styling-native-css-nesting) |
| 462 | [Stylelint enforcement](#styling-stylelint-enforcement) |
| 463 | [Interview answer CSS vs SCSS vs Tailwind](#styling-interview-answer-css-vs-scss-vs-tailwind) |
| 464 | [Overview — how do micro-frontends share data across pages](#mfe-overview-how-do-micro-frontends-share-data-across-pages) |
| 465 | [Module Federation — share React and global store](#mfe-module-federation-share-react-and-global-store) |
| 466 | [Custom event bus for cross-MFE communication](#mfe-custom-event-bus-for-cross-mfe-communication) |
| 467 | [Passing data when navigating shell → remote route](#mfe-passing-data-when-navigating-shell-remote-route) |
| 468 | [postMessage for iframe-based micro-frontends](#mfe-postmessage-for-iframe-based-micro-frontends) |
| 469 | [BroadcastChannel across MFE tabs on same origin](#mfe-broadcastchannel-across-mfe-tabs-on-same-origin) |
| 470 | [localStorage storage event for cross-tab sync](#mfe-localstorage-storage-event-for-cross-tab-sync) |
| 471 | [Shared auth token across micro-frontends — secure pattern](#mfe-shared-auth-token-across-micro-frontends-secure-pattern) |
| 472 | [Routing coordination — shell owns router vs federated routes](#mfe-routing-coordination-shell-owns-router-vs-federated-routes) |
| 473 | [Cross-MFE CSS isolation — Shadow DOM vs CSS Modules vs prefix](#mfe-cross-mfe-css-isolation-shadow-dom-vs-css-modules-vs-prefix) |
| 474 | [single-spa orchestrator](#mfe-single-spa-orchestrator) |
| 475 | [qiankun micro-frontends](#mfe-qiankun-micro-frontends) |
| 476 | [import maps native modules](#mfe-import-maps-native-modules) |
| 477 | [Shared design system npm package](#mfe-shared-design-system-npm-package) |
| 478 | [Contract testing Pact](#mfe-contract-testing-pact) |
| 479 | [Version skew unknown events](#mfe-version-skew-unknown-events) |
| 480 | [Feature flags per MFE](#mfe-feature-flags-per-mfe) |
| 481 | [Error boundary per remote](#mfe-error-boundary-per-remote) |
| 482 | [Lazy load remote entry](#mfe-lazy-load-remote-entry) |
| 483 | [Prefetch remote on nav hover](#mfe-prefetch-remote-on-nav-hover) |
| 484 | [Global namespace pollution anti-pattern](#mfe-global-namespace-pollution-anti-pattern) |
| 485 | [RxJS Subject event bus](#mfe-rxjs-subject-event-bus) |
| 486 | [Redux only in shell bridge](#mfe-redux-only-in-shell-bridge) |
| 487 | [TanStack Query shared client](#mfe-tanstack-query-shared-client) |
| 488 | [Cross-MFE analytics](#mfe-cross-mfe-analytics) |
| 489 | [i18n locale sync bus](#mfe-i18n-locale-sync-bus) |
| 490 | [Playwright cross-MFE E2E](#mfe-playwright-cross-mfe-e2e) |
| 491 | [When NOT micro-frontend](#mfe-when-not-micro-frontend) |
| 492 | [XSS types and prevention in React apps](#priority-xss-types-and-prevention-in-react-apps) |
| 493 | [CSRF protection for cookie-based SPAs](#priority-csrf-protection-for-cookie-based-spas) |
| 494 | [OAuth 2.0 PKCE flow for public SPA clients](#priority-oauth-2-0-pkce-flow-for-public-spa-clients) |
| 495 | [TanStack Query — staleTime vs gcTime (cacheTime)](#priority-tanstack-query-staletime-vs-gctime-cachetime) |
| 496 | [Web Vitals — INP debugging workflow](#priority-web-vitals-inp-debugging-workflow) |
| 497 | [Accessibility audit checklist for release](#priority-accessibility-audit-checklist-for-release) |
| 498 | [Monorepo shared ESLint/TS config](#priority-monorepo-shared-eslint-ts-config) |
| 499 | [Semantic versioning for design system](#priority-semantic-versioning-for-design-system) |
| 500 | [Playwright vs Cypress for E2E](#priority-playwright-vs-cypress-for-e2e) |
| 501 | [Storybook — role in design system workflow](#priority-storybook-role-in-design-system-workflow) |
| 502 | [SRI Subresource Integrity](#priority-sri-subresource-integrity) |
| 503 | [npm supply chain audit](#priority-npm-supply-chain-audit) |
| 504 | [Dependabot vs Renovate](#priority-dependabot-vs-renovate) |
| 505 | [Conventional commits](#priority-conventional-commits) |
| 506 | [Trunk-based vs GitFlow](#priority-trunk-based-vs-gitflow) |
| 507 | [CODEOWNERS review](#priority-codeowners-review) |
| 508 | [Lighthouse CI budgets](#priority-lighthouse-ci-budgets) |
| 509 | [Source map security](#priority-source-map-security) |
| 510 | [Edge middleware routing](#priority-edge-middleware-routing) |
| 511 | [Rate limit 429 UX](#priority-rate-limit-429-ux) |
| 512 | [Cursor vs offset pagination API](#priority-cursor-vs-offset-pagination-api) |
| 513 | [Idempotent PUT PATCH retries](#priority-idempotent-put-patch-retries) |
| 514 | [OpenTelemetry RUM traces](#priority-opentelemetry-rum-traces) |
| 515 | [Cookie consent legal](#priority-cookie-consent-legal) |
| 516 | [Staff meta-skill answer structure](#priority-staff-meta-skill-answer-structure) |

***

## System Design Scenarios (15) Full interview rounds

<details id="sysdesign-design-the-frontend-for-a-netflix-style-video-streaming-app">
<summary><b>1. Design the frontend for a Netflix-style video streaming app</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Web only, smart TV apps, or both? (Assume web + TV web for this answer.)
- Do we need offline downloads on web? (Assume no — native apps handle offline.)
- Is DRM (Widevine) required for premium titles? (Yes for studio content.)
- Target regions and peak concurrent viewers? (Global, 50M MAU, evening peaks.)
- Personalization real-time or batch? (Hybrid — batch rows + real-time continue-watching.)

**2. Requirements summary**

*Functional:*

- Browse catalog: rows, search, genres, detail pages
- Video playback with adaptive bitrate, subtitles, audio tracks
- Continue watching, profiles, watchlist
- Recommendations on homepage
- Account settings, parental controls UI

*Non-functional:*

- LCP < 2.5s on homepage (4G median)
- Time-to-first-frame on player < 3s after click
- Rebuffer ratio < 0.5% sessions
- INP on TV remote / keyboard navigation < 200ms
- Accessible player controls (WCAG AA)

**3. High-level architecture (draw while talking — 5 min)**

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│ CDN (static)│────▶│ Edge SSR / ISR   │────▶│ HTML + critical │
│ hashed JS   │     │ browse pages     │     │ CSS + preload   │
└─────────────┘     └────────┬─────────┘     └────────┬────────┘
                             │                          │
                    ┌────────▼─────────┐       ┌────────▼────────┐
                    │ Catalog BFF API  │       │ Client shell    │
                    │ (GraphQL/REST)   │       │ React + Router  │
                    └────────┬─────────┘       │ TanStack Query  │
                             │                 └────────┬────────┘
                    ┌────────▼─────────┐                │
                    │ Personalization  │       ┌────────▼────────┐
                    │ service (edge)   │       │ Player chunk    │
                    └──────────────────┘       │ (lazy) MSE/HLS  │
                                               │ DRM module EME  │
                                               └────────┬────────┘
                                                        │
                                               ┌────────▼────────┐
                                               │ Manifest + CDN  │
                                               │ video segments  │
                                               └─────────────────┘
```

**Rendering split:** Browse = SSR/ISR for SEO + fast LCP hero. Player = CSR only (MSE/EME browser APIs). Never SSR the video element.

**4. Data model & key APIs**

```
// Key client-side entities (normalized)
CatalogRow { id, title, type, posterUrl, progress? }
Title { id, synopsis, seasons[], entitlement: 'play' | 'upgrade' }
PlaybackSession { titleId, manifestUrl, drmLicenseUrl, startPosition }

GET /api/v1/home?page=1        → rows + cursor
GET /api/v1/titles/:id         → detail + entitlement
POST /api/v1/playback/start   → { manifestUrl, drmConfig, captions[] }
POST /api/v1/playback/heartbeat → analytics every 30s
```

**5. Deep dives (interviewer picks 1–2)**

**5.1 Adaptive bitrate (ABR) player**

Use Media Source Extensions with hls.js or Shaka. Player state machine: IDLE → LOADING_MANIFEST → BUFFERING → PLAYING → STALLED → ERROR. Monitor buffer ahead; switch renditions based on throughput estimate. Prefetch next episode manifest at 90% progress.

```
const hls = new Hls({ enableWorker: true, startLevel: -1 });
hls.on(Hls.Events.ERROR, (_, data) => {
  if (data.fatal) recoverOrShowError(data);
});
hls.loadSource(manifestUrl);
hls.attachMedia(videoRef.current);
```

**5.2 Homepage performance**

Virtualize horizontal rows (react-window). Image CDN with srcset widths 320/640/1280. staleTime 5min on catalog Query; prefetch next row on Intersection Observer. LCP element = hero banner — preload that image in SSR head.

```
<link rel="preload" as="image" href="{heroAvif}" imagesrcset="..." />
```

**5.3 DRM (EME)**

Widevine via Encrypted Media Extensions — license server handshake opaque to FE except challenge/response proxy through BFF. Isolate DRM code in lazy chunk; fail gracefully with upgrade message on unsupported browsers.

```
// License flow via BFF — never expose raw keys in client
```

**6. Reliability, failure modes & edge cases**

- Manifest 404 → retry with exponential backoff, fallback lower quality
- CDN segment failure → hls.js auto recovery; user sees brief buffering not black screen
- DRM license fail → clear error + support link, not infinite spinner
- Partial network (airplane mode toggle) → pause + offline banner
- Memory on TV devices → destroy hls instance on route leave; single player instance

**7. Alternatives considered**

- Full CSR SPA for browse — rejected: bad SEO, slow LCP on mobile
- Redux for entire catalog — rejected: memory + unnecessary; TanStack Query cache with pagination
- Autoplay previews everywhere — rejected: bandwidth cost; gate behind data-saver + feature flag

**8. Success metrics**

- Homepage LCP, CLS (poster aspect-ratio)
- Playback: time-to-first-frame, rebuffer ratio, exit before start
- API: catalog p95 latency, error rate on /playback/start
- Business: start rate from detail page, completion rate

**9. Phased rollout**

V1: browse + basic player + continue watching. V2: recommendations + profiles. V3: DRM premium + TV-optimized focus management. V4: preview clips + advanced ABR analytics.

**Closing statement:** "I optimized for perceived playback quality and homepage LCP by splitting browse SSR from lazy player, with Query cache for catalog and strict cleanup for streaming resources."

</details>

<details id="sysdesign-design-google-docs-style-collaborative-rich-text-editor">
<summary><b>2. Design Google Docs–style collaborative rich text editor</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Real-time co-editing required or async comments enough? (Real-time required.)
- Max concurrent editors per doc? (Assume ~20, not 10k like Figma.)
- Offline editing required? (Yes — local-first with sync.)
- Rich paste from Word required? (Yes — major XSS/complexity source.)
- Version history UI in scope? (Read-only history list, not full legal hold.)

**2. Requirements summary**

*Functional:*

- Rich text: headings, lists, links, basic formatting
- Real-time multi-user cursors and selections
- Comments and suggestions (v2)
- Offline compose + sync on reconnect
- Export PDF/HTML

*Non-functional:*

- Latency op propagation < 100ms p95 on good network
- No lost edits on reconnect
- Document up to 500 pages without editor freeze
- Accessible toolbar and content (screen reader)

**3. High-level architecture (draw while talking — 5 min)**

```
┌──────────────┐    WebSocket     ┌─────────────────┐
│ Browser A    │◀──────────────▶│ Sync server     │
│ Lexical/PM   │    Yjs updates │ (room per docId)│
│ + Yjs doc    │                └────────┬────────┘
└──────┬───────┘                         │
       │ IndexedDB                       │ persist
       ▼                                 ▼
┌──────────────┐                 ┌─────────────────┐
│ Local draft  │                 │ Document store  │
└──────────────┘                 │ + snapshot hist │
┌──────────────┐    presence    └─────────────────┘
│ Browser B    │◀───(throttled)──▶ same room
└──────────────┘
```

**4. Data model & key APIs**

```
// CRDT/OT document state — client never sends full doc each keystroke
Operation { docId, clientId, seq, patch }
Awareness { clientId, cursor, selection, userColor }

WS /docs/:id/sync  — binary Yjs updates
GET /docs/:id/snapshot — initial load
POST /docs/:id/awareness — optional separate channel
```

**5. Deep dives (interviewer picks 1–2)**

**5.1 Conflict-free sync (Yjs + CRDT)**

Each keystroke produces incremental update merged deterministically. Yjs handles offline queue — replay on reconnect. Server authoritative for persistence snapshots every N seconds.

```
const ydoc = new Y.Doc();
const provider = new WebsocketProvider(WS_URL, docId, ydoc);
const ytext = ydoc.getText('content');
// Bind ytext ↔ editor binding (Lexical Yjs plugin)
```

**5.2 Presence cursors**

Separate lightweight awareness protocol throttled 50ms. Render remote cursors as absolutely positioned decorations — not in document text. Cap visible cursors at 20 for perf.

```
awareness.setLocalState({ cursor: { anchor, head }, user: { name, color } });
```

**5.3 Paste sanitization**

Intercept paste — strip scripts, normalize styles via sanitizer server-side rules. Never dangerouslySetInnerHTML raw paste HTML.

```
editor.registerCommand(PASTE_COMMAND, (event) => sanitizeAndInsert(event.clipboardData));
```

**6. Reliability, failure modes & edge cases**

- WS disconnect → queue local ops, show "Reconnecting…", merge on resume
- Conflict after long offline → CRDT auto-merge; if schema breaking, snapshot + migration
- Large paste → chunk insert off main thread or warn user
- Tab crash → recover from IndexedDB ydoc state on reload

**7. Alternatives considered**

- Last-write-wins — rejected: loses edits
- Lock paragraph editing — rejected: bad UX vs Google Docs
- contentEditable raw — rejected: broken cross-browser, accessibility nightmare

**8. Success metrics**

- Sync latency p95
- Reconnect success rate
- Edit session crash rate
- Time to interactive on doc open

**9. Phased rollout**

V1: single-user editor + save. V2: realtime + cursors. V3: offline + comments. V4: suggest mode + history diff UI.

**Closing statement:** "I chose CRDT over OT for simpler offline merge, with structured editor (Lexical) instead of contentEditable, and isolated presence from document sync."

</details>

<details id="sysdesign-design-e-commerce-checkout-cart-payment-confirmation">
<summary><b>3. Design e-commerce checkout (cart → payment → confirmation)</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Guest checkout allowed? (Yes.)
- Payment methods: card, PayPal, BNPL? (Card via Stripe Elements + PayPal redirect.)
- Multi-currency? (Single currency MVP — USD.)
- Inventory held during checkout? (15-min reservation server-side.)
- Tax/shipping calculated when? (Shipping step + revalidate at payment.)

**2. Requirements summary**

*Functional:*

- Cart view/edit quantities
- Multi-step: shipping → payment → review → confirmation
- Apply promo codes
- Order confirmation + email trigger (server)
- Order history for logged-in users

*Non-functional:*

- Zero double-charges (idempotency)
- PCI: no raw card data touches our servers
- Checkout completable in < 3 minutes median
- Recover cart after refresh / login merge

**3. High-level architecture (draw while talking — 5 min)**

```
┌────────────┐   ┌─────────────┐   ┌────────────────┐
│ Cart UI    │──▶│ Checkout    │──▶│ Stripe Elements│
│ Query cache│   │ state machine│   │ (iframe PCI)  │
└─────┬──────┘   └──────┬──────┘   └───────┬────────┘
      │                 │                    │
      ▼                 ▼                    ▼
┌─────────────────────────────────────────────────────┐
│ Checkout BFF: cart, shipping quotes, payment intent │
│ Idempotency-Key store, inventory reservation        │
└─────────────────────────────────────────────────────┘
```

**4. Data model & key APIs**

```
Cart { id, items[], expiresAt, currency }
CheckoutSession { id, step, shipping, paymentIntentId, idempotencyKey }

GET  /cart
PATCH /cart/items/:sku
POST /checkout/session
POST /checkout/shipping
POST /checkout/pay     + Idempotency-Key header
GET  /checkout/confirm/:orderId
```

**5. Deep dives (interviewer picks 1–2)**

**5.1 Idempotent payment**

Generate idempotencyKey once per checkout attempt (useRef). Server stores key → orderId mapping 24h. Retries return same order, not duplicate charge.

```
const idempotencyKey = useRef(crypto.randomUUID());
await fetch('/api/checkout/pay', {
  method: 'POST',
  headers: { 'Idempotency-Key': idempotencyKey.current },
  body: JSON.stringify({ paymentMethodId })
});
```

**5.2 Checkout state machine**

URL reflects step: /checkout/shipping, /payment — back button works. State in server session + minimal client. On price change server returns 409 → show updated totals before pay.

```
type Step = 'cart' | 'shipping' | 'payment' | 'confirm';
// Invalid transition blocked client + server
```

**5.3 Cart persistence**

Logged-in: server cart. Guest: localStorage TTL 7 days + merge on login via server endpoint. Optimistic quantity update with rollback on 409 inventory.

```
onLogin: POST /cart/merge { guestCartId }
```

**6. Reliability, failure modes & edge cases**

- Double-click Pay → disable button + idempotency
- Stripe webhook delay → polling order status on confirm page
- Inventory sold out mid-checkout → block at payment with alternatives
- Network fail on pay → retry same idempotency key safe

**7. Alternatives considered**

- Single-page accordion checkout — OK but URL steps better for support/debug
- Optimistic "order placed" before confirm — rejected for payments
- Store card in localStorage — rejected: PCI violation

**8. Success metrics**

- Checkout funnel drop-off per step
- Payment failure rate
- Double-charge incidents (zero target)
- Cart abandonment recovery

**9. Phased rollout**

V1 guest card checkout. V2 accounts + saved addresses. V3 PayPal + promo. V4 BNPL + multi-shipment.

**Closing statement:** "Payment flows are pessimistic with idempotency; cart edits can be optimistic with inventory validation gates before charge."

</details>

<details id="sysdesign-design-a-real-time-fleet-tracking-dashboard-fleetpanda-at-scale">
<summary><b>4. Design a real-time fleet tracking dashboard (FleetPanda at scale)</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- How many vehicles? (10,000 active, 1Hz GPS.)
- Admin only or driver app too? (Both — separate apps, shared API.)
- Historical playback or live only? (Live + last 24h replay v2.)
- Map provider? (Leaflet + OSM tiles — no Google API key.)
- Alert rules in scope? (Geofence breach toast v2.)

**2. Requirements summary**

*Functional:*

- Live map with vehicle markers, clusters
- Filter by driver, vehicle, status
- List view + detail panel
- Driver: send GPS, complete deliveries
- Admin: assign orders, allocations

*Non-functional:*

- Map update latency < 2s from GPS emit
- Admin UI stays responsive at 10k points (clustered)
- No full-app re-render every GPS tick
- Works on moderate mobile networks

**3. High-level architecture (draw while talking — 5 min)**

```
┌─────────────┐  WS subscribe   ┌──────────────┐
│ Admin SPA   │◀─────────────▶│ Realtime GW  │
│ Map+Tables  │  bbox filter  │ (per region) │
└──────┬──────┘               └──────┬───────┘
       │ Query (REST)                 │
       ▼                              ▼
┌─────────────┐               ┌──────────────┐
│ Fleet BFF   │               │ GPS ingest   │
│ CRUD orders │               │ stream       │
└─────────────┘               └──────────────┘
┌─────────────┐  GPS POST     ┌──────────────┐
│ Driver SPA  │──────────────▶│ same ingest  │
└─────────────┘               └──────────────┘
```

**vs FleetPanda demo:** Context+reducer + 30s polling OK for 20 vehicles demo. Production replaces with WS + external store + map clustering.

**4. Data model & key APIs**

```
VehicleLocation { vehicleId, lat, lng, status, driverId, ts }
WS subscribe: { bbox, filters } → stream LocationUpdate
REST: GET /vehicles?page&status — metadata only
```

**5. Deep dives (interviewer picks 1–2)**

**5.1 useSyncExternalStore for GPS**

WS handler writes to external store batched in rAF. React components subscribe — only map layer re-renders, not entire admin app.

```
locationsStore.batchUpdate(updates);
function LiveMap() {
  const locs = useSyncExternalStore(store.subscribe, store.getSnapshot);
}
```

**5.2 Map clustering**

Leaflet.markercluster below zoom 12. Imperative Leaflet layer updates — do not remount map on each tick (FleetPanda LeafletMapView pattern).

```
updateMapOverlays(map, clusteredMarkers); // not new L.map()
```

**5.3 Viewport-scoped subscription**

WS sends only vehicles in map bbox + padding. Pan/zoom debounced resubscribe — avoids 10k points in client.

```
ws.send({ type: 'SUBSCRIBE', bbox: map.getBounds().pad(0.1) });
```

**6. Reliability, failure modes & edge cases**

- WS drop → exponential backoff reconnect + snapshot REST refresh
- Stale positions gray out after 60s no update
- Driver offline queue GPS batches upload on reconnect
- Map tile CDN fail → cached lower zoom tiles

**7. Alternatives considered**

- 30s polling — rejected at 10k scale (600k req/min)
- Full state in React Context — rejected: re-render storm
- Google Maps — cost + key management vs Leaflet

**8. Success metrics**

- GPS ingest lag p95
- Map frame rate
- WS reconnect rate
- Admin task success (assign order)

**9. Phased rollout**

V1 demo parity (Context). V2 WS + clustering. V3 geofence alerts. V4 replay + analytics.

**Closing statement:** "Separate hot GPS path from cold CRUD data — external store + imperative map updates, bbox subscriptions."

</details>

<details id="sysdesign-design-a-company-wide-design-system-for-12-product-teams">
<summary><b>5. Design a company-wide design system for 12 product teams</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- React only or framework-agnostic tokens too? (React components + CSS variables tokens.)
- Theming: light/dark + brand per product? (Shared tokens, product overrides allowed.)
- Release cadence? (Bi-weekly minor, semver breaking quarterly max.)
- Accessibility target? (WCAG 2.2 AA on all primitives.)

**2. Requirements summary**

*Functional:*

- Tokens: color, spacing, typography, motion
- Primitives: Button, Input, Select, Modal, Table
- Patterns docs in Storybook
- Codemods for breaking changes
- eslint a11y rules shared

*Non-functional:*

- Tree-shakeable — pay only for imports used
- Bundle impact < 15KB gzip for Button+Input typical
- Visual regression CI on DS PRs
- Support React 18 and 19 via peerDeps range

**3. High-level architecture (draw while talking — 5 min)**

```
monorepo (pnpm)
packages/tokens ──▶ Style Dictionary ──▶ CSS vars + JSON + Tailwind preset
packages/react-ui ──▶ peerDep react ──▶ published @org/ui
packages/icons
packages/eslint-config
apps/storybook ──▶ Chromatic visual regression
apps/docs-site
```

**4. Data model & key APIs**

```
// Consumer app
import { Button } from '@org/ui/button'; // direct path, no barrel
import '@org/tokens/css/variables.css';
```

**5. Deep dives (interviewer picks 1–2)**

**5.1 Token pipeline**

Single JSON source → Style Dictionary builds CSS variables, TS types, Tailwind extend. Product teams never hardcode #2563eb.

```
{ "color": { "brand": { "primary": { "value": "#2563eb" } } } }
```

**5.2 Release with Changesets**

Each PR includes changeset file describing bump per package. CI publishes npm on merge main. Breaking changes require migration guide + codemod.

```
pnpm changeset → version → publish
```

**5.3 Composition API**

Button uses cva variants + Slot for polymorphic "asChild". Document focus management for Modal with focus trap hook shared.

```
const button = cva('inline-flex...', { variants: { intent: {...} } });
```

**6. Reliability, failure modes & edge cases**

- Accidental breaking change caught by Chromatic + semver major gate
- Peer dep React mismatch — CI matrix tests React 18 + 19
- Token contrast fail — automated contrast check in token PR

**7. Alternatives considered**

- Copy-paste components per team — rejected: drift
- CSS-in-JS DS — rejected: RSC/runtime cost → CSS modules + tokens
- Single giant @org/ui import — rejected: tree-shaking breaks on barrels

**8. Success metrics**

- DS adoption % imports
- Support tickets / quarter
- Chromatic diff catch rate
- a11y violation count in Storybook

**9. Phased rollout**

V1 tokens + Button Input. V2 Table Modal. V3 codemod infra. V4 Tailwind preset + Figma plugin sync.

**Closing statement:** "Platform DS succeeds with semver discipline, direct imports, and visual regression — not a centralized gate for every UI tweak."

</details>

<details id="sysdesign-design-multi-tenant-saas-auth-acme-vs-globex-on-same-app">
<summary><b>6. Design multi-tenant SaaS auth (ACME vs Globex on same app)</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Subdomain per tenant (acme.app.com) or path (/t/acme)? (Subdomain — cleaner cookie isolation.)
- SSO per tenant required? (Optional OIDC per tenant config.)
- Data isolation model? (Server RLS — FE never enforces security alone.)
- Custom branding per tenant? (CSS variables from tenant config.)

**2. Requirements summary**

*Functional:*

- Login/logout
- SSO redirect per tenant
- Role-based UI (admin vs member)
- Tenant-branded login page
- Invite users

*Non-functional:*

- No cross-tenant data leak in UI
- Tenant config load < 200ms
- Session refresh silent
- CSRF/XSS hardened

**3. High-level architecture (draw while talking — 5 min)**

```
Request acme.app.com
  → Edge: resolve tenant "acme"
  → Inject tenant bootstrap JSON inline (theme, features, apiBase)
  → SPA hydrate with TenantProvider
  → API calls include tenant context via cookie + JWT claim tenantId
  → BFF validates tenant on every request (authoritative)
```

**4. Data model & key APIs**

```
GET /api/tenant/bootstrap → { slug, theme, features, auth: { type: 'oidc'|'password' } }
JWT claims: { sub, tenantId, roles[] }
// FE: hide nav items; BE: enforce row access
```

**5. Deep dives (interviewer picks 1–2)**

**5.1 Tenant bootstrap**

Inline script in HTML head avoids wrong-theme flash. document.documentElement.dataset.tenant sets CSS variable overrides.

```
document.documentElement.style.setProperty('--brand', theme.primary);
```

**5.2 Auth flows**

HttpOnly refresh cookie scoped to .app.com or tenant subdomain. PKCE for OIDC. Never store refresh token in localStorage.

```
// BFF /auth/refresh rotates access token in memory
```

**5.3 Feature flags per tenant**

features object from bootstrap — shell hides routes. Still protect API — UI hiding is not security.

```
{ features: { fleetMap: true, billing: false } }
```

**6. Reliability, failure modes & edge cases**

- Wrong tenant subdomain → 404 tenant not found page
- SSO callback error → clear message + retry
- Token expired → silent refresh once, then login redirect preserve return URL
- User bookmark wrong tenant URL → redirect to home tenant from JWT

**7. Alternatives considered**

- Tenant ID in query string only — rejected: spoofable, leak in logs
- Separate deploy per tenant — rejected: ops cost at scale
- Shared login without tenant context — rejected: SSO config differs

**8. Success metrics**

- Login success rate per tenant
- SSO error rate
- Cross-tenant incident count (zero)
- Bootstrap latency

**9. Phased rollout**

V1 password auth + theming. V2 SSO. V3 custom domains. V4 tenant admin self-service.

**Closing statement:** "Tenant isolation is enforced server-side; frontend handles branding, feature visibility, and safe session UX."

</details>

<details id="sysdesign-design-offline-first-field-inspection-app">
<summary><b>7. Design offline-first field inspection app</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Inspectors offline 40% of day?
- Photo attachments size?
- Compliance: edits auditable?
- Conflict if two inspectors same asset?

**2. Requirements summary**

*Functional:*

- Inspection forms
- Photo capture
- Sync queue
- Conflict UI
- Offline indicator

*Non-functional:*

- Zero data loss on crash
- Sync within 5min of connectivity
- Works on 3-year-old Android tablets

**3. High-level architecture (draw while talking — 5 min)**

SW caches app shell + form schemas. Reads from IndexedDB cache. Writes → outbox table. Background Sync / manual drain on online.

**4. Data model & key APIs**

OutboxEntry { id, type, payload, status, retries }

**5. Deep dives (interviewer picks 1–2)**

**5.1 Outbox pattern**

FIFO retry with exponential backoff. Idempotent server IDs.

```
await db.outbox.add({ type: 'SUBMIT', payload });
```

**6. Reliability, failure modes & edge cases**

- Conflict 409 → merge UI
- Quota exceeded → warn user
- Partial photo upload → resume

**7. Alternatives considered**

- Online-only — rejected
- localStorage queue — rejected: sync blocking

**8. Success metrics**

- Sync success rate
- Queue depth p95
- Conflict rate

**9. Phased rollout**

V1 read-only offline. V2 write queue. V3 conflict merge.

**Closing statement:** "Offline-first means outbox + idempotent API — not just Service Worker cache."

</details>

<details id="sysdesign-migrate-500-route-webpack-app-to-vite-strangler">
<summary><b>8. Migrate 500-route Webpack app to Vite (strangler)</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Timeline?
- Can run dual build?
- SSR required?
- Test coverage level?

**2. Requirements summary**

*Functional:*

- Dev HMR faster
- Prod parity
- CI green
- No user-facing URL change

*Non-functional:*

- Dev server start < 5s
- Build time -40%
- Zero bundle size regression

**3. High-level architecture (draw while talking — 5 min)**

Reverse proxy: legacy Webpack routes default, new Vite routes /app/v2/*. Shared monorepo packages. Module Federation optional for largest legacy island.

**4. Data model & key APIs**

N/A — migration program

**5. Deep dives (interviewer picks 1–2)**

**5.1 Strangler steps**

1) Vite shell + 1 route 2) Vitest migration per package 3) env var migration 4) bundle diff gate 5) retire Webpack.

```
import.meta.env.VITE_API_URL
```

**6. Reliability, failure modes & edge cases**

- Rollback per route flag
- Dual CI until cutover

**7. Alternatives considered**

- Big bang — rejected
- Stay Webpack — rejected: DX cost

**8. Success metrics**

- Build time
- Dev startup
- Bundle gzip diff
- Developer survey

**9. Phased rollout**

Q1 infra Q2 30% routes Q3 80% Q4 Webpack off.

**Closing statement:** "Strangler with metrics proves parity before decommissioning legacy bundler."

</details>

<details id="sysdesign-global-notification-center">
<summary><b>9. Global notification center</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Realtime required?
- Email/push in scope for FE?
- MFE shell?
- Read/unread sync across devices?

**2. Requirements summary**

*Functional:*

- Bell icon + unread count
- Notification list
- Mark read
- Preferences page

*Non-functional:*

- Unread count accurate within 5s
- List scroll 10k notifications virtualized

**3. High-level architecture (draw while talking — 5 min)**

SSE or WS to shell. TanStack Query cache notifications. Optimistic mark-read. Shell badge in header shared across MFEs via event bus or shared QueryClient.

**4. Data model & key APIs**

GET /notifications?cursor= — PATCH /notifications/:id/read

**5. Deep dives (interviewer picks 1–2)**

**5.1 Realtime invalidation**

WS event invalidates Query key ["notifications"]. Badge derived from Query data.

```
queryClient.invalidateQueries({ queryKey: ['notifications'] });
```

**6. Reliability, failure modes & edge cases**

- WS down → poll 60s fallback
- Optimistic read rollback on error

**7. Alternatives considered**

- Poll only — rejected for realtime UX
- Per-MFE bell — inconsistent count

**8. Success metrics**

- Delivery latency
- Read sync error rate

**9. Phased rollout**

V1 in-app list. V2 realtime. V3 preferences + push opt-in.

**Closing statement:** "Shell owns notification surface; remotes emit events, not duplicate bells."

</details>

<details id="sysdesign-typeahead-search-at-amazon-scale">
<summary><b>10. Typeahead search at Amazon scale</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Catalog size?
- Personalized results?
- Typo tolerance server-side?
- Categories in suggestions?

**2. Requirements summary**

*Functional:*

- Typeahead dropdown
- Keyboard nav
- Recent searches
- Empty state

*Non-functional:*

- p95 < 150ms API
- INP unaffected — debounce + non-blocking
- Cancel stale requests

**3. High-level architecture (draw while talking — 5 min)**

Debounced fetch with AbortController. Client cache last 20 queries. Server prefix index + ranking — never ship full catalog.

**4. Data model & key APIs**

GET /search/suggest?q=&limit=10

**5. Deep dives (interviewer picks 1–2)**

**5.1 Request cancellation**

Abort prior on new keystroke. Ignore aborted errors.

```
ac.abort(); ac = new AbortController(); fetch(url, { signal: ac.signal });
```

**6. Reliability, failure modes & edge cases**

- API slow → show cached partial
- Zero results → helpful message

**7. Alternatives considered**

- Search on every key — rejected
- Client fuse.js on full catalog — rejected at scale

**8. Success metrics**

- Zero-result rate
- Suggestion latency p95
- CTR on suggestions

**9. Phased rollout**

V1 prefix. V2 personalization. V3 categories.

**Closing statement:** "Debounce + abort + skeleton — protect INP while feeling instant."

</details>

<details id="sysdesign-a-b-testing-platform-integration">
<summary><b>11. A/B testing platform integration</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- SSR?
- Sticky assignment?
- Expose variant to analytics?
- How many concurrent experiments?

**2. Requirements summary**

*Functional:*

- Assign variant
- Render variant UI
- Track exposure + conversion

*Non-functional:*

- No flash of wrong variant (FOVC)
- Same variant SSR/client

**3. High-level architecture (draw while talking — 5 min)**

Edge assigns variant cookie before HTML. Inline bootstrap flags in head. Components branch on flag. Analytics event on exposure once.

**4. Data model & key APIs**

bootstrap: { experiments: { checkoutV2: 'control'|'treatment' } }

**5. Deep dives (interviewer picks 1–2)**

**5.1 SSR consistency**

Server reads same cookie as client. Mismatch causes hydration bug — test both paths.

```
if (flags.checkoutV2 === 'treatment') return <CheckoutV2 />;
```

**6. Reliability, failure modes & edge cases**

- Flag service down → default control
- Stale flag → TTL refresh

**7. Alternatives considered**

- Client-only assignment — FOVC
- Per-render random — invalid experiment

**8. Success metrics**

- SRM check sample ratio
- Conversion lift
- Hydration error rate

**9. Phased rollout**

V1 edge cookie. V2 analytics integration. V3 self-serve experiment UI.

**Closing statement:** "Assign before paint; measure exposure and conversion with same userId."

</details>

<details id="sysdesign-admin-analytics-dashboard-10m-rows">
<summary><b>12. Admin analytics dashboard (10M rows)</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Real-time or batch?
- Export required?
- Drill-down depth?
- Role-based metrics?

**2. Requirements summary**

*Functional:*

- Charts time-series
- Filters date/region
- Table drill-down
- CSV export async

*Non-functional:*

- Initial dashboard < 3s
- Never load 10M rows client-side

**3. High-level architecture (draw while talking — 5 min)**

Server aggregates to ~365–1000 points per chart. WebGL/canvas for large series. Virtualized table capped at 500 rows preview. Export = async job + email.

**4. Data model & key APIs**

GET /metrics/aggregate?from&to&groupBy — POST /export → jobId

**5. Deep dives (interviewer picks 1–2)**

**5.1 Aggregation API**

Client sends filter params; server returns pre-aggregated buckets only.

```
{ buckets: [{ date, revenue, orders }] }
```

**6. Reliability, failure modes & edge cases**

- Query timeout → narrower date range suggestion
- Export fail → retry notification

**7. Alternatives considered**

- Client aggregate 10M — rejected
- Full data grid — rejected

**8. Success metrics**

- Dashboard load time
- Export success rate

**9. Phased rollout**

V1 charts. V2 drill-down. V3 scheduled reports.

**Closing statement:** "Clarify data volume upfront — aggregate on server, visualize buckets on client."

</details>

<details id="sysdesign-social-feed-infinite-scroll-media">
<summary><b>13. Social feed infinite scroll + media</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Public or authenticated?
- Video autoplay policy?
- Edit/delete posts?
- Moderation UI?

**2. Requirements summary**

*Functional:*

- Infinite feed
- Like/comment
- Image/video
- Pull to refresh mobile

*Non-functional:*

- CLS < 0.1
- Smooth scroll 60fps
- Prefetch next page

**3. High-level architecture (draw while talking — 5 min)**

Cursor pagination. Intersection Observer sentinel. aspect-ratio placeholders. Video play only in viewport (IO). TanStack Query useInfiniteQuery.

**4. Data model & key APIs**

GET /feed?cursor= → { items[], nextCursor }

**5. Deep dives (interviewer picks 1–2)**

**5.1 useInfiniteQuery**

Flatten pages. Sentinel triggers fetchNextPage when visible.

```
useInfiniteQuery({ queryKey: ['feed'], queryFn: ({ pageParam }) => fetchFeed(pageParam) });
```

**6. Reliability, failure modes & edge cases**

- Duplicate posts on cursor overlap — dedupe by id
- Broken image → placeholder

**7. Alternatives considered**

- Offset pagination — unstable with inserts
- Load all — rejected

**8. Success metrics**

- Scroll depth
- Video start rate
- CLS

**9. Phased rollout**

V1 text+image. V2 video. V3 realtime new posts badge.

**Closing statement:** "Cursor pagination + reserved media aspect ratio — core feed scalability pattern."

</details>

<details id="sysdesign-frontend-platform-team-charter-50-devs">
<summary><b>14. Frontend platform team charter (50 devs)</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Products web stack uniform?
- Existing CI?
- Pain points #1?
- Platform team size?

**2. Requirements summary**

*Functional:*

- Shared CI templates
- Design system
- Deploy previews
- Observability SDK
- Docs

*Non-functional:*

- Reduce build times 50%
- Onboard new dev < 1 day
- Support SLA 24h

**3. High-level architecture (draw while talking — 5 min)**

Platform enablers not gatekeepers. Golden path repo templates. Optional escape hatches documented. Measure developer experience quarterly.

**4. Data model & key APIs**

N/A — organizational design

**5. Deep dives (interviewer picks 1–2)**

**5.1 Golden path**

pnpm + turbo + vite + vitest + playwright template. One command create-app.

```
pnpm create @org/app my-product
```

**6. Reliability, failure modes & edge cases**

- Platform outage blocks many teams — high uptime SLO on CI

**7. Alternatives considered**

- Every team custom webpack — rejected at 50 devs
- Platform approves every PR — bottleneck

**8. Success metrics**

- DORA metrics org-wide
- Build time trend
- Developer NPS
- Ticket volume

**9. Phased rollout**

Q1 CI+DS Q2 observability Q3 MFE shell Q4 self-serve docs.

**Closing statement:** "Platform success = product teams ship faster with fewer incidents — measure DORA not lines of platform code."

</details>

<details id="sysdesign-production-white-screen-after-deploy-incident-response">
<summary><b>15. Production white screen after deploy — incident response</b></summary>

**1. Clarifying questions (ask first — 2 min)**

- Blast radius all users?
- MFE or monolith?
- Recent changes?
- Rollback available?

**2. Requirements summary**

*Functional:*

- Restore service
- Identify root cause
- Communicate status
- Prevent recurrence

*Non-functional:*

- MTTR < 30 min
- Postmortem within 48h

**3. High-level architecture (draw while talking — 5 min)**

Runbook: 1) Rollback/canary off 2) Sentry spike analysis 3) Network 404 on chunks 4) Env var diff 5) SW cache purge 6) Fix forward with canary.

**4. Data model & key APIs**

N/A — incident process

**5. Deep dives (interviewer picks 1–2)**

**5.1 Common FE causes**

Missing VITE_ env in prod build. Wrong base path lazy chunk 404. Hydration mismatch new deploy. MFE remote version skew. Service worker serving stale broken JS.

```
// Compare Sentry release SHA vs deployed HTML script src hashes
```

**6. Reliability, failure modes & edge cases**

- Canary 5% before full
- Error rate alert > 1% triggers auto rollback

**7. Alternatives considered**

- Debug prod without rollback — rejected MTTR

**8. Success metrics**

- MTTR
- Error rate
- Repeat incident count

**9. Phased rollout**

Immediate rollback → root cause → guardrail (canary, budgets, e2e smoke).

**Closing statement:** "Rollback first, hypothesize second — white screen is P0; use Sentry + Network tab chunk 404 checklist."

</details>

---

## End-to-End Journeys (20) Full timeline answers

<details id="journeys-what-happens-when-you-type-a-url-in-chrome-and-press-enter">
<summary><b>16. What happens when you type a URL in Chrome and press Enter</b></summary>

**How to open (30 sec)**

Interviewer wants process architecture + performance literacy, not trivia. Frame it as: UI thread → browser process → network stack → renderer → main thread JS. Offer to go deep on any phase.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Input & navigation start** — Omnibox parses URL, applies HSTS upgrade, checks internal chrome:// handlers and extensions. Browser process creates/assigns a renderer process (site isolation per origin).
2. **DNS** — Browser cache → OS cache → recursive resolver → authoritative NS. TTL respected. CDN may return geo-routed IP.
3. **TCP + TLS** — SYN/SYN-ACK/ACK, then TLS 1.3 (~1 RTT). Session resumption on warm connections cuts latency.
4. **HTTP request** — HTTP/2 or HTTP/3 multiplexed request with cookies, Accept-Encoding (br/gzip), Sec-Fetch-* headers. Service Worker may intercept before network.
5. **Response & parsing** — HTML streamed to parser → DOM (incremental). CSS → CSSOM. Sync scripts block parser; defer/async/module differ.
  ```
  Critical path: HTML → CSSOM + DOM → render tree → layout → paint → composite
  ```
6. **Paint & metrics** — First Contentful Paint when first text/image paints. LCP when largest visible element paints. JS download/parse/execute may delay TTI/hydration.

**Deep dive (interviewer picks one)**

**Multi-process model:** Browser process (network, GPU broker), renderer (DOM, JS, layout), network service. A tab crash doesn't take down browser. Site isolation limits cross-origin data leaks.

**HTTP/3 QUIC:** Combines transport — fewer round trips on lossy mobile networks vs TCP+TLS stack.

**Verify in DevTools**

- **Network:** waterfall — Queueing, DNS, Initial connection, SSL, TTFB, Content Download
- **Performance:** trace navigation, mark LCP element
- **Application:** cache storage, SW status
- **chrome://net-export** for deep network logs if needed

**Pitfalls & trade-offs**

- Saying "DNS then HTML" without mentioning cache layers
- Ignoring SW intercept on repeat visits
- Forgetting SSR hydration as extra JS phase after first paint

**Metrics to mention**

- TTFB (network + server)
- FCP / LCP (render)
- Total Blocking Time / INP (JS)
- DOMContentLoaded vs load event

**Closing:** "I'd open Network + Performance, identify whether we're bound by connection, server, render-blocking CSS, or long JS tasks — then fix the dominant bucket first."

- **What is TTFB vs FCP?** TTFB = time to first response byte (DNS+connect+TLS+server). FCP = first pixel painted — includes download, parse, CSS, layout.
- **Does HTTP/2 change the story?** Multiplexing over one connection — fewer TCP handshakes for many assets; still pay DNS/connect once per origin.
- **Where does bfcache fit?** Not on initial load — on back navigation page may restore from memory without re-running full pipeline.

</details>

<details id="journeys-what-happens-when-you-click-a-link-on-a-page-same-origin">
<summary><b>17. What happens when you click a link on a page (same origin)</b></summary>

**How to open (30 sec)**

Distinguish MPA full navigation vs SPA client routing — interviewers expect both paths.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Event dispatch** — Capture/bubble, default action unless preventDefault. Middle-click opens new tab — different process.
2. **Navigation decision** — MPA: unload handlers → teardown → full document load. SPA: history.pushState/replaceState — no document reload.
3. **SPA path** — Router matches route, lazy chunks may fetch, data layer refetches, React commits DOM diff.
  ```
  history.pushState({}, "", "/dashboard"); router.navigate("/dashboard");
  ```
4. **MPA path** — Same as URL bar journey — may hit bfcache on back if eligible.
5. **Speculative loading** — Speculation Rules / prefetch / prerender may have warmed connection or even rendered page in advance.

**Deep dive (interviewer picks one)**

**popstate:** Back/forward fires popstate — SPA must sync router state. MPA relies on browser history stack.

**Verify in DevTools**

- Network: document type vs xhr/fetch on SPA nav
- Performance: no navigation trace on SPA — look for long tasks after click

**Pitfalls & trade-offs**

- Only describing MPA on a React app
- Forgetting scroll restoration on SPA back

**Metrics to mention**

- SPA: INP on click → paint
- MPA: navigation timing API

**Closing:** Always ask: "Is this a client-side route or full navigation?" then tailor the timeline.

- **SEO difference?** MPA each URL is a document crawlable by default. SPA needs SSR/SSG or dynamic rendering for bots.
- **prefetch vs prerender?** Prefetch loads resource low priority; prerender runs full pipeline in hidden page — faster click, higher cost.

</details>

<details id="journeys-dns-resolution-step-by-step">
<summary><b>18. DNS resolution — step by step</b></summary>

**How to open (30 sec)**

DNS is often invisible until you have 20 third-party domains — senior FE connects DNS to performance budgets.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Local caches** — Browser DNS cache → OS resolver cache → router cache.
2. **Recursive resolver** — ISP or 8.8.8.8 queries root → TLD (.com) → authoritative nameserver for host.
3. **Response** — A/AAAA records returned with TTL. Browser respects TTL until expiry.
4. **CDN routing** — Same hostname may resolve to different IPs by geo — anycast edges.

**Deep dive (interviewer picks one)**

**DNS-over-HTTPS:** Privacy vs corporate filtering trade-off. Frontend still uses preconnect to hide latency.

**Verify in DevTools**

- Network timing: "DNS Lookup" row
- chrome://net-internals/#dns
- Count unique domains in waterfall — each may cost lookup on cold start

**Pitfalls & trade-offs**

- dns-prefetch alone without preconnect still pays TCP/TLS
- Too many asset domains on critical path

**Metrics to mention**

- DNS lookup duration in Navigation Timing
- Number of unique origins on LCP path

**Closing:** Mention TTL when debugging "works after wait" — stale DNS after infra migration.

- **preconnect vs dns-prefetch?** preconnect does DNS + TCP + TLS early. dns-prefetch only resolves name.
- **Frontend fix for slow DNS?** Consolidate origins, preconnect to API/CDN, reduce third-party domains.

</details>

<details id="journeys-tcp-and-tls-handshake-frontend-performance">
<summary><b>19. TCP and TLS handshake — frontend performance</b></summary>

**How to open (30 sec)**

Each new origin on cold start pays round trips before first byte — explain why domain consolidation matters.

**Timeline — draw left-to-right while speaking (5 min)**

1. **TCP 3-way** — Client SYN → server SYN-ACK → client ACK. Establishes reliable stream.
2. **TLS 1.3** — ~1 RTT handshake with cert verify and key agreement. TLS 1.2 often 2 RTT.
3. **Session resumption** — PSK/ticket reuse skips full handshake on return visits.
4. **HTTP request** — Only after connection ready — TTFB clock includes all above on cold connection.

**Deep dive (interviewer picks one)**

**HTTP/3 (QUIC):** Runs over UDP, integrates TLS 1.3, reduces head-of-line blocking when one stream loses packets.

**Verify in DevTools**

- Network → Timing → "Initial connection" and "SSL"
- Compare first vs repeat visit to same origin

**Pitfalls & trade-offs**

- Attributing all TTFB to server when connect+TLS dominate
- Sharding assets across many subdomains (old HTTP/1.1 trick) hurts HTTP/2/3

**Metrics to mention**

- Connection setup time
- TTFB split via Server-Timing header if available

**Closing:** Quote rule of thumb: cold HTTPS ≈ 2–3 RTTs before HTML bytes on good network.

- **Why consolidate API + CDN?** One warm connection multiplexes many requests — avoids repeated handshakes.
- **Mobile impact?** Lossy networks amplify TCP HOL blocking — QUIC helps video and large SPAs.

</details>

<details id="journeys-http-request-response-browser-perspective">
<summary><b>20. HTTP request/response — browser perspective</b></summary>

**How to open (30 sec)**

Show you read headers — caching, cookies, compression, security — not just status codes.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Cache check** — Memory → SW → HTTP cache using Cache-Control, ETag, Vary. May skip network entirely.
2. **Request assembly** — Method, path, HTTP version, Host, Cookie, Accept, Accept-Encoding, Authorization, custom headers trigger CORS preflight.
3. **Transfer** — Body streamed; br/gzip decompressed by browser.
4. **Response handling** — Set-Cookie processed, CSP enforced, redirect followed (limit chains).

**Deep dive (interviewer picks one)**

**Cache-Control patterns:** hashed assets `immutable max-age=31536000`; HTML `no-cache` or short max-age with CDN purge.

**Verify in DevTools**

- Headers tab — request + response
- Size column — content vs transfer size (compression)
- Disable cache checkbox for hard reload behavior

**Pitfalls & trade-offs**

- Long max-age on index.html → stale deploys
- Vary: * breaking CDN cache hit rate

**Metrics to mention**

- Cache hit ratio at CDN
- Transfer size vs decoded size

**Closing:** During incidents, compare response headers prod vs staging first.

- **304 Not Modified?** Conditional request with If-None-Match/If-Modified-Since — server says use cache, saves bandwidth.
- **Cookie on cross-origin fetch?** Needs credentials:include + server Allow-Credentials + specific Allow-Origin.

</details>

<details id="journeys-from-html-bytes-to-pixels-critical-rendering-path">
<summary><b>21. From HTML bytes to pixels (critical rendering path)</b></summary>

**How to open (30 sec)**

This is the Core Web Vitals story — connect parser, CSS, layout, and LCP element.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Parse HTML** — Tokenizer + tree builder → DOM incrementally. Script without defer/async blocks parser.
2. **Fetch subresources** — CSS, sync JS, fonts, images discovered by parser and preload hints.
3. **CSSOM + render tree** — CSSOM built; render tree = visible DOM nodes with styles.
4. **Layout** — Compute geometry — reflow expensive on full document.
5. **Paint & composite** — Paint records into layers; GPU composes. will-change/ transform promote layers.
6. **FCP / LCP** — FCP first paint; LCP largest visible content — often hero image or heading block.

**Deep dive (interviewer picks one)**

**Font blocking:** FOIT/FOUT — font-display: swap improves LCP text at cost of flash.

**Content-visibility:** Skip layout for off-screen sections on long pages.

**Verify in DevTools**

- Performance → Experience → LCP marker
- Rendering tab → paint flashing, layout shifts
- Coverage tool for unused CSS

**Pitfalls & trade-offs**

- Huge sync CSS in head
- LCP image without width/height → CLS
- Invisible text waiting for webfont

**Metrics to mention**

- LCP
- CLS
- Render-blocking resource count

**Closing:** End with: "I'd preload LCP image, defer non-critical JS, and inline minimal critical CSS."

- **defer vs async?** defer: runs after parse, order preserved. async: runs when ready, order not guaranteed.
- **Inline critical CSS?** Faster first paint, worse cache — use for above-fold only.

</details>

<details id="journeys-what-happens-when-javascript-runs-after-page-load">
<summary><b>22. What happens when JavaScript runs after page load</b></summary>

**How to open (30 sec)**

Main thread is single — parse, compile, execute compete with input and paint (INP).

**Timeline — draw left-to-right while speaking (5 min)**

1. **Download & parse** — Parser may defer; module graph resolved. Source maps for debugging only in dev.
2. **Compile & execute** — V8 parses to bytecode/optimized code. Top-level runs; imports hoisted in modules.
3. **Framework boot** — React createRoot, router init, providers mount — first commit to DOM.
4. **Data fetching** — useEffect/Query fires — network → setState → re-render → commit.
5. **Long tasks** — Tasks >50ms block input — split with scheduler, workers, or defer non-urgent work.

**Deep dive (interviewer picks one)**

**Hydration (SSR):** JS attaches listeners to existing HTML — mismatch throws warnings; must match server markup.

**Verify in DevTools**

- Performance → Main thread flame chart — Parse HTML, Evaluate Script, Function Call
- Bottom-up tab — find hot functions
- React Profiler for component cost

**Pitfalls & trade-offs**

- Megabyte bundle on mobile
- Synchronous JSON.parse of huge payload on main thread

**Metrics to mention**

- Total Blocking Time
- INP
- JS execution time in Lighthouse

**Closing:** Quantify: "We cut main-thread JS from 1.2s to 400ms and INP dropped 180ms → 90ms."

- **Code splitting help?** Reduces initial parse/compile — pay cost on navigation instead.
- **requestIdleCallback?** Schedule low-priority work when browser idle — analytics, prefetch.

</details>

<details id="journeys-browser-cache-layers-memory-disk-service-worker">
<summary><b>23. Browser cache layers — memory, disk, Service Worker</b></summary>

**How to open (30 sec)**

Debug "user sees old version" by walking cache layers top to bottom.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Memory cache** — Fastest — same-tab session, cleared on memory pressure.
2. **Service Worker** — If controlling page, fetch event chooses cache-first, network-first, or stale-while-revalidate.
3. **HTTP disk cache** — Keyed by URL + Vary headers; respects Cache-Control and age.
4. **Network** — Miss fetches from origin/CDN; may store in cache per response headers.

**Deep dive (interviewer picks one)**

**Hard refresh:** Bypass cache for main resource. Soft reload may send conditional requests.

**Verify in DevTools**

- Network: Size column "disk cache" / "memory cache"
- Application → Cache Storage, SW lifecycle
- Disable cache while DevTools open

**Pitfalls & trade-offs**

- SW serving old hashed bundle after deploy — bump cache version
- CDN caching HTML too aggressively

**Metrics to mention**

- CDN cache hit rate
- SW cache size
- Support tickets "hard refresh fixed it"

**Closing:** Deploy strategy: content-hashed assets + short-TTL HTML + SW skipWaiting messaging.

- **immutable directive?** Tells browser never revalidate — safe for fingerprinted filenames.
- **stale-while-revalidate?** Serve stale instantly, update cache in background — good for API shells.

</details>

<details id="journeys-hard-refresh-vs-normal-navigation-back">
<summary><b>24. Hard refresh vs normal navigation back</b></summary>

**How to open (30 sec)**

bfcache is under-discussed — instant back navigation with frozen JS heap.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Hard refresh** — Ctrl+Shift+R bypasses cache, forces full reload pipeline.
2. **Normal back** — May restore from Back-Forward Cache — page shown instantly from memory.
3. **pageshow event** — event.persisted === true when restored from bfcache — refetch stale data.
4. **bfcache ineligible** — beforeunload, unload listeners, certain APIs (WebRTC), sensitive Cache-Control: no-store.

**Deep dive (interviewer picks one)**

**SPA + bfcache:** Page visible but data stale — refetch on pageshow not only mount.

**Verify in DevTools**

- Application → Back/forward cache tester (Chrome)
- pageshow listener logging in console

**Pitfalls & trade-offs**

- beforeunload for analytics blocks bfcache
- Assuming useEffect always runs on back navigation

**Metrics to mention**

- bfcache hit rate in RUM tools
- Stale UI reports after navigation

**Closing:** Remove unnecessary beforeunload — improves bfcache eligibility and perf.

- **popstate vs pageshow?** popstate: history entry change. pageshow: includes bfcache restore without full reload.
- **Fix stale cart on back?** Listen pageshow persisted, invalidate Query cache or refetch cart.

</details>

<details id="journeys-cross-origin-request-from-javascript-full-path">
<summary><b>25. Cross-origin request from JavaScript — full path</b></summary>

**How to open (30 sec)**

CORS is browser enforcement — explain preflight, simple vs non-simple, and BFF pattern.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Request initiated** — fetch/XHR from page origin to api.other.com — browser classifies simple vs non-simple.
2. **Preflight OPTIONS** — Custom headers, non-GET methods, certain content types trigger OPTIONS first.
3. **Server CORS headers** — Access-Control-Allow-Origin, Methods, Headers, Max-Age, Credentials.
4. **Actual request** — If allowed, browser exposes response to JS; else CORS error in console (network still occurred).

**Deep dive (interviewer picks one)**

**BFF:** Browser calls same-origin /api/*; server proxies to backends — no browser CORS for multiple services.

**Verify in DevTools**

- Network: OPTIONS then GET/POST pair
- Console CORS error message names blocked header

**Pitfalls & trade-offs**

- Allow-Origin: * with credentials — invalid
- Expecting CORS on server-to-server calls — irrelevant

**Metrics to mention**

- Preflight count per page load
- CORS error rate in RUM

**Closing:** Security: CORS is not auth — server must validate tokens regardless.

- **Simple GET image?** No CORS read of pixels in canvas unless crossOrigin set and server allows — img display works.
- **Proxy in dev only?** Vite/webpack proxy hides CORS locally — production still needs real CORS or BFF.

</details>

<details id="journeys-traditional-html-form-post-submission">
<summary><b>26. Traditional HTML form POST submission</b></summary>

**How to open (30 sec)**

Contrast progressive enhancement (works without JS) vs SPA fetch handlers.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Submit event** — Browser validates HTML5 constraints, builds body (urlencoded or multipart).
2. **Navigation** — Unless preventDefault — full document navigation to action URL.
3. **Server** — Validates CSRF token, processes, returns redirect or HTML.
4. **SPA alternative** — preventDefault + fetch + JSON — client router updates UI without reload.

**Deep dive (interviewer picks one)**

**CSRF:** SameSite=Lax/Strict cookies + token for cross-site POST protection.

**Verify in DevTools**

- Network: document navigation vs fetch
- Preserve log across redirect chain

**Pitfalls & trade-offs**

- Losing form state on full POST navigation
- Missing CSRF on cookie-auth APIs

**Metrics to mention**

- Form conversion funnel
- CSRF failure rate

**Closing:** React Server Actions: form works without JS, enhanced with client pending UI.

- **multipart when?** File uploads — boundary-separated parts; larger than urlencoded.
- **method=GET forms?** Query string in URL — never for mutations; cacheable/leakable.

</details>

<details id="journeys-websocket-connection-lifecycle">
<summary><b>27. WebSocket connection lifecycle</b></summary>

**How to open (30 sec)**

Persistent bidirectional channel — know upgrade handshake and reconnection strategy.

**Timeline — draw left-to-right while speaking (5 min)**

1. **HTTP upgrade** — GET with Upgrade: websocket, Connection: Upgrade, Sec-WebSocket-Key — server 101 Switching Protocols.
2. **Open socket** — Frames bidirectional — text/binary, ping/pong keepalive through proxies.
3. **Message handling** — onmessage → parse → update UI (Redux, Query invalidate, local state).
4. **Close / error** — onclose codes; reconnect with exponential backoff + jitter; resync state on reconnect.

**Deep dive (interviewer picks one)**

**vs SSE:** SSE one-way server→client over HTTP — simpler through proxies, no binary.

**Verify in DevTools**

- Network → WS filter — frames tab
- Throttling to test reconnect logic

**Pitfalls & trade-offs**

- Auth token in query string — logged in proxies
- No heartbeat — silent proxy timeout

**Metrics to mention**

- Connection uptime
- Reconnect count
- Message latency p99

**Closing:** Always describe idempotent resync after reconnect — missed messages during disconnect.

- **Corporate firewall?** WS blocked — fallback SSE or long polling.
- **Backpressure?** If messages flood faster than render, batch or drop with latest-wins for live metrics.

</details>

<details id="journeys-service-worker-first-visit-vs-repeat-visit">
<summary><b>28. Service Worker — first visit vs repeat visit</b></summary>

**How to open (30 sec)**

SW is a programmable proxy — lifecycle mistakes cause week-long stale caches.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Register** — navigator.serviceWorker.register("/sw.js") — download, parse, install event.
2. **Install** — precache shell assets; wait until skipWaiting + clients.claim for immediate control.
3. **Activate** — Delete old cache versions; claim clients.
4. **Fetch intercept** — Repeat visits: strategies per route — app shell cache-first, API network-first.
5. **Update** — New sw.js byte-different → waiting worker until tabs close or skipWaiting message.

**Deep dive (interviewer picks one)**

**Workbox:** Production teams use precache manifest + runtime caching recipes vs hand-rolled SW.

**Verify in DevTools**

- Application → Service Workers — update, bypass, unregister
- Update on reload checkbox for dev

**Pitfalls & trade-offs**

- Caching index.html aggressively
- No UX when new version available

**Metrics to mention**

- SW update adoption time
- Offline session success rate

**Closing:** Version cache names: app-shell-v47 — delete v46 on activate.

- **SW on first visit?** Not controlling yet — first navigation after install on subsequent load.
- **HTTPS required?** Yes except localhost — secure context only.

</details>

<details id="journeys-prefetch-preconnect-preload-when-each">
<summary><b>29. prefetch, preconnect, preload — when each</b></summary>

**How to open (30 sec)**

Resource hints shift work earlier — wrong hint steals bandwidth from LCP.

**Timeline — draw left-to-right while speaking (5 min)**

1. **dns-prefetch** — Resolve hostname only — cheapest hint.
2. **preconnect** — DNS + TCP + TLS — use for critical third-party origin (fonts, API).
3. **preload** — High-priority fetch of known-critical resource this navigation — LCP image, hero font.
4. **prefetch** — Low-priority likely next navigation — next route chunk or page.
5. **modulepreload** — Early fetch + parse ES modules for dependency graph.

**Deep dive (interviewer picks one)**

**Priority:** Browser schedules preload as high — overusing competes with LCP.

**Verify in DevTools**

- Network Priority column
- Warnings: preloaded but unused

**Pitfalls & trade-offs**

- Preloading every route chunk
- preconnect to 10 domains — connection limit waste

**Metrics to mention**

- LCP element load start time
- Unused preload warnings in Lighthouse

**Closing:** One preconnect to API + preload LCP image beats five vague prefetches.

- **HTTP/2 push?** Largely deprecated — prefer preload with correct as= type.
- **React lazy + prefetch?** import() on link hover warms chunk without Suspense flash on click.

</details>

<details id="journeys-third-party-script-load-gtm-analytics">
<summary><b>30. Third-party script load (GTM, analytics)</b></summary>

**How to open (30 sec)**

Third-party runs in your origin — same main thread, same INP budget.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Discovery** — Parser hits script tag or GTM injects tags dynamically.
2. **Fetch** — Often cross-origin — may block if sync; async/defer helps parse not block.
3. **Execute** — Runs on main thread — DOM access, cookies, long tasks from trackers.
4. **Downstream** — More scripts chained — waterfall of unknown duration.

**Deep dive (interviewer picks one)**

**Mitigations:** Consent gate, load after interaction, Partytown/worker offload, tag governance in GTM.

**Verify in DevTools**

- Performance — long tasks labeled with script URL
- Network — filter third-party domains
- Coverage — dead code in 3P bundles

**Pitfalls & trade-offs**

- Loading all tags before consent in GDPR regions
- Sync script in head blocking LCP

**Metrics to mention**

- INP with/without 3P
- Long task count attributable to 3P

**Closing:** Senior stance: inventory tags, defer non-essential, measure CWV before/after removal test.

- **iframe isolation?** Sandboxed iframe limits DOM access but still costs network + process.
- **RUM vs marketing tags?** Separate budgets — RUM lightweight, marketing deferred.

</details>

<details id="journeys-ssl-tls-certificate-errors-in-browser">
<summary><b>31. SSL/TLS certificate errors in browser</b></summary>

**How to open (30 sec)**

FE ensures secure asset URLs and understands why users see interstitials.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Certificate presentation** — Server sends chain; browser validates to trusted root in store.
2. **Checks** — Expiry, hostname match (SAN), revocation (OCSP/CRL), weak algorithms rejected.
3. **Failure UI** — Interstitial — NET::ERR_CERT_* ; user can bypass (risky) except HSTS domains.
4. **Mixed content** — HTTPS page blocking active HTTP subresources; passive may warn.

**Deep dive (interviewer picks one)**

**HSTS:** Strict-Transport-Security prevents sslstrip — includeSubDomains preload list.

**Verify in DevTools**

- Security panel — certificate viewer
- Console mixed content warnings

**Pitfalls & trade-offs**

- Hardcoded http:// asset URLs
- Cert expires Friday 5pm — monitor automation

**Metrics to mention**

- Certificate expiry alerts
- Mixed content console errors in CI crawl

**Closing:** Use relative URLs or // protocol-relative sparingly — explicit https everywhere.

- **Corporate proxy MITM?** Custom root CA on machine — works in corp browser, fails for external users — not a FE fix.
- **CSP upgrade-insecure-requests?** Auto-upgrade http subresources to https where possible.

</details>

<details id="journeys-redirect-chain-301-302-performance">
<summary><b>32. Redirect chain (301/302) performance</b></summary>

**How to open (30 sec)**

Each redirect is a full RTT before HTML — FE + infra should minimize hops.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Initial request** — User hits http://example.com
2. **301/302 response** — Location header — browser follows automatically (max ~20 hops).
3. **Chain** — http→https→www→ trailing slash — 3 RTTs before content.
4. **Cache behavior** — 301 cached permanently by browser; 302 often not — repeat cost.

**Deep dive (interviewer picks one)**

**SPA vs HTTP redirect:** Client router redirect doesn't fix http→https — needs server/CDN rule.

**Verify in DevTools**

- Network — 301/302 status, Location header
- curl -I to trace chain from CI

**Pitfalls & trade-offs**

- Login redirect losing return URL
- 302 for permanent apex→www — should be 301

**Metrics to mention**

- Redirect hop count in Lighthouse
- TTFB including redirects

**Closing:** Fix at edge: one hop apex→canonical https URL.

- **307 vs 302?** 307 preserves method — important for POST not becoming GET.
- **OAuth redirect URIs?** Exact match required — trailing slash matters.

</details>

<details id="journeys-download-file-vs-render-html-in-browser">
<summary><b>33. Download file vs render HTML in browser</b></summary>

**How to open (30 sec)**

Content-Disposition and MIME drive behavior — plus client-generated downloads.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Response headers** — Content-Type + Content-Disposition: attachment vs inline.
2. **Browser choice** — PDF may inline with plugin; CSV often downloads; sniffing restricted.
3. **Client-generated** — Blob + object URL + programmatic anchor click + revokeObjectURL.
4. **Streaming** — Large exports via ReadableStream — avoid holding entire file in RAM.

**Deep dive (interviewer picks one)**

**Security:** Never trust client filename alone — server sets Content-Disposition filename* UTF-8.

**Verify in DevTools**

- Network headers on download response
- Memory when generating large Blob — watch tab crash

**Pitfalls & trade-offs**

- Giant JSON.stringify on main thread before download
- Missing revokeObjectURL → memory leak

**Metrics to mention**

- Export job duration
- OOM errors on large reports

**Closing:** For big data: server-side async job + poll + signed URL download.

- **download attribute?** Suggests filename for same-origin URLs; cross-origin may ignore.
- **Service Worker intercept download?** Can — useful for offline cached PDFs.

</details>

<details id="journeys-page-unload-beforeunload-pagehide-visibilitychange">
<summary><b>34. Page unload — beforeunload, pagehide, visibilitychange</b></summary>

**How to open (30 sec)**

Unload is unreliable especially mobile — prefer visibility and sendBeacon.

**Timeline — draw left-to-right while speaking (5 min)**

1. **visibilitychange** — Tab hidden — pause video, reduce polling frequency.
2. **pagehide** — Navigating away — bfcache eligible unless blocked.
3. **beforeunload** — Can show confirm dialog — heavily restricted; harms bfcache.
4. **unload** — Unreliable on mobile — don't depend on critical saves here.

**Deep dive (interviewer picks one)**

**sendBeacon:** Fire-and-forget analytics on pagehide — doesn't block navigation.

**Verify in DevTools**

- Console — warn if beforeunload registered
- Test mobile Safari background tab behavior

**Pitfalls & trade-offs**

- Sync XHR on unload — deprecated blocked
- beforeunload for "unsaved changes" on every navigation

**Metrics to mention**

- Analytics delivery rate on bounce
- bfcache eligibility after removing beforeunload

**Closing:** Replace unload hacks with Page Lifecycle API patterns.

- **Autosave pattern?** Debounced save to localStorage/API — no modal needed.
- **keepalive fetch?** fetch(..., { keepalive: true }) alternative to sendBeacon with POST body limits.

</details>

<details id="journeys-debug-slow-page-load-full-senior-process">
<summary><b>35. Debug slow page load — full senior process</b></summary>

**How to open (30 sec)**

Structure answer as measure → hypothesize → fix → verify — not random optimizations.

**Timeline — draw left-to-right while speaking (5 min)**

1. **Reproduce** — Incognito, throttle Fast 3G + 4x CPU, disable extensions.
2. **Network waterfall** — DNS/connect/TTFB — too many origins? redirect chain? huge JS?
3. **Main thread** — Performance trace — long tasks, layout thrashing, expensive selectors.
4. **CWV mapping** — LCP element late? CLS from images/fonts? INP from handlers?
5. **Fix priority** — Don't code-split if TTFB is 3s. Fix server/CDN first, then render path, then JS.
6. **Verify** — Lighthouse CI, RUM before/after, synthetic checks in deploy pipeline.

**Deep dive (interviewer picks one)**

**Example narrative:** "LCP was hero image at 4.2s — missing preload, served JPEG not AVIF, TTFB 800ms from uncached SSR. Fixed: edge cache HTML, preload AVIF srcset, image CDN — LCP 1.8s."

**Verify in DevTools**

- Network + Performance + Lighthouse together
- WebPageTest filmstrip for stakeholder reports
- CrUX field data vs lab

**Pitfalls & trade-offs**

- Optimizing bundle before fixing 3s backend
- Chasing green Lighthouse on fake throttling only

**Metrics to mention**

- LCP p75
- INP p75
- TTFB p75
- JS weight
- Third-party long task time

**Closing:** Close: "I'd document bottleneck, ship smallest fix with highest CWV impact, validate in RUM within 48h."

- **Field vs lab?** Lab reproduces; field (CrUX) shows real user percentiles — both needed.
- **Regression prevention?** Bundle size budget, LCP budget in CI, RUM alerts on p75.

</details>

---

## Package Managers & Node Tooling (22) Must know

<details id="tooling-npm-vs-pnpm-vs-yarn-vs-bun-compare-for-production-monorepos">
<summary><b>36. npm vs pnpm vs Yarn vs Bun — compare for production monorepos</b></summary>

**Why this question matters**

Package manager choice affects CI speed, disk usage, phantom dependency bugs, and supply-chain reproducibility. Senior engineers defend a choice with metrics, not preference.

Tool

Install model

Strengths

Watch-outs

**npm**

Flat node_modules (v7+)

Default, universal,

npm ci

Slower CI, duplicate deps, phantom deps possible

**pnpm**

Content-addressable store + symlinks

Fast, strict, disk efficient

Some tools assume flat node_modules

**Yarn Berry (v3+)**

Plug'n'Play or node_modules

Constraints, workspaces

PnP compatibility, learning curve

**Bun**

Fast installer + runtime

Speed benchmarks

Ecosystem maturity for enterprise

**Example decision narrative**

"We migrated 3 apps to pnpm workspaces: install time 4m→90s in CI, disk 40% smaller. We set `shamefully-hoist=false` default strict — fixed 12 phantom dependency bugs. Kept npm for legacy publish script until verified."

pnpm strictness breaks packages that import undeclared deps — fix upstream or use `pnpm.overrides` / public-hoist-pattern for offenders like older React Native libs.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-what-are-phantom-dependencies-and-how-does-pnpm-prevent-them">
<summary><b>37. What are phantom dependencies and how does pnpm prevent them</b></summary>

**Phantom dependency:**

Your code imports

lodash

but it's not in your package.json — it "leaks" from a dependency's nested node_modules because npm hoists everything flat. Works locally until dependency stops shipping lodash → prod breaks.

**Example failure**

```
// your-app/src/util.ts
import debounce from 'lodash/debounce'; // NOT in your package.json
// npm: works if any dependency hoists lodash
// pnpm: MODULE_NOT_FOUND — forces explicit dependency
```

```
# Fix — declare explicitly
pnpm add lodash
# Or intentional hoist for legacy (last resort)
# .npmrc
public-hoist-pattern[]=*eslint*
```

Interview answer: "Strict node_modules catches missing declarations early — that's a feature."

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-lockfiles-package-lock-json-vs-pnpm-lock-yaml-vs-yarn-lock">
<summary><b>38. lockfiles — package-lock.json vs pnpm-lock.yaml vs yarn.lock</b></summary>

**Purpose:**

Reproducible installs — exact resolved versions across machines and CI. Never gitignore lockfiles in applications.

**CI commands**

```
npm ci          # deletes node_modules, installs exact from lock — faster than install
pnpm install --frozen-lockfile  # fails if lock out of sync with package.json
yarn install --immutable
```

**Merge conflicts**

Regenerate lock after resolving package.json — don't hand-edit lock. In monorepos, one lock at root (pnpm/yarn) vs npm per package (avoid).

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-npm-workspaces-vs-pnpm-workspaces-monorepo-setup">
<summary><b>39. npm workspaces vs pnpm workspaces — monorepo setup</b></summary>

**pnpm workspace (common 2025 pattern)**

```
// pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'

// root package.json
{ "scripts": { "build": "pnpm -r run build" } }

// apps/web/package.json
{ "dependencies": { "@org/ui": "workspace:*" } }
```

**Why pnpm for monorepos:**

Single store dedupes identical versions across packages; symlinks are instant;

pnpm --filter web dev

runs one app. Turborepo/Nx orchestrate tasks on top.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-peerdependencies-why-react-libs-use-them">
<summary><b>40. peerDependencies — why React libs use them</b></summary>

Library shouldn't bundle its own React — two Reacts = "Invalid hook call". Peer dep says "host app provides react@^18 || ^19".

```
// packages/ui/package.json
"peerDependencies": { "react": "^18 || ^19", "react-dom": "^18 || ^19" },
"devDependencies": { "react": "^19.0.0" } // for local Storybook only
```

pnpm: peers must be resolvable from consumer — use `auto-install-peers=true` in .npmrc or document install steps.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-overrides-resolutions-force-transitive-dependency-version">
<summary><b>41. overrides / resolutions — force transitive dependency version</b></summary>

Security patch in nested dep before upstream fixes — force safe version org-wide.

```
// npm package.json
"overrides": { "lodash": "4.17.21", "webpack": { "acorn": "8.14.0" } }
// pnpm
"pnpm": { "overrides": { "lodash@*": "4.17.21" } }
// yarn
"resolutions": { "lodash": "4.17.21" }
```

**Risk:**

Overrides can break semver contracts — run full test suite + note in ADR why override exists.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-npm-ci-vs-npm-install-in-ci-pipelines">
<summary><b>42. npm ci vs npm install in CI pipelines</b></summary>

npm ci

requires package-lock.json, never modifies it, deletes existing node_modules first — deterministic and faster.

npm install

may update lock — only for local dev when adding deps.

```
# .github/workflows/ci.yml
- uses: pnpm/action-setup@v4
- run: pnpm install --frozen-lockfile
- run: pnpm --filter web test
```

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-npx-vs-pnpm-dlx-vs-yarn-dlx-run-packages-without-global-install">
<summary><b>43. npx vs pnpm dlx vs yarn dlx — run packages without global install</b></summary>

```
npx create-vite@latest my-app      # npm — may cache old npx
pnpm dlx create-vite my-app        # downloads, runs, no global pollution
pnpm exec vitest run               # run local bin from node_modules/.bin
```

Always pin version in CI scripts:

pnpm dlx create-vite@5.4.11

— avoids surprise breaking changes.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-npmrc-pnpmfile-cjs-common-production-settings">
<summary><b>44. .npmrc / .pnpmfile.cjs — common production settings</b></summary>

```
# .npmrc
engine-strict=true
save-exact=true           # npm — pin exact versions (team policy)
auto-install-peers=true   # pnpm
strict-peer-dependencies=false
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

engine-strict

fails install if Node version wrong — matches

"engines": { "node": ">=20" }

in package.json.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-supply-chain-npm-audit-socket-lockfile-integrity">
<summary><b>45. Supply chain — npm audit, Socket, lockfile integrity</b></summary>

Senior FE owns dependency risk — not just backend. CI should fail on critical CVEs in direct/transitive deps (with override path documented).

```
pnpm audit --audit-level=high
# package.json allowlist only with ticket reference
# Use Renovate grouped PRs — not Dependabot spam 50/week
```

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-semver-caret-vs-tilde">
<summary><b>46. semver caret vs tilde</b></summary>

Caret ^1.2.3 allows minor/patch up to <2.0.0. Tilde ~1.2.3 allows patch only. Caret default npm — balances features and safety.

```
"lodash": "^4.17.21"
```

Caret can pull breaking if 0.x version (0.x behaves like major).

Pin exact for compliance-critical deps.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-bundleddependencies">
<summary><b>47. bundledDependencies</b></summary>

Packages bundled inside tarball on publish — rare, increases package size.

```
Used for CLI shipping small deps
```

Prefer normal dependencies for apps.

Know exists for npm publish questions.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-optionaldependencies">
<summary><b>48. optionalDependencies</b></summary>

Install continues if optional fails — platform-specific native modules (esbuild, sharp).

```
npm optional platform binaries
```

CI must test on target OS if optional used.

Lockfile still records resolution.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-postinstall-script-security">
<summary><b>49. postinstall script security</b></summary>

Malicious package runs arbitrary code on install — supply chain vector.

```
pnpm install --ignore-scripts in CI until audited
```

Allowlist trusted packages scripts only.

Socket.dev / npm audit in pipeline.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-package-json-exports-field">
<summary><b>50. package.json exports field</b></summary>

Controls import paths — conditional exports for import/require/browser.

```
"exports": { ".": { "import": "./dist/index.mjs", "require": "./dist/index.cjs" } }
```

Breaks deep imports like pkg/dist/internal — intentional encapsulation.

Library authors must define exports correctly.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-type-module-vs-commonjs">
<summary><b>51. type module vs commonjs</b></summary>

"type":"module" makes .js files ESM; use .cjs extension for CommonJS config files.

```
vite.config.ts ESM; jest.config.cjs CJS
```

Mixed projects confusing — document in README.

Node native ESM stable — prefer ESM greenfield.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-node-esm-vs-cjs-interop">
<summary><b>52. Node ESM vs CJS interop</b></summary>

import createRequire from 'module' for CJS in ESM; dynamic import() for ESM from CJS.

```
const require = createRequire(import.meta.url)
```

Default export interop differences.

Bundler abstracts most pain for frontend.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-volta-vs-engines-field">
<summary><b>53. Volta vs engines field</b></summary>

Volta pins node/yarn/pnpm per project in package.json — auto-switch on cd.

```
"volta": { "node": "20.11.0", "pnpm": "9.0.0" }
```

engines only warns unless engine-strict.

Volta better DX than nvm for teams.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-corepack-enable-pnpm-yarn">
<summary><b>54. Corepack enable pnpm/yarn</b></summary>

Node ships Corepack — enables packageManager field enforcement.

```
corepack enable && corepack prepare pnpm@9 --activate
```

packageManager field in package.json pins version for CI.

Node 18+ includes corepack (may need enable).

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-private-registry-scope">
<summary><b>55. Private registry scope</b></summary>

@org packages mapped to Artifactory/GitHub Packages via .npmrc registry.

```
@org:registry=https://npm.pkg.github.com
```

Auth token in CI secrets — never commit.

Monorepo publishes internal DS packages.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-pnpm-catalog-v9">
<summary><b>56. pnpm catalog (v9+)</b></summary>

Centralize version definitions in pnpm-workspace.yaml — bump once update everywhere.

```
catalog: { react: ^19.0.0 } then "react": "catalog:" in package.json
```

Requires pnpm 9+ adoption.

Reduces version drift across monorepo.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

<details id="tooling-interview-narrative-npm-vs-pnpm">
<summary><b>57. Interview narrative npm vs pnpm</b></summary>

Structure answer: problem (phantom deps, CI time) → action (migrate, frozen lockfile, cache) → result (metrics) → trade-off (fixed 3 hoisting issues).

```
Install 4m→90s, disk -40%, 12 undeclared deps caught
```

Honesty about migration cost shows seniority.

This is THE package manager question format.

- **CI enforcement?** pnpm install --frozen-lockfile, audit gate, engines-strict in pipeline — fail build not warn.
- **If ignored?** Phantom deps break prod, lockfile drift causes "works on my machine", supply-chain audit misses CVEs.
- **npm vs pnpm here?** pnpm: content-addressable store, strict node_modules, faster CI — npm: wider default compatibility.

</details>

---

## Frontend Engineering Tooling (20)

<details id="fe-tooling-eslint-prettier-typescript-how-they-fit-together">
<summary><b>58. ESLint + Prettier + TypeScript — how they fit together</b></summary>

**ESLint**

catches bugs and patterns (hooks rules, import order).

**Prettier**

formats whitespace — don't fight ESLint stylistic rules (turn off formatting in ESLint).

**TypeScript**

is static analysis — complementary, not replacement.

```
// eslint.config.js (flat config)
import tseslint from 'typescript-eslint';
export default tseslint.config(
  ...tseslint.configs.recommended,
  { rules: { 'react-hooks/exhaustive-deps': 'error' } }
);
// package.json
"lint": "eslint src && tsc --noEmit"
```

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-husky-lint-staged-pre-commit-without-slowing-devs">
<summary><b>59. Husky + lint-staged — pre-commit without slowing devs</b></summary>

```
// lint-staged.config.js
export default {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit' // once per commit
};
// .husky/pre-commit
pnpm lint-staged
```

Heavy tsc on every file change is slow — run full typecheck in CI; lint-staged only affected files locally.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-changesets-vs-semantic-release-for-versioning-monorepos">
<summary><b>60. Changesets vs semantic-release for versioning monorepos</b></summary>

**Changesets:**

Human writes changeset file describing bump per package — good for multi-package with mixed release cadence.

**semantic-release:**

Fully automated from conventional commits — single app repos.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-turborepo-vs-nx-task-orchestration">
<summary><b>61. Turborepo vs Nx — task orchestration</b></summary>

```
// turbo.json
{ "pipeline": { "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] }, "test": { "dependsOn": ["build"] } } }
```

Remote cache (Vercel) shares build artifacts across CI runs — 10min build → 2min cache hit. Nx adds module boundary enforcement + generators — pick based on team scale.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-environment-variables-vite-vs-next-vs-webpack">
<summary><b>62. Environment variables — Vite vs Next vs Webpack</b></summary>

```
# Vite — only VITE_ exposed to client
VITE_API_URL=https://api.example.com
// import.meta.env.VITE_API_URL

# Next — NEXT_PUBLIC_ for browser
NEXT_PUBLIC_API_URL=...

# Never expose secrets — server-only vars without prefix
```

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-git-merge-vs-rebase">
<summary><b>63. Git merge vs rebase</b></summary>

Rebase linear history feature branch; never rebase shared main.

```
git fetch origin main && git rebase origin/main
```

Squash merge OK PR hygiene.

Conflict resolution skill expected senior.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-trunk-based-development">
<summary><b>64. Trunk-based development</b></summary>

Short branches feature flags incomplete work main always deployable.

```
Merge PR within 48h max
```

Long branches merge hell CI drift.

DORA metrics correlation.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-docker-multi-stage-fe-build">
<summary><b>65. Docker multi-stage FE build</b></summary>

node alpine build → nginx alpine serve dist — no Node prod unless SSR.

```
FROM node:20-alpine AS build ... FROM nginx:alpine COPY dist
```

Multi-stage smaller image secure.

Standard CI deploy pattern.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-pnpm-store-cache-in-github-actions">
<summary><b>66. pnpm store cache in GitHub Actions</b></summary>

Cache ~/.pnpm-store key pnpm-lock hash — install minutes to seconds.

```
actions/cache@v4 path ~/.pnpm-store
```

Invalidate on lock change automatic.

Quote metrics in interviews.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-msw-mock-service-worker">
<summary><b>67. MSW Mock Service Worker</b></summary>

Same handlers dev overlay Vitest — realistic network mocks.

```
setupServer(...handlers) node; setupWorker browser
```

Not replace unit tests pure functions.

FleetPanda could mock lib/api.ts layer.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-bundlesize-size-limit-ci">
<summary><b>68. bundlesize / size-limit CI</b></summary>

Fail PR main chunk gzip regression.

```
size-limit JSON config 250KB
```

Analyzer artifact upload CI debug.

Perf governance.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-lighthouse-ci-on-preview">
<summary><b>69. Lighthouse CI on preview</b></summary>

Assert LCP CLS on deploy preview URL per PR.

```
lighthouseci autorun upload target temporaryPublicStorage
```

Flaky — trend not single run.

Tie to user metrics when possible.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-sentry-release-source-maps">
<summary><b>70. Sentry release + source maps</b></summary>

Release tied commit upload hidden maps stack traces symbolicated.

```
sentry-cli sourcemaps upload --release=$GIT_SHA dist
```

Don't expose maps publicly.

Production debug essential.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-feature-flags-bootstrap">
<summary><b>71. Feature flags bootstrap</b></summary>

Fetch flags before render avoid wrong variant flash.

```
await flagsmith.init(); then createRoot
```

SSR inject flags inline script sync.

A/B testing architecture.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-adr-architecture-decision-records">
<summary><b>72. ADR Architecture Decision Records</b></summary>

Document why pnpm why Vite — context decision consequences.

```
docs/adr/001-package-manager.md
```

Immutable supersede new ADR.

Staff communication artifact.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-chromatic-visual-regression">
<summary><b>73. Chromatic visual regression</b></summary>

Storybook snapshot diff PR review design system.

```
Chromatic CI on packages/ui
```

Cost $ — worth DS at scale.

Catch CSS unintended changes.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-commitlint-conventional">
<summary><b>74. commitlint conventional</b></summary>

Enforce feat(scope): message — changelog automation.

```
commitlint.config.js extends conventional
```

Husky commit-msg hook.

Release notes quality.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-codeowners-path-rules">
<summary><b>75. CODEOWNERS path rules</b></summary>

Automatic review assignment critical paths.

```
/packages/ui/ @design-system-team
```

Branch protection require review.

Scale code review.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-preview-deploy-pr-comments">
<summary><b>76. Preview deploy PR comments</b></summary>

Vercel Netlify bot URL QA designers test.

```
Every PR unique URL
```

E2E against preview env.

Shorten feedback loop.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

<details id="fe-tooling-renovate-grouped-dependencies">
<summary><b>77. Renovate grouped dependencies</b></summary>

One PR all patch minor react ecosystem weekly not 20 daily.

```
renovate grouping config
```

Review burden manageable.

Supply chain hygiene sustainable.

- **Success metric?** CI time down, flake rate down, deploy frequency up, mean time to restore — pick one quantified outcome.
- **Rollback plan?** Feature flag off, revert deploy, pin previous Docker image — never "fix forward" without mitigation path.
- **Documentation?** ADRs, README in repo root, onboarding checklist, runbook linked from PR template.

</details>

---

## React (55 questions)

<details id="react-explain-the-react-reconciliation-algorithm-and-what-triggers-a-re-render">
<summary><b>78. Explain the React reconciliation algorithm and what triggers a re-render</b></summary>

React maintains a Fiber tree — each node is a unit of work with links to child, sibling, and return (parent). On state update, React schedules a render pass that calls your component functions to produce a new element tree, then diffs against the previous tree. Only changed DOM nodes are patched in the commit phase. *Re-render* means your function ran again; *DOM update* may not happen if output is identical.

```
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <Child count={count} />  {/* re-renders every Parent click */}
      <Child count={0} />     {/* also re-renders — same props ref? still re-renders if Parent re-rendered */}
    </>
  );
}
const Child = memo(function Child({ count }) {
  console.log('Child render', count);
  return <span>{count}</span>;
});
```

Triggers: `useState`/`useReducer` dispatch, context value change, parent re-render, `forceUpdate`, class `setState`.

Manual `memo` everywhere adds comparison cost and bugs (unstable inline objects). React 19 Compiler can auto-memo — still verify with Profiler on hot paths.

Staff-level close: mention render phase (pure) vs commit phase (DOM mutations, refs, layout effects).

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-what-changed-in-react-19-that-affects-production-apps">
<summary><b>79. What changed in React 19 that affects production apps</b></summary>

React 19 focuses on async UX, less boilerplate, and compiler-driven optimization. Production impact: forms/actions, optimistic patterns built-in, ref simplification, and stricter dev StrictMode for effect cleanup.

- `use()` — read promises/context conditionally in render (Suspense boundary required for promises)
- `useOptimistic` / `useActionState` — pending states without manual flags
- Ref as normal prop — drop forwardRef on leaf components
- React Compiler (optional) — compile-time memoization

**Example — optimistic cart update**

```
const [optimisticItems, addOptimistic] = useOptimistic(items, (state, newItem) => [...state, newItem]);

async function addToCart(formData) {
  addOptimistic({ id: 'temp', name: formData.get('name') });
  await createCartItem(formData); // revert handled by refresh or error boundary
}
```

**Migration risk**

Third-party libs not yet compatible with React 19 concurrent features — test map/chart libs under StrictMode before upgrading.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-controlled-vs-uncontrolled-components-when-to-use-each">
<summary><b>80. Controlled vs uncontrolled components — when to use each</b></summary>

**Controlled:** React owns value via state — predictable, testable, validation on change.

```
const [email, setEmail] = useState('');
<input value={email} onChange={e => setEmail(e.target.value)} />
```

**Uncontrolled:** DOM owns value — refs for file inputs, third-party widgets, perf on huge forms.

```
const ref = useRef(null);
<input defaultValue="a@b.com" ref={ref} />
// submit: ref.current.value
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-explain-useeffect-vs-uselayouteffect-vs-useinsertioneffect">
<summary><b>81. Explain useEffect vs useLayoutEffect vs useInsertionEffect</b></summary>

**useEffect:** after paint, async — data fetch, subscriptions, non-visual side effects.

**useLayoutEffect:** after DOM update, before paint — measure DOM, sync scroll, prevent flicker.

**useInsertionEffect:** before layout, for CSS-in-JS injecting styles.

```
useLayoutEffect(() => {
  const h = ref.current.getBoundingClientRect().height;
  setHeight(h); // user won't see wrong layout flash
}, []);
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-why-does-react-18-strictmode-double-invoke-effects-in-development">
<summary><b>82. Why does React 18 StrictMode double-invoke effects in development</b></summary>

To surface non-idempotent effects (missing cleanup, duplicate subscriptions, stale closures). Production runs once. Map libraries and WebSockets must clean up properly.

```
useEffect(() => {
  const ws = new WebSocket(url);
  return () => ws.close(); // REQUIRED
}, [url]);
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-what-is-the-react-fiber-architecture">
<summary><b>83. What is the React Fiber architecture</b></summary>

Fiber is a unit of work — linked list of nodes enabling incremental rendering, priority scheduling, pause/resume, and concurrent features. Each fiber has alternate (double buffering), child/sibling/return pointers.

Interview depth: mention lanes (priority), work loop (sync vs concurrent), commit phase (mutation + layout + passive effects).

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-explain-concurrent-react-and-time-slicing">
<summary><b>84. Explain Concurrent React and time slicing</b></summary>

React can interrupt low-priority renders for urgent updates (input). `startTransition` marks non-urgent state updates.

```
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
const [isPending, startTransition] = useTransition();

const onChange = (v) => {
  setQuery(v); // urgent — input stays responsive
  startTransition(() => setResults(filterHugeList(v))); // interruptible
};
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-usememo-vs-usecallback-vs-react-memo-when-each-matters">
<summary><b>85. useMemo vs useCallback vs React.memo — when each matters</b></summary>

```
const sorted = useMemo(() => items.sort(cmp), [items]); // expensive compute
const onSave = useCallback(() => save(id), [id]);       // stable ref for deps/memo child
const Row = memo(function Row({ item }) { return <tr>...</tr>; }); // skip re-render
```

Don't blanket-memo everything — measure first. Compiler may make manual memo redundant.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-how-do-you-prevent-unnecessary-re-renders-in-a-large-context-tree">
<summary><b>86. How do you prevent unnecessary re-renders in a large context tree</b></summary>

- Split contexts (state vs dispatch)
- `useContextSelector` pattern or Zustand/Jotai
- Memoize provider value carefully
- Colocate state

```
// Split pattern
const StateCtx = createContext(null);
const DispatchCtx = createContext(null);
// consumers of dispatch don't re-render on state change
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-explain-keys-in-lists-why-not-use-index">
<summary><b>87. Explain keys in lists — why not use index</b></summary>

Keys identify identity across renders. Index keys break on insert/reorder — wrong component state preserved, poor perf.

```
// BAD: reorder causes wrong row selection state
items.map((item, i) => <Row key={i} item={item} />)
// GOOD:
items.map(item => <Row key={item.id} item={item} />)
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-rules-of-hooks-why-do-they-exist">
<summary><b>88. Rules of Hooks — why do they exist</b></summary>

Hooks stored in linked list per component instance. Order must be stable every render — no hooks in loops/conditions/nested functions.

```
// WRONG
if (loggedIn) useEffect(() => {}, []);
// RIGHT
useEffect(() => { if (loggedIn) subscribe(); return cleanup; }, [loggedIn]);
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-custom-hook-design-what-makes-a-good-custom-hook">
<summary><b>89. Custom hook design — what makes a good custom hook</b></summary>

Encapsulates stateful logic, not UI. Returns stable API. Handles cleanup. Name starts with `use`.

```
function useDebouncedValue<T>(value: T, ms = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return debounced;
}
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-useref-vs-usestate-storage-and-re-render-implications">
<summary><b>90. useRef vs useState — storage and re-render implications</b></summary>

`useRef` mutates `.current` without re-render — timers, previous values, DOM nodes. `useState` triggers re-render on update.

```
const renderCount = useRef(0);
renderCount.current += 1; // no re-render from this
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-usereducer-vs-usestate-for-complex-state">
<summary><b>91. useReducer vs useState for complex state</b></summary>

useReducer when: next state depends on previous, multiple sub-values, complex transitions, testable pure reducer.

```
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-how-does-useid-work-and-why-use-it-over-math-random">
<summary><b>92. How does useId work and why use it over Math.random()</b></summary>

Stable unique IDs across SSR/client hydration. Avoids mismatch.

```
const id = useId();
<label htmlFor={id}>Email</label>
<input id={id} type="email" />
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-useimperativehandle-legitimate-use-cases">
<summary><b>93. useImperativeHandle — legitimate use cases</b></summary>

Expose limited imperative API on ref — focus input, scroll container, play video. Prefer declarative props when possible.

```
useImperativeHandle(ref, () => ({ focus: () => inputRef.current?.focus() }), []);
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-explain-stale-closures-in-hooks-and-how-to-fix-them">
<summary><b>94. Explain stale closures in hooks and how to fix them</b></summary>

Effect/callback captures old state from render when created. Fix: correct deps, functional updates, refs for latest value.

```
// Stale: count always 0 in interval
useEffect(() => { const id = setInterval(() => setCount(count + 1), 1000); ... }, []);
// Fix:
useEffect(() => { const id = setInterval(() => setCount(c => c + 1), 1000); return () => clearInterval(id); }, []);
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-useeffect-dependency-array-exhaustive-deps-debate">
<summary><b>95. useEffect dependency array — exhaustive-deps debate</b></summary>

Include all values from component scope used inside effect. Omitting causes stale bugs; over-including causes extra runs. Use `useCallback`/refs to stabilize when intentional.

```
useEffect(() => { fetchUser(userId); }, [userId]); // not [user] object
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-how-to-cancel-async-work-in-useeffect">
<summary><b>96. How to cancel async work in useEffect</b></summary>

```
useEffect(() => {
  const ac = new AbortController();
  fetch(url, { signal: ac.signal }).then(...).catch(e => {
    if (e.name !== 'AbortError') throw e;
  });
  return () => ac.abort();
}, [url]);
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-usesyncexternalstore-when-and-why">
<summary><b>97. useSyncExternalStore — when and why</b></summary>

Subscribe to external stores safely with concurrent rendering — avoids tearing. Used by Redux, Zustand internally. Browser APIs like `matchMedia`.

```
const width = useSyncExternalStore(
  (cb) => { window.addEventListener('resize', cb); return () => window.removeEventListener('resize', cb); },
  () => window.innerWidth,
  () => 1024 // SSR snapshot
);
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-how-do-you-profile-react-performance-in-production">
<summary><b>98. How do you profile React performance in production</b></summary>

- React DevTools Profiler
- Chrome Performance + React DevTools extension
- Web Vitals (LCP, INP, CLS)
- Why Did You Render (dev)
- Real User Monitoring (Datadog, Sentry)

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-code-splitting-strategies-in-react">
<summary><b>99. Code splitting strategies in React</b></summary>

```
const Admin = lazy(() => import('./Admin'));
<Suspense fallback={<Skeleton />}><Admin /></Suspense>

// Route-based: React Router lazy routes
// Component-based: heavy charts, editors
// Prefetch on hover: import('./Admin') on mouseEnter
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-virtualization-for-long-lists-react-window-vs-react-virtuoso">
<summary><b>100. Virtualization for long lists — react-window vs react-virtuoso</b></summary>

Render only visible rows. O(viewport) DOM nodes vs O(n). Variable height → virtuoso. Fixed → react-window simpler.

```
import { FixedSizeList } from 'react-window';
<FixedSizeList height={400} width={300} itemCount={10000} itemSize={35}>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</FixedSizeList>
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-react-server-components-rsc-what-problem-do-they-solve">
<summary><b>101. React Server Components (RSC) — what problem do they solve</b></summary>

Zero-bundle server components — fetch on server, stream HTML. Client components for interactivity. Reduces JS shipped. Framework-specific (Next.js App Router).

Senior: contrast with SSR (full page HTML) — RSC serializes component tree, not just HTML string.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-suspense-for-data-fetching-patterns-and-pitfalls">
<summary><b>102. Suspense for data fetching — patterns and pitfalls</b></summary>

Throw promise from cache; Suspense boundary catches. Needs framework/cache layer (TanStack Query experimental, Relay, Next.js).

Pitfall: waterfall if boundaries nested wrong — fetch at route level in parallel.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-compound-components-pattern-with-context">
<summary><b>103. Compound components pattern with Context</b></summary>

```
const TabsCtx = createContext(null);
function Tabs({ children, value, onChange }) {
  return <TabsCtx.Provider value={{ value, onChange }}>{children}</TabsCtx.Provider>;
}
Tabs.List = function List({ children }) { ... };
Tabs.Panel = function Panel({ value, children }) {
  const ctx = useContext(TabsCtx);
  return ctx.value === value ? children : null;
};
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-render-props-vs-hoc-vs-hooks-evolution-and-trade-offs">
<summary><b>104. Render props vs HOC vs hooks — evolution and trade-offs</b></summary>

**HOC:** wrapper hell, ref/props collision.** Render props:** callback nesting.** Hooks:** preferred — composable, no nesting. HOCs still used for error boundaries, router `withRouter` legacy.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-error-boundaries-limitations-and-patterns">
<summary><b>105. Error boundaries — limitations and patterns</b></summary>

Catch render errors in children — not event handlers, async, SSR alone. Use try/catch in handlers; error boundary for UI fallback.

```
class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(e) { return { error: e }; }
  render() { return this.state.error ? <Fallback /> : this.props.children; }
}
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-portals-use-cases-beyond-modals">
<summary><b>106. Portals — use cases beyond modals</b></summary>

```
createPortal(<Tooltip />, document.body);
// Modals, tooltips escaping overflow:hidden, dropdowns in tables
```

Events bubble through React tree (not DOM tree) — intentional.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-forwardref-deprecation-in-react-19-migration">
<summary><b>107. forwardRef deprecation in React 19 — migration</b></summary>

```
// Before
const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);
// React 19
function Input({ ref, ...props }) { return <input ref={ref} {...props} />; }
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-lifting-state-up-when-and-why">
<summary><b>108. Lifting state up — when and why</b></summary>

When two siblings need the same data (e.g. filter input + filtered list), move state to closest common ancestor. Avoid lifting higher than necessary — increases re-render blast radius.

```
function Page() {
  const [query, setQuery] = useState('');
  return <><SearchBox value={query} onChange={setQuery} /><Results query={query} /></>;
}
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-prop-drilling-solutions-ranked">
<summary><b>109. Prop drilling — solutions ranked</b></summary>

1) Colocate state 2) Component composition (children slot) 3) Context for truly global 4) External store if updates are frequent. Don't reach for Redux on first drill — measure pain first.

```
// Composition avoids drill
<Layout sidebar={<Filters />} main={<Table />} />
```

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-react-lazy-and-dynamic-import-code-splitting">
<summary><b>110. React.lazy and dynamic import — code splitting</b></summary>

lazy() wraps dynamic import(); bundler creates async chunk loaded on first render. Pair with Suspense boundary showing fallback. Reduces initial JS parse cost.

```
const Admin = lazy(() => import('./Admin'));
```

Over-splitting creates many small chunks — HTTP overhead. Balance route-level splits.

Prefetch on hover: import('./Admin') warms cache before click.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-hydration-mismatch-causes-and-fixes">
<summary><b>111. Hydration mismatch — causes and fixes</b></summary>

SSR HTML must match client first render. Mismatch: Date.now(), random IDs, browser-only APIs in render. React warns and may discard server HTML.

```
useEffect(() => setClientTime(Date.now()), []); // not in render
```

suppressHydrationWarning only for known diffs — masks real bugs.

useId() for stable SSR/client IDs.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-react-18-automatic-batching">
<summary><b>112. React 18 automatic batching</b></summary>

Multiple setStates in same event handler, setTimeout, promise chain batch to one re-render. Fewer intermediate DOM commits.

```
Promise.resolve().then(() => { setA(1); setB(2); }); // one render
```

React 17 only batched in React events — 18 unified.

flushSync opts out intentionally.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-flushsync-when-and-why-avoid">
<summary><b>113. flushSync — when and why avoid</b></summary>

Forces synchronous DOM update before next line — escape hatch for measuring DOM or integrating non-React libs.

```
import { flushSync } from 'react-dom'; flushSync(() => setCount(1));
```

Breaks concurrent rendering benefits — use sparingly.

Prefer useLayoutEffect over flushSync when possible.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-usedeferredvalue-vs-debounce">
<summary><b>114. useDeferredValue vs debounce</b></summary>

useDeferredValue keeps showing stale UI while deferring expensive re-render of deferred value — integrated with concurrent priorities.

```
const deferredQuery = useDeferredValue(query); const list = useMemo(() => filter(huge, deferredQuery), [deferredQuery]);
```

Debounce delays input; deferred value delays downstream render — different UX.

Show isPending with useTransition for loading hint.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-synthetic-events-in-react">
<summary><b>115. Synthetic events in React</b></summary>

React attaches delegated listeners at root, normalizes events cross-browser. React 17+ attaches to root container not document.

```
e.stopPropagation() still works; pool removed in React 17+.
```

Native listener on DOM alongside React — order matters.

Prefer React handlers for consistency.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-dangerouslysetinnerhtml-safely">
<summary><b>116. dangerouslySetInnerHTML safely</b></summary>

Bypasses React escaping — XSS if string contains user HTML.

```
import DOMPurify from 'dompurify'; <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
```

Sanitizer config must allow only needed tags — no script.

Prefer structured content over raw HTML when possible.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-derived-state-anti-pattern">
<summary><b>117. Derived state anti-pattern</b></summary>

Copying props to state causes dual source of truth — stale when props update.

```
// BAD: useState(props.value) // GOOD: derive or key={id} remount
```

key remount resets state when entity changes — clean pattern.

getDerivedStateFromProps largely replaced by controlled pattern.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-tanstack-query-vs-useeffect-data-fetching">
<summary><b>118. TanStack Query vs useEffect data fetching</b></summary>

Query provides cache, deduplication, background refetch, staleTime, retry, devtools — battle-tested.

```
useQuery({ queryKey: ['orders'], queryFn: fetchOrders, staleTime: 60_000 })
```

Learning curve + bundle size vs reinventing bugs.

Server state in Query; UI state in useState/URL.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-react-hook-form-vs-formik">
<summary><b>119. React Hook Form vs Formik</b></summary>

RHF uses uncontrolled inputs + refs — fewer re-renders on large forms. Formik controlled — simpler mental model small forms.

```
const { register, handleSubmit } = useForm(); <input {...register('email')} />
```

RHF + Zod resolver for schema validation popular combo.

Measure re-renders on 50+ field forms.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-testing-library-query-priority">
<summary><b>120. Testing Library query priority</b></summary>

Query as user would: getByRole > labelText > placeholder > text > testId last resort.

```
screen.getByRole('button', { name: /save/i })
```

Implementation details (class names) break tests on refactor.

userEvent over fireEvent for realistic interactions.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-msw-in-dev-and-test">
<summary><b>121. MSW in dev and test</b></summary>

Service worker (or node server) intercepts network — same handlers everywhere.

```
http.get('/api/user', () => HttpResponse.json(mockUser))
```

Doesn't replace unit tests for pure logic.

Pair with OpenAPI-generated mocks.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-module-federation-react-singleton">
<summary><b>122. Module Federation + React singleton</b></summary>

Shared react/react-dom must be singleton or hooks break with two copies.

```
shared: { react: { singleton: true, requiredVersion: '^19' } }
```

Version mismatch across shell/remotes — align in CI.

Integration test shell+remote together.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-react-19-activity-api">
<summary><b>123. React 19 Activity API</b></summary>

Hide UI preserving state vs unmount — like display:none for subtrees.

```
<Activity mode={visible ? 'visible' : 'hidden'}><Panel /></Activity>
```

Still in adoption — know concept for interviews.

Alternative: CSS hide + aria-hidden.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-react-server-components-boundary">
<summary><b>124. React Server Components boundary</b></summary>

Server Components don't ship JS — async data fetch on server. Client Components marked "use client" for hooks/events.

```
// app/page.tsx — async Server Component
export default async function Page() { const data = await db.query(); }
```

RSC framework-specific (Next App Router).

Don't fetch in Client Component if RSC can.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-server-actions-pattern">
<summary><b>125. Server Actions pattern</b></summary>

Async functions run on server invoked from form/action — progressive enhancement.

```
<form action={submitOrder}>...</form>
```

Security: validate on server always.

Pair with useActionState for pending UI.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-usetransition-pending-ui">
<summary><b>126. useTransition pending UI</b></summary>

isPending true while transition update in progress — non-blocking UI feedback.

```
const [pending, start] = useTransition(); start(() => setTab('heavy'));
```

Not for data fetching alone — use Query.

Show skeleton when pending.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-error-boundary-reset-with-key">
<summary><b>127. Error boundary reset with key</b></summary>

Remount subtree after error by changing key on retry.

```
<ErrorBoundary key={retryCount}><App /></ErrorBoundary>
```

Boundaries don't catch event handler errors.

Log to Sentry in componentDidCatch.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-ref-callback-cleanup-pattern">
<summary><b>128. Ref callback cleanup pattern</b></summary>

Ref callback can return cleanup when element unmounts — React 19 pattern.

```
ref={(node) => { if (node) observe(node); return () => unobserve(node); }}
```

Cleaner than useEffect+ref for DOM integrations.

Used in Leaflet/map integrations.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-strictmode-imperative-library-teardown">
<summary><b>129. StrictMode imperative library teardown</b></summary>

Double mount in dev requires cleanup in effect return — map.remove(), ws.close().

```
return () => { map.remove(); container._leaflet_id = undefined; };
```

Production single mount — but cleanup still required on unmount.

FleetPanda LeafletMapView pattern.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-react-compiler-adoption">
<summary><b>130. React Compiler adoption</b></summary>

Compile-time auto-memo reduces manual useMemo/useCallback — verify with Profiler before/after.

```
Enable compiler plugin in vite/babel config per React docs.
```

Not all codebases compatible day one.

Manual memo still valid where compiler skips.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-profiler-workflow-for-perf-interviews">
<summary><b>131. Profiler workflow for perf interviews</b></summary>

Record interaction → find components with high render time → fix memo/split/context/selectors.

```
<Profiler id="Table" onRender={onRender}><Table /></Profiler>
```

Profiler adds dev overhead — use production-like data volume.

Quantify: "Table render 40ms → 8ms after selector fix".

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

<details id="react-micro-frontend-lazy-remote-loading">
<summary><b>132. Micro-frontend lazy remote loading</b></summary>

Shell lazy-loads remoteEntry on route — Suspense + error boundary per remote.

```
const Shop = lazy(() => import('shop/App'));
```

Remote down — graceful fallback UI required.

Prefetch remote on nav hover.

- **React 19 Compiler?** If Compiler auto-memoizes, redundant useMemo/useCallback adds noise — Profile before/after and delete manual memo where Compiler proves stable.
- **Profiler proof?** Record interaction, sort by render duration, cite component name and ms saved after fix (e.g. context split or selector).
- **Breaks at scale?** Usually context too high, list without virtualization, or derived state in render — name the scaling trigger explicitly.

</details>

---

## Redux (35 questions)

<details id="redux-redux-core-principles-and-when-not-to-use-redux">
<summary><b>133. Redux core principles and when NOT to use Redux</b></summary>

Single store, pure reducers, actions describe changes. Skip for: local UI state, simple apps, server state (use TanStack Query). Use when: complex shared client state, time-travel debugging, middleware needs.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-redux-toolkit-vs-classic-redux-what-rtk-solves">
<summary><b>134. Redux Toolkit vs classic Redux — what RTK solves</b></summary>

```
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; } // Immer inside
  }
});

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
  middleware: (getDefault) => getDefault().concat(logger)
});
```

RTK: Immer, createSlice, configureStore, RTK Query, less boilerplate.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-explain-middleware-chain-dispatch-flow">
<summary><b>135. Explain middleware chain — dispatch flow</b></summary>

```
// dispatch(action) → middleware1 → middleware2 → reducer → new state → subscribers
const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};
```

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-redux-thunk-vs-redux-saga-vs-rtk-query">
<summary><b>136. redux-thunk vs redux-saga vs RTK Query</b></summary>

- **thunk:** async in action creators — simple
- **saga:** generator testable orchestration — complex flows
- **RTK Query:** server cache, invalidation — replaces most thunks for API

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-normalized-state-shape-why-entities-ids">
<summary><b>137. Normalized state shape — why entities + ids</b></summary>

```
{
  users: { byId: { '1': { id: '1', name: 'Ann' } }, allIds: ['1'] },
  posts: { byId: {...}, allIds: [...] }
}
// O(1) update, no duplicate nested user objects
```

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-createselector-reselect-memoization">
<summary><b>138. createSelector (Reselect) — memoization</b></summary>

```
const selectItems = (state) => state.items;
const selectFilter = (state) => state.filter;
export const selectVisible = createSelector([selectItems, selectFilter], (items, filter) =>
  items.filter(i => i.cat === filter)
); // recomputes only when inputs change
```

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-rtk-query-cache-lifecycle">
<summary><b>139. RTK Query — cache lifecycle</b></summary>

```
const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => '/posts', providesTags: ['Post'] }),
    addPost: builder.mutation({
      query: (body) => ({ url: '/posts', method: 'POST', body }),
      invalidatesTags: ['Post']
    })
  })
});
```

Tags trigger refetch; configurable staleTime, polling, optimistic updates.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-useselector-performance-equality-checks">
<summary><b>140. useSelector performance — equality checks</b></summary>

```
// BAD: new object every time → always re-render
const user = useSelector(s => ({ name: s.user.name }));
// GOOD:
const name = useSelector(s => s.user.name);
// Or shallowEqual for object picks
useSelector(selectUser, shallowEqual);
```

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-redux-devtools-time-travel-and-action-replay">
<summary><b>141. Redux DevTools — time travel and action replay</b></summary>

Records action stream; jump to state; import/export for bug reports. configureStore enables by default in dev.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-immer-in-createslice-how-draft-works">
<summary><b>142. Immer in createSlice — how draft works</b></summary>

Write "mutating" code on Proxy draft; Immer produces immutable next state. Can't mutate non-draft returns; async needs separate thunk.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-action-creators-in-redux">
<summary><b>143. Action creators in Redux</b></summary>

Functions returning plain { type, payload } objects. RTK createSlice auto-generates creators from reducers.

```
dispatch(increment()) // vs dispatch({ type: 'counter/increment' })
```

Over-abstraction if one-liner — RTK reduces need.

Keep action names domain-scoped: orders/assign.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-combinereducers-composition">
<summary><b>144. combineReducers composition</b></summary>

Maps keys to slice reducers — each slice independent. Root state typed as combined shape.

```
combineReducers({ auth: authReducer, cart: cartReducer })
```

Cross-slice logic belongs in middleware/listeners not reducer imports.

RTK configureStore accepts reducer object directly.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-redux-persist">
<summary><b>145. redux-persist</b></summary>

Persists slice to localStorage/IndexedDB, rehydrates on load. Whitelist slices — don't persist sensitive tokens raw.

```
persistReducer({ key: 'root', storage, whitelist: ['cart'] }, rootReducer)
```

Stale persisted schema — version migrations needed.

Encrypt persist for PII if required.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-ssr-redux-hydration">
<summary><b>146. SSR Redux hydration</b></summary>

Server renders with preloadedState from request; client createStore(preloadedState) must match HTML.

```
const store = configureStore({ preloadedState: window.__PRELOADED_STATE__ });
```

Mismatch causes duplicate fetch or flash.

Strip secrets from serialized state.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-selector-colocation">
<summary><b>147. Selector colocation</b></summary>

selectors live in slice file with createSelector — co-locate with state shape they read.

```
export const selectCartTotal = createSelector(selectItems, items => sum(items))
```

Circular imports if slices cross-reference — use entity adapter patterns.

Test selectors as pure functions.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-ducks-feature-folder-pattern">
<summary><b>148. Ducks / feature folder pattern</b></summary>

Slice + selectors + thunks + components in features/orders/ — scalable team ownership.

```
features/orders/ordersSlice.ts, OrdersList.tsx
```

Deep nesting without boundaries — enforce public API index.ts.

Nx module boundaries enforce imports.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-giant-slice-anti-pattern">
<summary><b>149. Giant slice anti-pattern</b></summary>

Single slice for entire app — hard to maintain, broad re-renders if poorly selected.

```
Split: authSlice, ordersSlice, uiSlice
```

Too many slices — overhead negligible vs god slice.

Match slice to domain bounded context.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-side-effects-never-in-reducer">
<summary><b>150. Side effects NEVER in reducer</b></summary>

Reducers must be pure sync functions — no fetch, no Date.now() hidden side effects.

```
Use createAsyncThunk or listener middleware instead
```

Impure reducer breaks time-travel debugging.

Interview red flag if candidate puts API in reducer.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-rtk-listener-middleware">
<summary><b>151. RTK listener middleware</b></summary>

Declarative when(action, effect) — replaces many custom middlewares.

```
listenerMiddleware.startListening({ matcher: isAnyOf(fetched), effect: async (a, api) => {} })
```

Over-listening causes effect spaghetti — document triggers.

Great for cross-cutting: analytics, toasts.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-rtk-query-optimistic-updates">
<summary><b>152. RTK Query optimistic updates</b></summary>

onQueryStarted patches cache optimistically, undo on error with patchResult.undo()

```
api.util.updateQueryData('getPost', id, draft => { draft.title = 'new' })
```

Complex rollback — prefer pessimistic for payments.

Tags + invalidation simpler for many cases.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-redux-vs-context">
<summary><b>153. Redux vs Context</b></summary>

Redux: middleware, devtools, selectors, predictable updates at scale. Context: simpler injection, worse for frequent updates without split.

```
Cart with 50 updates/min → external store or Query not mega Context
```

Redux boilerplate reduced by RTK.

2025: Query for server, Zustand for UI, Redux if already invested.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-redux-vs-zustand">
<summary><b>154. Redux vs Zustand</b></summary>

Zustand: minimal API, hooks, no Provider required, good for UI state.

```
const useStore = create(set => ({ count: 0, inc: () => set(s => ({ count: s.count+1 })) }))
```

Less ecosystem for time-travel enterprise tooling.

Pick Zustand for new small-medium apps.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-redux-vs-jotai-recoil">
<summary><b>155. Redux vs Jotai/Recoil</b></summary>

Atomic state — component subscribes to atoms, fine-grained updates without selectors.

```
atom family per entity ID — good for spreadsheet cells
```

Different mental model from flux.

Know concept even if team uses Redux.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-batching-in-react-18-redux">
<summary><b>156. Batching in React 18 + Redux</b></summary>

Multiple dispatches in async handler batch to one React render automatically.

```
dispatch(a()); dispatch(b()); // one render
```

React-Redux v8+ uses sync external store correctly.

Legacy unstable_batchedUpdates rarely needed.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-serializable-check-middleware">
<summary><b>157. Serializable check middleware</b></summary>

RTK warns if action/state contains Date, Map, function, Promise — breaks persistence/devtools.

```
store serializableCheck: { ignoredPaths: ['meta.timestamp'] }
```

Ignore paths sparingly with comment why.

Convert Dates to ISO strings in actions.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-auth-token-in-rtk-query-basequery">
<summary><b>158. Auth token in RTK Query baseQuery</b></summary>

prepareHeaders injects Authorization from state or cookie-aware fetch.

```
baseQuery: fetchBaseQuery({ prepareHeaders: (h, { getState }) => { h.set('Authorization', token(getState())); } })
```

Token in Redux state — XSS can steal; prefer HttpOnly cookie + BFF.

401 handler dispatches logout via listener.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-createentityadapter">
<summary><b>159. createEntityAdapter</b></summary>

Normalized CRUD helpers: addOne, updateOne, removeOne, selectors for all IDs.

```
const adapter = createEntityAdapter<User>(); adapter.reducers in slice
```

Overkill for 5-item list.

Standard for large normalized tables.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-rtk-query-prefetch">
<summary><b>160. RTK Query prefetch</b></summary>

Warm cache before navigation — instant page.

```
dispatch(api.util.prefetch('getUser', userId, { force: true }))
```

Over-prefetch wastes bandwidth.

Prefetch on link hover/focus.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-injectreducer-legacy-code-split">
<summary><b>161. injectReducer (legacy code split)</b></summary>

Dynamically add reducer to store on route load — replaced by RTK Query + static slices mostly.

```
store.injectReducer('admin', adminReducer)
```

TypeScript root state typing harder with injection.

Prefer route-level lazy components not lazy reducers.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-testing-reducers">
<summary><b>162. Testing reducers</b></summary>

Pure function test: given state + action → expect new state. No store needed.

```
expect(reducer({ count: 0 }, increment())).toEqual({ count: 1 })
```

Integration tests still needed for middleware.

Table-driven tests for all action types.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-testing-thunks">
<summary><b>163. Testing thunks</b></summary>

Use real store + waitFor or mock fetch with MSW — avoid redux-mock-store for integration.

```
render with Provider; userEvent click; await waitFor(() => expect(screen.getByText(...)))
```

Mock store doesn't run middleware realistically.

MSW + RTL preferred pattern.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-extrareducers-cross-slice">
<summary><b>164. extraReducers cross-slice</b></summary>

Slice listens to other slice actions via builder.addCase(otherAction, ...)

```
extraReducers: (builder) => { builder.addCase(auth.logout, () => initialState); }
```

Couples slices — prefer listener for loose coupling sometimes.

Clear cart on logout common pattern.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-global-error-slice-listener">
<summary><b>165. Global error slice + listener</b></summary>

Central API error handler dispatches setError or toast on rejected thunks.

```
listenerMiddleware.startListening({ predicate: isRejected, effect: (a) => toast.error(a.payload) })
```

Generic errors lose context — include requestId.

401 triggers auth refresh flow once.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-undo-redo-with-redux-undo">
<summary><b>166. Undo/redo with redux-undo</b></summary>

Wrap reducer with undoable() — past/future stacks.

```
import undoable from 'redux-undo'; undoable(todosReducer)
```

Memory cap needed for large states.

Productivity apps only — not typical CRUD apps.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

<details id="redux-industry-trend-2025-redux-role">
<summary><b>167. Industry trend 2025 — Redux role</b></summary>

Many teams: TanStack Query (server cache) + Zustand/Context (UI). Redux remains in large existing codebases and RTK Query shops.

```
Greenfield: evaluate Query first; Redux if need listener middleware at scale
```

Migration costly — strangler not big-bang.

Senior: know when NOT to add Redux.

- **Greenfield Redux?** Only if team needs middleware/devtools/time-travel at scale; otherwise RTK Query + Zustand/Jotai for UI is common 2025 default.
- **RTK Query angle?** Server cache replaces most hand-rolled thunks — mention tags, invalidation, and optimistic updates where relevant.
- **Testing split?** Reducers/thunks unit pure; integration with MSW + RTL for user flows; avoid redux-mock-store for middleware paths.

</details>

---

## Webpack (30 questions)

<details id="webpack-webpack-core-concepts-entry-output-loaders-plugins">
<summary><b>168. Webpack core concepts: entry, output, loaders, plugins</b></summary>

```
module.exports = {
  entry: './src/index.js',
  output: { path: path.resolve('dist'), filename: '[name].[contenthash].js', clean: true },
  module: { rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }] },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })]
};
```

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-module-federation-micro-frontends">
<summary><b>169. Module federation — micro-frontends</b></summary>

```
// Host webpack.config
new ModuleFederationPlugin({
  remotes: { shop: 'shop@https://shop.example/remoteEntry.js' },
  shared: { react: { singleton: true, requiredVersion: '^18' } }
});
// Host component: const Product = lazy(() => import('shop/Product'));
```

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-contenthash-vs-chunkhash-vs-hash">
<summary><b>170. Contenthash vs chunkhash vs hash</b></summary>

- **hash:** build-wide — bad for caching
- **chunkhash:** per chunk
- **contenthash:** per file content — best long-term cache

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-tree-shaking-requirements">
<summary><b>171. Tree shaking — requirements</b></summary>

ES modules, sideEffects: false in package.json, production mode, avoid barrel re-export anti-patterns, Terser dead code elimination.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-code-splitting-dynamic-import-syntax">
<summary><b>172. Code splitting — dynamic import syntax</b></summary>

```
import(/* webpackChunkName: "admin" */ './Admin').then(m => ...);
// SplitChunksPlugin: vendors, common, async chunks
```

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-webpack-dev-server-vs-production-build-differences">
<summary><b>173. webpack-dev-server vs production build differences</b></summary>

Dev: in-memory bundles, HMR, source maps cheap, no minification. Prod: minify, tree-shake, contenthash, split chunks, no HMR.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-source-maps-strategies-for-production">
<summary><b>174. Source maps strategies for production</b></summary>

`hidden-source-map` or `nosources-source-map` — upload to Sentry, don't expose sources publicly.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-resolve-alias-and-extensions">
<summary><b>175. Resolve alias and extensions</b></summary>

```
resolve: { alias: { '@': path.resolve('src') }, extensions: ['.tsx', '.ts', '.js'] }
```

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-asset-modules-webpack-5">
<summary><b>176. Asset modules (Webpack 5)</b></summary>

```
{ test: /\.png/, type: 'asset/resource' } // emits file
{ test: /\.svg/, type: 'asset/inline' }   // data URI
```

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-bundle-analyzer-finding-bloat">
<summary><b>177. Bundle analyzer — finding bloat</b></summary>

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
plugins: [new BundleAnalyzerPlugin()]
```

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-loader-execution-order">
<summary><b>178. Loader execution order</b></summary>

Loaders run right-to-left (or bottom-to-top in use array). sass-loader → css-loader → style-loader transforms SCSS to JS-injected styles.

```
use: ['style-loader', 'css-loader', 'sass-loader']
```

style-loader in prod bloats JS — use MiniCssExtractPlugin in production.

Rule oneOf for different file types.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-babel-loader-vs-ts-loader">
<summary><b>179. babel-loader vs ts-loader</b></summary>

babel-loader transpiles via Babel presets; ts-loader uses TypeScript compiler — can typecheck or transpileOnly + fork-ts-checker for speed.

```
ts-loader: { transpileOnly: true }
```

esbuild-loader faster transpile without types — tsc --noEmit in CI for types.

Match team CI strategy.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-thread-loader-parallelization">
<summary><b>180. thread-loader parallelization</b></summary>

Offloads expensive loaders to worker pool — speeds large codebase builds.

```
use: [{ loader: 'thread-loader' }, { loader: 'babel-loader', options: { cacheDirectory: true } }]
```

Worker startup overhead — not worth tiny projects.

Combine with cacheDirectory.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-webpack-5-filesystem-cache">
<summary><b>181. Webpack 5 filesystem cache</b></summary>

cache: { type: 'filesystem' } persists module graph between builds — dramatic CI speed with cache restore.

```
cache: { type: 'filesystem', buildDependencies: { config: [__filename] } }
```

Stale cache after config change — buildDependencies invalidates.

Share cache in CI with actions/cache.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-externals-configuration">
<summary><b>182. externals configuration</b></summary>

Exclude deps from bundle — expect global on page (CDN React).

```
externals: { react: 'React' }
```

Module Federation uses shared not externals for MFE.

Rare in modern SPA — prefer bundling for version control.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-hotmodulereplacement-api">
<summary><b>183. HotModuleReplacement API</b></summary>

module.hot.accept('./App', () => render()) — swap module without full reload preserving state when possible.

```
if (module.hot) module.hot.accept()
```

Doesn't HMR failed syntax errors — full reload.

Vite HMR faster via ESM.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-defineplugin-environmentplugin">
<summary><b>184. DefinePlugin / EnvironmentPlugin</b></summary>

Replace process.env.NODE_ENV at build time — dead code elimination in production.

```
new webpack.DefinePlugin({ 'process.env.API': JSON.stringify(process.env.API) })
```

Leaks if accidentally embedding secrets — only public vars.

Vite uses import.meta.env instead.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-webpack-5-removed-node-polyfills">
<summary><b>185. Webpack 5 removed Node polyfills</b></summary>

No auto polyfill for crypto/stream — add resolve.fallback if library needs Node APIs in browser.

```
resolve: { fallback: { crypto: require.resolve('crypto-browserify') } }
```

Prefer isomorphic library over polyfills.

Question signals webpack migration pain.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-minicssextractplugin-vs-style-loader">
<summary><b>186. MiniCssExtractPlugin vs style-loader</b></summary>

Extract CSS to separate files in prod — parallel download, cacheable, no FOUC from JS CSS injection.

```
new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
```

More files to manage — HTTP/2 mitigates.

Critical CSS still separate concern.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-css-modules-in-webpack">
<summary><b>187. CSS Modules in webpack</b></summary>

css-loader modules: { localIdentName: '[name]__[local]___[hash:base64:5]' } — scoped class names.

```
import styles from './Button.module.css'
```

Global styles need :global selector.

Same pattern in Vite natively.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-postcss-loader-chain">
<summary><b>188. PostCSS loader chain</b></summary>

postcss-loader runs autoprefixer, postcss-preset-env after css-loader parses imports.

```
postcss.config.js with tailwind + autoprefixer
```

Order matters in rule array.

Tailwind v4 may use @tailwindcss/vite instead.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-duplicate-package-detection">
<summary><b>189. Duplicate package detection</b></summary>

Two versions of react in bundle — invalid hook call. webpack resolve.alias force single copy.

```
resolve: { alias: { react: path.resolve('./node_modules/react') } }
```

pnpm strictness surfaces this earlier than npm hoisting.

npm ls react / why-dupes tools.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-performance-maxassetsize-hints">
<summary><b>190. performance.maxAssetSize hints</b></summary>

Warn or errors when entry/chunk exceeds budget — enforce perf in CI.

```
performance: { maxEntrypointSize: 250000, hints: 'error' }
```

Gzip size ≠ transferred brotli size — use size-limit on gzip.

Pair with bundle analyzer.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-scope-hoisting-concatenation">
<summary><b>191. Scope hoisting / concatenation</b></summary>

module concatenation in production merges modules — smaller scope overhead.

```
mode: 'production' enables by default in webpack 5
```

Breaks some dynamic patterns — rare issues.

Rollup still strong for libraries.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-webpack-vs-rollup-vs-esbuild">
<summary><b>192. Webpack vs Rollup vs esbuild</b></summary>

Webpack: app bundling, code splitting, ecosystem. Rollup: ESM libraries tree-shake. esbuild: speed transpile/bundle subset.

```
Vite uses esbuild dev + Rollup prod
```

Pick tool for job — senior knows migration paths.

esbuild doesn't replace all webpack loaders yet.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-custom-webpack-plugin-anatomy">
<summary><b>193. Custom webpack plugin anatomy</b></summary>

apply(compiler) hooks into compilation lifecycle — emit assets, analyze bundle.

```
compiler.hooks.emit.tapAsync('MyPlugin', (compilation, cb) => { ...; cb(); })
```

Prefer existing plugins before custom.

tap vs tapAsync vs tapPromise.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-module-resolution-failure-debugging">
<summary><b>194. Module resolution failure debugging</b></summary>

Can't resolve module — wrong alias, missing dep, ESM/CJS mismatch, exports field in package.json.

```
Check resolve.extensions, mainFields: ['browser', 'module', 'main']
```

pnpm .npmrc shamefully-hoist for broken packages.

Read error stack for resolver path.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-splitchunksplugin-strategy">
<summary><b>195. SplitChunksPlugin strategy</b></summary>

Split vendors, common async chunks — cache groups by test regex.

```
optimization: { splitChunks: { chunks: 'all', cacheGroups: { vendor: { test: /node_modules/ } } } }
```

Over-splitting hurts HTTP/1.1 — less issue on H2.

Analyze before tuning defaults.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-source-map-dev-vs-prod">
<summary><b>196. Source map dev vs prod</b></summary>

eval-cheap-module-source-map dev fast; hidden-source-map prod for Sentry without exposing publicly.

```
devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'eval-cheap-module-source-map'
```

Full source-map slow builds.

Upload maps to Sentry in CI only.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

<details id="webpack-webpack-to-vite-migration-checklist">
<summary><b>197. Webpack to Vite migration checklist</b></summary>

index.html entry root, import.meta.env, no require(), vitest, check Node polyfills, update plugins to vite equivalents.

```
Manual test: dev HMR, prod build, dynamic imports, env vars
```

Parallel run both in CI during transition.

Document in ADR for interview story.

- **Vite equivalent?** Map loader→plugin, splitChunks→rollup manualChunks, DefinePlugin→define, resolve.alias same in vite.config.
- **ESM-only migration?** Drop require(), fix CJS deps, use "type":"module" or dual package — watch Node native fetch vs polyfills.
- **Monorepo debug?** pnpm workspace protocol, transpilePackages in Next, trace resolution with DEBUG=vite:* or webpack stats.

</details>

---

## Vite (25 questions)

<details id="vite-why-is-vite-dev-server-faster-than-webpack-dev">
<summary><b>198. Why is Vite dev server faster than Webpack dev</b></summary>

Dev: native ESM — browser requests modules directly, esbuild pre-bundles deps only. Webpack bundles entire graph before serve. HMR updates single module chain.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vite-production-build-what-runs-under-the-hood">
<summary><b>199. Vite production build — what runs under the hood</b></summary>

`vite build` uses Rollup for tree-shaking, code splitting, minification (esbuild or terser). Not esbuild for full prod bundle historically — Rollup for better tree-shake.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vite-config-ts-essential-options">
<summary><b>200. vite.config.ts essential options</b></summary>

```
export default defineConfig({
  plugins: [react()],
  base: '/my-app/',
  resolve: { alias: { '@': '/src' } },
  server: { port: 5173, proxy: { '/api': 'http://localhost:3000' } },
  build: { target: 'es2020', sourcemap: true, rollupOptions: { output: { manualChunks: { vendor: ['react', 'react-dom'] } } } }
});
```

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-environment-variables-in-vite">
<summary><b>201. Environment variables in Vite</b></summary>

```
// .env.local — VITE_ prefix exposed to client
VITE_API_URL=https://api.example.com
// code: import.meta.env.VITE_API_URL
// NOT process.env (unless defined) — security by prefix
```

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-ssr-with-vite">
<summary><b>202. SSR with Vite</b></summary>

`vite build --ssr` + server entry. Frameworks: vite-plugin-ssr, TanStack Start. Dual bundle client + server.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vitest-integration-why-same-config">
<summary><b>203. Vitest integration — why same config</b></summary>

```
// vite.config.ts
test: { globals: true, environment: 'jsdom', setupFiles: './setupTests.ts' }
```

Shares resolve aliases, plugins, transforms — tests match app bundling.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-optimizedeps-pre-bundling">
<summary><b>204. optimizeDeps — pre-bundling</b></summary>

esbuild bundles CJS deps to ESM on first dev start. Force re-scan: `optimizeDeps.force`. Include/exclude problematic packages.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-dynamic-import-and-code-splitting-in-vite">
<summary><b>205. Dynamic import and code splitting in Vite</b></summary>

```
const Chart = lazy(() => import('./Chart')); // Rollup async chunk automatically
```

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-library-mode">
<summary><b>206. Library mode</b></summary>

```
build: { lib: { entry: 'src/index.ts', name: 'MyLib', fileName: 'my-lib' }, rollupOptions: { external: ['react'] } }
```

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-migrating-webpack-vite-checklist">
<summary><b>207. Migrating Webpack → Vite checklist</b></summary>

- Replace require → import
- index.html at root entry
- import.meta.env not process.env
- SVG/React — vite-plugin-svgr
- Node polyfills — rarely needed
- Jest → Vitest

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vite-hmr-api-import-meta-hot">
<summary><b>208. Vite HMR API import.meta.hot</b></summary>

accept hot updates for module without full reload; dispose cleanup on update.

```
if (import.meta.hot) { import.meta.hot.accept(); import.meta.hot.dispose(() => cleanup()); }
```

Full reload if boundary can't accept — check console.

Framework plugins handle most HMR.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-css-code-splitting-in-vite-build">
<summary><b>209. CSS code splitting in Vite build</b></summary>

Async chunk imports get separate CSS files extracted by Rollup — loaded when chunk loads.

```
const Chart = lazy(() => import('./Chart.css' implicit via import))
```

FOUC if CSS chunk slow — preload critical.

Same as webpack mini-css-extract behavior.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-postcss-in-vite">
<summary><b>210. PostCSS in Vite</b></summary>

postcss.config.js auto-loaded — tailwind, autoprefixer without extra vite config.

```
export default { plugins: { tailwindcss: {}, autoprefixer: {} } }
```

PostCSS 8+ required.

Tailwind v4 vite plugin alternative.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-tailwind-with-vite">
<summary><b>211. Tailwind with Vite</b></summary>

@tailwindcss/vite plugin or classic postcss tailwind — content paths scan all template files.

```
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
```

Missing content path = empty CSS output.

JIT generates only used utilities.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vite-plugin-order">
<summary><b>212. Vite plugin order</b></summary>

React plugin before plugins that transform JSX; enforce plugin if ordering critical.

```
plugins: [react(), svgr(), legacy()]
```

Wrong order = cryptic transform errors.

inspect transformed id in debug.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-define-config-constants">
<summary><b>213. define config constants</b></summary>

Replace global constants at build — like DefinePlugin.

```
define: { __APP_VERSION__: JSON.stringify(process.env.npm_package_version) }
```

Don't embed secrets.

Use import.meta.env for env vars primarily.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-public-directory-behavior">
<summary><b>214. public/ directory behavior</b></summary>

Files copied as-is to dist root — no hashing. Good favicon, robots.txt.

```
public/favicon.ico → /favicon.ico
```

Large assets in public skip cache busting — prefer imported assets for hashing.

Reference as /favicon.ico not import.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-assetsinlinelimit">
<summary><b>215. assetsInlineLimit</b></summary>

Assets smaller than threshold inlined as base64 data URL in JS.

```
build: { assetsInlineLimit: 4096 }
```

Inlined assets bloat JS — increase limit carefully for icons.

SVG as component via vite-plugin-svgr instead.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vite-preview-command">
<summary><b>216. vite preview command</b></summary>

Serves production dist locally — verify prod build before deploy.

```
pnpm build && pnpm preview --port 4173
```

Not for production serving — use nginx/CDN.

Catch base path misconfig before GitHub Pages deploy.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vite-mode-and-env-files">
<summary><b>217. Vite mode and env files</b></summary>

.env, .env.local, .env.[mode], .env.[mode].local — loaded by mode flag.

```
vite build --mode staging loads .env.staging
```

.env.local gitignored for secrets.

loadEnv in vite.config for config-time vars.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-loadenv-in-vite-config">
<summary><b>218. loadEnv in vite.config</b></summary>

Access env in config for conditional plugins.

```
const env = loadEnv(mode, process.cwd(), '');
```

Third param prefix filter — empty loads all (careful secrets).

Only VITE_ exposed to client code automatically.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-vite-plugin-pwa">
<summary><b>219. vite-plugin-pwa</b></summary>

Generate service worker + manifest for installable PWA.

```
VitePWA({ registerType: 'autoUpdate' })
```

SW cache invalidation strategy required on deploy.

Test offline after production build.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-monorepo-vite-setup">
<summary><b>220. Monorepo Vite setup</b></summary>

Workspace packages linked — resolve alias to source for fast HMR across packages.

```
resolve: { alias: { '@org/ui': path.resolve(__dirname, '../packages/ui/src') } }
```

Build order — depend on ^build in turbo.

publish packages before app consumes npm version.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-server-warmup-vite-5">
<summary><b>221. server.warmup (Vite 5+)</b></summary>

Pre-transform frequently imported files on server start — faster first page load dev.

```
server: { warmup: { clientFiles: ['./src/main.tsx', './src/App.tsx'] } }
```

Over-warmup slows server start.

DX optimization for large apps.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

<details id="vite-rolldown-future-in-vite-ecosystem">
<summary><b>222. Rolldown future in Vite ecosystem</b></summary>

Rust-based bundler may replace Rollup for prod builds — faster builds same config direction.

```
Watch Vite changelog / rolldown-vite experiments
```

Migration should stay config-compatible in vision.

Mention awareness — shows you follow tooling.

- **Still Webpack?** Legacy IE, custom loader ecosystem, Module Federation host not on Vite yet — be honest about team constraints.
- **Dev vs prod?** Dev: esbuild transform, no bundle; Prod: Rollup tree-shake — behavior differs for dynamic import and env vars.
- **CI validation?** vite build + bundle size limit, preview smoke test, typecheck separate from transform-only dev server.

</details>

---

## HTML (30 questions)

<details id="html-semantic-html-why-it-matters-for-a11y-and-seo">
<summary><b>223. Semantic HTML — why it matters for a11y and SEO</b></summary>

```
<header><nav><main><article><section><aside><footer>
// Not <div class="header"> everywhere — landmarks for screen readers
```

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-document-loading-defer-vs-async-scripts">
<summary><b>224. Document loading — defer vs async scripts</b></summary>

- **async:** download parallel, execute when ready — order not guaranteed
- **defer:** parallel download, execute after HTML parsed — order preserved
- Module scripts defer by default

```
<script type="module" src="/app.js"></script>
```

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-critical-rendering-path-optimization">
<summary><b>225. Critical rendering path optimization</b></summary>

Minimize blocking CSS/JS, inline critical CSS, preload fonts, defer non-critical JS, reduce DOM depth, avoid layout thrashing.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-accessibility-aria-roles-first-rule-of-aria">
<summary><b>226. Accessibility: ARIA roles — first rule of ARIA</b></summary>

"Don't use ARIA if native element exists." `<button>` not `<div role="button">`. ARIA supplements, doesn't fix bad HTML.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-form-accessibility-patterns">
<summary><b>227. Form accessibility patterns</b></summary>

```
<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-hint" aria-invalid={!!error} />
<span id="email-hint">Work email only</span>
{error && <span role="alert">{error}</span>}
```

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-content-security-policy-csp">
<summary><b>228. Content Security Policy (CSP)</b></summary>

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-abc'; style-src 'self' 'unsafe-inline'
```

Prevents XSS injection execution. nonce/hash for inline scripts in SSR.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-shadow-dom-vs-light-dom">
<summary><b>229. Shadow DOM vs Light DOM</b></summary>

Shadow DOM encapsulates styles/markup — Web Components. React doesn't use Shadow by default — libraries like @lit-labs/react bridge.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-custom-elements-and-react">
<summary><b>230. Custom elements and React</b></summary>

React 19 passes props as properties on custom elements when needed. Event naming camelCase vs lowercase nuances.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-picture-srcset-responsive-images">
<summary><b>231. picture / srcset responsive images</b></summary>

```
<img src="fallback.jpg" srcset="small.jpg 480w, large.jpg 1200w" sizes="(max-width:600px) 100vw, 50vw" alt="..." />
```

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-seo-meta-and-open-graph">
<summary><b>232. SEO meta and Open Graph</b></summary>

```
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<link rel="canonical" href="https://example.com/page" />
```

SPA SEO needs SSR/SSG or pre-rendering for crawlers.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-doctype-and-standards-mode">
<summary><b>233. DOCTYPE and standards mode</b></summary>

DOCTYPE html triggers standards mode — not quirks mode with wrong box model behavior.

```
<!DOCTYPE html>
```

Missing DOCTYPE breaks layout subtly in old IE — still teach concept.

First line of every HTML doc.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-lang-attribute-on-html">
<summary><b>234. lang attribute on html</b></summary>

Screen readers pick voice; hyphenation; translation tools. SEO minor signal.

```
<html lang="en">
```

Wrong lang hurts a11y more than SEO.

Required in WCAG for valid page.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-tabindex-values">
<summary><b>235. tabindex values</b></summary>

0 = natural tab order. -1 = programmatic focus only (skip link target). Positive tabindex anti-pattern — scrambles order.

```
<main id="main" tabindex="-1">
```

Positive tabindex harms keyboard users.

Manage focus in modals with -1 roving tabindex.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-focus-trap-in-modal">
<summary><b>236. Focus trap in modal</b></summary>

Tab cycles within dialog until closed; restore focus to trigger on close.

```
useDialogFocus hook: query focusable elements, handle Tab wrap
```

Inert attribute on background simpler in modern browsers.

WCAG 2.4.3 focus order.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-inert-attribute">
<summary><b>237. inert attribute</b></summary>

Native disable interaction on siblings outside modal — pointer-events + a11y tree exclusion.

```
<div inert aria-hidden="true">background</div>
```

Polyfill for older Safari if needed.

Prefer over aria-hidden alone on wrong nodes.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-dialog-element-native-modal">
<summary><b>238. dialog element native modal</b></summary>

showModal() top layer, ::backdrop, Escape close, focus management built-in.

```
<dialog ref={d}><form method="dialog">...</form></dialog>
```

Style backdrop with ::backdrop pseudo.

React: ref.showModal() in effect.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-details-summary-accordion">
<summary><b>239. details/summary accordion</b></summary>

Native disclosure widget — no JS required for expand/collapse.

```
<details><summary>More</summary>content</details>
```

Limited styling vs custom accordion.

Good progressive enhancement.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-input-type-benefits">
<summary><b>240. input type benefits</b></summary>

email, tel, url, number trigger appropriate mobile keyboards and basic validation.

```
<input type="email" autocomplete="email" />
```

type=number spinner UX issues for IDs — sometimes text + pattern.

autocomplete helps password managers.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-autocomplete-attributes">
<summary><b>241. autocomplete attributes</b></summary>

Help browsers/password managers fill correctly — reduce friction and errors.

```
autocomplete="current-password"
```

Wrong autocomplete = wrong suggestions.

Follow WHATWG autocomplete table.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-csp-report-uri-report-to">
<summary><b>242. CSP report-uri / report-to</b></summary>

Monitor XSS/injection attempts via reporting endpoint.

```
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
```

Report-Only mode test before enforce.

Nonce scripts in SSR apps.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-subresource-integrity-sri">
<summary><b>243. Subresource Integrity SRI</b></summary>

Browser verifies hash of CDN script before execute — tamper detection.

```
<script src="cdn.com/lib.js" integrity="sha384-..." crossorigin="anonymous">
```

Hash must update when CDN file changes.

Required for security-conscious orgs.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-preload-vs-prefetch-vs-preconnect">
<summary><b>244. preload vs prefetch vs preconnect</b></summary>

preload: current page critical. prefetch: likely next navigation low priority. preconnect: early connection setup.

```
<link rel="preload" href="/hero.webp" as="image">
```

Too many preloads compete with LCP.

See journeys section for full narrative.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-iframe-sandbox">
<summary><b>245. iframe sandbox</b></summary>

Restrict iframe capabilities — scripts, forms, top navigation.

```
<iframe sandbox="allow-scripts allow-same-origin">
```

Over-restrict breaks embed functionality.

Third-party widgets sometimes need sandbox.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-postmessage-cross-origin">
<summary><b>246. postMessage cross-origin</b></summary>

Structured communication between windows/iframes — validate origin always.

```
if (e.origin !== 'https://trusted.com') return;
```

Wildcard targetOrigin "*" dangerous.

MFE iframe pattern.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-web-components-slots">
<summary><b>247. Web Components slots</b></summary>

Light DOM content projected into shadow component slots.

```
<my-card><span slot="title">Hi</span></my-card>
```

React slot story different — use children/props.

Design systems may wrap web components.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-template-element">
<summary><b>248. template element</b></summary>

Inert HTML cloneable by JS — not rendered until activated.

```
const t = document.querySelector("#row"); tbody.append(t.content.cloneNode(true));
```

Table row templates common pattern.

Not replaced by JSX but same idea.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-json-ld-structured-data">
<summary><b>249. JSON-LD structured data</b></summary>

Search engines parse schema.org JSON in script type application/ld+json.

```
<script type="application/ld+json">{"@type":"Product",...}</script>
```

Invalid JSON-LD ignored silently — test in Google Rich Results.

SPA must inject or SSR JSON-LD.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-wcag-2-2-aa-highlights">
<summary><b>250. WCAG 2.2 AA highlights</b></summary>

Contrast 4.5:1 text, focus visible, target size 24px minimum, accessible authentication.

```
Use axe DevTools in CI on key routes
```

AAA stricter — AA is legal standard many places.

a11y is senior FE responsibility.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-hydration-in-html-ssr-context">
<summary><b>251. Hydration in HTML/SSR context</b></summary>

Server sends HTML; client JS attaches event listeners and state — must match.

```
Mismatch warning in React 18+
```

Fix data before blaming framework.

Tied to SSR architecture interviews.

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

<details id="html-progressive-enhancement-baseline">
<summary><b>252. Progressive enhancement baseline</b></summary>

Core content works without JS; enhance with JS for interactivity.

```
<form action="/search" method="get"><input name="q"></form>
```

SPAs often fail without JS — acknowledge trade-off.

Senior: when PE matters (gov, emerging markets).

- **A11y requirement?** WCAG 2.1 AA typical — keyboard, contrast, labels, live regions; cite success criterion if you know it.
- **SSR change?** Hydration must match; noscript fallbacks; meta tags in streamed HTML head — don't rely on client-only title.
- **SEO?** Semantic headings, canonical, structured data, crawlable links — SPA needs SSR/SSG for critical content.

</details>

---

## CSS (35 questions)

<details id="css-css-specificity-calculation">
<summary><b>253. CSS specificity calculation</b></summary>

Inline (1000) > ID (100) > Class/attr/pseudo-class (10) > Element (1). !important overrides cascade. :where() zero specificity useful for resets.

```
:where(.card, .panel) { margin: 0; } /* specificity 0 — easy override */
```

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-bfc-block-formatting-context-triggers-and-use">
<summary><b>254. BFC (Block Formatting Context) — triggers and use</b></summary>

Triggers: float, position absolute/fixed, overflow not visible, display flow-root, flex/grid item. Contains margin collapse, clears floats.

```
.clearfix { display: flow-root; }
```

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-flexbox-vs-grid-decision-matrix">
<summary><b>255. Flexbox vs Grid — decision matrix</b></summary>

**Flex:** 1D layout, alignment, nav bars, equal height columns.** Grid:** 2D, page layouts, complex areas. Often combine — grid page, flex components.

```
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
```

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-css-grid-subgrid">
<summary><b>256. CSS Grid subgrid</b></summary>

```
.parent { display: grid; grid-template-columns: repeat(3, 1fr); }
.child { display: grid; grid-column: span 3; grid-template-columns: subgrid; }
```

Nested items align to parent tracks — card layouts.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-container-queries-vs-media-queries">
<summary><b>257. Container queries vs media queries</b></summary>

```
.card { container-type: inline-size; }
@container (min-width: 400px) { .card__title { font-size: 1.5rem; } }
```

Component responds to parent width — true component-driven responsive design.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-css-custom-properties-variables-theming">
<summary><b>258. CSS custom properties (variables) theming</b></summary>

```
:root { --color-primary: #2563eb; }
[data-theme="dark"] { --color-primary: #60a5fa; }
.btn { background: var(--color-primary); }
```

Cascade + runtime change unlike Sass vars.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-stacking-context-and-z-index-bugs">
<summary><b>259. Stacking context and z-index bugs</b></summary>

z-index only compares within same stacking context. New context: opacity < 1, transform, filter, isolation: isolate, positioned + z-index.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-cls-prevention-techniques">
<summary><b>260. CLS prevention techniques</b></summary>

- width/height on images
- aspect-ratio CSS
- Reserve skeleton space
- font-display: optional or size-adjust
- Don't inject content above viewport

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-modern-css-layout-has-selector">
<summary><b>261. Modern CSS layout: :has() selector</b></summary>

```
/* Style label if input invalid */
label:has(+ input:invalid) { color: red; }
.card:has(img) { grid-template-columns: 120px 1fr; }
```

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-css-modules-vs-css-in-js-vs-tailwind-trade-offs">
<summary><b>262. CSS Modules vs CSS-in-JS vs Tailwind — trade-offs</b></summary>

- **Modules:** scoped classes, zero runtime
- **CSS-in-JS (styled-components):** dynamic props, runtime cost, RSC issues
- **Tailwind:** utility speed, design tokens, purge/tree-shake
- **Trend:** zero-runtime — Modules, Tailwind, vanilla-extract, Panda CSS

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-box-sizing-border-box-universal">
<summary><b>263. box-sizing border-box universal</b></summary>

width includes padding+border — intuitive layout math.

```
*, *::before, *::after { box-sizing: border-box; }
```

Rare exceptions for third-party widgets.

Standard reset in modern apps.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-margin-collapse">
<summary><b>264. margin collapse</b></summary>

Vertical adjacent margins merge into one — unexpected gaps.

```
Parent padding or border or flow-root prevents collapse with child.
```

Flex/grid items don't collapse margins same way.

Debug "mystery gap" interviews.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-position-sticky-requirements">
<summary><b>265. position sticky requirements</b></summary>

Needs threshold (top:0), ancestor without overflow:hidden/auto breaking stick.

```
.header { position: sticky; top: 0; }
```

Sticky inside overflow hidden fails silently.

Common bug in modals/tables.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-logical-properties-rtl">
<summary><b>266. logical properties RTL</b></summary>

margin-inline-start not margin-left — adapts to writing-mode and direction.

```
padding-inline: 1rem; margin-inline-start: auto;
```

Physical properties break RTL layouts.

Tailwind ms- me- utilities.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-clamp-fluid-typography">
<summary><b>267. clamp fluid typography</b></summary>

clamp(min, preferred vw, max) responsive font without media queries.

```
font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
```

Extreme vw-only harms accessibility zoom.

Design token friendly.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-min-max-fit-content-sizing">
<summary><b>268. min max fit-content sizing</b></summary>

min() max() fit-content for flexible layouts without overflow.

```
width: min(100%, 720px);
```

Browser support now excellent.

Component max-width pattern.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-aspect-ratio-property">
<summary><b>269. aspect-ratio property</b></summary>

Reserve space before image/video loads — prevents CLS.

```
aspect-ratio: 16 / 9; width: 100%;
```

Pair with object-fit cover.

Core Web Vitals CLS fix.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-object-fit-and-object-position">
<summary><b>270. object-fit and object-position</b></summary>

Image in fixed box — cover crops, contain letterboxes.

```
img { width:100%; height:200px; object-fit: cover; }
```

Background-image no alt text — prefer img for content.

Avatar thumbnails standard.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-will-change-hint">
<summary><b>271. will-change hint</b></summary>

Hints browser to promote layer — transform, opacity.

```
will-change: transform;
```

Overuse increases memory — apply before animation remove after.

Don't will-change everything preemptively.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-contain-property">
<summary><b>272. contain property</b></summary>

Isolates layout/paint/style — perf optimization for widgets.

```
contain: layout paint;
```

Wrong contain clips overflow unexpectedly.

Useful for complex list items.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-content-visibility-auto">
<summary><b>273. content-visibility auto</b></summary>

Browser skips rendering off-screen — huge lists perf.

```
.row { content-visibility: auto; contain-intrinsic-size: 0 80px; }
```

Intrinsic size estimate needed to avoid scrollbar jump.

Complements virtualization.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-layer-cascade-layers">
<summary><b>274. @layer cascade layers</b></summary>

@layer reset, base, components, utilities — explicit precedence without !important wars.

```
@layer utilities { .hidden { display: none !important; } }
```

Unlayered CSS beats layered — watch import order.

Tailwind v4 uses layers heavily.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-property-registered-custom-props">
<summary><b>275. @property registered custom props</b></summary>

Animate CSS variables with typed registration.

```
@property --angle { syntax: "<angle>"; inherits: false; initial-value: 0deg; }
```

Limited browser support check.

Advanced animation interviews.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-scroll-snap">
<summary><b>276. scroll-snap</b></summary>

Carousel/slider UX — mandatory snap points.

```
scroll-snap-type: x mandatory; scroll-snap-align: start;
```

Accessibility — provide buttons too not only swipe.

Mobile horizontal lists.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-overscroll-behavior">
<summary><b>277. overscroll-behavior</b></summary>

Prevent scroll chaining pull-to-refresh bleed in nested scroll areas.

```
overscroll-behavior: contain;
```

Fix modal body scroll behind on iOS historically hard.

Drawer/modal patterns.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-focus-visible">
<summary><b>278. :focus-visible</b></summary>

Show focus ring keyboard not mouse — better UX.

```
:focus-visible { outline: 2px solid var(--focus); }
```

:focus { outline:none } without :focus-visible harms a11y.

Replace outline:none antipattern.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-prefers-reduced-motion">
<summary><b>279. prefers-reduced-motion</b></summary>

Respect user OS setting — disable non-essential animation.

```
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
```

Essential motion (loading) still OK with subtlety.

Legal requirement some jurisdictions.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-prefers-color-scheme-dark">
<summary><b>280. prefers-color-scheme dark</b></summary>

OS dark mode media query + color-scheme CSS property on html.

```
color-scheme: light dark;
```

Class-based dark mode more user control than media alone.

FleetPanda ThemeContext pattern.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-supports-feature-queries">
<summary><b>281. @supports feature queries</b></summary>

Progressive enhancement — apply grid only if supported.

```
@supports (display: grid) { .layout { display: grid; } }
```

Not substitute for baseline layout.

Graceful degradation narrative.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-critical-css-strategy">
<summary><b>282. Critical CSS strategy</b></summary>

Inline above-fold CSS in head; async load rest.

```
<style>/* critical */</style><link rel="preload" href="rest.css" as="style" onload="...">
```

Manual critical CSS maintenance cost.

Tools: critters, penthouse.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-sass-use-vs-import">
<summary><b>283. Sass @use vs @import</b></summary>

@import deprecated — @use namespaced, loads once.

```
@use "tokens/colors" as c; .btn { color: c.$primary; }
```

Migrate before Dart Sass 3 removes @import.

Still common in legacy codebases.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-postcss-pipeline-role">
<summary><b>284. PostCSS pipeline role</b></summary>

Autoprefixer, nesting polyfill, cssnano minify in build.

```
postcss-preset-env stage 2 features
```

Tailwind is PostCSS plugin in v3.

Know build chain for interviews.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-view-transitions-api">
<summary><b>285. View Transitions API</b></summary>

document.startViewTransition(() => updateDOM) — animated SPA route changes.

```
if (document.startViewTransition) document.startViewTransition(() => render());
```

Chrome-first — progressive enhancement.

Emerging UX pattern 2024-25.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-css-anchor-positioning">
<summary><b>286. CSS anchor positioning</b></summary>

position-anchor ties popover to element without JS measure.

```
anchor-name: --btn; position: absolute; position-anchor: --btn;
```

New spec — growing support.

Tooltip/dropdown future native.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

<details id="css-inp-and-compositor-only-animation">
<summary><b>287. INP and compositor-only animation</b></summary>

INP sensitive to main thread — animate transform/opacity only for 60fps without blocking.

```
transition: transform 200ms; /* not width/left */
```

Layout-triggering animation hurts INP during interaction.

Link CSS perf to Core Web Vitals.

- **Design system?** Tokens in CSS variables, lint with stylelint, document in Storybook, enforce via PR checklist.
- **Tailwind equivalent?** Give utility classes or @apply extraction — show you know both mental models.
- **RTL / dark mode?** logical properties (margin-inline), :dir(rtl), prefers-color-scheme or data-theme — avoid hard-coded left/right.

</details>

---

## Architecture & System Design (40 questions)

<details id="arch-design-a-large-scale-frontend-architecture-for-50-engineers">
<summary><b>288. Design a large-scale frontend architecture for 50 engineers</b></summary>

At this scale you need: clear ownership boundaries, shared platform (CI, DS, observability), monorepo or strong module federation, contract testing, and ADRs. Prevent every team inventing webpack config. Platform team enables; product teams ship features.

```
monorepo/
  apps/web, apps/admin
  packages/ui, tokens, eslint-config, api-client
  turbo.json pipeline: lint → test → build (cached)
  Chromatic + Playwright on critical paths
```

Micro-frontends only if org boundaries justify ops cost — modular monolith + code split often enough until ~10 teams.

Close with metrics: deploy frequency, MTTR, bundle budget compliance %.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-micro-frontends-when-worth-it-vs-modular-monolith">
<summary><b>289. Micro-frontends — when worth it vs modular monolith</b></summary>

**MFE when:** independent deploy teams, different tech stacks, scale org boundaries.** Cost:** shared deps, UX consistency, latency, integration testing.** Modular monolith:** single deploy, code-split routes — often enough until team >10 per domain.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-state-management-architecture-client-vs-server-state">
<summary><b>290. State management architecture — client vs server state</b></summary>

```
// Server state: TanStack Query / RTK Query — cache, staleTime, invalidation
// Client UI state: useState, Zustand — modals, filters
// URL state: searchParams — shareable bookmarkable
// Form state: React Hook Form — ephemeral
```

Anti-pattern: putting API cache in Redux manually in 2025.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-api-layer-design-repository-pattern">
<summary><b>291. API layer design — repository pattern</b></summary>

```
// lib/api/orders.ts
export async function fetchOrders(params: OrderParams): Promise<Order[]> {
  const res = await client.get('/orders', { params });
  return OrderSchema.array().parse(res.data); // runtime validation
}
```

UI never calls fetch directly — swap mock/real, centralize auth/errors.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-authentication-architecture-in-spa">
<summary><b>292. Authentication architecture in SPA</b></summary>

- BFF pattern — HttpOnly refresh cookie
- Access token in memory (short TTL)
- PKCE for OAuth public clients
- CSRF protection on cookie auth
- Never store refresh in localStorage
- Silent refresh + redirect on 401

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-cors-explain-preflight-and-fixes">
<summary><b>293. CORS — explain preflight and fixes</b></summary>

Cross-origin requests trigger OPTIONS preflight for non-simple requests. Server returns Access-Control-Allow-Origin, Methods, Headers. Fix: configure API CORS or same-origin proxy in dev (Vite proxy).

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-web-vitals-lcp-inp-cls-targets-and-fixes">
<summary><b>294. Web Vitals — LCP, INP, CLS targets and fixes</b></summary>

- **LCP <2.5s:** optimize hero image, SSR, CDN
- **INP <200ms:** break up JS, web workers, defer third-party
- **CLS <0.1:** size images, no layout shift ads

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-design-system-tokens-components-documentation">
<summary><b>295. Design system — tokens, components, documentation</b></summary>

Tokens (color, spacing, typography) → primitives (Button, Input) → patterns (LoginForm). Storybook + visual regression (Chromatic). Semantic tokens for theming.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-feature-flags-architecture">
<summary><b>296. Feature flags architecture</b></summary>

LaunchDarkly / Unleash / custom. Evaluate flags server-side when security-critical. Client flags for UI experiments. Avoid flag spaghetti — sunset flags.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-error-handling-strategy-layers">
<summary><b>297. Error handling strategy — layers</b></summary>

- Boundary: React ErrorBoundary per route
- API: normalized error type, toast user message
- Global: Sentry capture with breadcrumbs
- Retry: exponential backoff idempotent GETs

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-testing-pyramid-for-frontend-at-scale">
<summary><b>298. Testing pyramid for frontend at scale</b></summary>

Many unit (utils, hooks, reducers) → integration (RTL + MSW) → fewer E2E (Playwright critical paths). Visual regression for design system. Contract tests for API.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-ci-cd-pipeline-for-frontend">
<summary><b>299. CI/CD pipeline for frontend</b></summary>

```
# PR: lint → typecheck → unit → build → bundle size check
# main: + E2E staging → deploy preview → prod canary
```

Tools: GitHub Actions, Vercel/Netlify previews, semantic release.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-monorepo-tooling-nx-vs-turborepo">
<summary><b>300. Monorepo tooling — Nx vs Turborepo</b></summary>

Both: task caching, affected builds. Nx: generators, module graph, enforced boundaries. Turborepo: simpler, pipeline focused. Share design-system, configs across apps.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-ssr-vs-ssg-vs-isr-vs-csr-choose-per-page">
<summary><b>301. SSR vs SSG vs ISR vs CSR — choose per page</b></summary>

- **SSG:** marketing, docs — build time HTML
- **ISR:** semi-static e-commerce listings
- **SSR:** personalized, SEO dynamic
- **CSR:** dashboards behind auth

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-real-time-architecture-websockets-vs-sse-vs-polling">
<summary><b>302. Real-time architecture — WebSockets vs SSE vs polling</b></summary>

- **WebSocket:** bidirectional — chat, live GPS
- **SSE:** server push one-way — notifications
- **Polling:** simple, higher latency — 30s fleet map OK for demo

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-event-driven-ui-decoupling">
<summary><b>303. Event-driven UI decoupling</b></summary>

Custom events or message bus decouple modules — MFE shell doesn't import remote internals.

```
bus.emit({ type: "CART_UPDATED", count })
```

Global bus can become spaghetti — document event catalog.

Typed event schema in TypeScript.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-idempotency-keys-frontend">
<summary><b>304. Idempotency keys frontend</b></summary>

Client generates UUID once per user action — retry safe on network failure.

```
Idempotency-Key header on POST payment
```

Server must store key window 24h.

Prevents double charge UX bug.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-optimistic-ui-409-rollback">
<summary><b>305. Optimistic UI 409 rollback</b></summary>

Version conflict from server — revert optimistic patch show merge UI.

```
if (res.status === 409) rollback(); showConflictDialog(serverState)
```

Last-write-wins loses data.

Collaborative editing needs CRDT not optimistic alone.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-offline-first-architecture">
<summary><b>306. Offline-first architecture</b></summary>

SW cache shell + IndexedDB outbox queue sync when online.

```
Background Sync API or manual retry loop
```

Conflict resolution strategy required.

Field apps, FleetPanda extension story.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-cdn-caching-strategy">
<summary><b>307. CDN caching strategy</b></summary>

Hashed assets immutable 1 year; index.html short cache or no-cache.

```
Cache-Control: public, max-age=31536000, immutable
```

CDN purge on deploy for non-hashed assets.

CloudFront/Fastly interview names.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-blue-green-canary-frontend">
<summary><b>308. Blue-green / canary frontend</b></summary>

Route percentage traffic to new static deploy — Sentry error rate gate.

```
Feature flag + load balancer weight
```

Asset version mismatch if HTML from green loads JS from blue.

Atomic deploy HTML+JS together.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-opentelemetry-browser-rum">
<summary><b>309. OpenTelemetry browser RUM</b></summary>

Trace fetch, long tasks, route changes — correlate with backend trace IDs.

```
traceparent header on API calls from FE SDK
```

Privacy — sample rates, PII scrubbing.

Staff-level observability.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-xss-defense-layers">
<summary><b>310. XSS defense layers</b></summary>

CSP, sanitize HTML, escape by default in framework, HttpOnly cookies.

```
CSP: script-src 'self' 'nonce-{random}'
```

DOMPurify config must forbid script tags.

Defense in depth answer expected.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-csrf-defense-layers">
<summary><b>311. CSRF defense layers</b></summary>

SameSite cookies + CSRF token header + Origin check server-side.

```
SameSite=Lax default good; Strict for high security
```

JWT in header not cookie avoids CSRF but XSS worse.

BFF cookie pattern.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-supply-chain-security">
<summary><b>312. Supply chain security</b></summary>

Lockfile commit, audit CI, Renovate grouped updates, ignore-scripts until vetted.

```
pnpm audit --audit-level high fail CI
```

One compromised package = entire org risk.

Senior owns dependency policy.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-bundle-budget-ci-gate">
<summary><b>313. Bundle budget CI gate</b></summary>

Fail PR if main.js gzip exceeds threshold.

```
size-limit preset-app 250KB
```

Budget creep gradual without gate.

Pair with analyzer artifact on CI.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-lazy-load-third-party-scripts">
<summary><b>314. Lazy load third-party scripts</b></summary>

Analytics after consent + requestIdleCallback or interaction.

```
loadAnalytics() on cookie consent accept
```

GTM still heavy — consider server-side tagging.

INP improvement measurable.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-i18n-architecture">
<summary><b>315. i18n architecture</b></summary>

ICU messages, lazy locale JSON chunks, RTL layout with logical CSS.

```
react-i18next Suspense load namespace admin.json
```

String concatenation forbidden — plural rules.

Locale in URL /en/dashboard shareable.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-a11y-governance-at-scale">
<summary><b>316. a11y governance at scale</b></summary>

axe CI on critical paths, manual audit quarterly, keyboard test checklist release gate.

```
eslint-plugin-jsx-a11y in CI
```

Automated catches ~30% issues — manual still needed.

Legal risk for public sector clients.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-adr-documentation">
<summary><b>317. ADR documentation</b></summary>

Short markdown: context, decision, consequences — why Redux chosen 2022.

```
docs/adr/003-state-management.md
```

ADRs immutable — supersede with new ADR.

Shows staff communication skills.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-domain-driven-folder-structure">
<summary><b>318. Domain-driven folder structure</b></summary>

features/orders/ not components/containers split only — team owns vertical slice.

```
features/orders/components, api, hooks, types
```

Shared ui/ still for design system.

Align folders to business domains.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-barrel-file-anti-pattern">
<summary><b>319. Barrel file anti-pattern</b></summary>

index.ts re-export all — bundler may import entire module tree.

```
import { Button } from '@org/ui/Button' // direct path
```

Barrels OK in published package entry only.

knip finds barrel perf issues.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-graphql-vs-rest-frontend">
<summary><b>320. GraphQL vs REST frontend</b></summary>

GraphQL: client normalized cache Apollo/Relay, flexible queries. REST: simpler caching HTTP semantics + TanStack Query.

```
Query colocation vs multiple REST endpoints
```

GraphQL N+1 server problem not FE but mention.

Pick based on API team capabilities.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-trpc-openapi-codegen">
<summary><b>321. tRPC / OpenAPI codegen</b></summary>

End-to-end types — frontend knows backend contract at compile time.

```
openapi-typescript + zod validation
```

Codegen drift if CI doesn't regenerate on spec change.

Contract-first API design.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-edge-middleware-auth">
<summary><b>322. Edge middleware auth</b></summary>

Verify JWT/session at edge before origin — redirect unauthenticated early.

```
Vercel middleware matcher /dashboard/*
```

Edge limits Node APIs — use Web Crypto.

Reduces wasted SSR work.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-rate-limit-429-ux">
<summary><b>323. Rate limit 429 UX</b></summary>

Show Retry-After, exponential backoff, disable submit button temporarily.

```
if (res.status === 429) await sleep(Retry-After header)
```

Thundering herd if all clients retry same second — jitter.

Respect API contract.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-multi-tenant-theming">
<summary><b>324. Multi-tenant theming</b></summary>

Bootstrap tenant config sets CSS variables on documentElement.

```
document.documentElement.dataset.tenant = slug
```

Tenant in JWT not URL alone for security.

White-label SaaS pattern.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-strangler-fig-legacy-migration">
<summary><b>325. Strangler fig legacy migration</b></summary>

iframe legacy → route-by-route micro-frontend replace → retire old.

```
Phase 1: new nav shell wraps old iframe /legacy/*
```

Long timeline — feature flags per route.

Real enterprise migration story.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-lighthouse-ci-per-route">
<summary><b>326. Lighthouse CI per route</b></summary>

Assert LCP/CLS budgets on PR preview URLs for / and /checkout.

```
lighthouseci assert --preset=lighthouse:recommended
```

Flaky lab data — trend over time.

Tie perf to business metrics.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

<details id="arch-staff-interview-narrative-structure">
<summary><b>327. Staff interview narrative structure</b></summary>

Context → options considered → decision → trade-offs accepted → measurable outcome.

```
"We chose pnpm; install -60%; cost: 2w migration"
```

Quantify when possible.

Practice 2min stories aloud.

- **Trade-off accepted?** State what you sacrificed (time-to-market, consistency, bundle size) and why the requirement forced it.
- **Defer to v2?** Name one feature explicitly out of scope — offline, i18n, admin — to show prioritization discipline.
- **Proof metrics?** Error rate, p95 latency, deploy frequency, CWV p75, support ticket volume — tie arch to observable outcomes.

</details>

---

## React Context API (22 questions) High priority

<details id="context-when-should-you-use-context-vs-props-vs-external-store">
<summary><b>328. When should you use Context vs props vs external store</b></summary>

- **Props:** default — explicit data flow, easy to trace.
- **Context:** deeply shared stable data (theme, auth, locale) consumed by many branches.
- **Store (Redux/Zustand):** frequent updates, complex mutations, middleware, DevTools.

Context is not a performance optimization — it is a dependency injection mechanism.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-why-does-a-context-provider-cause-all-consumers-to-re-render">
<summary><b>329. Why does a Context provider cause all consumers to re-render</b></summary>

React compares context `value` by reference. New object every render → all `useContext` subscribers scheduled for re-render, even if they only read `theme` and you changed unrelated `cart`. This is the #1 Context performance footgun.

**Bad vs good**

```
// BAD — new object every Parent render
function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, login: () => {}, logout: () => {} }}>
      {children}
    </AppContext.Provider>
  );
}

// GOOD — stable reference until deps change
const login = useCallback(async (u, p) => { ... }, []);
const logout = useCallback(() => { ... }, []);
const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
```

**Fix hierarchy**

1) memoize value 2) split contexts 3) selectors (use-context-selector / Zustand) 4) move fast-changing data to TanStack Query or external store.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-split-context-pattern-state-vs-dispatch">
<summary><b>330. Split context pattern — state vs dispatch</b></summary>

```
const StateCtx = createContext(null);
const DispatchCtx = createContext(null);

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <DispatchCtx.Provider value={dispatch}>
      <StateCtx.Provider value={state}>{children}</StateCtx.Provider>
    </DispatchCtx.Provider>
  );
}
// Components that only dispatch never re-render on state change
```

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-usecontextselector-pattern-without-external-library">
<summary><b>331. useContextSelector pattern without external library</b></summary>

```
function useAppSelector(selector) {
  const state = useContext(StateCtx);
  const selected = selector(state);
  const ref = useRef(selected);
  if (!Object.is(ref.current, selected)) ref.current = selected;
  return ref.current;
}
```

For production, prefer `use-context-selector` or Zustand with selectors — hand-rolled equality is error-prone.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-context-usereducer-vs-redux-for-fleetpanda-style-apps">
<summary><b>332. Context + useReducer vs Redux for FleetPanda-style apps</b></summary>

Context+reducer fits moderate shared state, single team, no time-travel needs. Redux when: many slices, RTK Query, listener middleware, large team conventions. FleetPanda uses Context because assignment scope is one SPA with versioned localStorage.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-how-to-test-components-that-use-usecontext">
<summary><b>333. How to test components that use useContext</b></summary>

```
const mock = createMockAppContext({ user: { role: 'admin', ... } });
render(
  <AppContext.Provider value={mock}>
    <ProtectedRoute allowedRoles={['admin']}><Dashboard /></ProtectedRoute>
  </AppContext.Provider>
);
```

Mock only what the test needs; spy on dispatch methods with `vi.fn()`.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-nested-providers-ordering-and-pitfalls">
<summary><b>334. Nested providers — ordering and pitfalls</b></summary>

```
<ThemeProvider>
  <AuthProvider>
    <QueryClientProvider>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  </AuthProvider>
</ThemeProvider>
```

Inner hooks can use outer contexts. Avoid circular dependencies between providers. Toast should be high enough to cover all routes.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-default-context-value-why-undefined-custom-hook-throw">
<summary><b>335. Default context value — why undefined + custom hook throw</b></summary>

```
const Ctx = createContext(undefined);
export function useCtx() {
  const v = useContext(Ctx);
  if (v === undefined) throw new Error('useCtx must be used within Provider');
  return v;
}
```

Catches missing provider at dev time instead of silent null bugs.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-context-vs-react-19-use-hook">
<summary><b>336. Context vs React 19 use() hook</b></summary>

```
// use() can read context conditionally (hooks rules exception)
function Row({ showMeta }) {
  if (showMeta) {
    const theme = use(ThemeContext); // conditional read
  }
}
```

`use()` also unwraps promises in Suspense boundaries — different use case from classic context.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-passing-unstable-functions-through-context">
<summary><b>337. Passing unstable functions through context</b></summary>

```
const login = useCallback(async (u, p) => { ... }, []);
const logout = useCallback(() => { ... }, []);
// Stable fns prevent unnecessary value invalidation
```

Exception: if callback closes over changing state, include deps or use functional dispatch.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-multiple-contexts-vs-one-mega-context">
<summary><b>338. Multiple contexts vs one mega context</b></summary>

Split by update frequency: ThemeContext (rare) vs CartContext (often). Mega context couples unrelated re-renders.

```
ThemeProvider + CartProvider separate
```

Provider nesting depth — acceptable vs perf.

FleetPanda could split auth vs AppData at scale.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-context-for-form-state">
<summary><b>339. Context for form state</b></summary>

Large forms in context cause wide re-renders on every keystroke — prefer RHF local state or colocated state.

```
Wizard step context OK if only 3 fields shared across steps
```

Context for every input field = perf smell.

Use context for submit handler registration not field values.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-provider-at-route-layout-level">
<summary><b>340. Provider at route layout level</b></summary>

Scope admin state to /admin layout — unmount clears state automatically on navigate away.

```
<Route path="/admin" element={<AdminProvider><AdminLayout /></AdminProvider>} />
```

Remount provider resets state — intended or bug?

Persist to URL or server if state must survive route exit.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-ssr-context-per-request">
<summary><b>341. SSR context per request</b></summary>

Server must create new store/context per HTTP request — never singleton on server module scope.

```
export function createRequestContext() { return { user: null, data: {} }; }
```

Global singleton leaks user A data to user B.

Critical SSR security interview topic.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-hydration-context-mismatch">
<summary><b>342. Hydration context mismatch</b></summary>

Server context value must equal client initial render — else hydration error.

```
Pass same preloadedState from server HTML script to client provider
```

Client-only fetch in provider effect OK after hydrate.

Match FleetPanda localStorage hydrate pattern carefully with SSR.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-createcontext-default-value-semantics">
<summary><b>343. createContext default value semantics</b></summary>

Default used only when no Provider ancestor — usually undefined + throw hook pattern.

```
createContext(undefined)
```

Using default as "real" value hides missing provider.

Document required provider in README.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-forwardref-context-together">
<summary><b>344. forwardRef + context together</b></summary>

Ref attaches DOM node; context supplies data — compose independently.

```
<ThemeContext.Provider><Input ref={ref} /></ThemeContext.Provider>
```

React 19 ref as prop simplifies leaf components.

Don't put ref in context unless ref forwarding library.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-measuring-context-performance">
<summary><b>345. Measuring context performance</b></summary>

React Profiler record interaction; count consumers re-rendering; why-did-you-render dev tool.

```
Split context reduced renders from 40 components to 3 on cart update
```

Optimize after measure — not preemptively.

Present numbers in senior interviews.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-colocate-provider-closest-to-consumers">
<summary><b>346. Colocate provider closest to consumers</b></summary>

Not every app needs root AppProvider — nested providers reduce re-render scope.

```
ModalProvider only wrapping modal subtree if possible
```

Multiple providers at root still OK if memoized.

Architecture review question.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-prop-drilling-threshold">
<summary><b>347. Prop drilling threshold</b></summary>

2 levels: props fine. 3+ through unrelated components: consider composition or context.

```
Children prop pattern passes rendered subtree
```

Context for theme/auth/locale common exceptions at root.

Don't context for data one branch needs.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-immutable-context-updates">
<summary><b>348. Immutable context updates</b></summary>

Never mutate context state object in place — new reference triggers correct update detection.

```
setState(prev => ({ ...prev, user: newUser }))
```

Immer in provider reducer OK if produces new root reference.

Same rules as Redux reducers.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

<details id="context-migration-off-mega-context">
<summary><b>349. Migration off mega context</b></summary>

Strangler: extract slice to Zustand/Query, dual-write both, migrate consumers file by file, remove from context.

```
Phase 1: server state to TanStack Query from AppContext
```

Big-bang rewrite risky.

Tell migration story in staff interviews.

- **Split context when?** When unrelated consumers re-render together — split by theme vs auth vs cart; or move fast-changing data to external store.
- **Debug re-renders?** React DevTools highlight updates, why-did-you-render, or split context and compare commit counts.
- **vs Zustand?** Zustand selectors subscribe to slices; Context needs memoized value + split providers to match that granularity.

</details>

---

## Browser Internals (32 questions) High priority

<details id="browser-explain-the-browser-rendering-pipeline-end-to-end">
<summary><b>350. Explain the browser rendering pipeline end-to-end</b></summary>

After bytes arrive, rendering is: parse HTML → build DOM; parse CSS → CSSOM; combine into render tree (visible nodes only); layout (compute geometry); paint (rasterize); composite (GPU layers). JS can trigger additional layout/paint cycles. This connects directly to the URL-bar journey in E2E section.

```
HTML bytes → Tokenizer → DOM tree
CSS bytes → CSSOM
DOM + CSSOM → Render tree → Layout → Paint → Composite
JS execution can mutate DOM → repeat Layout/Paint if needed
```

Composite-only properties (transform, opacity) skip layout/paint when possible — key INP optimization.

Draw this pipeline on whiteboard when asked "what happens when page loads".

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-reflow-vs-repaint-vs-composite-what-triggers-each">
<summary><b>351. Reflow vs repaint vs composite — what triggers each</b></summary>

- **Reflow:** geometry change — width, font, DOM insert/remove.
- **Repaint:** visual only — color, visibility (no layout).
- **Composite:** transform, opacity — often GPU, skips layout/paint.

```
/* Prefer compositor-friendly */
.animate { transform: translateX(100px); opacity: 0.5; }
/* Avoid */ .bad { left: 100px; top: 50px; }
```

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-event-loop-microtasks-vs-macrotasks-with-full-trace">
<summary><b>352. Event loop — microtasks vs macrotasks (with full trace)</b></summary>

JS is single-threaded. The event loop drains the call stack, then runs all microtasks (promises, queueMicrotask), then one macrotask (setTimeout, I/O, UI event), then renders if needed. Understanding order explains "why setState in promise runs before setTimeout".

**Classic interview trace**

```
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
queueMicrotask(() => console.log('4'));
console.log('5');
// Output: 1, 5, 3, 4, 2
```

**Real bug:** Measuring DOM in setTimeout(0) after React setState may run before React commit — use `useLayoutEffect` or `flushSync` when you must read post-update DOM.

**INP connection**

Long microtask chains block paint — break work with scheduler/yield or workers for >50ms tasks.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-how-many-threads-processes-in-modern-chrome-for-a-tab">
<summary><b>353. How many threads/processes in modern Chrome for a tab</b></summary>

Site-isolated renderer process per origin (generally). GPU process, network service, browser process separate. Multiple tabs same site may share process (with exceptions). Explains memory vs security trade-off.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-same-origin-policy-and-cors-browser-perspective">
<summary><b>354. Same-origin policy and CORS — browser perspective</b></summary>

Browser blocks reading cross-origin response unless server sends CORS headers. Simple GET may skip preflight; JSON POST with custom headers triggers OPTIONS preflight.

```
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Credentials: true
```

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-cookie-attributes-secure-httponly-samesite">
<summary><b>355. Cookie attributes — Secure, HttpOnly, SameSite</b></summary>

```
Set-Cookie: session=abc; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=3600
```

- **HttpOnly:** no document.cookie access — XSS mitigation
- **SameSite=Strict/Lax:** CSRF mitigation
- **Secure:** HTTPS only

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-localstorage-vs-sessionstorage-vs-indexeddb-vs-cookies">
<summary><b>356. localStorage vs sessionStorage vs IndexedDB vs cookies</b></summary>

Store

Size

Sent to server

API

Cookie

~4KB

Yes

Sync

localStorage

~5MB

No

Sync — blocks main thread

IndexedDB

Large

No

Async

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-service-worker-lifecycle-and-caching-strategies">
<summary><b>357. Service Worker lifecycle and caching strategies</b></summary>

Install → wait → activate → fetch intercept. Strategies:

- **Cache-first:** static assets
- **Network-first:** API data
- **Stale-while-revalidate:** fonts, avatars

```
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(c => c || fetch(e.request)));
});
```

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-http-1-1-vs-http-2-vs-http-3-for-frontend-perf">
<summary><b>358. HTTP/1.1 vs HTTP/2 vs HTTP/3 for frontend perf</b></summary>

- **H1:** 6 conn limit per domain — bundling mattered
- **H2:** multiplexing — smaller chunks OK
- **H3:** QUIC over UDP — faster on lossy networks

Still minimize JS; protocol doesn't fix large bundles.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-memory-leaks-in-spas-common-causes">
<summary><b>359. Memory leaks in SPAs — common causes</b></summary>

- Intervals/listeners without cleanup
- Detached DOM nodes held in closures
- Global caches growing unbounded
- WebSocket subscriptions
- Third-party widgets

```
useEffect(() => {
  const handler = () => {};
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}, []);
```

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-requestanimationframe">
<summary><b>360. requestAnimationFrame</b></summary>

Schedule callback before next repaint ~60Hz — smooth animations synced to display.

```
function tick() { update(); requestAnimationFrame(tick); }
```

Better than setInterval for visual updates.

Cancel with cancelAnimationFrame on unmount.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-requestidlecallback">
<summary><b>361. requestIdleCallback</b></summary>

Run non-critical work when browser idle — analytics batch low priority.

```
requestIdleCallback(() => sendAnalytics(), { timeout: 2000 })
```

Safari limited — setTimeout fallback.

Don't starve if timeout fires.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-navigation-timing-api">
<summary><b>362. Navigation Timing API</b></summary>

performance.getEntriesByType("navigation") — TTFB, DOMContentLoaded, loadEventEnd.

```
const nav = performance.getEntriesByType("navigation")[0]; nav.responseStart - nav.requestStart
```

Legacy performance.timing deprecated.

Maps to URL bar journey phases.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-performanceobserver">
<summary><b>363. PerformanceObserver</b></summary>

Subscribe to LCP, layout-shift, longtask entries — RUM collection.

```
new PerformanceObserver(list => report(list.getEntries())).observe({ type: "largest-contentful-paint" })
```

Buffer size limits — handle drops.

web-vitals library wraps this.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-long-tasks-gt-50ms">
<summary><b>364. Long tasks &gt;50ms</b></summary>

Block main thread — delay input response hurting INP.

```
PerformanceObserver longtask entries
```

Split task: scheduler.postTask or chunk loop.

Chrome DevTools Performance flame chart.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-web-workers">
<summary><b>365. Web Workers</b></summary>

Parallel JS thread — no DOM access — parse CSV, crypto, heavy compute.

```
const w = new Worker(new URL("./worker.ts", import.meta.url));
```

Structured clone message cost — Transferable objects for buffers.

Offload from hot path.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-sharedworker">
<summary><b>366. SharedWorker</b></summary>

Shared between tabs same origin — rare vs BroadcastChannel.

```
const sw = new SharedWorker("shared.js");
```

Limited browser support niche.

Usually BroadcastChannel simpler.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-broadcastchannel">
<summary><b>367. BroadcastChannel</b></summary>

Same-origin tab messaging — logout sync cart sync.

```
new BroadcastChannel("auth").postMessage({ type: "LOGOUT" })
```

Not cross-origin — use postMessage.

MFE same-origin tabs.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-page-visibility-api">
<summary><b>368. Page Visibility API</b></summary>

document.hidden pause video polling timers save battery.

```
document.addEventListener("visibilitychange", () => pauseIfHidden());
```

Mobile background tab throttling aggressive.

FleetPanda map polling should pause.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-bfcache-back-forward-cache">
<summary><b>369. bfcache back-forward cache</b></summary>

Page snapshot in memory — instant back navigation.

```
pageshow event persisted property
```

unload listeners disable bfcache — use pagehide.

See journeys section Q9.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-beforeunload-vs-pagehide">
<summary><b>370. beforeunload vs pagehide</b></summary>

beforeunload unreliable especially mobile — don't depend for save.

```
pagehide + sendBeacon for analytics
```

beforeunload annoying confirm dialogs restricted.

Autosave debounced better UX.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-navigator-sendbeacon">
<summary><b>371. navigator.sendBeacon</b></summary>

Fire-and-forget POST on unload — analytics doesn't block navigation.

```
navigator.sendBeacon("/analytics", JSON.stringify(payload))
```

Size limits ~64KB.

Non-critical telemetry only.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-credential-management-api">
<summary><b>372. Credential Management API</b></summary>

Browser password manager integration federated sign-in hints.

```
navigator.credentials.get({ password: true })
```

Limited adoption customize flows.

Know exists for auth interviews.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-permissions-api">
<summary><b>373. Permissions API</b></summary>

Query geolocation camera state before prompt — better UX.

```
const status = await navigator.permissions.query({ name: "geolocation" })
```

Safari partial support.

Explain permission funnels.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-intersection-observer">
<summary><b>374. Intersection Observer</b></summary>

Efficient visible detection — lazy load images infinite scroll.

```
new IntersectionObserver(cb, { rootMargin: "200px" }).observe(el)
```

Not for below-fold measurement precision layout.

Replace scroll listeners.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-resize-observer">
<summary><b>375. Resize Observer</b></summary>

Element size changes — chart.resize(), responsive components.

```
new ResizeObserver(entries => chart.resize()).observe(container)
```

Infinite loop if observer triggers layout that triggers observer — guard.

Better than window resize for component.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-mutation-observer">
<summary><b>376. Mutation Observer</b></summary>

DOM tree changes — legacy widgets tests.

```
new MutationObserver(mutations => sync()).observe(el, { childList: true })
```

Expensive on large subtrees — avoid hot paths.

React rarely needs — use refs/effects.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-content-encoding-gzip-br">
<summary><b>377. Content-Encoding gzip br</b></summary>

Brotli better compression than gzip — server negotiates Accept-Encoding.

```
Accept-Encoding: gzip, deflate, br
```

Pre-compress assets at build for static host.

Smaller JS faster download.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-resource-timing-api">
<summary><b>378. Resource Timing API</b></summary>

Per-asset DNS connect TTFB download breakdown.

```
performance.getEntriesByType("resource")
```

Debug slow CDN TTFB.

Waterfall analysis senior skill.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-third-party-cookie-deprecation">
<summary><b>379. Third-party cookie deprecation</b></summary>

Privacy Sandbox — impact analytics ads cross-site tracking.

```
First-party data strategies server-side tagging
```

CHIPS partitioned cookies partial solution.

Stay current for adtech adjacent roles.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-trusted-types-csp">
<summary><b>380. Trusted Types CSP</b></summary>

Prevent DOM XSS injection assignments — require TrustedHTML.

```
require-trusted-types-for 'script'
```

Complex adoption — enterprise security.

Mention awareness staff security loops.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

<details id="browser-speculative-loading-hints">
<summary><b>381. Speculative loading hints</b></summary>

speculation-rules API prerender prefetch next page — faster navigations.

```
<script type="speculationrules">{"prefetch":[{"where":...}]}</script>
```

Over-speculation wastes bandwidth.

Chrome pioneering — progressive enhancement.

- **DevTools?** Name exact panel: Network waterfall, Performance trace, Application cache, Rendering paint flashing.
- **Core Web Vital?** Map answer to LCP (load), INP (input delay), CLS (layout shift) — pick the most relevant one.
- **Safari / WebView?** ITP cookie limits, missing APIs (e.g. some SW features), passive touch listeners — state what you polyfill or degrade.

</details>

---

## DOM & Events (28 questions) High priority

<details id="dom-dom-tree-vs-shadow-dom-vs-virtual-dom">
<summary><b>382. DOM tree vs shadow DOM vs virtual DOM</b></summary>

- **DOM:** browser's live tree of nodes.
- **Shadow DOM:** encapsulated subtree — Web Components.
- **Virtual DOM:** React's JS representation — diffed then patched to real DOM.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-event-propagation-capture-target-bubble">
<summary><b>383. Event propagation — capture, target, bubble</b></summary>

```
parent.addEventListener('click', handler, true);  // capture phase
child.addEventListener('click', handler);         // bubble phase (default)
// Order: capture (root→target) → target → bubble (target→root)
```

`event.stopPropagation()` stops further propagation; `stopImmediatePropagation()` blocks other listeners on same node.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-event-delegation-pattern">
<summary><b>384. Event delegation pattern</b></summary>

```
document.querySelector('#list').addEventListener('click', (e) => {
  const row = e.target.closest('[data-id]');
  if (!row) return;
  handleRowClick(row.dataset.id);
});
```

One listener for dynamic lists — React uses delegation at root for synthetic events (legacy model).

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-passive-event-listeners-scroll-performance">
<summary><b>385. Passive event listeners — scroll performance</b></summary>

```
element.addEventListener('touchstart', handler, { passive: true });
// Browser won't wait for preventDefault — smoother scroll
```

Non-passive touch/wheel listeners can block scrolling — Lighthouse flags this.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-document-queryselector-vs-getelementbyid-vs-matches-closest">
<summary><b>386. document.querySelector vs getElementById vs matches/closest</b></summary>

```
const btn = document.getElementById('save');           // fastest id lookup
const row = e.target.closest('tr[data-order-id]');   // event target traversal
const isCard = el.matches('.card');                  // boolean test
```

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-dom-manipulation-performance-documentfragment">
<summary><b>387. DOM manipulation performance — DocumentFragment</b></summary>

```
const frag = document.createDocumentFragment();
items.forEach(item => frag.appendChild(createRow(item)));
tbody.appendChild(frag); // single reflow
```

Batch DOM writes; avoid interleaved read/write (layout thrashing).

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-layout-thrashing-read-write-interleaving">
<summary><b>388. Layout thrashing — read/write interleaving</b></summary>

```
// BAD — forces sync layout each iteration
els.forEach(el => { el.style.left = el.offsetWidth + 'px'; });
// GOOD — read all, then write all
const widths = els.map(el => el.offsetWidth);
els.forEach((el, i) => { el.style.left = widths[i] + 'px'; });
```

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-customevent-for-decoupled-dom-communication">
<summary><b>389. CustomEvent for decoupled DOM communication</b></summary>

```
window.dispatchEvent(new CustomEvent('cart:updated', { detail: { count: 3 } }));
window.addEventListener('cart:updated', (e) => updateBadge(e.detail.count));
```

Useful for vanilla widgets; micro-frontends often use same pattern on shared bus.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-imperative-dom-in-react-when-acceptable">
<summary><b>390. Imperative DOM in React — when acceptable</b></summary>

Third-party libs (Leaflet, D3, CodeMirror), focus management, measuring. Pattern: ref + useEffect mount/update/cleanup. FleetPanda's `LeafletMapView` is the canonical example.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-accessibility-tree-vs-dom-tree">
<summary><b>391. Accessibility tree vs DOM tree</b></summary>

Browser builds accessibility tree from DOM + ARIA — what screen readers use. Hidden CSS (`display:none`) removes from a11y tree; `aria-hidden` explicitly hides decorative elements.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-innerhtml-vs-textcontent">
<summary><b>392. innerHTML vs textContent</b></summary>

innerHTML parses HTML — XSS if user controlled. textContent escapes to text node.

```
el.textContent = userInput
```

innerHTML only after DOMPurify.sanitize.

Security fundamental.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-insertadjacenthtml">
<summary><b>393. insertAdjacentHTML</b></summary>

Parse HTML string at position beforebegin afterbegin beforeend afterend.

```
el.insertAdjacentHTML("beforeend", "<li>item</li>")
```

Same XSS rules as innerHTML.

Efficient template insertion.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-clonenode-deep">
<summary><b>394. cloneNode deep</b></summary>

Duplicate subtree — template rows list items.

```
template.content.cloneNode(true)
```

Event listeners not cloned — reattach.

DocumentFragment pattern.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-comparedocumentposition">
<summary><b>395. compareDocumentPosition</b></summary>

Bitmask relationship between nodes — contains precedes follows.

```
node.compareDocumentPosition(other) & Node.DOCUMENT_POSITION_FOLLOWING
```

Rare direct use — library internals.

Know exists for completeness.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-getboundingclientrect">
<summary><b>396. getBoundingClientRect</b></summary>

Viewport-relative box including scroll transform — tooltip positioning.

```
const rect = el.getBoundingClientRect(); top = rect.bottom + 8
```

Subpixel values — round carefully.

Use with fixed position popovers.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-scrollintoview">
<summary><b>397. scrollIntoView</b></summary>

Scroll ancestor to show element — focus management SPA routes.

```
el.scrollIntoView({ behavior: "smooth", block: "nearest" })
```

Can scroll entire page jarringly — block option.

Hash link navigation native behavior.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-focus-preventscroll">
<summary><b>398. focus preventScroll</b></summary>

Focus without scrolling page — modals nested scroll.

```
el.focus({ preventScroll: true })
```

Ensure focus visible still for a11y.

Dropdown keyboard nav.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-tabindex-1-programmatic-focus">
<summary><b>399. tabindex -1 programmatic focus</b></summary>

Skip link targets main content programmatically focusable not tab order.

```
<main tabindex="-1" id="main">
```

Positive tabindex anti-pattern.

WCAG bypass block pattern.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-pointer-events-unified-input">
<summary><b>400. Pointer events unified input</b></summary>

pointerdown covers mouse touch pen — pointer-events none disables hit.

```
@media (pointer: coarse) { larger hit targets }
```

Touch delay removed with pointer events.

Mobile desktop unified handlers.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-once-event-listener-option">
<summary><b>401. once event listener option</b></summary>

Auto-remove after first invoke — { once: true }.

```
el.addEventListener("click", handler, { once: true })
```

Cleaner than removeListener inside handler.

One-shot analytics.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-abortsignal-in-addeventlistener">
<summary><b>402. AbortSignal in addEventListener</b></summary>

signal abort removes listener — tie to AbortController lifecycle.

```
el.addEventListener("click", fn, { signal: ac.signal })
```

Same controller aborts fetch + listeners.

Modern cleanup pattern.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-input-vs-change-events">
<summary><b>403. input vs change events</b></summary>

input fires every keystroke — change on commit blur select.

```
search on input debounced; validate on change
```

React controlled inputs use onChange for input event.

Search UX uses input.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-composition-events-ime">
<summary><b>404. Composition events IME</b></summary>

compositionstart/update/end for CJK input — don't search mid-composition.

```
if (e.isComposing) return; in keydown handler
```

Breaks search for Japanese users if ignored.

Internationalization detail seniors know.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-shadow-dom-event-retargeting">
<summary><b>405. Shadow DOM event retargeting</b></summary>

Event.target appears as host element from outside shadow tree perspective.

```
Click inside shadow button — host receives composedPath
```

Complicates delegation across shadow boundary.

Web components integration.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-slot-assignment-projection">
<summary><b>406. Slot assignment projection</b></summary>

Light DOM children project into shadow slots — named slots.

```
<slot name="header"></slot>
```

React passes children not slots same way.

Design system web components.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-domparser-safe-parse">
<summary><b>407. DOMParser safe parse</b></summary>

Parse HTML string off-document — no execution side effects.

```
new DOMParser().parseFromString(html, "text/html")
```

Still sanitize before insert if user HTML.

Extract metadata from HTML string.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-range-selection-api">
<summary><b>408. Range Selection API</b></summary>

Text selection manipulation — rich text editors.

```
const range = document.createRange(); range.selectNodeContents(el)
```

Complex — use ProseMirror Lexical instead raw.

Know for editor interviews.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

<details id="dom-don-t-fight-react-with-dom">
<summary><b>409. Don't fight React with DOM</b></summary>

Direct DOM mutation breaks React virtual DOM — use refs effects portals.

```
Leaflet imperative map in useEffect not document.getElementById in render
```

Escape hatches only for integrations.

FleetPanda LeafletMapView pattern.

- **React vs DOM?** React batches updates via Fiber, synthetic events, declarative diff — contrast with manual reflow from direct DOM writes.
- **A11y?** Semantic elements, ARIA only when needed, focus management on route/modal — tie DOM API to screen reader behavior.
- **Low-end perf?** Layout thrashing from read/write interleave, large DOM trees — mention virtualization or content-visibility.

</details>

---

## JavaScript & TypeScript (30 questions) High priority

<details id="js-event-loop-async-await-execution-order">
<summary><b>410. Event loop + async/await execution order</b></summary>

```
async function foo() {
  console.log('A');
  await bar();
  console.log('B'); // microtask after bar resolves
}
async function bar() { console.log('C'); }
foo(); console.log('D');
// A, C, D, B
```

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-closures-practical-use-and-memory-implications">
<summary><b>411. Closures — practical use and memory implications</b></summary>

```
function createCounter() {
  let count = 0;
  return () => ++count; // closes over count
}
```

Leaks when closure captures large scope unnecessarily — null out refs when done.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-prototype-chain-vs-class-syntax">
<summary><b>412. Prototype chain vs class syntax</b></summary>

`class Foo extends Bar` is syntactic sugar over prototype delegation. Know `Object.create`, `hasOwnProperty` vs in-chain property lookup for interviews.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-typescript-structural-typing-vs-nominal">
<summary><b>413. TypeScript structural typing vs nominal</b></summary>

```
interface User { id: string; name: string; }
interface Admin { id: string; name: string; role: 'admin'; }
function greet(u: User) { return u.name; }
greet(admin); // OK if shape compatible — structural
```

Branded types for nominal simulation: `type UserId = string & { readonly brand: unique symbol }`.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-generics-constrain-and-infer">
<summary><b>414. Generics — constrain and infer</b></summary>

```
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(k => { result[k] = obj[k]; });
  return result;
}
```

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-discriminated-unions-for-api-results">
<summary><b>415. Discriminated unions for API results</b></summary>

```
type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

function handle(r: Result<User>) {
  if (r.ok) console.log(r.data.name); // narrowed
  else console.error(r.error);
}
```

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-promise-all-vs-allsettled-vs-race">
<summary><b>416. Promise.all vs allSettled vs race</b></summary>

- **all:** fail fast on first rejection
- **allSettled:** wait for all — partial success dashboards
- **race:** first settle wins — timeout pattern

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-debounce-vs-throttle-implement-debounce">
<summary><b>417. Debounce vs throttle — implement debounce</b></summary>

```
function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
```

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-weakmap-weakset-use-cases">
<summary><b>418. WeakMap / WeakSet use cases</b></summary>

Cache metadata for DOM nodes or objects without preventing GC. Private field patterns in libraries.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-es-modules-static-vs-dynamic-import">
<summary><b>419. ES modules — static vs dynamic import</b></summary>

```
import { x } from './a.js';           // static — tree-shakeable
const mod = await import('./b.js');   // dynamic — code splitting
```

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-null-vs-undefined">
<summary><b>420. null vs undefined</b></summary>

undefined absent; null intentional empty — use === distinguish.

```
function find(id) { return item ?? null; }
```

?? only nullish not falsy 0.

API design clarity.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-vs">
<summary><b>421. == vs ===</b></summary>

Always === except null check (x == null catches undefined).

```
if (value == null) clear();
```

NaN === NaN false — use Number.isNaN.

Lint eqeqeq rule.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-object-is">
<summary><b>422. Object.is</b></summary>

SameValue equality — +0 !== -0, NaN equals NaN.

```
Object.is(NaN, NaN) // true
```

Map keys use SameValue.

Rare direct use.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-optional-chaining">
<summary><b>423. Optional chaining</b></summary>

Short-circuit undefined access — obj?.a?.b

```
user?.profile?.email ?? "unknown"
```

Not substitute for data modeling.

With nullish coalescing common pair.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-nullish-coalescing">
<summary><b>424. Nullish coalescing</b></summary>

Default only null/undefined not 0 or "".

```
count ?? 0 // keeps 0; count || 0 replaces 0
```

|| treats 0 as falsy bug.

Config defaults pattern.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-map-vs-object-records">
<summary><b>425. Map vs Object records</b></summary>

Map any keys object order insertion; frequent add delete.

```
const cache = new Map(); cache.set(key, val)
```

JSON.stringify Map poorly — not for API payload.

WeakMap for metadata private.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-set-deduplication">
<summary><b>426. Set deduplication</b></summary>

[...new Set(arr)] unique values O(n).

```
const uniqueIds = [...new Set(ids)]
```

Set objects by reference not deep equal.

Simple interview coding.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-structuredclone">
<summary><b>427. structuredClone</b></summary>

Deep clone structured data — Date Map Set supported not functions.

```
const copy = structuredClone(state)
```

JSON.parse stringify loses Date undefined.

Modern alternative lodash cloneDeep partial.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-abortcontroller-cancel">
<summary><b>428. AbortController cancel</b></summary>

Abort fetch listeners long operations.

```
const ac = new AbortController(); fetch(url, { signal: ac.signal }); ac.abort();
```

name AbortError catch ignore.

usePaginatedQuery pattern FleetPanda.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-temporal-proposal">
<summary><b>429. Temporal proposal</b></summary>

Modern date/time API replacing Date mutability pain.

```
Temporal.Now.plainDateISO() — stage 3 awareness
```

Still polyfill era — know direction.

date-fns until Temporal native.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-satisfies-operator-ts">
<summary><b>430. satisfies operator TS</b></summary>

Validate expression matches type without widening literal.

```
const config = { mode: "strict" } satisfies Config;
```

Preserves literal types for inference.

TS 4.9+ interview favorite.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-as-const-assertion">
<summary><b>431. as const assertion</b></summary>

Tuple literal union inference readonly.

```
const routes = ["home", "admin"] as const;
```

Type Route = typeof routes[number]

Route union from array.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-unknown-vs-any">
<summary><b>432. unknown vs any</b></summary>

unknown forces narrowing before use — type-safe catch JSON.

```
const data: unknown = await res.json(); if (isUser(data)) ...
```

any disables checking — avoid.

Parse API boundaries unknown.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-never-exhaustive-check">
<summary><b>433. never exhaustive check</b></summary>

switch default assertNever(x) catches unhandled union cases at compile.

```
function assertNever(x: never): never { throw new Error(); }
```

Compile error when new status added unhandled.

State machine TS pattern.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-utility-types-partial-omit-pick-record">
<summary><b>434. Utility types Partial Omit Pick Record</b></summary>

Partial

all optional; Omit<User,"id"> remove keys; Pick subset.

```
type UpdateUser = Partial<Omit<User,"id">>
```

Record<string, T> dictionary type.

Daily TS generics.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-conditional-types">
<summary><b>435. Conditional types</b></summary>

T extends U ? X : Y — infer keyword extract types.

```
type Return<T> = T extends (...args: any[]) => infer R ? R : never
```

Complex — read library types.

Advanced TS interviews.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-infer-in-conditional-types">
<summary><b>436. infer in conditional types</b></summary>

Extract function return type manually before ReturnType utility.

```
type Params<T> = T extends (arg: infer P) => any ? P : never
```

ReturnType Parameters built-ins use this.

Show deep TS knowledge.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-module-augmentation">
<summary><b>437. Module augmentation</b></summary>

Extend third-party module types — express Request user property.

```
declare module "express-serve-static-core" { interface Request { user?: User } }
```

Global augmentation pollutes — scope minimally.

Integration typing.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-strictnullchecks">
<summary><b>438. strictNullChecks</b></summary>

Null undefined tracked — majority prod TS bugs caught.

```
"strict": true in tsconfig
```

Migration painful legacy code — gradual @ts-expect-error bad long term.

Non-negotiable for new projects.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

<details id="js-zod-runtime-validation">
<summary><b>439. Zod runtime validation</b></summary>

Schema.parse at API boundary — don't trust JSON types.

```
const User = z.object({ id: z.string(), email: z.string().email() }); User.parse(json)
```

Compile time types separate from runtime — generate zod from openapi optional.

FleetPanda localStorage should use this.

- **TypeScript boundary?** Narrow types at API parse (Zod/io-ts), avoid any on event payloads, discriminated unions for state machines.
- **Junior bug?** Pick classic: closure in loop, mutable default args, floating promise without catch, == vs === on IDs.
- **Testing?** Unit for pure logic, RTL for DOM behavior, MSW for network — match test type to failure mode.

</details>

---

## CSS vs SCSS vs Tailwind (24 questions) High priority

<details id="styling-compare-css-scss-and-tailwind-when-to-choose-each">
<summary><b>440. Compare CSS, SCSS, and Tailwind — when to choose each</b></summary>

Approach

Pros

Cons

**Plain CSS**

Zero tooling, native vars, cascade layers

Scale needs discipline (BEM)

**SCSS**

Variables, nesting, mixins, partials

Build step; nesting abuse

**Tailwind**

Speed, design tokens, purge unused

Verbose JSX, learning curve

Trend: CSS native features (nesting, vars) reduce SCSS need; Tailwind dominates greenfield startups.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-scss-nesting-best-practices-and-pitfalls">
<summary><b>441. SCSS nesting — best practices and pitfalls</b></summary>

```
// GOOD — BEM with shallow nesting
.card {
  &__title { font-size: 1.25rem; }
  &--featured { border-color: blue; }
}
// BAD — mirrors DOM depth, specificity explosion
.page .sidebar .nav .item a { color: red; }
```

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-scss-mixins-vs-css-layer-modern-alternative">
<summary><b>442. SCSS mixins vs CSS @layer — modern alternative</b></summary>

```
@mixin focus-ring { outline: 2px solid var(--focus); }
// CSS today:
@layer utilities {
  .focus-ring:focus-visible { outline: 2px solid var(--focus); }
}
```

Mixins still useful for complex parameterized patterns; layers control cascade order natively.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-tailwind-apply-when-acceptable">
<summary><b>443. Tailwind @apply — when acceptable</b></summary>

```
@layer components {
  .btn-primary {
    @apply inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700;
  }
}
```

OK for design-system primitives. Overuse duplicates Tailwind benefits — prefer utilities in markup for one-offs.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-tailwind-jit-and-purging-how-bundle-stays-small">
<summary><b>444. Tailwind JIT and purging — how bundle stays small</b></summary>

Scans source files for class strings; generates only used utilities. Dynamic class names break purge:

```
// BAD — purge can't see full string
const color = 'red'; className={`text-${color}-500`}
// GOOD
const map = { red: 'text-red-500', blue: 'text-blue-500' };
```

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-design-tokens-implement-across-css-scss-tailwind">
<summary><b>445. Design tokens — implement across CSS/SCSS/Tailwind</b></summary>

```
/* CSS vars — source of truth */
:root { --space-4: 1rem; --color-brand: #2563eb; }
/* tailwind.config theme.extend */
colors: { brand: 'var(--color-brand)' }
```

Single token source synced to Tailwind theme and SCSS variables via Style Dictionary.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-css-modules-vs-tailwind-in-react">
<summary><b>446. CSS Modules vs Tailwind in React</b></summary>

**Modules:** scoped class names, colocated `Button.module.css`, zero runtime.

**Tailwind:** faster iteration, consistent spacing scale, worse for highly dynamic arbitrary styles.

Hybrid common: Tailwind layout + CSS modules for complex animations.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-scss-use-vs-deprecated-import">
<summary><b>447. SCSS @use vs deprecated @import</b></summary>

```
@use 'tokens/colors' as c;
.button { background: c.$primary; }
```

@use loads once, namespaced — fixes duplicate CSS and global pollution from @import.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-tailwind-dark-mode-strategies">
<summary><b>448. Tailwind dark mode strategies</b></summary>

```
// tailwind.config: darkMode: 'class'
<html class="dark">
<div class="bg-white dark:bg-slate-900">
```

Or `media` strategy uses prefers-color-scheme — class strategy allows user toggle.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-css-in-js-vs-tailwind-in-2025-senior-take">
<summary><b>449. CSS-in-JS vs Tailwind in 2025 — senior take</b></summary>

CSS-in-JS (styled-components) loses favor: runtime cost, RSC incompatibility, streaming issues. Tailwind + CSS modules + vanilla-extract (zero runtime) preferred for new apps. Know trade-offs, not tribalism.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-bem-naming-convention">
<summary><b>450. BEM naming convention</b></summary>

Block__element--modifier avoids specificity wars plain CSS.

```
.card__title--featured
```

Verbose class names — Tailwind avoids differently.

Legacy codebase common.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-itcss-smacss-layers">
<summary><b>451. ITCSS / SMACSS layers</b></summary>

Ordering: settings tools generic elements objects components utilities.

```
Utilities last win cascade intentionally
```

Tailwind utilities = ITCSS utilities layer.

Architecture not just class names.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-postcss-in-all-stacks">
<summary><b>452. PostCSS in all stacks</b></summary>

Autoprefixer cssnano nesting — build step even "plain CSS".

```
postcss.config.js in Vite webpack
```

Native CSS nesting reduces need nesting plugin.

Know pipeline.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-sass-forward-re-export">
<summary><b>453. Sass @forward re-export</b></summary>

Package index forwards partials for consumers.

```
@forward "tokens"; @forward "mixins";
```

Public API of SCSS library.

Design token packages.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-tailwind-plugins-extend">
<summary><b>454. Tailwind plugins extend</b></summary>

addUtilities addComponents custom design tokens.

```
plugin(function({ addUtilities }) { addUtilities({ ".scrollbar-hide": {...} }) })
```

Don't plugin one-off — use arbitrary value.

Extend not override core.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-cva-class-variance-authority">
<summary><b>455. cva class-variance-authority</b></summary>

Type-safe component variants with Tailwind classes.

```
const button = cva("rounded", { variants: { size: { sm: "px-2", lg: "px-4" } } })
```

shadcn/ui uses cva heavily.

Interview shadcn familiarity.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-tailwind-merge-twmerge">
<summary><b>456. tailwind-merge twMerge</b></summary>

Merge conflicting utilities — last wins correctly.

```
twMerge("px-2 px-4") // px-4
```

cn() helper clsx + twMerge pattern.

Override props className pattern.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-container-queries-tailwind">
<summary><b>457. Container queries Tailwind</b></summary>

@container + @md: arbitrary variants responsive to parent not viewport.

```
<div class="@container"><div class="@md:flex">
```

Component-level responsive not page breakpoint only.

Modern component design.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-logical-properties-tailwind">
<summary><b>458. Logical properties Tailwind</b></summary>

ms-4 me-4 margin-inline — RTL without duplicate classes.

```
ps-4 pe-4 padding-inline
```

Physical pl pr break RTL.

International apps requirement.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-critical-css-extraction">
<summary><b>459. Critical CSS extraction</b></summary>

Above-fold inlined — tools critters vite plugin.

```
Inline <style> critical; async load rest
```

Maintenance burden manual critical.

LCP optimization advanced.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-sass-import-deprecation">
<summary><b>460. Sass @import deprecation</b></summary>

Dart Sass 3 removes @import — migrate @use @forward.

```
@use "sass:math"; math.div(12, 3)
```

Legacy projects mid-migration common.

Interview migration awareness.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-native-css-nesting">
<summary><b>461. Native CSS nesting</b></summary>

Chrome 120+ nest & parent selector — reduce Sass need.

```
.card { & __title { } }
```

Tooling must pass through postcss preset env.

Sass still has mixins functions.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-stylelint-enforcement">
<summary><b>462. Stylelint enforcement</b></summary>

Ban unknown units, enforce property order, a11y contrast plugin.

```
stylelint-config-standard-scss
```

CI stylelint on PR.

Design system governance.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

<details id="styling-interview-answer-css-vs-scss-vs-tailwind">
<summary><b>463. Interview answer CSS vs SCSS vs Tailwind</b></summary>

Structure: team velocity bundle theming SSR constraints — pick with trade-offs not religion.

```
"Greenfield dashboard → Tailwind + CSS vars tokens; legacy enterprise SCSS modules gradual Tailwind"
```

Quantify migration cost.

Staff decision framework.

- **Greenfield 2025?** Tailwind or CSS modules + tokens; avoid global SCSS soup unless team mandate; co-locate styles with components.
- **SCSS migration?** Strangler: new components CSS modules, token map from $variables to custom properties, delete unused partials incrementally.
- **Bundle impact?** Purge/Treeshake Tailwind; critical CSS for above-fold; measure computed stylesheet size in Coverage tab.

</details>

---

## Micro-frontend Communication (28 questions) High priority

<details id="mfe-overview-how-do-micro-frontends-share-data-across-pages">
<summary><b>464. Overview — how do micro-frontends share data across pages</b></summary>

Patterns ranked by common usage:

1. **URL / query params** — shareable, bookmarkable
2. **Custom events / event bus** — loose coupling same page
3. **Shared state store** — module federation shared singleton
4. **Backend as source of truth** — API + cache (best for cross-domain)
5. **postMessage** — cross-origin iframes
6. **BroadcastChannel / localStorage events** — same-origin tabs

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-module-federation-share-react-and-global-store">
<summary><b>465. Module Federation — share React and global store</b></summary>

```
// webpack shell
new ModuleFederationPlugin({
  shared: {
    react: { singleton: true, requiredVersion: '^19', eager: true },
    'shared-store': { singleton: true, import: 'shared-store' }
  }
});
// remote MFE imports same singleton store instance
```

Version mismatch on shared deps = runtime hook errors — align in CI.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-custom-event-bus-for-cross-mfe-communication">
<summary><b>466. Custom event bus for cross-MFE communication</b></summary>

```
type BusEvent = { type: 'USER_LOGIN'; payload: { userId: string } };

class EventBus {
  #target = new EventTarget();
  emit(event: BusEvent) {
    this.#target.dispatchEvent(new CustomEvent(event.type, { detail: event.payload }));
  }
  on<T extends BusEvent['type']>(type: T, handler: (p: ExtractPayload<T>) => void) {
    this.#target.addEventListener(type, (e) => handler(e.detail));
  }
}
export const bus = new EventBus(); // shared module via federation
```

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-passing-data-when-navigating-shell-remote-route">
<summary><b>467. Passing data when navigating shell → remote route</b></summary>

```
// Shell router
navigate('/shop/checkout?cartId=abc123');
// Remote reads
const cartId = new URLSearchParams(location.search).get('cartId');
// Or React Router location.state (not bookmarkable)
navigate('/checkout', { state: { cartId } });
```

Senior rule: persist critical state in URL or server; location.state for ephemeral UI.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-postmessage-for-iframe-based-micro-frontends">
<summary><b>468. postMessage for iframe-based micro-frontends</b></summary>

```
// Child iframe
window.parent.postMessage({ type: 'RESIZE', height: 800 }, 'https://shell.example.com');
// Shell
window.addEventListener('message', (e) => {
  if (e.origin !== 'https://shop.example.com') return; // ALWAYS validate origin
  if (e.data.type === 'RESIZE') iframe.style.height = e.data.height + 'px';
});
```

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-broadcastchannel-across-mfe-tabs-on-same-origin">
<summary><b>469. BroadcastChannel across MFE tabs on same origin</b></summary>

```
const channel = new BroadcastChannel('app-events');
channel.postMessage({ type: 'LOGOUT' });
channel.onmessage = (e) => { if (e.data.type === 'LOGOUT') clearSession(); };
```

All MFE bundles on same origin share channel — logout in one tab syncs all.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-localstorage-storage-event-for-cross-tab-sync">
<summary><b>470. localStorage storage event for cross-tab sync</b></summary>

```
// Tab A
localStorage.setItem('cart', JSON.stringify(cart));
// Tab B
window.addEventListener('storage', (e) => {
  if (e.key === 'cart') setCart(JSON.parse(e.newValue));
});
```

Only fires in *other* tabs, not the writer. Same-origin only.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-shared-auth-token-across-micro-frontends-secure-pattern">
<summary><b>471. Shared auth token across micro-frontends — secure pattern</b></summary>

- HttpOnly cookie on shared parent domain (`.example.com`)
- Shell handles login; MFEs call API with credentials: 'include'
- Never pass JWT in postMessage or query string
- Short-lived access + silent refresh via shell BFF

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-routing-coordination-shell-owns-router-vs-federated-routes">
<summary><b>472. Routing coordination — shell owns router vs federated routes</b></summary>

```
// Shell routes
<Route path="/shop/*" element={<ShopRemote />} />
<Route path="/account/*" element={<AccountRemote />} />
// Remote owns sub-routes internally with basename="/shop"
```

Single browser history — shell must not fight remote for navigation events.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-cross-mfe-css-isolation-shadow-dom-vs-css-modules-vs-prefix">
<summary><b>473. Cross-MFE CSS isolation — Shadow DOM vs CSS Modules vs prefix</b></summary>

- **Shadow DOM:** Strong isolation — hard with React portals/modals
- **CSS Modules / scoped:** Practical default
- **Prefix convention:** `.shop-app__btn` — cheap, discipline-heavy
- **Tailwind prefix:** `prefix: 'shop-'` in remote config

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-single-spa-orchestrator">
<summary><b>474. single-spa orchestrator</b></summary>

Register apps by route lifecycle bootstrap mount unmount.

```
registerApplication({ name: "shop", app: loadShop, activeWhen: "/shop" })
```

Orchestration complexity central.

Know name even if use Federation.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-qiankun-micro-frontends">
<summary><b>475. qiankun micro-frontends</b></summary>

Alibaba framework sandbox prefetch JS isolation.

```
loadMicroApp({ name, entry, container })
```

Popular China ecosystem — global awareness.

Alternative Module Federation.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-import-maps-native-modules">
<summary><b>476. import maps native modules</b></summary>

Browser resolves bare specifiers — experimental CDN native ESM.

```
<script type="importmap">{ "imports": { "react": "..." } }</script>
```

CDN import maps production caution.

Future spec awareness.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-shared-design-system-npm-package">
<summary><b>477. Shared design system npm package</b></summary>

Visual consistency not runtime comms — workspace package @org/ui.

```
pnpm workspace:* link
```

Version skew DS breaks UI consistency.

Separate from event bus.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-contract-testing-pact">
<summary><b>478. Contract testing Pact</b></summary>

Consumer-driven API/event schema between shell and remote.

```
pact between shell events and shop consumer
```

Prevents deploy skew breaking integration.

Staff integration quality.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-version-skew-unknown-events">
<summary><b>479. Version skew unknown events</b></summary>

Shell must ignore unknown bus event types forward compatible.

```
if (!handlers[type]) return; log unknown
```

Strict schema validation loose on consume.

Evolutionary architecture.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-feature-flags-per-mfe">
<summary><b>480. Feature flags per MFE</b></summary>

Shell gates loading remote by flag — gradual rollout.

```
if (flags.newShop) loadRemote("shop-v2")
```

Flag debt — remove old path.

LaunchDarkly integration.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-error-boundary-per-remote">
<summary><b>481. Error boundary per remote</b></summary>

Remote crash isolated — shell shows fallback rest app works.

```
<ErrorBoundary fallback={<ShopDown />}><ShopRemote /></ErrorBoundary>
```

Error telemetry tag remote name.

Resilience requirement production MFE.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-lazy-load-remote-entry">
<summary><b>482. Lazy load remote entry</b></summary>

import("shop/App") on route — not on initial shell load.

```
React.lazy + Federation
```

Waterfall if serial — prefetch hover.

Performance MFE pattern.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-prefetch-remote-on-nav-hover">
<summary><b>483. Prefetch remote on nav hover</b></summary>

MouseEnter nav link warm remoteEntry cache.

```
onMouseEnter={() => import("shop/App")}
```

Wasted bandwidth if never clicked — low cost.

UX snappy route change.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-global-namespace-pollution-anti-pattern">
<summary><b>484. Global namespace pollution anti-pattern</b></summary>

window.MyApp = {} collisions — use modules Federation shared scope.

```
ES modules IIFE scope
```

Legacy script tags problematic.

Modern MFE ESM based.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-rxjs-subject-event-bus">
<summary><b>485. RxJS Subject event bus</b></summary>

Alternative EventTarget — unsubscribe management operators.

```
subject$.pipe(filter(...)).subscribe()
```

RxJS learning curve team dependency.

Typed wrappers recommended.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-redux-only-in-shell-bridge">
<summary><b>486. Redux only in shell bridge</b></summary>

Remotes call shell.dispatch via exposed bridge API not direct store import.

```
window.__SHELL__.dispatch(action) // controlled API
```

Tight coupling if abused.

Prefer event bus loose coupling.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-tanstack-query-shared-client">
<summary><b>487. TanStack Query shared client</b></summary>

Singleton QueryClient in shell — cache shared remotes same SPA.

```
<QueryClientProvider client={queryClient}>
```

Cache invalidation cross-MFE coordinated.

Server state unified client-side.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-cross-mfe-analytics">
<summary><b>488. Cross-MFE analytics</b></summary>

Shell owns dataLayer push remotes call shell.track(event).

```
shell.track("purchase", { orderId })
```

Duplicate GA tags if each MFE loads GTM.

Central analytics governance.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-i18n-locale-sync-bus">
<summary><b>489. i18n locale sync bus</b></summary>

Shell sets locale broadcasts LOCALE_CHANGED remotes reload namespaces.

```
bus.emit({ type: "LOCALE_CHANGED", locale: "fr" })
```

Flash wrong language if async load slow.

Preload locale JSON.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-playwright-cross-mfe-e2e">
<summary><b>490. Playwright cross-MFE E2E</b></summary>

Test shell+remote integration critical flows checkout login.

```
test("shop checkout", async ({ page }) => { ... cross origin if iframe })
```

Contract tests + E2E pyramid.

CI runs against preview env both remotes.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

<details id="mfe-when-not-micro-frontend">
<summary><b>491. When NOT micro-frontend</b></summary>

Small team tight coupling — modular monolith cheaper faster.

```
Monolith code split routes until org pain justifies MFE ops cost
```

Honesty impresses staff interviewers.

MFE tax: deploy coord version skew perf.

- **Version drift?** Shared dependency semver contract, integration tests shell+remote, canary remote URL, fallback UI if remoteEntry fails.
- **Cross-team testing?** Contract tests on exposed modules, e2e against staging shell with production remote pins, visual regression on shell layout.
- **Security?** Remote code runs in user session — CSP, subresource integrity on remoteEntry, auth token not in shared global.

</details>

---

## High Priority Misc (25 questions)

<details id="priority-xss-types-and-prevention-in-react-apps">
<summary><b>492. XSS types and prevention in React apps</b></summary>

- **Stored/reflected XSS:** sanitize HTML, CSP
- **DOM XSS:** never innerHTML with user input
- React escapes JSX by default — danger: dangerouslySetInnerHTML

```
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
```

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-csrf-protection-for-cookie-based-spas">
<summary><b>493. CSRF protection for cookie-based SPAs</b></summary>

SameSite=Lax/Strict cookies + CSRF token header on mutations + verify Origin/Referer server-side. Double-submit cookie pattern for legacy.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-oauth-2-0-pkce-flow-for-public-spa-clients">
<summary><b>494. OAuth 2.0 PKCE flow for public SPA clients</b></summary>

```
// Generate code_verifier + code_challenge (S256)
// Redirect to auth server with challenge
// Exchange code + verifier for tokens — no client secret in browser
```

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-tanstack-query-staletime-vs-gctime-cachetime">
<summary><b>495. TanStack Query — staleTime vs gcTime (cacheTime)</b></summary>

- **staleTime:** how long data considered fresh (no refetch on mount)
- **gcTime:** how long inactive cache kept in memory

```
useQuery({ queryKey: ['user'], queryFn: fetchUser, staleTime: 5 * 60 * 1000 });
```

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-web-vitals-inp-debugging-workflow">
<summary><b>496. Web Vitals — INP debugging workflow</b></summary>

1. Find long tasks in Performance panel
2. Split handlers — defer non-critical work
3. Web worker for heavy compute
4. Reduce re-renders on input
5. Check third-party scripts

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-accessibility-audit-checklist-for-release">
<summary><b>497. Accessibility audit checklist for release</b></summary>

- Keyboard-only navigation all flows
- Focus visible and trapped in modals
- Color contrast AA
- Screen reader labels on icons
- axe-core CI on critical pages

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-monorepo-shared-eslint-ts-config">
<summary><b>498. Monorepo shared ESLint/TS config</b></summary>

```
// packages/eslint-config/index.js
module.exports = { extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'] };
// apps/web/.eslintrc extends '@org/eslint-config'
```

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-semantic-versioning-for-design-system">
<summary><b>499. Semantic versioning for design system</b></summary>

Breaking: removed prop, token rename → major. New component → minor. Bugfix → patch. Consumers pin ranges; codemods for majors.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-playwright-vs-cypress-for-e2e">
<summary><b>500. Playwright vs Cypress for E2E</b></summary>

**Playwright:** multi-browser, parallel, auto-wait, better for CI scale.** Cypress:** DX, time-travel debug — Chromium-focused historically. Senior teams often Playwright for cross-browser.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-storybook-role-in-design-system-workflow">
<summary><b>501. Storybook — role in design system workflow</b></summary>

Document component states, visual regression (Chromatic), a11y addon, interaction tests. Source of truth for design-dev handoff.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-sri-subresource-integrity">
<summary><b>502. SRI Subresource Integrity</b></summary>

Hash verify CDN scripts untampered.

```
integrity sha384-... crossorigin anonymous
```

Update hash when vendor updates file.

Security checklist item.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-npm-supply-chain-audit">
<summary><b>503. npm supply chain audit</b></summary>

lockfile CI audit Renovate grouped PRs Socket scanning.

```
pnpm audit fail high critical
```

Zero day response process documented.

Senior owns dependency hygiene.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-dependabot-vs-renovate">
<summary><b>504. Dependabot vs Renovate</b></summary>

Renovate more configurable grouped monorepo schedules.

```
renovate.json schedule weekly group react
```

Noise fatigue if ungrouped daily PRs.

Pick one org-wide.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-conventional-commits">
<summary><b>505. Conventional commits</b></summary>

feat fix chore — semantic release changelog automation.

```
feat(cart): add idempotency key header
```

Enforce commitlint husky.

Release engineering awareness.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-trunk-based-vs-gitflow">
<summary><b>506. Trunk-based vs GitFlow</b></summary>

Short-lived branches main always releasable feature flags.

```
PR merge within 1-2 days max
```

GitFlow slow for continuous delivery.

Most product companies trunk-based now.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-codeowners-review">
<summary><b>507. CODEOWNERS review</b></summary>

DS changes require @org/design-system approval.

```
CODEOWNERS /packages/ui @design-system
```

Automatic review assignment GitHub.

Governance scale teams.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-lighthouse-ci-budgets">
<summary><b>508. Lighthouse CI budgets</b></summary>

Assert perf scores bundle size on PR.

```
lighthouseci assert --budgetsPath budgets.json
```

Lab vs field data both matter.

Prevent perf regression.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-source-map-security">
<summary><b>509. Source map security</b></summary>

hidden-source-map upload Sentry not public hosting.

```
vite build sourcemap hidden
```

Public source maps leak source code.

Incident debug requirement.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-edge-middleware-routing">
<summary><b>510. Edge middleware routing</b></summary>

Auth geo A/B at edge before SSR origin.

```
middleware redirect unauthenticated /login
```

Cold start edge functions cost.

Vercel Cloudflare Workers examples.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-rate-limit-429-ux">
<summary><b>511. Rate limit 429 UX</b></summary>

Retry-After header exponential backoff user message.

```
await sleep(parseRetryAfter(res))
```

Jitter retries prevent thundering herd.

API contract respect.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-cursor-vs-offset-pagination-api">
<summary><b>512. Cursor vs offset pagination API</b></summary>

Cursor stable live datasets; offset breaks when rows inserted mid-list.

```
GET /items?cursor=eyJpZCI6...
```

Offset OK admin small static tables.

Infinite scroll uses cursor.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-idempotent-put-patch-retries">
<summary><b>513. Idempotent PUT PATCH retries</b></summary>

Network fail retry same body safe — server dedupes.

```
Retry fetch with same Idempotency-Key
```

GET idempotent by definition POST often not.

Payment flows critical.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-opentelemetry-rum-traces">
<summary><b>514. OpenTelemetry RUM traces</b></summary>

Browser trace links backend traceparent header correlation.

```
fetch(url, { headers: { traceparent: activeSpanContext() } })
```

Sample rate privacy PII scrub.

Full stack debug story.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-cookie-consent-legal">
<summary><b>515. Cookie consent legal</b></summary>

Block non-essential scripts until consent GDPR ePrivacy.

```
if (consent.analytics) loadGTM()
```

Consent mode Google Analytics v2.

Legal + perf intersection.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

<details id="priority-staff-meta-skill-answer-structure">
<summary><b>516. Staff meta-skill answer structure</b></summary>

Context options decision trade-offs metric — every senior answer.

```
2-3 minute spoken arc practice daily
```

Judgment over trivia.

This meta-question closes prep guide.

- **Attack vector?** XSS, CSRF, IDOR, token theft — map control to STRIDE category briefly.
- **Compliance?** GDPR consent, SOC2 logging, PCI if payments — only claim what the scenario needs.
- **Incident response?** Detect via alert, rollback, comms template, postmortem — show ops maturity not just code.

</details>

---

## License

MIT — use freely for interview prep.
