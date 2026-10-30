# Mission 3 verification record

Checked October 30, 2026.

## Automated financial checks

`npm test`: 19 checks passed. These cover independently summed fixed/variable costs, annual revenue and profit, startup separation, frequency conversion, capital depreciation, disabled expenses, zero/negative contribution, zero volume, multiple products, shared and product-specific fixed costs, recurring billing units, scenario preservation, currency comparison, risk rules, confirmation gates, malformed imports and immutable snapshots.

`npm run build`: passed. JavaScript syntax checks passed. No external runtime dependencies or CDN assets.

## Browser checks actually performed

- Preview and published GitHub Pages application load bundled research and charts.
- Numeric cost edit and keyboard slider adjustment immediately change profit and break-even.
- Custom expense creation, filtering and deletion work.
- Product creation renders two-product allocations; removing the hypothetical product preserves the original.
- Lean operating preset changes fixed overhead while retaining edited variable cost and sales assumptions.
- Pricing evaluation presents financial, competitive and evidence findings.
- On published HTTPS, price edit changes revenue/profit and competitor position.
- A clearly labeled disposable TEST ONLY decision was confirmed to test reports, not as the student's decision.
- Both DOCX and JSON downloaded successfully from the published site.
- The browser-downloaded DOCX is a valid ZIP/OOXML package; all XML entries parse, all ten report sections exist, and its price, profit and justification match the downloaded JSON.
- Backup download and file-chooser import restore the configuration and require fresh evaluation.
- Saving, loading and deleting a custom operating scenario work.
- An unsustainable price is flagged; confirmation without acknowledgment is rejected and explicit acknowledgment permits the disposable test confirmation.
- Reload retains the browser-local confirmation. Changing price invalidates the evaluation and confirmation and removes downloads.
- Default report fixture rendered with LibreOffice and all seven resulting pages visually inspected; repeated table headers and unsplit rows verified.

## Observed issues fixed

- Added an ID-generation fallback for HTTP preview environments without crypto.randomUUID.
- Numeric fields update on input, rather than waiting for blur.
- Redundant numeric change events no longer invalidate a freshly evaluated unchanged model.
- Financial report percentage costs display as percentages, not dollar amounts.
- Scenario presets preserve edited variable costs and annual quantities.
- Report table headers repeat on subsequent pages; rows do not split across pages.

## Evidence and environment limits

Cost benchmark searches returned no usable web results, so all default cost estimates are illustrative. Mission 1 workbook, report, structured data and Mission 2 source were inspected. Prices are October 27 snapshots, not live prices. No direct competitor, validated demand, proven cramp-risk accuracy or supplier quote is claimed.

Original venture repository was empty and no live venture URL was supplied. That missing URL is explicit in exports; no venture website content was changed. Native device/mobile browser testing was unavailable; responsive breakpoints and flexible layouts are implemented, with desktop browser visual checks performed. Word download did not complete from the HTTP preview; it was successfully downloaded and validated from the published HTTPS site.
