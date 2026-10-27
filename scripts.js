/* =========================
   Project data
   ========================= */

const projects = [
  {
    type: "ml",
    title: "Learning dynamic tolling policies",
    context: "DTU · Doctoral research",
    text:
      "Reinforcement learning and Bayesian optimization for dynamic " +
      "tolling and demand management, evaluated across demand and " +
      "capacity scenarios.",
    label: "Reinforcement learning · Simulation",
    image: "images/dynamic-tolling.svg",
    url: "https://doi.org/10.1080/21680566.2025.2552884",
    link: "Read publication"
  },
  {
    type: "ml",
    title: "Autonomous fleets with endogenous congestion",
    context: "KTH · Doctoral research · Manuscript under preparation",
    text:
      "Hierarchical reinforcement learning for real-time fleet " +
      "management, incorporating route choice and congestion through " +
      "a stochastic user equilibrium formulation.",
    label: "Hierarchical RL · Behavioral modeling",
    image: "images/autonomous-fleets.svg"
  },
  {
    type: "ml",
    title: "Designing temporal transport networks",
    context: "Doctoral research · ICORES 2026",
    text:
     "Developed an integer linear programming formulation on a " +
    "time-expanded network to jointly optimize vehicle routes, " +
    "timetables, and passenger journeys, including walking and " +
    "transfers. Implemented a proof of concept and benchmarked it " +
    "against a pickup-and-delivery routing approach using small-scale " +
    "experiments based on real-world taxi trip data.",
    label: "Network design · Optimization",
    image: "images/temporal-networks.svg",
    url: "https://doi.org/10.5220/0014330400004055",
    link: "Read publication"
  },
  {
  type: "ml",
  title: "Joint optimization of public transport and mobility on demand",
  context: "Research · EWGT 2024 · Published 2025",
  text:
    "Developed a bilevel optimization framework to jointly redesign " +
    "conventional public transport and integrate first- and last-mile " +
    "mobility-on-demand services. Combined particle swarm optimization " +
    "for stop selection and service frequencies with large neighborhood " +
    "search for on-demand fleet sizing and routing. Evaluated the " +
    "approach in a simplified Paris-region simulation with up to " +
    "10,000 travel requests.",
  label:
    "C++ · Particle swarm optimization · " +
    "Large neighborhood search ·",
  image: "images/joint-transit.svg",
  url: "https://doi.org/10.1016/j.trpro.2025.04.014",
  link: "Read publication"
},
  {
    type: "data",
    title: "From heterogeneous data to indicators",
    context: "Wharton · Research experience",
    text:
      "AWS and SQL pipelines for spatial, mobility, satellite, " +
      "sensor, and text data; NLP pipelines extracting structured " +
      "indicators from over 10,000 corporate filings.",
    label: "Data engineering · NLP",
    image: "images/data-pipelines.svg"
  },
  {
  type: "data",
  title: "Mobility and equity in New York City",
  context: "UPenn · Capstone project · Presented at AAG 2023, Denver, US",
  text:
    "Analyzed over one million SafeGraph point-of-interest visits " +
    "using origin–destination matrices and time-varying regression " +
    "models to assess mobility inequities.",
  label: "Spatial analytics · Mobility data",
  image: "images/mobility-equity.svg",
  url: "https://xiaoyiwu21.github.io/mobility_web/",
  link: "Explore interactive map",
  slides:
    "https://docs.google.com/presentation/d/1_pWPodhUmaRcgdVlkrDfd6NjV-RO6_VRXtYbm-7Ti2M/edit?usp=sharing"
},
{
  type: "data",
  title: "Spatial housing-price prediction in Boulder County",
  context: "UPenn · Coursework project",
  text:
    "Integrated property records, ACS demographics, and amenity data " +
    "to predict housing prices in Boulder County, Colorado. " +
    "Engineered spatial accessibility and neighborhood features; " +
    "compared baseline regression with neighborhood-effect models. " +
    "Evaluated prediction errors, residual spatial autocorrelation, " +
    "and performance across neighborhood income groups.",
  result:
    "Adding neighborhood effects reduced mean absolute percentage " +
    "error from 33.1% to 31.4% in the reported evaluation.",
  label:
    "R · Spatial feature engineering · Regression · Model validation",
  image: "images/boulder-housing.svg",
  url: "doc/house_prediction.html",
  link: "Read project report"
},
{
  type: "data",
  title: "Predictive modeling for housing subsidy outreach",
  context: "Coursework · Public policy analytics",
  text:
    "Developed logistic regression models in an illustrative housing " +
    "subsidy setting to predict program uptake and inform outreach. " +
    "Compared full and reduced predictor sets using cross-validation, " +
    "AUROC, sensitivity, and specificity. Evaluated classification " +
    "thresholds through cost–benefit analysis to examine trade-offs " +
    "between outreach expenditure and expected program participation.",
  result:
    "The reduced model achieved a cross-validated AUROC of approximately " +
    "0.78. Threshold analysis demonstrated how targeting decisions " +
    "depend on assumed outreach costs and program benefits.",
  label:
    "R · Logistic regression · Cross-validation · Cost–benefit analysis",
  image: "images/housing-subsidy.svg",
  url: "doc/housing_subsidy.html",
  link: "Read project report"
},
{
  type: "data",
  title: "Spatial risk modeling and bias assessment in Chicago",
  context: "UPenn · Coursework project",
  text:
    "Integrated police-recorded narcotics incidents, ACS demographics, " +
    "and urban-condition data into 500-foot grid cells. Examined spatial " +
    "clustering, compared risk models with a kernel-density baseline, " +
    "and evaluated predictions using 2018 incident records. Audited " +
    "prediction errors across neighborhood racial contexts and discussed " +
    "how enforcement and reporting patterns affect interpretation.",
  label:
    "Spatial statistics · Temporal validation · Equity assessment",
  image: "images/chicago-risk.svg",
  url: "doc/chicago_risk.html",
  link: "Read project report"
},
{
    type: "data",
    title: "Landslide identification in Hong Kong using GAN",
    context: "UPenn · Selected coursework · Presented at AutoCarto 2022, Redlands, US",
    text:
     "Combined a 10-year landslide inventory with terrain, vegetation, and land-use factors. Compared KNN, random forest, decision tree, and logistic regression models with and without GAN-generated training data; evaluated classification performance and produced landslide susceptibility maps.",
    label: "GIS · Generative-ai · ML",
    image: "images/landslide-gan.svg",
    url: "https://cartogis.org/docs/autocarto/2022/docs/posters/Poster_Wu_1805.pdf",
  link: "AutoCarto2022 Poster",
  },

];

/* =========================
   Publication data
   ========================= */

let allPublications = [];
let showingSelected = true;

const fallbackPublications = [
  {
    title:
      "Beyond the Vehicle Routing Problem: Design of Temporal " +
      "Networks for Demand-Responsive Transport",
    authors: [
      "Xiaoyi Wu",
      "Ravi Seshadri",
      "Filipe Rodrigues",
      "Carlos Lima Azevedo",
      "Andrea Araldo"
    ],
    venue:
      "Proceedings of the 15th International Conference on " +
      "Operations Research and Enterprise Systems (ICORES), 2026",
    selected: 1,
    links: {
      Paper: "https://doi.org/10.5220/0014330400004055",
      Code: "https://github.com/XiaoyiWu21/TN4DRT"
    }
  },
  {
    title:
      "Deep Reinforcement Learning for Day-to-Day Dynamic " +
      "Tolling in Tradable Credit Schemes",
    authors: [
      "Xiaoyi Wu",
      "Ravi Seshadri",
      "Filipe Rodrigues",
      "Carlos Lima Azevedo"
    ],
    venue:
      "Transportmetrica B: Transport Dynamics, " +
      "13(1), 2552884, 2025",
    selected: 1,
    links: {
      Paper: "https://doi.org/10.1080/21680566.2025.2552884",
      Code: "https://github.com/XiaoyiWu21/RL4TCS"
    }
  },
  {
    title:
      "Joint Design of Conventional Public Transport Network " +
      "and Mobility on Demand",
    authors: [
      "Xiaoyi Wu",
      "Nisrine Mouhrim",
      "Andrea Araldo",
      "Yves Molenbruch",
      "Dominique Feillet",
      "Kris Braekers"
    ],
    venue: "Transportation Research Procedia, 86, 104–112, 2025",
    selected: 1,
    links: {
      Paper: "https://doi.org/10.1016/j.trpro.2025.04.014",
      Code: "https://github.com/XiaoyiWu21/darp"

    }
  }
];

/* =========================
   Helpers
   ========================= */

function getScrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

/* =========================
   Projects
   ========================= */

function renderProjects() {
  const container = document.getElementById("project-grid");

  if (!container) {
    return;
  }

  container.replaceChildren();

  projects.forEach((project) => {
    const article = createElement("article", "project");
    article.dataset.type = project.type;

    const image = createElement("img", "project-image");
    image.src = project.image;
    image.alt = `${project.title}: conceptual illustration`;
    image.loading = "lazy";
    image.width = 140;
    image.height = 100;

    const details = createElement("div", "project-details");

    details.append(
      createElement("div", "context", project.context),
      createElement("h3", "", project.title),
      createElement("p", "", project.text),
      createElement("div", "methods", project.label)
    );

    const links = createElement("div", "pub-links");

    if (project.url) {
    const link = createElement("a", "", `${project.link} ↗`);
    link.href = project.url;
    links.append(link);
    }

    if (project.slides) {
    const slidesLink = createElement(
        "a",
        "",
        "AAG 2023 Presentation ↗"
    );

    slidesLink.href = project.slides;
    slidesLink.target = "_blank";
    slidesLink.rel = "noopener";

    links.append(slidesLink);
    }

    if (links.childElementCount > 0) {
    details.append(links);
    }


    article.append(image, details);
    container.append(article);
  });
}

function initializeProjectFilters() {
  const buttons = document.querySelectorAll("[data-filter]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((otherButton) => {
        otherButton.setAttribute(
          "aria-pressed",
          String(otherButton.dataset.filter === filter)
        );
      });

      document.querySelectorAll(".project").forEach((project) => {
        project.hidden =
          filter !== "all" && project.dataset.type !== filter;
      });

      document.getElementById("projects")?.scrollIntoView({
        behavior: getScrollBehavior(),
        block: "start"
      });
    });
  });
}

/* =========================
   Publications
   ========================= */

function createPublicationElement(publication) {
  const article = createElement("article", "publication-item");

  const title = createElement("div", "pub-title");
  const paperUrl = publication.links?.Paper;

  if (paperUrl) {
    const titleLink = createElement("a", "", publication.title);
    titleLink.href = paperUrl;
    title.append(titleLink);
  } else {
    title.textContent = publication.title;
  }

  const authors = createElement("div", "pub-authors");

  publication.authors.forEach((name, index) => {
    if (index > 0) {
      authors.append(", ");
    }

    const author = createElement(
      "span",
      name === "Xiaoyi Wu" ? "highlight-name" : "",
      name
    );

    authors.append(author);
  });

  const venue = createElement(
    "div",
    "pub-venue",
    publication.venue
  );

  const links = createElement("div", "pub-links");

  Object.entries(publication.links || {}).forEach(([label, url]) => {
    const link = createElement("a", "", `[${label}]`);
    link.href = url;
    links.append(link);
  });

  article.append(title, authors, venue, links);

  return article;
}

function renderPublications() {
  const container = document.getElementById(
    "publications-container"
  );

  if (!container) {
    return;
  }

  container.replaceChildren();

  const publicationsToShow = allPublications.filter(
    (publication) =>
      !showingSelected || publication.selected === 1
  );

  if (publicationsToShow.length === 0) {
    container.append(
      createElement("p", "", "No publications to display.")
    );
  } else {
    publicationsToShow.forEach((publication) => {
      container.append(createPublicationElement(publication));
    });
  }

  const heading = document.getElementById("toggle-header");
  const toggle = document.getElementById("toggle-publications");

  if (heading) {
    heading.textContent = showingSelected
      ? "Selected Publications"
      : "All Publications";
  }

  if (toggle) {
    toggle.textContent = showingSelected
      ? "Show All"
      : "Show Selected";

    toggle.setAttribute(
      "aria-expanded",
      String(!showingSelected)
    );
  }
}

async function loadPublications() {
  try {
    const response = await fetch("publications.json");

    if (!response.ok) {
      throw new Error("Publication data unavailable.");
    }

    const data = await response.json();

    const isValid =
      Array.isArray(data.publications) &&
      data.publications.every(
        (publication) =>
          typeof publication.title === "string" &&
          Array.isArray(publication.authors) &&
          publication.authors.every(
            (author) => typeof author === "string"
          ) &&
          typeof publication.venue === "string"
      );

    if (!isValid) {
      throw new Error("Invalid publication data.");
    }

    allPublications = data.publications;
  } catch (error) {
    console.warn(
      "Using backup publication data:",
      error.message
    );

    allPublications = fallbackPublications;
  }

  renderPublications();
}

function initializePublicationToggle() {
  const toggle = document.getElementById(
    "toggle-publications"
  );

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    showingSelected = !showingSelected;
    renderPublications();
  });
}

/* =========================
   News scrolling
   ========================= */

function initializeNewsScrolling() {
  const feed = document.getElementById("news-feed");
  const upButton = document.getElementById("news-up");
  const downButton = document.getElementById("news-down");

  if (!feed || !upButton || !downButton) {
    return;
  }

  function updateButtons() {
    const maximumScroll = feed.scrollHeight - feed.clientHeight;

    upButton.disabled = feed.scrollTop <= 1;
    downButton.disabled = feed.scrollTop >= maximumScroll - 1;
  }

  function scrollNews(direction) {
    feed.scrollBy({
      top: direction * 220,
      behavior: getScrollBehavior()
    });
  }

  upButton.addEventListener("click", () => {
    scrollNews(-1);
  });

  downButton.addEventListener("click", () => {
    scrollNews(1);
  });

  feed.addEventListener("scroll", updateButtons, {
    passive: true
  });

  window.addEventListener("resize", updateButtons);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(updateButtons);

    observer.observe(feed);

    const list = feed.querySelector(".news-list");

    if (list) {
      observer.observe(list);
    }
  }

  updateButtons();

  if (document.fonts) {
    document.fonts.ready.then(updateButtons);
  }
}

/* =========================
   Initialize page
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach((section, index) => {
    section.style.animationDelay = `${index * 0.07}s`;
  });

  renderProjects();
  initializeProjectFilters();
  initializePublicationToggle();
  initializeNewsScrolling();
  loadPublications();
});