// Shared header, footer, page renderers and interactions. Content comes from data.js.
(function () {
  const S = window.SITE;
  const CASES = window.CASES;
  const SITES = window.WEBSITES;
  const byId = Object.fromEntries(CASES.map(c => [c.id, c]));
  const main = document.querySelector("main[data-page]");
  const page = main ? main.dataset.page : "";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  // Show [placeholders] highlighted so they are easy to spot.
  const fill = s => esc(s).replace(/\[([^\]]+)\]/g, '<em class="ph">[$1]</em>');
  // A profile link when filled in, the highlighted placeholder otherwise.
  const ext = v => /^\[/.test(v) ? fill(v) : `<a href="https://${esc(v)}" target="_blank" rel="noopener">${esc(v)} ↗</a>`;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = iso => { const [, m, d] = iso.split("-").map(Number); return `${months[m - 1]} ${d}`; };
  const caseUrl = id => `case-${id}.html`;
  const pill = status => `<span class="pill ${/^live$/i.test(status) ? "live" : "pending"}">${esc(status)}</span>`;
  const catLabel = id => (window.CATEGORIES.find(c => c.id === id) || {}).label || id;

  const ICONS = {
    salesforce: '<path d="M7 18a4 4 0 0 1-.6-7.96A5 5 0 0 1 16 8.5a3.5 3.5 0 0 1 1.5 6.72A3 3 0 0 1 14 18H7z"/>',
    ghl: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
    api: '<circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M7.3 11l9.4-4M7.3 13l9.4 4"/>'
  };
  const icon = id => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id] || ""}</svg>`;

  // Theme: follow the system unless the visitor picks one.
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;

  // Header
  const links = [
    ["home", "index.html", "Home"], ["websites", "websites.html", "Websites"], ["systems", "systems.html", "Systems & APIs"],
    ["skills", "skills.html", "Skills"], ["services", "services.html", "Services"], ["about", "about.html", "About"]
  ];
  const activeKey = page;
  const [first, ...rest] = S.name.split(" ");
  const wordmark = `<span>${esc(first)}</span>&nbsp;<span class="s">${esc(rest.join(" "))}</span>`;
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="progress" aria-hidden="true"><span id="progress-bar"></span></div>
    <div class="wrap">
      <a class="logo" href="index.html">${wordmark}</a>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${links.map(([k, href, label]) => `<a href="${href}"${k === activeKey ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <button class="icon-btn" id="theme-btn" type="button" aria-label="Switch color theme"><span class="sun">☀</span><span class="moon">☾</span></button>
        <a class="btn btn-primary magnetic" href="contact.html">Work with me</a>
        <button class="icon-btn menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><span class="burger"></span></button>
      </div>
    </div>`;
  document.body.prepend(header);

  header.querySelector("#theme-btn").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.classList.add("theme-fade");
    root.dataset.theme = next;
    setTimeout(() => root.classList.remove("theme-fade"), 400);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  const menuBtn = header.querySelector("#menu-btn");
  const nav = header.querySelector("#site-nav");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.classList.toggle("is-open", open);
  });

  // Footer
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap">
      <div class="foot-cta reveal">
        <h2>Let's build something <em class="s">together</em>.</h2>
        <a class="btn btn-primary magnetic" href="contact.html">Work with me →</a>
      </div>
      <div class="foot-grid">
        <div class="stack">
          <a class="logo" href="index.html">${wordmark}</a>
          <p class="muted measure">${esc(S.role)}. Websites, funnels, CRM systems and the integrations between them.</p>
        </div>
        <div><h4>Pages</h4><ul>${links.map(([, href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}<li><a href="work.html">Case studies</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div><h4>Elsewhere</h4><ul>
          <li>${ext(S.upwork)}</li><li>${ext(S.github)}</li>
        </ul></div>
      </div>
      <div class="foot-bottom"><span>© ${new Date().getFullYear()} ${esc(S.fullName)}</span><span>${esc(S.location)}</span></div>
    </div>`;
  document.body.append(footer);

  const backTop = document.createElement("button");
  backTop.className = "back-top"; backTop.type = "button"; backTop.setAttribute("aria-label", "Back to top"); backTop.textContent = "↑";
  backTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  document.body.append(backTop);

  const toast = document.createElement("div");
  toast.className = "toast"; toast.setAttribute("role", "status");
  document.body.append(toast);
  let toastTimer;
  const showToast = msg => { toast.textContent = msg; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200); };

  // Shared pieces
  const siteCard = (w, cls = "", i = 0) => `
    <article class="site-card reveal ${cls}" data-kind="${w.kind}">
      <button class="browser" type="button" data-lightbox="sites" data-index="${i}" aria-label="Enlarge screenshot of ${esc(w.title)}">
        <span class="bar"><i></i><i></i><i></i></span>
        <span class="shot"><img src="${esc(w.shot)}" alt="Home page of the ${esc(w.title)} website" loading="lazy"></span>
        <span class="zoom" aria-hidden="true">⤢ View</span>
      </button>
      <div class="site-meta">
        <span class="kind">${esc(w.kindLabel)}</span>
        <h3>${esc(w.title)}</h3>
        <span class="client">${esc(w.client)}</span>
        <p>${esc(w.blurb)}</p>
        <div class="tags">${w.tools.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </article>`;

  const caseCard = c => `
    <a class="card case-card spot reveal" href="${caseUrl(c.id)}" data-cats="${c.categories.join(" ")}">
      <div class="top"><span class="eyebrow">${esc(c.kicker)}</span>${pill(c.status)}</div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.summary)}</p>
      <div class="tags">${c.stack.slice(0, 4).map(s => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      <span class="more">Read the case study <span class="arr">→</span></span>
    </a>`;

  const sysCard = (s, i) => `
    <figure class="sys-card reveal" data-group="${s.group}">
      <button class="sys-shot" type="button" data-lightbox="systems" data-index="${i}" aria-label="Enlarge ${esc(s.title)}">
        <img src="${esc(s.shot)}" alt="${esc(s.title)} screen" loading="lazy"><span class="zoom" aria-hidden="true">⤢</span>
      </button>
      <figcaption><b>${esc(s.title)}</b><span>${esc(s.text)}</span></figcaption>
    </figure>`;

  const sortedByDate = [...CASES].sort((a, b) => b.released.localeCompare(a.released));

  // Filter chips with an animated hand-off between sets.
  const filterable = (gridEl, filtersEl, countEl, items, attr, noun, hashable) => {
    filtersEl.innerHTML = items.map((c, i) =>
      `<button class="chip" type="button" data-f="${c.id}" aria-pressed="${i === 0}">${esc(c.label)} <span class="n"></span></button>`).join("");
    const all = [...gridEl.querySelectorAll(`[${attr}]`)];
    filtersEl.querySelectorAll(".chip").forEach(b => {
      const f = b.dataset.f;
      b.querySelector(".n").textContent = f === "all" ? all.length : all.filter(el => el.getAttribute(attr).split(" ").includes(f)).length;
    });
    const apply = f => {
      let n = 0;
      gridEl.classList.add("filtering");
      setTimeout(() => {
        all.forEach(el => {
          const show = f === "all" || el.getAttribute(attr).split(" ").includes(f);
          el.hidden = !show; if (show) { n++; el.classList.add("in"); }
        });
        countEl.textContent = `${n} ${noun}${n === 1 ? "" : "s"}`;
        gridEl.classList.remove("filtering");
      }, reduceMotion ? 0 : 160);
      filtersEl.querySelectorAll(".chip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.f === f)));
    };
    filtersEl.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      apply(b.dataset.f);
      if (hashable) history.replaceState(null, "", b.dataset.f === "all" ? location.pathname : "#" + b.dataset.f);
    });
    const start = hashable && items.some(i => i.id === location.hash.slice(1)) ? location.hash.slice(1) : "all";
    apply(start);
  };

  // Interactive API flow: click a step, or press Run to watch the data move through.
  const apiFlow = el => {
    const steps = window.API_FLOW;
    el.innerHTML = `
      <div class="flow-head">
        <div><span class="eyebrow">Live client integration</span><h3>GoHighLevel → Zapier → NetSuite</h3></div>
        <button class="btn btn-primary run-btn" type="button">▶ Run the sync</button>
      </div>
      <ol class="flow-track">${steps.map((s, i) => `
        <li><button class="flow-node" type="button" data-i="${i}" aria-pressed="${i === 0}">
          <span class="k">${esc(s.kind)}</span><b>${esc(s.title)}</b><span class="app">${esc(s.app)}</span>
        </button></li>`).join("")}
        <span class="packet" aria-hidden="true"></span>
      </ol>
      <div class="flow-detail" aria-live="polite"></div>`;
    const nodes = [...el.querySelectorAll(".flow-node")];
    const detail = el.querySelector(".flow-detail");
    const packet = el.querySelector(".packet");
    const show = i => {
      nodes.forEach((n, j) => { n.setAttribute("aria-pressed", String(i === j)); n.classList.toggle("done", j < i); });
      const s = steps[i];
      detail.innerHTML = `<div class="fd-text"><span class="eyebrow">${esc(s.kind)} · ${esc(s.app)}</span><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div><pre><code>${esc(s.sample)}</code></pre>`;
      const node = nodes[i], track = node.closest("ol").getBoundingClientRect(), r = node.getBoundingClientRect();
      packet.style.setProperty("--x", `${r.left - track.left + r.width / 2}px`);
      packet.style.setProperty("--y", `${r.top - track.top + r.height / 2}px`);
    };
    nodes.forEach(n => n.addEventListener("click", () => { stop(); show(+n.dataset.i); }));
    let timer = null;
    const runBtn = el.querySelector(".run-btn");
    const stop = () => { clearInterval(timer); timer = null; runBtn.textContent = "▶ Run the sync"; el.classList.remove("running"); };
    runBtn.addEventListener("click", () => {
      if (timer) return stop();
      let i = 0; show(0); el.classList.add("running"); runBtn.textContent = "■ Stop";
      timer = setInterval(() => { i++; if (i >= steps.length) { stop(); showToast("Order created in NetSuite ✓"); return; } show(i); }, reduceMotion ? 900 : 1500);
    });
    show(0);
    addEventListener("resize", () => show(nodes.findIndex(n => n.getAttribute("aria-pressed") === "true")));
  };

  // Page renderers
  const render = {
    home() {
      document.getElementById("pillars").innerHTML = window.PILLARS.map(p => `
        <a class="pillar spot reveal" href="${p.link}" id="pillar-${p.id}">
          <span class="pillar-ico">${icon(p.id)}</span>
          <span class="eyebrow">${esc(p.kicker)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.text)}</p>
          <ul>${p.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
          <span class="more">${esc(p.linkLabel)} <span class="arr">→</span></span>
        </a>`).join("");
      const pick = ids => ids.map(id => SITES.findIndex(w => w.id === id));
      const picks = pick(["backtheblue", "wegotu", "babe", "fundedva"]);
      document.getElementById("showcase").innerHTML = picks.map((i, k) => siteCard(SITES[i], ["feature", "side", "", ""][k], i)).join("");
      document.getElementById("featured").innerHTML = ["ehr-sync", "partner-portals", "lead-automation"].map(id => caseCard(byId[id])).join("");
      apiFlow(document.getElementById("api-flow"));
      const clients = ["Mino", "We Got U", "Golden Goose", "Optimize Tax Pro", "Bernard Gooden Real Estate", "Producers Wealth", "Infinite Revolution", "Bermuda Bulk Gases", "Funded VA", "Taxes To Go"];
      const row = clients.map(c => `<span>${esc(c)}</span>`).join("<i>✦</i>");
      document.getElementById("marquee").innerHTML = `<div class="marquee-track">${row}<i>✦</i>${row}<i>✦</i></div>`;
    },

    websites() {
      const grid = document.getElementById("sites-grid");
      grid.innerHTML = SITES.map((w, i) => siteCard(w, "", i)).join("");
      filterable(grid, document.getElementById("site-filters"), document.getElementById("site-count"), window.SITE_KINDS, "data-kind", "website", true);
    },

    systems() {
      const grid = document.getElementById("sys-grid");
      grid.innerHTML = window.SYSTEMS.map(sysCard).join("");
      filterable(grid, document.getElementById("sys-filters"), document.getElementById("sys-count"), window.SYSTEM_GROUPS, "data-group", "screen", true);
      apiFlow(document.getElementById("api-flow"));
    },

    work() {
      const grid = document.getElementById("work-grid");
      grid.innerHTML = sortedByDate.map(caseCard).join("");
      filterable(grid, document.getElementById("filters"), document.getElementById("work-count"), window.CATEGORIES, "data-cats", "project", true);
    },

    case() {
      const c = byId[main.dataset.case];
      if (!c) return;
      document.title = `${c.title} · ${S.name}`;
      const i = sortedByDate.indexOf(c);
      const prev = sortedByDate[(i - 1 + sortedByDate.length) % sortedByDate.length];
      const next = sortedByDate[(i + 1) % sortedByDate.length];
      main.innerHTML = `
        <div class="wrap">
          <div class="case-hero">
            <div class="crumbs"><a href="work.html">Case studies</a> / ${esc(c.kicker)}</div>
            <div class="btn-row" style="align-items:center">${pill(c.status)}<span class="mono muted">Released ${fmtDate(c.released)}, ${c.released.slice(0, 4)}</span></div>
            <h1 class="rise">${esc(c.title)}</h1>
            <p class="hero-lede measure rise d1">${esc(c.summary)}</p>
          </div>
          <div class="figures rise d2" style="margin-bottom:64px">
            ${c.metrics.map(m => `<div class="figure"><b>${fill(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}
            <div class="figure"><b data-count="${c.stack.length}">${c.stack.length}</b><span>tools and platform features</span></div>
          </div>
          <div class="case-layout">
            <article class="case-main">
              <section class="reveal"><span class="eyebrow">The problem</span><h2>What wasn't working</h2><p>${esc(c.problem)}</p></section>
              <section class="reveal"><span class="eyebrow">Approach</span><h2>How I worked through it</h2>
                <ol>${c.approach.map(a => `<li>${esc(a)}</li>`).join("")}</ol></section>
              <section class="reveal"><span class="eyebrow">What shipped</span><h2>Components</h2>
                <div class="components"><table>
                  <thead><tr><th>Type</th><th>Component</th></tr></thead>
                  <tbody>${c.build.map(b => `<tr><td>${esc(b.type)}</td><td>${esc(b.name)}</td></tr>`).join("")}</tbody>
                </table></div></section>
              <section class="reveal"><span class="eyebrow">Outcome</span><h2>What changed</h2>
                <ul>${c.outcome.map(o => `<li>${esc(o)}</li>`).join("")}</ul></section>
              <section class="reveal"><span class="eyebrow">Lesson learned</span><p class="lesson">“${esc(c.lesson)}”</p></section>
            </article>
            <aside class="spec card" aria-label="Project details">
              <dl>
                <dt>Role</dt><dd>${esc(c.role)}</dd>
                <dt>Timeline</dt><dd>${esc(c.timeline)}</dd>
                <dt>Environment</dt><dd>${esc(c.org)}</dd>
                <dt>Category</dt><dd>${c.categories.map(catLabel).map(esc).join(", ")}</dd>
                <dt>Stack</dt><dd><div class="tags">${c.stack.map(s => `<span class="tag">${esc(s)}</span>`).join("")}</div></dd>
                <dt>Code</dt><dd>${c.repo ? `Private GitHub repository, available on request.<br>${ext(S.github)}` : "No-code build (Zapier and Google Sheets)"}</dd>
              </dl>
            </aside>
          </div>
          <nav class="case-nav" aria-label="More case studies">
            <a class="card case-card spot" href="${caseUrl(prev.id)}"><span class="mono muted">← Previous</span><h3>${esc(prev.title)}</h3></a>
            <a class="card case-card spot next" href="${caseUrl(next.id)}"><span class="mono muted">Next →</span><h3>${esc(next.title)}</h3></a>
          </nav>
        </div>`;
    },

    services() {
      const list = document.getElementById("service-list");
      const tabs = document.getElementById("service-tabs");
      tabs.innerHTML = window.SERVICES.map((s, i) => `<button class="chip" type="button" data-s="${s.id}" aria-pressed="${i === 0}">${esc(s.title)}</button>`).join("");
      list.innerHTML = window.SERVICES.map(s => `
        <div class="service reveal" id="${s.id}">
          <div class="stack">
            <h3>${esc(s.title)}</h3>
            <p class="muted">${esc(s.blurb)}</p>
            <span class="meta">Typical length: ${fill(s.timeline)}</span>
            ${s.cases.length ? `<div class="tags">${s.cases.map(id => `<a class="tag" href="${caseUrl(id)}">${esc(byId[id].title)} →</a>`).join("")}</div>` : ""}
          </div>
          <ul>${s.deliverables.map(d => `<li>${esc(d)}</li>`).join("")}</ul>
        </div>`).join("");
      tabs.addEventListener("click", e => {
        const b = e.target.closest(".chip"); if (!b) return;
        document.getElementById(b.dataset.s).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
      const io = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) tabs.querySelectorAll(".chip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.s === en.target.id)));
      }), { rootMargin: "-45% 0px -50% 0px" });
      list.querySelectorAll(".service").forEach(s => io.observe(s));
    },

    skills() {
      document.getElementById("skill-groups").innerHTML = window.SKILLS.map(g => `
        <div class="skill-group reveal">
          <h3>${esc(g.group)}</h3>
          <div class="skill-list">${g.items.map(it => `
            <div class="skill-row">
              <strong>${esc(it.name)}</strong>
              <div class="proof">${it.cases.length
                ? it.cases.map(id => `<a href="${caseUrl(id)}">${esc(byId[id].title)}</a>`).join("")
                : `<span class="muted" style="font-size:.88rem">Used in client work · see <a class="inline" href="about.html#experience">experience</a></span>`}</div>
            </div>`).join("")}
          </div>
        </div>`).join("");
    },

    about() {
      document.getElementById("timeline").innerHTML = window.ENGAGEMENTS.map((e, i) => `
        <details class="tl-item reveal"${i === 0 ? " open" : ""}>
          <summary>
            <span class="when">${esc(e.when)}</span>
            <span class="what"><b>${esc(e.org)}</b><span class="muted">${esc(e.role)}</span></span>
            <span class="plus" aria-hidden="true"></span>
          </summary>
          <div class="tl-body">
            <p class="muted measure">${esc(e.scope)}</p>
            <ul>${e.did.map(d => `<li>${esc(d)}</li>`).join("")}</ul>
            <div class="tags">${e.tools.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            <p class="result"><span class="eyebrow">Result</span> ${esc(e.result)}</p>
          </div>
        </details>`).join("");
      document.getElementById("toggle-all").addEventListener("click", ev => {
        const items = [...document.querySelectorAll(".tl-item")];
        const open = !items.every(d => d.open);
        items.forEach(d => d.open = open);
        ev.target.textContent = open ? "Collapse all" : "Expand all";
      });
      document.getElementById("education").innerHTML = window.EDUCATION.map(e => `
        <div class="card spot reveal"><span class="eyebrow">${esc(e.note)}</span><h3>${esc(e.title)}</h3><p>${esc(e.org)}</p></div>`).join("");
    },

    contact() {
      const form = document.getElementById("contact-form");
      const status = document.getElementById("form-status");
      const msg = document.getElementById("f-msg"), counter = document.getElementById("msg-count");
      msg.addEventListener("input", () => { counter.textContent = `${msg.value.length} characters`; });
      form.querySelectorAll(".choice").forEach(c => c.addEventListener("click", () => {
        c.setAttribute("aria-pressed", String(c.getAttribute("aria-pressed") !== "true"));
        document.getElementById("f-type").value = [...form.querySelectorAll('.choice[aria-pressed="true"]')].map(x => x.textContent).join(", ");
      }));
      form.addEventListener("submit", e => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        const v = id => document.getElementById(id).value;
        const body = `Name: ${v("f-name")}\nEmail: ${v("f-email")}\nCompany: ${v("f-company")}\nInterested in: ${v("f-type") || "-"}\n\n${v("f-msg")}`;
        status.hidden = false;
        status.innerHTML = `This form doesn't send by itself yet. Your message is ready: <button class="text-link" type="button" id="copy-msg">copy it</button> and send it to me on ${ext(S.upwork)}.`;
        document.getElementById("copy-msg").addEventListener("click", () => copy(body, "Message copied"));
      });
    }
  };

  // Text slots like <span data-site="email">
  document.querySelectorAll("[data-site]").forEach(el => { el.innerHTML = fill(S[el.dataset.site] || ""); });
  document.querySelectorAll("[data-ext]").forEach(el => { el.innerHTML = ext(S[el.dataset.ext] || ""); });
  document.querySelectorAll("[data-stat]").forEach(el => {
    const k = el.dataset.stat;
    el.dataset.count = { sites: SITES.length, cases: CASES.length, screens: window.SYSTEMS.length, clients: window.ENGAGEMENTS.length }[k] || 0;
    el.textContent = el.dataset.count;
  });

  if (render[page]) render[page]();

  /* ---------- Interactions ---------- */

  // Copy buttons
  const copy = async (text, done) => {
    try { await navigator.clipboard.writeText(text); showToast(done || "Copied"); }
    catch (err) { showToast("Select the text and copy it with ⌘C / Ctrl+C"); }
  };
  document.addEventListener("click", e => { const b = e.target.closest("[data-copy]"); if (b) copy(b.dataset.copy, "Email copied"); });

  // Scroll progress, header shadow, back-to-top
  const bar = document.getElementById("progress-bar");
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    header.classList.toggle("scrolled", scrollY > 8);
    backTop.classList.toggle("show", scrollY > innerHeight * 0.8);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Reveal on scroll. Only elements below the first screen start hidden, and a timer shows everything regardless.
  const revealEls = [...document.querySelectorAll(".reveal")];
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el, i) => {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pre"); el.style.transitionDelay = `${(i % 3) * 70}ms`; io.observe(el); }
    });
    setTimeout(() => revealEls.forEach(el => el.classList.add("in")), 6000);
  }

  // Count-up numbers
  const counters = [...document.querySelectorAll("[data-count]")];
  if (!reduceMotion) {
    const cio = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, t0 = performance.now();
      const tick = t => { const p = Math.min(1, (t - t0) / 1100); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick); cio.unobserve(el);
    }), { threshold: 0.6 });
    counters.forEach(el => cio.observe(el));
  }

  // Rotating words in the hero
  const rot = document.querySelector("[data-rotate]");
  if (rot) {
    const words = rot.dataset.rotate.split("|");
    let i = 0;
    rot.textContent = words[0];
    if (!reduceMotion) setInterval(() => {
      rot.classList.add("out");
      setTimeout(() => { i = (i + 1) % words.length; rot.textContent = words[i]; rot.classList.remove("out"); }, 320);
    }, 2400);
  }

  // Portrait tilt and parallax chips
  const portrait = document.querySelector(".portrait.tilt");
  if (portrait && finePointer && !reduceMotion) {
    portrait.addEventListener("pointermove", e => {
      const r = portrait.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      portrait.style.setProperty("--rx", `${-y * 8}deg`); portrait.style.setProperty("--ry", `${x * 10}deg`);
      portrait.style.setProperty("--px", `${x * 18}px`); portrait.style.setProperty("--py", `${y * 18}px`);
    });
    portrait.addEventListener("pointerleave", () => ["--rx", "--ry", "--px", "--py"].forEach(p => portrait.style.setProperty(p, "0")));
  }

  // Spotlight that follows the cursor on cards
  if (finePointer) document.addEventListener("pointermove", e => {
    const c = e.target.closest(".spot"); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", `${e.clientX - r.left}px`); c.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  // Magnetic primary buttons
  if (finePointer && !reduceMotion) document.querySelectorAll(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`; });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });

  // Lightbox for every screenshot group
  const groups = { sites: SITES.map(w => ({ src: w.shot, title: w.title, text: `${w.kindLabel} · ${w.client}` })), systems: window.SYSTEMS.map(s => ({ src: s.shot, title: s.title, text: s.text })) };
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.hidden = true; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Screenshot viewer");
  lb.innerHTML = `<button class="lb-close" type="button" aria-label="Close">✕</button>
    <button class="lb-nav prev" type="button" aria-label="Previous">‹</button>
    <figure><img alt=""><figcaption><b></b><span></span><em></em></figcaption></figure>
    <button class="lb-nav next" type="button" aria-label="Next">›</button>`;
  document.body.append(lb);
  let lbGroup = [], lbIdx = 0, lastFocus = null;
  const lbShow = i => {
    lbIdx = (i + lbGroup.length) % lbGroup.length;
    const it = lbGroup[lbIdx];
    lb.querySelector("img").src = it.src; lb.querySelector("img").alt = it.title;
    lb.querySelector("b").textContent = it.title; lb.querySelector("figcaption span").textContent = it.text;
    lb.querySelector("em").textContent = `${lbIdx + 1} / ${lbGroup.length}`;
  };
  const lbOpen = (g, i, from) => { lbGroup = groups[g]; lastFocus = from; lb.hidden = false; document.body.classList.add("lb-open"); lbShow(i); lb.querySelector(".lb-close").focus(); };
  const lbClose = () => { lb.hidden = true; document.body.classList.remove("lb-open"); if (lastFocus) lastFocus.focus(); };
  document.addEventListener("click", e => { const t = e.target.closest("[data-lightbox]"); if (t) lbOpen(t.dataset.lightbox, +t.dataset.index, t); });
  lb.addEventListener("click", e => { if (e.target === lb) lbClose(); });
  lb.querySelector(".lb-close").addEventListener("click", lbClose);
  lb.querySelector(".prev").addEventListener("click", () => lbShow(lbIdx - 1));
  lb.querySelector(".next").addEventListener("click", () => lbShow(lbIdx + 1));
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
    if (e.key === "ArrowRight") lbShow(lbIdx + 1);
  });
  let sx = null;
  lb.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) lbShow(lbIdx + (dx < 0 ? 1 : -1)); sx = null; });
})();
