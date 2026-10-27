# Competitive Pricing Intelligence

A static dashboard for the Smart Anti-Cramp Device's Mission 1 research. Research prices are snapshots from October 27, 2026, not live quotes. This is a competitive positioning tool, not a demand forecast.

## Run locally

From this folder run `python -m http.server 8000` and visit http://localhost:8000/. The site is static HTML, CSS and JavaScript; there are no dependencies or build step. To deploy with GitHub Pages, publish the repository root from the main branch. Relative URLs work under the repository path.

## Data and methodology

`data.json` is the supplied Mission 1 JSON, separated from the interface. The workbook and report agree with its three competitors and three representative offers. The USD comparison uses the two offer IDs explicitly identified in `comparison.included_offer_ids`: Fitbit $159.95 and Nix $189.00. FLOWBIO (£295) is displayed separately without an exchange rate. The USD mean and median are $174.475, displayed as $174.48. One observation per competitor does not establish a product price range. Price classification divides the observed USD interval at its midpoint; outside values are labeled below or above the observed range. Equality in the explorer is within half a cent. Pricing recommendation is a preliminary $149–$199 starter-kit range.

Availability, historical regular prices, promotions and ongoing replacement charges were not established in the supplied data. Product capabilities, cramp prediction and prevention have not been demonstrated for the venture. Source links and limitations are included in the dashboard. To update the research, maintain the schema and comparison IDs in `data.json`; adjust the presentation narrative and slider bounds if the scope changes.
