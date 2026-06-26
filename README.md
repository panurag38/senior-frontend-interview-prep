# Senior Frontend Interview Prep

> **516 interview questions** for senior/staff frontend loops — system design, React, micro-frontends, browser internals, and more.  
> Styled as an interactive guide (expand each question). Inspired by [javascript-interview-questions](https://github.com/sudheerj/javascript-interview-questions).

## Quick links

| | |
|---|---|
| **Open guide** | [index.html](./index.html) (local) · [GitHub Pages](https://panurag38.github.io/senior-frontend-interview-prep/) after deploy |
| **Micro-frontends** | [index.html#mfe](./index.html#mfe) |
| **System design** | [index.html#sysdesign](./index.html#sysdesign) |

Each answer includes **Reasoning → Example → Trade-offs**, production examples (Netflix, Amazon, Flipkart, Myntra, Walmart, Instagram, X), and follow-up Q&A.

---

## Table of contents


### [System Design Scenarios (15) Full interview rounds](./index.html#sysdesign) (15)

| # | Question |
|---|----------|
| 1 | [1. Design the frontend for a Netflix-style video streaming app](./index.html#sysdesign-design-the-frontend-for-a-netflix-style-video-streaming-app) |
| 2 | [2. Design Google Docs–style collaborative rich text editor](./index.html#sysdesign-design-google-docs-style-collaborative-rich-text-editor) |
| 3 | [3. Design e-commerce checkout (cart → payment → confirmation)](./index.html#sysdesign-design-e-commerce-checkout-cart-payment-confirmation) |
| 4 | [4. Design a real-time fleet tracking dashboard (FleetPanda at scale)](./index.html#sysdesign-design-a-real-time-fleet-tracking-dashboard-fleetpanda-at-scale) |
| 5 | [5. Design a company-wide design system for 12 product teams](./index.html#sysdesign-design-a-company-wide-design-system-for-12-product-teams) |
| 6 | [6. Design multi-tenant SaaS auth (ACME vs Globex on same app)](./index.html#sysdesign-design-multi-tenant-saas-auth-acme-vs-globex-on-same-app) |
| 7 | [7. Design offline-first field inspection app](./index.html#sysdesign-design-offline-first-field-inspection-app) |
| 8 | [8. Migrate 500-route Webpack app to Vite (strangler)](./index.html#sysdesign-migrate-500-route-webpack-app-to-vite-strangler) |
| 9 | [9. Global notification center](./index.html#sysdesign-global-notification-center) |
| 10 | [10. Typeahead search at Amazon scale](./index.html#sysdesign-typeahead-search-at-amazon-scale) |
| 11 | [11. A/B testing platform integration](./index.html#sysdesign-a-b-testing-platform-integration) |
| 12 | [12. Admin analytics dashboard (10M rows)](./index.html#sysdesign-admin-analytics-dashboard-10m-rows) |
| 13 | [13. Social feed infinite scroll + media](./index.html#sysdesign-social-feed-infinite-scroll-media) |
| 14 | [14. Frontend platform team charter (50 devs)](./index.html#sysdesign-frontend-platform-team-charter-50-devs) |
| 15 | [15. Production white screen after deploy — incident response](./index.html#sysdesign-production-white-screen-after-deploy-incident-response) |


### [End-to-End Journeys (20) Full timeline answers](./index.html#journeys) (20)

| # | Question |
|---|----------|
| 1 | [1. What happens when you type a URL in Chrome and press Enter?](./index.html#journeys-what-happens-when-you-type-a-url-in-chrome-and-press-enter) |
| 2 | [2. What happens when you click a link on a page (same origin)?](./index.html#journeys-what-happens-when-you-click-a-link-on-a-page-same-origin) |
| 3 | [3. DNS resolution — step by step](./index.html#journeys-dns-resolution-step-by-step) |
| 4 | [4. TCP and TLS handshake — frontend performance](./index.html#journeys-tcp-and-tls-handshake-frontend-performance) |
| 5 | [5. HTTP request/response — browser perspective](./index.html#journeys-http-request-response-browser-perspective) |
| 6 | [6. From HTML bytes to pixels (critical rendering path)](./index.html#journeys-from-html-bytes-to-pixels-critical-rendering-path) |
| 7 | [7. What happens when JavaScript runs after page load?](./index.html#journeys-what-happens-when-javascript-runs-after-page-load) |
| 8 | [8. Browser cache layers — memory, disk, Service Worker](./index.html#journeys-browser-cache-layers-memory-disk-service-worker) |
| 9 | [9. Hard refresh vs normal navigation back](./index.html#journeys-hard-refresh-vs-normal-navigation-back) |
| 10 | [10. Cross-origin request from JavaScript — full path](./index.html#journeys-cross-origin-request-from-javascript-full-path) |
| 11 | [11. Traditional HTML form POST submission](./index.html#journeys-traditional-html-form-post-submission) |
| 12 | [12. WebSocket connection lifecycle](./index.html#journeys-websocket-connection-lifecycle) |
| 13 | [13. Service Worker — first visit vs repeat visit](./index.html#journeys-service-worker-first-visit-vs-repeat-visit) |
| 14 | [14. prefetch, preconnect, preload — when each?](./index.html#journeys-prefetch-preconnect-preload-when-each) |
| 15 | [15. Third-party script load (GTM, analytics)](./index.html#journeys-third-party-script-load-gtm-analytics) |
| 16 | [16. SSL/TLS certificate errors in browser](./index.html#journeys-ssl-tls-certificate-errors-in-browser) |
| 17 | [17. Redirect chain (301/302) performance](./index.html#journeys-redirect-chain-301-302-performance) |
| 18 | [18. Download file vs render HTML in browser](./index.html#journeys-download-file-vs-render-html-in-browser) |
| 19 | [19. Page unload — beforeunload, pagehide, visibilitychange](./index.html#journeys-page-unload-beforeunload-pagehide-visibilitychange) |
| 20 | [20. Debug slow page load — full senior process](./index.html#journeys-debug-slow-page-load-full-senior-process) |


### [Package Managers &amp; Node Tooling (22) Must know](./index.html#tooling) (22)

| # | Question |
|---|----------|
| 1 | [1. npm vs pnpm vs Yarn vs Bun — compare for production monorepos.](./index.html#tooling-npm-vs-pnpm-vs-yarn-vs-bun-compare-for-production-monorepos) |
| 2 | [2. What are phantom dependencies and how does pnpm prevent them?](./index.html#tooling-what-are-phantom-dependencies-and-how-does-pnpm-prevent-them) |
| 3 | [3. lockfiles — package-lock.json vs pnpm-lock.yaml vs yarn.lock.](./index.html#tooling-lockfiles-package-lock-json-vs-pnpm-lock-yaml-vs-yarn-lock) |
| 4 | [4. npm workspaces vs pnpm workspaces — monorepo setup.](./index.html#tooling-npm-workspaces-vs-pnpm-workspaces-monorepo-setup) |
| 5 | [5. peerDependencies — why React libs use them.](./index.html#tooling-peerdependencies-why-react-libs-use-them) |
| 6 | [6. overrides / resolutions — force transitive dependency version.](./index.html#tooling-overrides-resolutions-force-transitive-dependency-version) |
| 7 | [7. npm ci vs npm install in CI pipelines.](./index.html#tooling-npm-ci-vs-npm-install-in-ci-pipelines) |
| 8 | [8. npx vs pnpm dlx vs yarn dlx — run packages without global install.](./index.html#tooling-npx-vs-pnpm-dlx-vs-yarn-dlx-run-packages-without-global-install) |
| 9 | [9. .npmrc / .pnpmfile.cjs — common production settings.](./index.html#tooling-npmrc-pnpmfile-cjs-common-production-settings) |
| 10 | [10. Supply chain — npm audit, Socket, lockfile integrity.](./index.html#tooling-supply-chain-npm-audit-socket-lockfile-integrity) |
| 11 | [11. semver caret vs tilde](./index.html#tooling-semver-caret-vs-tilde) |
| 12 | [12. bundledDependencies](./index.html#tooling-bundleddependencies) |
| 13 | [13. optionalDependencies](./index.html#tooling-optionaldependencies) |
| 14 | [14. postinstall script security](./index.html#tooling-postinstall-script-security) |
| 15 | [15. package.json exports field](./index.html#tooling-package-json-exports-field) |
| 16 | [16. type module vs commonjs](./index.html#tooling-type-module-vs-commonjs) |
| 17 | [17. Node ESM vs CJS interop](./index.html#tooling-node-esm-vs-cjs-interop) |
| 18 | [18. Volta vs engines field](./index.html#tooling-volta-vs-engines-field) |
| 19 | [19. Corepack enable pnpm/yarn](./index.html#tooling-corepack-enable-pnpm-yarn) |
| 20 | [20. Private registry scope](./index.html#tooling-private-registry-scope) |
| 21 | [21. pnpm catalog (v9+)](./index.html#tooling-pnpm-catalog-v9) |
| 22 | [22. Interview narrative npm vs pnpm](./index.html#tooling-interview-narrative-npm-vs-pnpm) |


### [Frontend Engineering Tooling (20)](./index.html#fe-tooling) (20)

| # | Question |
|---|----------|
| 1 | [1. ESLint + Prettier + TypeScript — how they fit together.](./index.html#fe-tooling-eslint-prettier-typescript-how-they-fit-together) |
| 2 | [2. Husky + lint-staged — pre-commit without slowing devs.](./index.html#fe-tooling-husky-lint-staged-pre-commit-without-slowing-devs) |
| 3 | [3. Changesets vs semantic-release for versioning monorepos.](./index.html#fe-tooling-changesets-vs-semantic-release-for-versioning-monorepos) |
| 4 | [4. Turborepo vs Nx — task orchestration.](./index.html#fe-tooling-turborepo-vs-nx-task-orchestration) |
| 5 | [5. Environment variables — Vite vs Next vs Webpack.](./index.html#fe-tooling-environment-variables-vite-vs-next-vs-webpack) |
| 6 | [6. Git merge vs rebase](./index.html#fe-tooling-git-merge-vs-rebase) |
| 7 | [7. Trunk-based development](./index.html#fe-tooling-trunk-based-development) |
| 8 | [8. Docker multi-stage FE build](./index.html#fe-tooling-docker-multi-stage-fe-build) |
| 9 | [9. pnpm store cache in GitHub Actions](./index.html#fe-tooling-pnpm-store-cache-in-github-actions) |
| 10 | [10. MSW Mock Service Worker](./index.html#fe-tooling-msw-mock-service-worker) |
| 11 | [11. bundlesize / size-limit CI](./index.html#fe-tooling-bundlesize-size-limit-ci) |
| 12 | [12. Lighthouse CI on preview](./index.html#fe-tooling-lighthouse-ci-on-preview) |
| 13 | [13. Sentry release + source maps](./index.html#fe-tooling-sentry-release-source-maps) |
| 14 | [14. Feature flags bootstrap](./index.html#fe-tooling-feature-flags-bootstrap) |
| 15 | [15. ADR Architecture Decision Records](./index.html#fe-tooling-adr-architecture-decision-records) |
| 16 | [16. Chromatic visual regression](./index.html#fe-tooling-chromatic-visual-regression) |
| 17 | [17. commitlint conventional](./index.html#fe-tooling-commitlint-conventional) |
| 18 | [18. CODEOWNERS path rules](./index.html#fe-tooling-codeowners-path-rules) |
| 19 | [19. Preview deploy PR comments](./index.html#fe-tooling-preview-deploy-pr-comments) |
| 20 | [20. Renovate grouped dependencies](./index.html#fe-tooling-renovate-grouped-dependencies) |


### [React (55 questions)](./index.html#react) (55)

| # | Question |
|---|----------|
| 1 | [1. Explain the React reconciliation algorithm and what triggers a re-render.](./index.html#react-explain-the-react-reconciliation-algorithm-and-what-triggers-a-re-render) |
| 2 | [2. What changed in React 19 that affects production apps?](./index.html#react-what-changed-in-react-19-that-affects-production-apps) |
| 3 | [3. Controlled vs uncontrolled components — when to use each?](./index.html#react-controlled-vs-uncontrolled-components-when-to-use-each) |
| 4 | [4. Explain useEffect vs useLayoutEffect vs useInsertionEffect.](./index.html#react-explain-useeffect-vs-uselayouteffect-vs-useinsertioneffect) |
| 5 | [5. Why does React 18 StrictMode double-invoke effects in development?](./index.html#react-why-does-react-18-strictmode-double-invoke-effects-in-development) |
| 6 | [6. What is the React Fiber architecture?](./index.html#react-what-is-the-react-fiber-architecture) |
| 7 | [7. Explain Concurrent React and time slicing.](./index.html#react-explain-concurrent-react-and-time-slicing) |
| 8 | [8. useMemo vs useCallback vs React.memo — when each matters.](./index.html#react-usememo-vs-usecallback-vs-react-memo-when-each-matters) |
| 9 | [9. How do you prevent unnecessary re-renders in a large context tree?](./index.html#react-how-do-you-prevent-unnecessary-re-renders-in-a-large-context-tree) |
| 10 | [10. Explain keys in lists — why not use index?](./index.html#react-explain-keys-in-lists-why-not-use-index) |
| 11 | [11. Rules of Hooks — why do they exist?](./index.html#react-rules-of-hooks-why-do-they-exist) |
| 12 | [12. Custom hook design — what makes a good custom hook?](./index.html#react-custom-hook-design-what-makes-a-good-custom-hook) |
| 13 | [13. useRef vs useState — storage and re-render implications.](./index.html#react-useref-vs-usestate-storage-and-re-render-implications) |
| 14 | [14. useReducer vs useState for complex state.](./index.html#react-usereducer-vs-usestate-for-complex-state) |
| 15 | [15. How does useId work and why use it over Math.random()?](./index.html#react-how-does-useid-work-and-why-use-it-over-math-random) |
| 16 | [16. useImperativeHandle — legitimate use cases?](./index.html#react-useimperativehandle-legitimate-use-cases) |
| 17 | [17. Explain stale closures in hooks and how to fix them.](./index.html#react-explain-stale-closures-in-hooks-and-how-to-fix-them) |
| 18 | [18. useEffect dependency array — exhaustive-deps debate.](./index.html#react-useeffect-dependency-array-exhaustive-deps-debate) |
| 19 | [19. How to cancel async work in useEffect?](./index.html#react-how-to-cancel-async-work-in-useeffect) |
| 20 | [20. useSyncExternalStore — when and why?](./index.html#react-usesyncexternalstore-when-and-why) |
| 21 | [21. How do you profile React performance in production?](./index.html#react-how-do-you-profile-react-performance-in-production) |
| 22 | [22. Code splitting strategies in React.](./index.html#react-code-splitting-strategies-in-react) |
| 23 | [23. Virtualization for long lists — react-window vs react-virtuoso.](./index.html#react-virtualization-for-long-lists-react-window-vs-react-virtuoso) |
| 24 | [24. React Server Components (RSC) — what problem do they solve?](./index.html#react-react-server-components-rsc-what-problem-do-they-solve) |
| 25 | [25. Suspense for data fetching — patterns and pitfalls.](./index.html#react-suspense-for-data-fetching-patterns-and-pitfalls) |
| 26 | [26. Compound components pattern with Context.](./index.html#react-compound-components-pattern-with-context) |
| 27 | [27. Render props vs HOC vs hooks — evolution and trade-offs.](./index.html#react-render-props-vs-hoc-vs-hooks-evolution-and-trade-offs) |
| 28 | [28. Error boundaries — limitations and patterns.](./index.html#react-error-boundaries-limitations-and-patterns) |
| 29 | [29. Portals — use cases beyond modals.](./index.html#react-portals-use-cases-beyond-modals) |
| 30 | [30. forwardRef deprecation in React 19 — migration.](./index.html#react-forwardref-deprecation-in-react-19-migration) |
| 31 | [31. Lifting state up — when and why?](./index.html#react-lifting-state-up-when-and-why) |
| 32 | [32. Prop drilling — solutions ranked.](./index.html#react-prop-drilling-solutions-ranked) |
| 33 | [33. React.lazy and dynamic import — code splitting](./index.html#react-react-lazy-and-dynamic-import-code-splitting) |
| 34 | [34. Hydration mismatch — causes and fixes](./index.html#react-hydration-mismatch-causes-and-fixes) |
| 35 | [35. React 18 automatic batching](./index.html#react-react-18-automatic-batching) |
| 36 | [36. flushSync — when and why avoid](./index.html#react-flushsync-when-and-why-avoid) |
| 37 | [37. useDeferredValue vs debounce](./index.html#react-usedeferredvalue-vs-debounce) |
| 38 | [38. Synthetic events in React](./index.html#react-synthetic-events-in-react) |
| 39 | [39. dangerouslySetInnerHTML safely](./index.html#react-dangerouslysetinnerhtml-safely) |
| 40 | [40. Derived state anti-pattern](./index.html#react-derived-state-anti-pattern) |
| 41 | [41. TanStack Query vs useEffect data fetching](./index.html#react-tanstack-query-vs-useeffect-data-fetching) |
| 42 | [42. React Hook Form vs Formik](./index.html#react-react-hook-form-vs-formik) |
| 43 | [43. Testing Library query priority](./index.html#react-testing-library-query-priority) |
| 44 | [44. MSW in dev and test](./index.html#react-msw-in-dev-and-test) |
| 45 | [45. Module Federation + React singleton](./index.html#react-module-federation-react-singleton) |
| 46 | [46. React 19 Activity API](./index.html#react-react-19-activity-api) |
| 47 | [47. React Server Components boundary](./index.html#react-react-server-components-boundary) |
| 48 | [48. Server Actions pattern](./index.html#react-server-actions-pattern) |
| 49 | [49. useTransition pending UI](./index.html#react-usetransition-pending-ui) |
| 50 | [50. Error boundary reset with key](./index.html#react-error-boundary-reset-with-key) |
| 51 | [51. Ref callback cleanup pattern](./index.html#react-ref-callback-cleanup-pattern) |
| 52 | [52. StrictMode imperative library teardown](./index.html#react-strictmode-imperative-library-teardown) |
| 53 | [53. React Compiler adoption](./index.html#react-react-compiler-adoption) |
| 54 | [54. Profiler workflow for perf interviews](./index.html#react-profiler-workflow-for-perf-interviews) |
| 55 | [55. Micro-frontend lazy remote loading](./index.html#react-micro-frontend-lazy-remote-loading) |


### [Redux (35 questions)](./index.html#redux) (35)

| # | Question |
|---|----------|
| 1 | [1. Redux core principles and when NOT to use Redux.](./index.html#redux-redux-core-principles-and-when-not-to-use-redux) |
| 2 | [2. Redux Toolkit vs classic Redux — what RTK solves.](./index.html#redux-redux-toolkit-vs-classic-redux-what-rtk-solves) |
| 3 | [3. Explain middleware chain — dispatch flow.](./index.html#redux-explain-middleware-chain-dispatch-flow) |
| 4 | [4. redux-thunk vs redux-saga vs RTK Query.](./index.html#redux-redux-thunk-vs-redux-saga-vs-rtk-query) |
| 5 | [5. Normalized state shape — why entities + ids?](./index.html#redux-normalized-state-shape-why-entities-ids) |
| 6 | [6. createSelector (Reselect) — memoization.](./index.html#redux-createselector-reselect-memoization) |
| 7 | [7. RTK Query — cache lifecycle.](./index.html#redux-rtk-query-cache-lifecycle) |
| 8 | [8. useSelector performance — equality checks.](./index.html#redux-useselector-performance-equality-checks) |
| 9 | [9. Redux DevTools — time travel and action replay.](./index.html#redux-redux-devtools-time-travel-and-action-replay) |
| 10 | [10. Immer in createSlice — how draft works.](./index.html#redux-immer-in-createslice-how-draft-works) |
| 11 | [11. Action creators in Redux](./index.html#redux-action-creators-in-redux) |
| 12 | [12. combineReducers composition](./index.html#redux-combinereducers-composition) |
| 13 | [13. redux-persist](./index.html#redux-redux-persist) |
| 14 | [14. SSR Redux hydration](./index.html#redux-ssr-redux-hydration) |
| 15 | [15. Selector colocation](./index.html#redux-selector-colocation) |
| 16 | [16. Ducks / feature folder pattern](./index.html#redux-ducks-feature-folder-pattern) |
| 17 | [17. Giant slice anti-pattern](./index.html#redux-giant-slice-anti-pattern) |
| 18 | [18. Side effects NEVER in reducer](./index.html#redux-side-effects-never-in-reducer) |
| 19 | [19. RTK listener middleware](./index.html#redux-rtk-listener-middleware) |
| 20 | [20. RTK Query optimistic updates](./index.html#redux-rtk-query-optimistic-updates) |
| 21 | [21. Redux vs Context](./index.html#redux-redux-vs-context) |
| 22 | [22. Redux vs Zustand](./index.html#redux-redux-vs-zustand) |
| 23 | [23. Redux vs Jotai/Recoil](./index.html#redux-redux-vs-jotai-recoil) |
| 24 | [24. Batching in React 18 + Redux](./index.html#redux-batching-in-react-18-redux) |
| 25 | [25. Serializable check middleware](./index.html#redux-serializable-check-middleware) |
| 26 | [26. Auth token in RTK Query baseQuery](./index.html#redux-auth-token-in-rtk-query-basequery) |
| 27 | [27. createEntityAdapter](./index.html#redux-createentityadapter) |
| 28 | [28. RTK Query prefetch](./index.html#redux-rtk-query-prefetch) |
| 29 | [29. injectReducer (legacy code split)](./index.html#redux-injectreducer-legacy-code-split) |
| 30 | [30. Testing reducers](./index.html#redux-testing-reducers) |
| 31 | [31. Testing thunks](./index.html#redux-testing-thunks) |
| 32 | [32. extraReducers cross-slice](./index.html#redux-extrareducers-cross-slice) |
| 33 | [33. Global error slice + listener](./index.html#redux-global-error-slice-listener) |
| 34 | [34. Undo/redo with redux-undo](./index.html#redux-undo-redo-with-redux-undo) |
| 35 | [35. Industry trend 2025 — Redux role](./index.html#redux-industry-trend-2025-redux-role) |


### [Webpack (30 questions)](./index.html#webpack) (30)

| # | Question |
|---|----------|
| 1 | [1. Webpack core concepts: entry, output, loaders, plugins.](./index.html#webpack-webpack-core-concepts-entry-output-loaders-plugins) |
| 2 | [2. Module federation — micro-frontends.](./index.html#webpack-module-federation-micro-frontends) |
| 3 | [3. Contenthash vs chunkhash vs hash.](./index.html#webpack-contenthash-vs-chunkhash-vs-hash) |
| 4 | [4. Tree shaking — requirements.](./index.html#webpack-tree-shaking-requirements) |
| 5 | [5. Code splitting — dynamic import syntax.](./index.html#webpack-code-splitting-dynamic-import-syntax) |
| 6 | [6. webpack-dev-server vs production build differences.](./index.html#webpack-webpack-dev-server-vs-production-build-differences) |
| 7 | [7. Source maps strategies for production.](./index.html#webpack-source-maps-strategies-for-production) |
| 8 | [8. Resolve alias and extensions.](./index.html#webpack-resolve-alias-and-extensions) |
| 9 | [9. Asset modules (Webpack 5).](./index.html#webpack-asset-modules-webpack-5) |
| 10 | [10. Bundle analyzer — finding bloat.](./index.html#webpack-bundle-analyzer-finding-bloat) |
| 11 | [11. Loader execution order](./index.html#webpack-loader-execution-order) |
| 12 | [12. babel-loader vs ts-loader](./index.html#webpack-babel-loader-vs-ts-loader) |
| 13 | [13. thread-loader parallelization](./index.html#webpack-thread-loader-parallelization) |
| 14 | [14. Webpack 5 filesystem cache](./index.html#webpack-webpack-5-filesystem-cache) |
| 15 | [15. externals configuration](./index.html#webpack-externals-configuration) |
| 16 | [16. HotModuleReplacement API](./index.html#webpack-hotmodulereplacement-api) |
| 17 | [17. DefinePlugin / EnvironmentPlugin](./index.html#webpack-defineplugin-environmentplugin) |
| 18 | [18. Webpack 5 removed Node polyfills](./index.html#webpack-webpack-5-removed-node-polyfills) |
| 19 | [19. MiniCssExtractPlugin vs style-loader](./index.html#webpack-minicssextractplugin-vs-style-loader) |
| 20 | [20. CSS Modules in webpack](./index.html#webpack-css-modules-in-webpack) |
| 21 | [21. PostCSS loader chain](./index.html#webpack-postcss-loader-chain) |
| 22 | [22. Duplicate package detection](./index.html#webpack-duplicate-package-detection) |
| 23 | [23. performance.maxAssetSize hints](./index.html#webpack-performance-maxassetsize-hints) |
| 24 | [24. Scope hoisting / concatenation](./index.html#webpack-scope-hoisting-concatenation) |
| 25 | [25. Webpack vs Rollup vs esbuild](./index.html#webpack-webpack-vs-rollup-vs-esbuild) |
| 26 | [26. Custom webpack plugin anatomy](./index.html#webpack-custom-webpack-plugin-anatomy) |
| 27 | [27. Module resolution failure debugging](./index.html#webpack-module-resolution-failure-debugging) |
| 28 | [28. SplitChunksPlugin strategy](./index.html#webpack-splitchunksplugin-strategy) |
| 29 | [29. Source map dev vs prod](./index.html#webpack-source-map-dev-vs-prod) |
| 30 | [30. Webpack to Vite migration checklist](./index.html#webpack-webpack-to-vite-migration-checklist) |


### [Vite (25 questions)](./index.html#vite) (25)

| # | Question |
|---|----------|
| 1 | [1. Why is Vite dev server faster than Webpack dev?](./index.html#vite-why-is-vite-dev-server-faster-than-webpack-dev) |
| 2 | [2. Vite production build — what runs under the hood?](./index.html#vite-vite-production-build-what-runs-under-the-hood) |
| 3 | [3. vite.config.ts essential options.](./index.html#vite-vite-config-ts-essential-options) |
| 4 | [4. Environment variables in Vite.](./index.html#vite-environment-variables-in-vite) |
| 5 | [5. SSR with Vite.](./index.html#vite-ssr-with-vite) |
| 6 | [6. Vitest integration — why same config?](./index.html#vite-vitest-integration-why-same-config) |
| 7 | [7. optimizeDeps — pre-bundling.](./index.html#vite-optimizedeps-pre-bundling) |
| 8 | [8. Dynamic import and code splitting in Vite.](./index.html#vite-dynamic-import-and-code-splitting-in-vite) |
| 9 | [9. Library mode.](./index.html#vite-library-mode) |
| 10 | [10. Migrating Webpack → Vite checklist.](./index.html#vite-migrating-webpack-vite-checklist) |
| 11 | [11. Vite HMR API import.meta.hot](./index.html#vite-vite-hmr-api-import-meta-hot) |
| 12 | [12. CSS code splitting in Vite build](./index.html#vite-css-code-splitting-in-vite-build) |
| 13 | [13. PostCSS in Vite](./index.html#vite-postcss-in-vite) |
| 14 | [14. Tailwind with Vite](./index.html#vite-tailwind-with-vite) |
| 15 | [15. Vite plugin order](./index.html#vite-vite-plugin-order) |
| 16 | [16. define config constants](./index.html#vite-define-config-constants) |
| 17 | [17. public/ directory behavior](./index.html#vite-public-directory-behavior) |
| 18 | [18. assetsInlineLimit](./index.html#vite-assetsinlinelimit) |
| 19 | [19. vite preview command](./index.html#vite-vite-preview-command) |
| 20 | [20. Vite mode and env files](./index.html#vite-vite-mode-and-env-files) |
| 21 | [21. loadEnv in vite.config](./index.html#vite-loadenv-in-vite-config) |
| 22 | [22. vite-plugin-pwa](./index.html#vite-vite-plugin-pwa) |
| 23 | [23. Monorepo Vite setup](./index.html#vite-monorepo-vite-setup) |
| 24 | [24. server.warmup (Vite 5+)](./index.html#vite-server-warmup-vite-5) |
| 25 | [25. Rolldown future in Vite ecosystem](./index.html#vite-rolldown-future-in-vite-ecosystem) |


### [HTML (30 questions)](./index.html#html) (30)

| # | Question |
|---|----------|
| 1 | [1. Semantic HTML — why it matters for a11y and SEO.](./index.html#html-semantic-html-why-it-matters-for-a11y-and-seo) |
| 2 | [2. Document loading — defer vs async scripts.](./index.html#html-document-loading-defer-vs-async-scripts) |
| 3 | [3. Critical rendering path optimization.](./index.html#html-critical-rendering-path-optimization) |
| 4 | [4. Accessibility: ARIA roles — first rule of ARIA.](./index.html#html-accessibility-aria-roles-first-rule-of-aria) |
| 5 | [5. Form accessibility patterns.](./index.html#html-form-accessibility-patterns) |
| 6 | [6. Content Security Policy (CSP).](./index.html#html-content-security-policy-csp) |
| 7 | [7. Shadow DOM vs Light DOM.](./index.html#html-shadow-dom-vs-light-dom) |
| 8 | [8. Custom elements and React.](./index.html#html-custom-elements-and-react) |
| 9 | [9. picture / srcset responsive images.](./index.html#html-picture-srcset-responsive-images) |
| 10 | [10. SEO meta and Open Graph.](./index.html#html-seo-meta-and-open-graph) |
| 11 | [11. DOCTYPE and standards mode](./index.html#html-doctype-and-standards-mode) |
| 12 | [12. lang attribute on html](./index.html#html-lang-attribute-on-html) |
| 13 | [13. tabindex values](./index.html#html-tabindex-values) |
| 14 | [14. Focus trap in modal](./index.html#html-focus-trap-in-modal) |
| 15 | [15. inert attribute](./index.html#html-inert-attribute) |
| 16 | [16. dialog element native modal](./index.html#html-dialog-element-native-modal) |
| 17 | [17. details/summary accordion](./index.html#html-details-summary-accordion) |
| 18 | [18. input type benefits](./index.html#html-input-type-benefits) |
| 19 | [19. autocomplete attributes](./index.html#html-autocomplete-attributes) |
| 20 | [20. CSP report-uri / report-to](./index.html#html-csp-report-uri-report-to) |
| 21 | [21. Subresource Integrity SRI](./index.html#html-subresource-integrity-sri) |
| 22 | [22. preload vs prefetch vs preconnect](./index.html#html-preload-vs-prefetch-vs-preconnect) |
| 23 | [23. iframe sandbox](./index.html#html-iframe-sandbox) |
| 24 | [24. postMessage cross-origin](./index.html#html-postmessage-cross-origin) |
| 25 | [25. Web Components slots](./index.html#html-web-components-slots) |
| 26 | [26. template element](./index.html#html-template-element) |
| 27 | [27. JSON-LD structured data](./index.html#html-json-ld-structured-data) |
| 28 | [28. WCAG 2.2 AA highlights](./index.html#html-wcag-2-2-aa-highlights) |
| 29 | [29. Hydration in HTML/SSR context](./index.html#html-hydration-in-html-ssr-context) |
| 30 | [30. Progressive enhancement baseline](./index.html#html-progressive-enhancement-baseline) |


### [CSS (35 questions)](./index.html#css) (35)

| # | Question |
|---|----------|
| 1 | [1. CSS specificity calculation.](./index.html#css-css-specificity-calculation) |
| 2 | [2. BFC (Block Formatting Context) — triggers and use.](./index.html#css-bfc-block-formatting-context-triggers-and-use) |
| 3 | [3. Flexbox vs Grid — decision matrix.](./index.html#css-flexbox-vs-grid-decision-matrix) |
| 4 | [4. CSS Grid subgrid.](./index.html#css-css-grid-subgrid) |
| 5 | [5. Container queries vs media queries.](./index.html#css-container-queries-vs-media-queries) |
| 6 | [6. CSS custom properties (variables) theming.](./index.html#css-css-custom-properties-variables-theming) |
| 7 | [7. Stacking context and z-index bugs.](./index.html#css-stacking-context-and-z-index-bugs) |
| 8 | [8. CLS prevention techniques.](./index.html#css-cls-prevention-techniques) |
| 9 | [9. Modern CSS layout: :has() selector.](./index.html#css-modern-css-layout-has-selector) |
| 10 | [10. CSS Modules vs CSS-in-JS vs Tailwind — trade-offs.](./index.html#css-css-modules-vs-css-in-js-vs-tailwind-trade-offs) |
| 11 | [11. box-sizing border-box universal](./index.html#css-box-sizing-border-box-universal) |
| 12 | [12. margin collapse](./index.html#css-margin-collapse) |
| 13 | [13. position sticky requirements](./index.html#css-position-sticky-requirements) |
| 14 | [14. logical properties RTL](./index.html#css-logical-properties-rtl) |
| 15 | [15. clamp fluid typography](./index.html#css-clamp-fluid-typography) |
| 16 | [16. min max fit-content sizing](./index.html#css-min-max-fit-content-sizing) |
| 17 | [17. aspect-ratio property](./index.html#css-aspect-ratio-property) |
| 18 | [18. object-fit and object-position](./index.html#css-object-fit-and-object-position) |
| 19 | [19. will-change hint](./index.html#css-will-change-hint) |
| 20 | [20. contain property](./index.html#css-contain-property) |
| 21 | [21. content-visibility auto](./index.html#css-content-visibility-auto) |
| 22 | [22. @layer cascade layers](./index.html#css-layer-cascade-layers) |
| 23 | [23. @property registered custom props](./index.html#css-property-registered-custom-props) |
| 24 | [24. scroll-snap](./index.html#css-scroll-snap) |
| 25 | [25. overscroll-behavior](./index.html#css-overscroll-behavior) |
| 26 | [26. :focus-visible](./index.html#css-focus-visible) |
| 27 | [27. prefers-reduced-motion](./index.html#css-prefers-reduced-motion) |
| 28 | [28. prefers-color-scheme dark](./index.html#css-prefers-color-scheme-dark) |
| 29 | [29. @supports feature queries](./index.html#css-supports-feature-queries) |
| 30 | [30. Critical CSS strategy](./index.html#css-critical-css-strategy) |
| 31 | [31. Sass @use vs @import](./index.html#css-sass-use-vs-import) |
| 32 | [32. PostCSS pipeline role](./index.html#css-postcss-pipeline-role) |
| 33 | [33. View Transitions API](./index.html#css-view-transitions-api) |
| 34 | [34. CSS anchor positioning](./index.html#css-css-anchor-positioning) |
| 35 | [35. INP and compositor-only animation](./index.html#css-inp-and-compositor-only-animation) |


### [Architecture &amp; System Design (40 questions)](./index.html#arch) (40)

| # | Question |
|---|----------|
| 1 | [1. Design a large-scale frontend architecture for 50 engineers.](./index.html#arch-design-a-large-scale-frontend-architecture-for-50-engineers) |
| 2 | [2. Micro-frontends — when worth it vs modular monolith?](./index.html#arch-micro-frontends-when-worth-it-vs-modular-monolith) |
| 3 | [3. State management architecture — client vs server state.](./index.html#arch-state-management-architecture-client-vs-server-state) |
| 4 | [4. API layer design — repository pattern.](./index.html#arch-api-layer-design-repository-pattern) |
| 5 | [5. Authentication architecture in SPA.](./index.html#arch-authentication-architecture-in-spa) |
| 6 | [6. CORS — explain preflight and fixes.](./index.html#arch-cors-explain-preflight-and-fixes) |
| 7 | [7. Web Vitals — LCP, INP, CLS targets and fixes.](./index.html#arch-web-vitals-lcp-inp-cls-targets-and-fixes) |
| 8 | [8. Design system — tokens, components, documentation.](./index.html#arch-design-system-tokens-components-documentation) |
| 9 | [9. Feature flags architecture.](./index.html#arch-feature-flags-architecture) |
| 10 | [10. Error handling strategy — layers.](./index.html#arch-error-handling-strategy-layers) |
| 11 | [11. Testing pyramid for frontend at scale.](./index.html#arch-testing-pyramid-for-frontend-at-scale) |
| 12 | [12. CI/CD pipeline for frontend.](./index.html#arch-ci-cd-pipeline-for-frontend) |
| 13 | [13. Monorepo tooling — Nx vs Turborepo.](./index.html#arch-monorepo-tooling-nx-vs-turborepo) |
| 14 | [14. SSR vs SSG vs ISR vs CSR — choose per page.](./index.html#arch-ssr-vs-ssg-vs-isr-vs-csr-choose-per-page) |
| 15 | [15. Real-time architecture — WebSockets vs SSE vs polling.](./index.html#arch-real-time-architecture-websockets-vs-sse-vs-polling) |
| 16 | [16. Event-driven UI decoupling](./index.html#arch-event-driven-ui-decoupling) |
| 17 | [17. Idempotency keys frontend](./index.html#arch-idempotency-keys-frontend) |
| 18 | [18. Optimistic UI 409 rollback](./index.html#arch-optimistic-ui-409-rollback) |
| 19 | [19. Offline-first architecture](./index.html#arch-offline-first-architecture) |
| 20 | [20. CDN caching strategy](./index.html#arch-cdn-caching-strategy) |
| 21 | [21. Blue-green / canary frontend](./index.html#arch-blue-green-canary-frontend) |
| 22 | [22. OpenTelemetry browser RUM](./index.html#arch-opentelemetry-browser-rum) |
| 23 | [23. XSS defense layers](./index.html#arch-xss-defense-layers) |
| 24 | [24. CSRF defense layers](./index.html#arch-csrf-defense-layers) |
| 25 | [25. Supply chain security](./index.html#arch-supply-chain-security) |
| 26 | [26. Bundle budget CI gate](./index.html#arch-bundle-budget-ci-gate) |
| 27 | [27. Lazy load third-party scripts](./index.html#arch-lazy-load-third-party-scripts) |
| 28 | [28. i18n architecture](./index.html#arch-i18n-architecture) |
| 29 | [29. a11y governance at scale](./index.html#arch-a11y-governance-at-scale) |
| 30 | [30. ADR documentation](./index.html#arch-adr-documentation) |
| 31 | [31. Domain-driven folder structure](./index.html#arch-domain-driven-folder-structure) |
| 32 | [32. Barrel file anti-pattern](./index.html#arch-barrel-file-anti-pattern) |
| 33 | [33. GraphQL vs REST frontend](./index.html#arch-graphql-vs-rest-frontend) |
| 34 | [34. tRPC / OpenAPI codegen](./index.html#arch-trpc-openapi-codegen) |
| 35 | [35. Edge middleware auth](./index.html#arch-edge-middleware-auth) |
| 36 | [36. Rate limit 429 UX](./index.html#arch-rate-limit-429-ux) |
| 37 | [37. Multi-tenant theming](./index.html#arch-multi-tenant-theming) |
| 38 | [38. Strangler fig legacy migration](./index.html#arch-strangler-fig-legacy-migration) |
| 39 | [39. Lighthouse CI per route](./index.html#arch-lighthouse-ci-per-route) |
| 40 | [40. Staff interview narrative structure](./index.html#arch-staff-interview-narrative-structure) |


### [React Context API (22 questions) High priority](./index.html#context) (22)

| # | Question |
|---|----------|
| 1 | [1. When should you use Context vs props vs external store?](./index.html#context-when-should-you-use-context-vs-props-vs-external-store) |
| 2 | [2. Why does a Context provider cause all consumers to re-render?](./index.html#context-why-does-a-context-provider-cause-all-consumers-to-re-render) |
| 3 | [3. Split context pattern — state vs dispatch.](./index.html#context-split-context-pattern-state-vs-dispatch) |
| 4 | [4. useContextSelector pattern without external library.](./index.html#context-usecontextselector-pattern-without-external-library) |
| 5 | [5. Context + useReducer vs Redux for FleetPanda-style apps.](./index.html#context-context-usereducer-vs-redux-for-fleetpanda-style-apps) |
| 6 | [6. How to test components that use useContext?](./index.html#context-how-to-test-components-that-use-usecontext) |
| 7 | [7. Nested providers — ordering and pitfalls.](./index.html#context-nested-providers-ordering-and-pitfalls) |
| 8 | [8. Default context value — why undefined + custom hook throw?](./index.html#context-default-context-value-why-undefined-custom-hook-throw) |
| 9 | [9. Context vs React 19 use() hook.](./index.html#context-context-vs-react-19-use-hook) |
| 10 | [10. Passing unstable functions through context.](./index.html#context-passing-unstable-functions-through-context) |
| 11 | [11. Multiple contexts vs one mega context](./index.html#context-multiple-contexts-vs-one-mega-context) |
| 12 | [12. Context for form state](./index.html#context-context-for-form-state) |
| 13 | [13. Provider at route layout level](./index.html#context-provider-at-route-layout-level) |
| 14 | [14. SSR context per request](./index.html#context-ssr-context-per-request) |
| 15 | [15. Hydration context mismatch](./index.html#context-hydration-context-mismatch) |
| 16 | [16. createContext default value semantics](./index.html#context-createcontext-default-value-semantics) |
| 17 | [17. forwardRef + context together](./index.html#context-forwardref-context-together) |
| 18 | [18. Measuring context performance](./index.html#context-measuring-context-performance) |
| 19 | [19. Colocate provider closest to consumers](./index.html#context-colocate-provider-closest-to-consumers) |
| 20 | [20. Prop drilling threshold](./index.html#context-prop-drilling-threshold) |
| 21 | [21. Immutable context updates](./index.html#context-immutable-context-updates) |
| 22 | [22. Migration off mega context](./index.html#context-migration-off-mega-context) |


### [Browser Internals (32 questions) High priority](./index.html#browser) (32)

| # | Question |
|---|----------|
| 1 | [1. Explain the browser rendering pipeline end-to-end.](./index.html#browser-explain-the-browser-rendering-pipeline-end-to-end) |
| 2 | [2. Reflow vs repaint vs composite — what triggers each?](./index.html#browser-reflow-vs-repaint-vs-composite-what-triggers-each) |
| 3 | [3. Event loop — microtasks vs macrotasks (with full trace).](./index.html#browser-event-loop-microtasks-vs-macrotasks-with-full-trace) |
| 4 | [4. How many threads/processes in modern Chrome for a tab?](./index.html#browser-how-many-threads-processes-in-modern-chrome-for-a-tab) |
| 5 | [5. Same-origin policy and CORS — browser perspective.](./index.html#browser-same-origin-policy-and-cors-browser-perspective) |
| 6 | [6. Cookie attributes — Secure, HttpOnly, SameSite.](./index.html#browser-cookie-attributes-secure-httponly-samesite) |
| 7 | [7. localStorage vs sessionStorage vs IndexedDB vs cookies.](./index.html#browser-localstorage-vs-sessionstorage-vs-indexeddb-vs-cookies) |
| 8 | [8. Service Worker lifecycle and caching strategies.](./index.html#browser-service-worker-lifecycle-and-caching-strategies) |
| 9 | [9. HTTP/1.1 vs HTTP/2 vs HTTP/3 for frontend perf.](./index.html#browser-http-1-1-vs-http-2-vs-http-3-for-frontend-perf) |
| 10 | [10. Memory leaks in SPAs — common causes.](./index.html#browser-memory-leaks-in-spas-common-causes) |
| 11 | [11. requestAnimationFrame](./index.html#browser-requestanimationframe) |
| 12 | [12. requestIdleCallback](./index.html#browser-requestidlecallback) |
| 13 | [13. Navigation Timing API](./index.html#browser-navigation-timing-api) |
| 14 | [14. PerformanceObserver](./index.html#browser-performanceobserver) |
| 15 | [15. Long tasks &gt;50ms](./index.html#browser-long-tasks-gt-50ms) |
| 16 | [16. Web Workers](./index.html#browser-web-workers) |
| 17 | [17. SharedWorker](./index.html#browser-sharedworker) |
| 18 | [18. BroadcastChannel](./index.html#browser-broadcastchannel) |
| 19 | [19. Page Visibility API](./index.html#browser-page-visibility-api) |
| 20 | [20. bfcache back-forward cache](./index.html#browser-bfcache-back-forward-cache) |
| 21 | [21. beforeunload vs pagehide](./index.html#browser-beforeunload-vs-pagehide) |
| 22 | [22. navigator.sendBeacon](./index.html#browser-navigator-sendbeacon) |
| 23 | [23. Credential Management API](./index.html#browser-credential-management-api) |
| 24 | [24. Permissions API](./index.html#browser-permissions-api) |
| 25 | [25. Intersection Observer](./index.html#browser-intersection-observer) |
| 26 | [26. Resize Observer](./index.html#browser-resize-observer) |
| 27 | [27. Mutation Observer](./index.html#browser-mutation-observer) |
| 28 | [28. Content-Encoding gzip br](./index.html#browser-content-encoding-gzip-br) |
| 29 | [29. Resource Timing API](./index.html#browser-resource-timing-api) |
| 30 | [30. Third-party cookie deprecation](./index.html#browser-third-party-cookie-deprecation) |
| 31 | [31. Trusted Types CSP](./index.html#browser-trusted-types-csp) |
| 32 | [32. Speculative loading hints](./index.html#browser-speculative-loading-hints) |


### [DOM &amp; Events (28 questions) High priority](./index.html#dom) (28)

| # | Question |
|---|----------|
| 1 | [1. DOM tree vs shadow DOM vs virtual DOM.](./index.html#dom-dom-tree-vs-shadow-dom-vs-virtual-dom) |
| 2 | [2. Event propagation — capture, target, bubble.](./index.html#dom-event-propagation-capture-target-bubble) |
| 3 | [3. Event delegation pattern.](./index.html#dom-event-delegation-pattern) |
| 4 | [4. Passive event listeners — scroll performance.](./index.html#dom-passive-event-listeners-scroll-performance) |
| 5 | [5. document.querySelector vs getElementById vs matches/closest.](./index.html#dom-document-queryselector-vs-getelementbyid-vs-matches-closest) |
| 6 | [6. DOM manipulation performance — DocumentFragment.](./index.html#dom-dom-manipulation-performance-documentfragment) |
| 7 | [7. Layout thrashing — read/write interleaving.](./index.html#dom-layout-thrashing-read-write-interleaving) |
| 8 | [8. CustomEvent for decoupled DOM communication.](./index.html#dom-customevent-for-decoupled-dom-communication) |
| 9 | [9. Imperative DOM in React — when acceptable?](./index.html#dom-imperative-dom-in-react-when-acceptable) |
| 10 | [10. Accessibility tree vs DOM tree.](./index.html#dom-accessibility-tree-vs-dom-tree) |
| 11 | [11. innerHTML vs textContent](./index.html#dom-innerhtml-vs-textcontent) |
| 12 | [12. insertAdjacentHTML](./index.html#dom-insertadjacenthtml) |
| 13 | [13. cloneNode deep](./index.html#dom-clonenode-deep) |
| 14 | [14. compareDocumentPosition](./index.html#dom-comparedocumentposition) |
| 15 | [15. getBoundingClientRect](./index.html#dom-getboundingclientrect) |
| 16 | [16. scrollIntoView](./index.html#dom-scrollintoview) |
| 17 | [17. focus preventScroll](./index.html#dom-focus-preventscroll) |
| 18 | [18. tabindex -1 programmatic focus](./index.html#dom-tabindex-1-programmatic-focus) |
| 19 | [19. Pointer events unified input](./index.html#dom-pointer-events-unified-input) |
| 20 | [20. once event listener option](./index.html#dom-once-event-listener-option) |
| 21 | [21. AbortSignal in addEventListener](./index.html#dom-abortsignal-in-addeventlistener) |
| 22 | [22. input vs change events](./index.html#dom-input-vs-change-events) |
| 23 | [23. Composition events IME](./index.html#dom-composition-events-ime) |
| 24 | [24. Shadow DOM event retargeting](./index.html#dom-shadow-dom-event-retargeting) |
| 25 | [25. Slot assignment projection](./index.html#dom-slot-assignment-projection) |
| 26 | [26. DOMParser safe parse](./index.html#dom-domparser-safe-parse) |
| 27 | [27. Range Selection API](./index.html#dom-range-selection-api) |
| 28 | [28. Don't fight React with DOM](./index.html#dom-don-t-fight-react-with-dom) |


### [JavaScript &amp; TypeScript (30 questions) High priority](./index.html#js) (30)

| # | Question |
|---|----------|
| 1 | [1. Event loop + async/await execution order.](./index.html#js-event-loop-async-await-execution-order) |
| 2 | [2. Closures — practical use and memory implications.](./index.html#js-closures-practical-use-and-memory-implications) |
| 3 | [3. Prototype chain vs class syntax.](./index.html#js-prototype-chain-vs-class-syntax) |
| 4 | [4. TypeScript structural typing vs nominal.](./index.html#js-typescript-structural-typing-vs-nominal) |
| 5 | [5. Generics — constrain and infer.](./index.html#js-generics-constrain-and-infer) |
| 6 | [6. Discriminated unions for API results.](./index.html#js-discriminated-unions-for-api-results) |
| 7 | [7. Promise.all vs allSettled vs race.](./index.html#js-promise-all-vs-allsettled-vs-race) |
| 8 | [8. Debounce vs throttle — implement debounce.](./index.html#js-debounce-vs-throttle-implement-debounce) |
| 9 | [9. WeakMap / WeakSet use cases.](./index.html#js-weakmap-weakset-use-cases) |
| 10 | [10. ES modules — static vs dynamic import.](./index.html#js-es-modules-static-vs-dynamic-import) |
| 11 | [11. null vs undefined](./index.html#js-null-vs-undefined) |
| 12 | [12. == vs ===](./index.html#js-vs) |
| 13 | [13. Object.is](./index.html#js-object-is) |
| 14 | [14. Optional chaining ?.](./index.html#js-optional-chaining) |
| 15 | [15. Nullish coalescing ??](./index.html#js-nullish-coalescing) |
| 16 | [16. Map vs Object records](./index.html#js-map-vs-object-records) |
| 17 | [17. Set deduplication](./index.html#js-set-deduplication) |
| 18 | [18. structuredClone](./index.html#js-structuredclone) |
| 19 | [19. AbortController cancel](./index.html#js-abortcontroller-cancel) |
| 20 | [20. Temporal proposal](./index.html#js-temporal-proposal) |
| 21 | [21. satisfies operator TS](./index.html#js-satisfies-operator-ts) |
| 22 | [22. as const assertion](./index.html#js-as-const-assertion) |
| 23 | [23. unknown vs any](./index.html#js-unknown-vs-any) |
| 24 | [24. never exhaustive check](./index.html#js-never-exhaustive-check) |
| 25 | [25. Utility types Partial Omit Pick Record](./index.html#js-utility-types-partial-omit-pick-record) |
| 26 | [26. Conditional types](./index.html#js-conditional-types) |
| 27 | [27. infer in conditional types](./index.html#js-infer-in-conditional-types) |
| 28 | [28. Module augmentation](./index.html#js-module-augmentation) |
| 29 | [29. strictNullChecks](./index.html#js-strictnullchecks) |
| 30 | [30. Zod runtime validation](./index.html#js-zod-runtime-validation) |


### [CSS vs SCSS vs Tailwind (24 questions) High priority](./index.html#styling) (24)

| # | Question |
|---|----------|
| 1 | [1. Compare CSS, SCSS, and Tailwind — when to choose each?](./index.html#styling-compare-css-scss-and-tailwind-when-to-choose-each) |
| 2 | [2. SCSS nesting — best practices and pitfalls.](./index.html#styling-scss-nesting-best-practices-and-pitfalls) |
| 3 | [3. SCSS mixins vs CSS @layer — modern alternative.](./index.html#styling-scss-mixins-vs-css-layer-modern-alternative) |
| 4 | [4. Tailwind @apply — when acceptable?](./index.html#styling-tailwind-apply-when-acceptable) |
| 5 | [5. Tailwind JIT and purging — how bundle stays small.](./index.html#styling-tailwind-jit-and-purging-how-bundle-stays-small) |
| 6 | [6. Design tokens — implement across CSS/SCSS/Tailwind.](./index.html#styling-design-tokens-implement-across-css-scss-tailwind) |
| 7 | [7. CSS Modules vs Tailwind in React.](./index.html#styling-css-modules-vs-tailwind-in-react) |
| 8 | [8. SCSS @use vs deprecated @import.](./index.html#styling-scss-use-vs-deprecated-import) |
| 9 | [9. Tailwind dark mode strategies.](./index.html#styling-tailwind-dark-mode-strategies) |
| 10 | [10. CSS-in-JS vs Tailwind in 2025 — senior take.](./index.html#styling-css-in-js-vs-tailwind-in-2025-senior-take) |
| 11 | [11. BEM naming convention](./index.html#styling-bem-naming-convention) |
| 12 | [12. ITCSS / SMACSS layers](./index.html#styling-itcss-smacss-layers) |
| 13 | [13. PostCSS in all stacks](./index.html#styling-postcss-in-all-stacks) |
| 14 | [14. Sass @forward re-export](./index.html#styling-sass-forward-re-export) |
| 15 | [15. Tailwind plugins extend](./index.html#styling-tailwind-plugins-extend) |
| 16 | [16. cva class-variance-authority](./index.html#styling-cva-class-variance-authority) |
| 17 | [17. tailwind-merge twMerge](./index.html#styling-tailwind-merge-twmerge) |
| 18 | [18. Container queries Tailwind](./index.html#styling-container-queries-tailwind) |
| 19 | [19. Logical properties Tailwind](./index.html#styling-logical-properties-tailwind) |
| 20 | [20. Critical CSS extraction](./index.html#styling-critical-css-extraction) |
| 21 | [21. Sass @import deprecation](./index.html#styling-sass-import-deprecation) |
| 22 | [22. Native CSS nesting](./index.html#styling-native-css-nesting) |
| 23 | [23. Stylelint enforcement](./index.html#styling-stylelint-enforcement) |
| 24 | [24. Interview answer CSS vs SCSS vs Tailwind](./index.html#styling-interview-answer-css-vs-scss-vs-tailwind) |


### [Micro-frontend Communication (28 questions) High priority](./index.html#mfe) (28)

| # | Question |
|---|----------|
| 1 | [1. Overview — how do micro-frontends share data across pages?](./index.html#mfe-overview-how-do-micro-frontends-share-data-across-pages) |
| 2 | [2. Module Federation — share React and global store.](./index.html#mfe-module-federation-share-react-and-global-store) |
| 3 | [3. Custom event bus for cross-MFE communication.](./index.html#mfe-custom-event-bus-for-cross-mfe-communication) |
| 4 | [4. Passing data when navigating shell → remote route.](./index.html#mfe-passing-data-when-navigating-shell-remote-route) |
| 5 | [5. postMessage for iframe-based micro-frontends.](./index.html#mfe-postmessage-for-iframe-based-micro-frontends) |
| 6 | [6. BroadcastChannel across MFE tabs on same origin.](./index.html#mfe-broadcastchannel-across-mfe-tabs-on-same-origin) |
| 7 | [7. localStorage storage event for cross-tab sync.](./index.html#mfe-localstorage-storage-event-for-cross-tab-sync) |
| 8 | [8. Shared auth token across micro-frontends — secure pattern.](./index.html#mfe-shared-auth-token-across-micro-frontends-secure-pattern) |
| 9 | [9. Routing coordination — shell owns router vs federated routes.](./index.html#mfe-routing-coordination-shell-owns-router-vs-federated-routes) |
| 10 | [10. Cross-MFE CSS isolation — Shadow DOM vs CSS Modules vs prefix.](./index.html#mfe-cross-mfe-css-isolation-shadow-dom-vs-css-modules-vs-prefix) |
| 11 | [11. single-spa orchestrator](./index.html#mfe-single-spa-orchestrator) |
| 12 | [12. qiankun micro-frontends](./index.html#mfe-qiankun-micro-frontends) |
| 13 | [13. import maps native modules](./index.html#mfe-import-maps-native-modules) |
| 14 | [14. Shared design system npm package](./index.html#mfe-shared-design-system-npm-package) |
| 15 | [15. Contract testing Pact](./index.html#mfe-contract-testing-pact) |
| 16 | [16. Version skew unknown events](./index.html#mfe-version-skew-unknown-events) |
| 17 | [17. Feature flags per MFE](./index.html#mfe-feature-flags-per-mfe) |
| 18 | [18. Error boundary per remote](./index.html#mfe-error-boundary-per-remote) |
| 19 | [19. Lazy load remote entry](./index.html#mfe-lazy-load-remote-entry) |
| 20 | [20. Prefetch remote on nav hover](./index.html#mfe-prefetch-remote-on-nav-hover) |
| 21 | [21. Global namespace pollution anti-pattern](./index.html#mfe-global-namespace-pollution-anti-pattern) |
| 22 | [22. RxJS Subject event bus](./index.html#mfe-rxjs-subject-event-bus) |
| 23 | [23. Redux only in shell bridge](./index.html#mfe-redux-only-in-shell-bridge) |
| 24 | [24. TanStack Query shared client](./index.html#mfe-tanstack-query-shared-client) |
| 25 | [25. Cross-MFE analytics](./index.html#mfe-cross-mfe-analytics) |
| 26 | [26. i18n locale sync bus](./index.html#mfe-i18n-locale-sync-bus) |
| 27 | [27. Playwright cross-MFE E2E](./index.html#mfe-playwright-cross-mfe-e2e) |
| 28 | [28. When NOT micro-frontend](./index.html#mfe-when-not-micro-frontend) |


### [High Priority Misc (25 questions)](./index.html#priority) (25)

| # | Question |
|---|----------|
| 1 | [1. XSS types and prevention in React apps.](./index.html#priority-xss-types-and-prevention-in-react-apps) |
| 2 | [2. CSRF protection for cookie-based SPAs.](./index.html#priority-csrf-protection-for-cookie-based-spas) |
| 3 | [3. OAuth 2.0 PKCE flow for public SPA clients.](./index.html#priority-oauth-2-0-pkce-flow-for-public-spa-clients) |
| 4 | [4. TanStack Query — staleTime vs gcTime (cacheTime).](./index.html#priority-tanstack-query-staletime-vs-gctime-cachetime) |
| 5 | [5. Web Vitals — INP debugging workflow.](./index.html#priority-web-vitals-inp-debugging-workflow) |
| 6 | [6. Accessibility audit checklist for release.](./index.html#priority-accessibility-audit-checklist-for-release) |
| 7 | [7. Monorepo shared ESLint/TS config.](./index.html#priority-monorepo-shared-eslint-ts-config) |
| 8 | [8. Semantic versioning for design system.](./index.html#priority-semantic-versioning-for-design-system) |
| 9 | [9. Playwright vs Cypress for E2E.](./index.html#priority-playwright-vs-cypress-for-e2e) |
| 10 | [10. Storybook — role in design system workflow.](./index.html#priority-storybook-role-in-design-system-workflow) |
| 11 | [11. SRI Subresource Integrity](./index.html#priority-sri-subresource-integrity) |
| 12 | [12. npm supply chain audit](./index.html#priority-npm-supply-chain-audit) |
| 13 | [13. Dependabot vs Renovate](./index.html#priority-dependabot-vs-renovate) |
| 14 | [14. Conventional commits](./index.html#priority-conventional-commits) |
| 15 | [15. Trunk-based vs GitFlow](./index.html#priority-trunk-based-vs-gitflow) |
| 16 | [16. CODEOWNERS review](./index.html#priority-codeowners-review) |
| 17 | [17. Lighthouse CI budgets](./index.html#priority-lighthouse-ci-budgets) |
| 18 | [18. Source map security](./index.html#priority-source-map-security) |
| 19 | [19. Edge middleware routing](./index.html#priority-edge-middleware-routing) |
| 20 | [20. Rate limit 429 UX](./index.html#priority-rate-limit-429-ux) |
| 21 | [21. Cursor vs offset pagination API](./index.html#priority-cursor-vs-offset-pagination-api) |
| 22 | [22. Idempotent PUT PATCH retries](./index.html#priority-idempotent-put-patch-retries) |
| 23 | [23. OpenTelemetry RUM traces](./index.html#priority-opentelemetry-rum-traces) |
| 24 | [24. Cookie consent legal](./index.html#priority-cookie-consent-legal) |
| 25 | [25. Staff meta-skill answer structure](./index.html#priority-staff-meta-skill-answer-structure) |

---

## Local preview

```bash
npx serve .
# open http://localhost:3000
```

## GitHub Pages

Push to `main`. Workflow deploys `index.html` automatically. Set repo **Settings → Pages → Source: GitHub Actions**.

## License

MIT — use freely for interview prep.
