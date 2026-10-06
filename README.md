# sehrishusman.github.io

Personal academic website of Sehrish Usman. Plain HTML/CSS, no build step, no software to install.

| File | Page |
|---|---|
| `index.html` | Home: intro, research interests, news |
| `research.html` | Papers (job market paper, publications, working papers) |
| `teaching.html` | Courses and supervision |
| `media.html` | Press coverage |
| `cv.html` | Education and experience |
| `contact.html` | Contact details and map |
| `site.js` | Menu and footer shared by all pages, plus the CV link (`CV_URL`) |
| `style.css` | Design (change `--primary` at the top to recolour the site) |
| `assets/` | Photo and browser-tab icon |
| `Sehrish_Resume.pdf` | Your CV (all CV buttons open this file) |

## Updating

- **News:** in `index.html`, copy one `<li>` in the News list to the top and edit it.
- **New paper:** in `research.html`, copy one `<div class="pub"> ... </div>` block into the right group.
- **New course:** in `teaching.html`, copy one `<div class="card"> ... </div>` block.
- **New job:** in `cv.html`, copy one `<div class="exp"> ... </div>` block (newest first).
- **New press article:** in `media.html`, copy one `<li>` line to the top.
- **New CV:** upload a new PDF named exactly `Sehrish_Resume.pdf` (it replaces the old one); every CV button updates.
- **New menu item:** add a line to `MENU` in `site.js`.

Edit the file on github.com directly (pencil icon) and click "Commit changes". The site updates in about a minute.
