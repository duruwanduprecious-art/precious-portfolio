/* =====================================================
   MAIN JAVASCRIPT FILE
   Handles theme toggle, particles, projects, case studies,
   modals, gallery scrolling and scroll animations.
   ===================================================== */

const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
root.setAttribute("data-theme", savedTheme);

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
});

const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");
mobileToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  mobileToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

/* ===================== PROJECT CARDS ===================== */
const projectGallery = document.getElementById("projectGallery");
projectGallery.innerHTML = projects
  .map(
    (project) => `
  <article class="project-card">
    <img src="${project.image}" alt="${project.title} preview" />
    <div class="project-metrics">
      <strong>${project.metric}</strong>
      <span>${project.impact}</span>
    </div>
    <div class="project-body">
      <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a class="project-link" href="${project.link}" target="_blank" rel="noopener">View Project ↗</a>
    </div>
  </article>
`,
  )
  .join("");

document.querySelector(".gallery-btn.next").addEventListener("click", () => {
  projectGallery.scrollBy({ left: 440, behavior: "smooth" });
});
document.querySelector(".gallery-btn.prev").addEventListener("click", () => {
  projectGallery.scrollBy({ left: -440, behavior: "smooth" });
});

/* ===================== SERVICES ===================== */

const servicesGrid = document.getElementById("servicesGrid");

servicesGrid.innerHTML = services
  .map(
    (service) => `
      <article class="service-card">

        <div class="service-icon">
          ${service.icon}
        </div>

        <h3>${service.title}</h3>

        <p>${service.text}</p>

      </article>
    `,
  )
  .join("");

const modal = document.getElementById("caseModal");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".case-open").forEach((button) => {
  button.addEventListener("click", () => {
    const study = caseStudies[button.dataset.index];
    modalContent.innerHTML = `
      <p class="eyebrow"><span></span> Case Study</p>
      <h2>${study.title}</h2>
      <div class="modal-section"><h3>Problem</h3><p>${study.problem}</p></div>
      <div class="modal-section"><h3>Solution</h3><p>${study.solution}</p></div>
      <div class="modal-section"><h3>Result</h3><p>${study.result}</p></div>
      <div class="tag-row">${study.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
      <a class="btn btn-primary" href="${study.link}" target="_blank" rel="noopener">Open Full Project ↗</a>
    `;
    modal.showModal();
  });
});

document
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

/* ===================== SCROLL REVEAL ===================== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ===================== ANIMATED PARTICLE NETWORK ===================== */
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = canvas.parentElement.offsetHeight;
  const count = Math.min(120, Math.floor(window.innerWidth / 14));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    size: Math.random() * 2 + 0.6,
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const brand = getComputedStyle(root).getPropertyValue("--brand").trim();

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = brand;
    ctx.globalAlpha = 0.65;
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < 135) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = brand;
        ctx.globalAlpha = (135 - dist) / 650;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  if (mouse.x && mouse.y) {
    particles.forEach((p) => {
      const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dist < 160) {
        p.x += (p.x - mouse.x) * 0.006;
        p.y += (p.y - mouse.y) * 0.006;
      }
    });
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas);
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
canvas.addEventListener("mouseleave", () => (mouse = { x: null, y: null }));
resizeCanvas();
drawParticles();
