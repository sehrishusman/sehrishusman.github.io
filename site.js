// Shared menu and footer for every page. Edit the menu here once and it changes everywhere.
// To update the CV, replace Sehrish_Resume.pdf with a new file of the same name.
const CV_URL = "Sehrish_Resume.pdf";

const MENU = [
  ["Home", "index.html"],
  ["Research", "research.html"],
  ["Teaching", "teaching.html"],
  ["Media", "media.html"],
  ["CV", "cv.html"],
  ["Contact", "contact.html"],
];

(function () {
  const here = location.pathname.split("/").pop() || "index.html";

  const links = MENU.map(([label, href]) =>
    `<li><a href="${href}"${href === here ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`
  ).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <nav class="navbar">
      <div class="nav-inner">
        <a class="nav-brand" href="index.html">Sehrish Usman</a>
        <button class="nav-toggle" aria-label="Open menu"><i class="fas fa-bars"></i></button>
        <ul class="nav-links">${links}</ul>
      </div>
    </nav>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer>
      <ul class="network-icon small">
        <li><a href="mailto:sehrish.usman@uni-mannheim.de" title="Email"><i class="fas fa-envelope"></i></a></li>
        <li><a href="https://www.linkedin.com/in/sehrish-usman/" target="_blank" rel="noopener" title="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://x.com/seharkhanus" target="_blank" rel="noopener" title="X"><i class="fab fa-x-twitter"></i></a></li>
      </ul>
      <p>© ${new Date().getFullYear()} Sehrish Usman · University of Mannheim</p>
    </footer>`);

  // Every element with class "cv-link" points to the current CV.
  document.querySelectorAll(".cv-link").forEach(a => { a.href = CV_URL; a.target = "_blank"; a.rel = "noopener"; });

  // Mobile menu
  const list = document.querySelector(".nav-links");
  document.querySelector(".nav-toggle").addEventListener("click", () => list.classList.toggle("open"));

  // "Abstract" / "Presentations" buttons open the matching box below them.
  document.querySelectorAll(".pub").forEach(pub => {
    const btns = pub.querySelectorAll("[data-toggle]");
    const boxes = pub.querySelectorAll(".toggle-box");
    btns.forEach((b, i) => b.addEventListener("click", () => {
      const open = boxes[i].classList.toggle("open");
      boxes.forEach((x, j) => { if (j !== i) x.classList.remove("open"); });
      btns.forEach(x => x.classList.remove("active"));
      if (open) b.classList.add("active");
    }));
  });
})();
