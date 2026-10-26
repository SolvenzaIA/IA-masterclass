# Portfolio con Agentes de IA · Masterclass (1 Hora)

Plantilla didáctica concebida para aprender **Vibe Coding y conceptos esenciales de agentes de IA** en una sesión de 60 minutos.

Los archivos de código parten limpios: **solo existen los datos en `src/data/`** (`config.json` y `projects.json`). El agente de IA genera el 100% del HTML, CSS y JavaScript a partir de ellos.

> 🚀 **Antes de la sesión:** Sigue la **[Guía de Preparación previa (preparacion.md)](preparacion.md)** para instalar VS Code, GitHub Copilot, Continue y obtener tu clave gratuita de Google Gemini.

---

## ⚡ En qué consiste la sesión (60 min)

1. **Arranque:** Clona o descarga el proyecto y ejecuta:
   ```bash
   npm install
   npm run dev
   ```
2. **Paso 1 — Vibe Coding:** Pide al agente que genere toda la web usando el Prompt 1:
   > `@1-crear-portfolio.prompt.md construye mi web`  
   *(o activa la skill `vibe-coding`)*.
3. **Paso 2 — Personalización:** Adapta la web con tus datos reales usando el Prompt 2:
   > `@2-personalizar.prompt.md`
4. **Paso 3 — Auditoría:** Revisa accesibilidad y calidad usando la Tool MCP y el Prompt 3:
   > `@3-auditar.prompt.md`  
   *(o ejecuta `npm run check` en la terminal)*.

📖 Guía completa de la sesión: **[docs/guia-taller.md](docs/guia-taller.md)**.

---

## 🧠 Los 4 conceptos que aprenderán las alumnas

1. **Data:** Los datos como fuente de verdad separada del diseño (`src/data/`).
2. **Prompts:** Instrucciones reutilizables preparadas (`.github/prompts/`):
   - `1-crear-portfolio.prompt.md`
   - `2-personalizar.prompt.md`
   - `3-auditar.prompt.md`
3. **Skills:** Procedimientos especializados bajo demanda (`.agents/skills/`):
   - `vibe-coding`: Generación de la web paso a paso.
   - `auditoria-accesibilidad`: Criterios WCAG y contrastes.
4. **Tools (MCP):** Herramientas objetivas para que la IA no alucine:
   - `tools/portfolio-mcp.mjs` (servidor MCP con la tool `auditar_portfolio`).
   - `.mcp.json` (configuración de conexión).

---

## 🌐 Publicación en GitHub Pages (Template Repository)

Para que cada alumna tenga su propia web sin pisarse entre sí:

### Docente:
1. Sube este repositorio a tu cuenta de GitHub de forma pública.
2. En GitHub: **Settings > General** > activa **☑ Template repository**.

### Alumnas:
1. En el repositorio del docente, haz clic en **«Use this template» > «Create a new repository»**.
2. Ponle un nombre (ej: `mi-portfolio`) y créalo en tu propia cuenta.
3. En tu repo: **Settings > Pages > Source: GitHub Actions**.
4. Al hacer push a `main`, se publicará solo en:  
   `https://tu-usuario.github.io/tu-repositorio/`

---

## 🛠️ Comprobaciones y validación

```bash
npm run check    # Comprobación de datos, enlaces y contraste
npm test         # Pruebas unitarias
npm run build    # Compilación para producción
```
# IA-masterclass
