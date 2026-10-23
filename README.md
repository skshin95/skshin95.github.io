# Sunkyu Shin — Academic Research Portfolio (Draft 01)

A self-contained, responsive, static academic portfolio. No paid service, web framework, external fonts, or build process is required.

## Pages
- `index.html`: Homepage. Top-level navigation: Profile / Research / Experience / Publications.
- `research-kinetics.html`: Automated Reaction Network Modeling.
- `research-ai.html`: Scientific AI Integration.
- `research-reactors.html`: Multiphysics Modeling of Chemical Reactors.

## Preview on your computer
Open `index.html` directly in Chrome, Edge, or Firefox. Or open the directory in VS Code and use a local preview extension.

## Add your PINN–CFD GIF
Put your GIF in `assets/` with the exact filename `pinn-cfd.gif`. The Scientific AI detail page tries this filename first and automatically falls back to the existing static schematic when it is absent. You do **not** need to modify any code. Optimize GIF file size if possible (a short MP4/WebM is more efficient for large animations, but requires an HTML change).

## Hosting for free with GitHub Pages
1. Create a public GitHub repository called `YOURUSERNAME.github.io` (replace YOURUSERNAME with your account name).
2. Upload the **contents of this folder** to the repository root — particularly `index.html`, the research pages, `css/`, `js/`, and `assets/`.
3. In GitHub repository Settings → Pages → Build and deployment, set Source to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Visit `https://YOURUSERNAME.github.io/` once deployment completes.

## Edit text, photos, or research images
- Replace `assets/profile.jpg` to update your headshot.
- Replace `assets/research-framework.png` with an updated overview diagram; keep its filename. The unmodified supplied figure is preserved as `assets/research-framework-original.png` (the homepage uses the title-free cropped version).
- Edit sections and research descriptions in the relevant HTML file.
- Publication filters and enlarged research figure are handled by `js/site.js`.
- Color palette and layout are in `css/style.css` at the top of the file.

## Source and scope notes
- Name, appointments, degree history, article titles, and DOIs were transcribed from the supplied 2026 CV.
- Site uses the research overview image supplied in the chat and a portrait extracted from that CV.
- This is a first draft. Review the CV and all descriptions before making the site public, and update publication records as new papers appear.
- The portfolio deliberately emphasizes kinetics, reactor modeling, and Scientific AI; LNP remains in the publication list and is mentioned only briefly on the reactor subpage.
- The GIF is not supplied yet. The current AI page therefore displays a static image placeholder.
