(() => {
  const STORAGE_KEY = "grok-build-agents-progress-v1";
  const THEME_KEY = "grok-build-agents-theme";

  const MODULES = [
    { id: "module-1", href: "module-1.html", num: "1", label: "Safety + Plan Mode", meta: "30m" },
    { id: "module-2", href: "module-2.html", num: "2", label: "Aim + Identity", meta: "35m" },
    { id: "module-3", href: "module-3.html", num: "3", label: "Equip + Narrow", meta: "30m" },
    { id: "module-4", href: "module-4.html", num: "4", label: "First Agents (Labs)", meta: "60–90m" },
    { id: "module-5", href: "module-5.html", num: "5", label: "Trust + Habits", meta: "30m" },
  ];

  const SETUP = { id: "setup", href: "setup.html", num: "⚙", label: "Setup", meta: "25–35m" };

  const PROGRESS_IDS = [
    "setup-c1", "setup-c2", "setup-c3", "setup-c4",
    "m1-c1", "m1-c2",
    "m2-c1", "m2-c2",
    "m3-c1", "m3-c2",
    "m4-c1", "m4-c2",
    "m5-c1", "m5-c2",
  ];

  const PAGE_ORDER = [
    "index.html",
    SETUP.href,
    ...MODULES.map((m) => m.href),
    "quick-reference.html",
  ];

  const HUB_URL = "https://practical-office.github.io/dev-sops/";
  const LIVING_PROCESS_URL =
    "https://github.com/Practical-Office/grok-build-agents/blob/main/docs/reference/GROK-BUILD-AGENTS-PROCESS.md";
  const REPO_URL = "https://github.com/Practical-Office/grok-build-agents";

  const body = document.body;
  const base = body.dataset.base || "";
  const pageId = body.dataset.page || "";

  function href(path) {
    return `${base}${path}`;
  }

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function progressPct() {
    const data = load();
    const done = PROGRESS_IDS.filter((id) => data[id]).length;
    return Math.round((done / PROGRESS_IDS.length) * 100);
  }

  function updateProgressUI() {
    const pct = progressPct();
    const pctEl = document.getElementById("progressPct");
    const fillEl = document.getElementById("progressFill");
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  }

  function bindCheckboxes() {
    document.querySelectorAll("[data-progress]").forEach((el) => {
      const id = el.getAttribute("data-progress");
      if (!id) return;
      const data = load();
      if (data[id]) el.checked = true;
      el.addEventListener("change", () => {
        const d = load();
        d[id] = el.checked;
        save(d);
        updateProgressUI();
      });
    });
  }

  function buildSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar || sidebar.dataset.built) return;

    const moduleLinks = MODULES.map(
      (m) =>
        `<a class="nav-link${pageId === m.id ? " is-active" : ""}" data-module="${m.id}" href="${href(m.href)}"><span class="nav-num">${m.num}</span> ${m.label} <span class="nav-meta">${m.meta}</span></a>`
    ).join("");

    sidebar.innerHTML = `
      <a class="sidebar-brand" href="${href("index.html")}">
        <img src="https://practical-office.github.io/Cursor-AI-dev/assets/practical-ai-mark.png" alt="" width="40" height="40" />
        <div class="sidebar-brand-text">
          <strong>Practical AI</strong>
          <span>Grok Build Agents</span>
        </div>
      </a>
      <div class="progress-panel">
        <div class="progress-label">
          <span>Course progress</span>
          <strong id="progressPct">0%</strong>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" id="progressFill"></div>
        </div>
      </div>
      <nav class="sidebar-nav">
        <p class="nav-section-label">Start</p>
        <a class="nav-link" href="${HUB_URL}"><span class="nav-num">←</span> Back to hub</a>
        <a class="nav-link${pageId === "hub" ? " is-active" : ""}" data-module="hub" href="${href("index.html")}"><span class="nav-num">⌂</span> Course hub</a>
        <a class="nav-link${pageId === "quick-reference" ? " is-active" : ""}" data-module="quick-reference" href="${href("quick-reference.html")}"><span class="nav-num">⚡</span> Quick reference</a>
        <a class="nav-link${pageId === SETUP.id ? " is-active" : ""}" data-module="${SETUP.id}" href="${href(SETUP.href)}"><span class="nav-num">${SETUP.num}</span> ${SETUP.label} <span class="nav-meta">${SETUP.meta}</span></a>
        <p class="nav-section-label">Modules</p>
        ${moduleLinks}
      </nav>
      <div class="sidebar-footer">
        <a href="${LIVING_PROCESS_URL}" target="_blank" rel="noopener noreferrer">Living process</a>
        <a href="${REPO_URL}" target="_blank" rel="noopener noreferrer">Repo</a>
      </div>
    `;
    sidebar.dataset.built = "1";
  }

  function buildPageNav() {
    const nav = document.getElementById("pageNav");
    if (!nav) return;
    const file = body.dataset.file || "";
    const idx = PAGE_ORDER.indexOf(file);
    let html = "";
    if (idx > 0) {
      const prev = PAGE_ORDER[idx - 1];
      html += `<a class="page-nav-link prev" href="${href(prev)}">← Previous</a>`;
    } else {
      html += `<span></span>`;
    }
    if (idx >= 0 && idx < PAGE_ORDER.length - 1) {
      const next = PAGE_ORDER[idx + 1];
      html += `<a class="page-nav-link next" href="${href(next)}">Next →</a>`;
    }
    nav.innerHTML = html;
  }

  function bindTheme() {
    const btn = document.getElementById("themeToggle");
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    if (btn) {
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme");
        const next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem(THEME_KEY, next);
      });
    }
  }

  function bindMenu() {
    const btn = document.getElementById("menuBtn");
    const overlay = document.getElementById("navOverlay");
    function close() {
      document.body.classList.remove("nav-open");
      if (overlay) overlay.setAttribute("aria-hidden", "true");
    }
    function open() {
      document.body.classList.add("nav-open");
      if (overlay) overlay.setAttribute("aria-hidden", "false");
    }
    if (btn) btn.addEventListener("click", () => {
      if (document.body.classList.contains("nav-open")) close();
      else open();
    });
    if (overlay) overlay.addEventListener("click", close);
  }

  function bindReset() {
    const btn = document.getElementById("resetProgress");
    if (!btn) return;
    btn.addEventListener("click", () => {
      if (!confirm("Reset all course progress on this device?")) return;
      localStorage.removeItem(STORAGE_KEY);
      document.querySelectorAll("[data-progress]").forEach((el) => {
        el.checked = false;
      });
      updateProgressUI();
    });
  }

  buildSidebar();
  buildPageNav();
  bindCheckboxes();
  bindTheme();
  bindMenu();
  bindReset();
  updateProgressUI();
})();
