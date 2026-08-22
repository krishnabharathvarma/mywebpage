# mywebpage

A single-page personal site — plain HTML, CSS, and a few lines of JavaScript.
No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content and structure |
| `styles.css` | Design tokens, layout, and components |
| `script.js` | Mobile nav toggle and footer year |
| `assets/` | Images and other static files |

## Running locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Customising

- Copy lives directly in `index.html`; the placeholder text is marked by being
  obviously generic ("Role title", "Company or organisation").
- Colours, spacing, radius, and fonts are CSS custom properties at the top of
  `styles.css`. Light is the base palette; the `prefers-color-scheme: dark`
  block overrides colours only.

## Deploying with GitHub Pages

In the repository settings, under **Pages**, set the source to the branch you
want to publish and the folder to `/ (root)`.
