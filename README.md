# Volvo Post-Sale Website

This repository contains a simple static website intended for new Volvo owners. The site provides model information, quick tips and links to owner's manuals.

## Previewing Locally

Any web server capable of serving static files will work. One quick option is Python's built-in server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/VolvoPost/index.html](http://localhost:8000/VolvoPost/index.html) in your browser.

## Structure

- `VolvoPost/index.html` – landing page with contact information
- `VolvoPost/models.html` – model and trim overview
- `VolvoPost/quick-tips.html` – accessories and maintenance links
- `manuals.html` – owner's and service manual links

Stylesheets live inside `VolvoPost/*.css` and images are under `VolvoPost/images/`.

