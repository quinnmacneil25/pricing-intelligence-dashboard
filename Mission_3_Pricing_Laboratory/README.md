# Mission 3 Pricing and Cost Laboratory

Browser-only, buildless application for Quinn MacNeil's Smart Anti-Cramp Device concept. Mission 2 is preserved at the repository root. Mission 3 lives in `Mission_3_Pricing_Laboratory/`.

## Run and build

Use any static server to serve this directory. Node 20+ is needed only for checks and packaging:

```
npm test
npm run build
```

The six runtime files are self-contained and dependency-free. All scripts/assets use relative URLs. The source directory itself is deployable on GitHub Pages; `dist/` is an equivalent production package. No account, backend, key, remote script, or ongoing Codex process is needed.

## Model

Annual USD horizon. One-time kits count annual orders. Monthly plans count annual billed customer-months; annual plans count annual billed customer-years. Revenue percentage costs adjust with price. Fixed monthly and weekly amounts annualize by 12 and 52 respectively. Startup and capital cash are separate; capital can optionally contribute straight-line annual depreciation. Initial inventory and working-capital cash are excluded until entered explicitly.

Product-level overhead allocation uses revenue or units. Business totals count overhead once. Multi-product break-even holds the entered sales mix constant; it is unavailable when no sales mix or positive contribution exists. Rounded break-even units and unrounded break-even revenue are shown separately.

Cost defaults are illustrative, not supplier quotes or verified industry averages. Official cost benchmark searches returned no usable results. Mission 1 JSON and report were inspected; the spreadsheet could not be parsed by the connected reader. The original website repository was empty and no live URL was provided, so the exports preserve the supplied repository and explicitly mark the live URL missing.

## Review and exports

Rule-based evaluation lists financial, competitive and evidence risks, explains its thresholds and runs cost/volume stresses. Model edits invalidate evaluation and confirmation. Written justification and acknowledgment of major warnings are required. `Pricing_Decision_Report.docx` is a real OOXML ZIP package generated in the browser, and `Pricing_Decision_Data.json` is generated from the same immutable confirmed snapshot. Internal financial data is separated from `publicWebsiteData`.

Browser local storage holds work. Clearing data or changing devices can lose it. JSON backup/import preserves the configuration; restored models require a new evaluation and confirmation.

## Research

Bundled `research.json` retains October 27, 2026 price observations. Nix and Fitbit are indirect USD alternatives; their midpoint is not a representative market statistic. FLOWBIO is GBP and excluded from USD rankings. No live refresh, medical efficacy or demand predictions are claimed. Original venture repository is left unchanged; Mission 4 is not implemented.

## Checks

`npm test` contains 19 checks covering arithmetic, annualization, depreciation, startup separation, disabled costs, nonpositive margin, zero volume, multiple products, overhead allocation, subscription billing units, presets, currency comparisons, review rules, confirmation gates, imports and immutable export snapshots. Generated fixtures are clearly marked TEST ONLY and written outside the deployable folder. Browser interaction and DOCX visual checks are recorded in TESTING.md.
