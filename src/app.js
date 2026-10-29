import "./styles.css";
import config from "./data/config.json";
import projects from "./data/projects.json";
import heroPortrait from "./images/enrique-retrato.png";

for (const [name, value] of Object.entries(config.colors)) {
  const token = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  document.documentElement.style.setProperty(`--color-${token}`, value);
}

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const initials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

const profileName = config.name.trim() || "Portfolio";
document.title = `${profileName} · Portfolio`;
setText("[data-brand]", `${initials(profileName) || "P"}.`);
const portrait = document.querySelector("[data-hero-portrait]");
portrait.src = heroPortrait;
portrait.alt = `Retrato profesional de ${profileName}`;
setText('[data-profile="profession"]', config.profession);
setText('[data-profile="headline"]', config.headline);
const locationElement = document.querySelector('[data-profile="location"]');
if (config.location?.trim()) {
  locationElement.textContent = config.location;
} else {
  locationElement.hidden = true;
}

const aboutContainer = document.querySelector('[data-profile="about"]');
for (const paragraph of config.about) {
  const element = document.createElement("p");
  element.textContent = paragraph;
  aboutContainer.append(element);
}

const projectGrid = document.querySelector("[data-projects]");
if (projects.length === 0) {
  const emptyState = document.createElement("p");
  emptyState.className = "project-empty";
  emptyState.textContent = "Todavía no hay proyectos publicados.";
  projectGrid.append(emptyState);
}
for (const project of projects) {
  const card = document.createElement("article");
  card.className = "project-card";

  const meta = document.createElement("div");
  meta.className = "project-meta";
  const category = document.createElement("p");
  category.className = "project-category";
  category.textContent = project.category;
  meta.append(category);
  if (project.isExample === true) {
    const exampleBadge = document.createElement("span");
    exampleBadge.className = "example-badge";
    exampleBadge.textContent = "Ejemplo ficticio";
    meta.append(exampleBadge);
  }

  const title = document.createElement("h3");
  title.textContent = project.name;
  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;
  const technologies = document.createElement("ul");
  technologies.className = "technology-list";
  technologies.setAttribute("aria-label", `Tecnologías de ${project.name}`);
  for (const technology of project.technologies) {
    const item = document.createElement("li");
    item.textContent = technology;
    technologies.append(item);
  }

  card.append(meta, title, description, technologies);
  if (project.url) {
    try {
      const url = new URL(project.url);
      if (["http:", "https:"].includes(url.protocol)) {
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Ver proyecto";
        link.setAttribute("aria-label", `Ver proyecto: ${project.name}`);
        card.append(link);
      } else {
        console.error(`URL no compatible en el proyecto "${project.name}".`);
      }
    } catch (error) {
      console.error(`URL no válida en el proyecto "${project.name}":`, error);
    }
  }
  projectGrid.append(card);
}

const skillList = document.querySelector("[data-skills]");
for (const skill of config.skills) {
  const item = document.createElement("li");
  item.textContent = skill;
  skillList.append(item);
}

const contactLinks = document.querySelector("[data-contact]");
const contactItems = [
  ["email", "Email"],
  ["github", "GitHub"],
  ["linkedin", "LinkedIn"],
  ["website", "Web"],
];
let contactLinkCount = 0;
for (const [field, label] of contactItems) {
  const value = config.contact?.[field]?.trim();
  if (!value) continue;

  const link = document.createElement("a");
  link.className = "contact-link";
  link.textContent = field === "email" ? value : label;
  if (field === "email") {
    link.href = `mailto:${value}`;
  } else {
    try {
      const url = new URL(value);
      if (!["http:", "https:"].includes(url.protocol)) {
        console.error(`El enlace de contacto "${field}" debe usar HTTP o HTTPS.`);
        continue;
      }
      link.href = url.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } catch (error) {
      console.error(`URL de contacto no válida para "${field}":`, error);
      continue;
    }
  }
  contactLinks.append(link);
  contactLinkCount += 1;
}
if (contactLinkCount === 0) {
  const note = document.createElement("p");
  note.className = "contact-empty";
  note.textContent = "Todavía no hay enlaces de contacto configurados.";
  contactLinks.append(note);
}

setText("[data-year]", String(new Date().getFullYear()));

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const mobileMenu = window.matchMedia("(max-width: 768px)");

const setMenuOpen = (open) => {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  navigation.classList.toggle("is-open", open);
};

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

mobileMenu.addEventListener("change", (event) => {
  if (!event.matches) setMenuOpen(false);
});
