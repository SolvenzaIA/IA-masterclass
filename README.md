# IA Masterclass · Portfolio con agentes de IA

Plantilla didáctica para aprender **vibe coding y conceptos esenciales de agentes de IA** en una sesión de 60 minutos.

Los archivos de código parten vacíos: **solo existen los datos en `src/data/`** (`config.json` y `projects.json`). El agente de IA genera el HTML, CSS y JavaScript a partir de ellos.

---

# Guía de Preparación previa para la Masterclass

Esta guía te ayudará a dejar listo tu entorno en **Visual Studio Code (VS Code)** antes de comenzar la sesión.

> [!IMPORTANT]
> **Lo único obligatorio** para participar en la masterclass es tener **Visual Studio Code**, una **cuenta de GitHub** y **crear tu repositorio desde la plantilla oficial** ([SolvenzaIA/IA-masterclass](https://github.com/SolvenzaIA/IA-masterclass)).  
> Todo lo demás (Google Antigravity, Groq, OpenRouter y Continue) es **opcional**: sirve para tener más opciones de modelos y disponer de una bolsa adicional de tokens gratuitos por si se agota la cuota. No te preocupes si no te da tiempo a configurarlo, **se explicará con detalle durante la clase**.

---

## 📋 ¿Qué necesitas antes de empezar?

### 🔴 Obligatorio:

1. **Visual Studio Code** instalado en tu ordenador ([Descargar VS Code](https://code.visualstudio.com/)).
2. Una cuenta en **GitHub** ([Crear cuenta gratuita](https://github.com/signup)) para Copilot y publicación web.
3. **Descargar / Usar la plantilla de la Masterclass** ([github.com/SolvenzaIA/IA-masterclass](https://github.com/SolvenzaIA/IA-masterclass)):
   - Entra en el repositorio oficial: 👉 **[SolvenzaIA/IA-masterclass](https://github.com/SolvenzaIA/IA-masterclass)**
   - Pulsa en el botón verde superior **«Use this template»** (Usar esta plantilla) ➔ **«Create a new repository»**.
   - Asigna un nombre (ej. `mi-portfolio-ia`), déjalo como **Public** y pulsa **«Create repository»**.
   - Abre la carpeta del proyecto en tu **Visual Studio Code** (mediante clonación con Git o descargando el archivo ZIP).

### 🟡 Opcional (para más tokens y alternativas):

4. Acceso a **Google Antigravity** ([antigravity.google](https://antigravity.google/)) para explorar y probar el modelo **Gemini 3.8 Flash**.
5. Cuentas en **Groq** y/o **OpenRouter** para conectar modelos abiertos gratuitos a Continue en VS Code.

---

## 1️⃣ Instalar y configurar GitHub Copilot en VS Code (Obligatorio)

GitHub Copilot es el asistente oficial de GitHub integrado en el editor.

### Paso 1: Instalar la extensión

1. Abre **Visual Studio Code**.
2. En la barra lateral izquierda, haz clic en el icono de **Extensiones** (o pulsa `Ctrl + Shift + X` en Windows / `Cmd + Shift + X` en Mac).
3. En el buscador superior, escribe: `GitHub Copilot`.
4. Haz clic en el botón azul **Install** (Instalar) en la extensión oficial de **GitHub**.

### Paso 2: Iniciar sesión

1. En la esquina inferior izquierda de VS Code, verás el icono de una persona (Cuentas) o una notificación que te pedirá: **Sign in to GitHub** (Iniciar sesión con GitHub).
2. Haz clic y autoriza la conexión en tu navegador con tu cuenta de GitHub.
3. Si dispones de acceso a Copilot (gratuito, para estudiantes o de prueba), verás aparecer el icono del chat de Copilot en la barra lateral.

---

## 2️⃣ Descargar e instalar Google Antigravity IDE (Recomendado)

**Paso recomendado:** Google Antigravity es el nuevo **IDE de desarrollo potenciado por agentes de Google**. Te permite programar y experimentar con **Gemini 3.8 Flash** de forma nativa e integrada:

1. Entra en la web oficial: 👉 **[antigravity.google](https://antigravity.google/)**.
2. **Descarga el instalador del IDE** para tu sistema operativo (Mac, Windows o Linux) e instálalo.
3. Abre el **IDE de Antigravity** e inicia sesión con tu cuenta habitual de **Google / Gmail**.
4. **No necesitas configurar ninguna API Key:** Gemini 3.8 Flash viene preintegrado dentro del IDE para trabajar con agentes y código sin requerir CLI ni lidiar con las limitaciones del free tier en herramientas externas.

---

## 3️⃣ Crear cuenta y API Keys en Groq y OpenRouter (Opcional · Para Continue)

Si deseas disponer de tokens gratuitos para modelos abiertos en VS Code mediante Continue:

### Vía A: Groq (Inferencia ultrarrápida gratuita)

1. Entra en la consola de Groq: 👉 **[console.groq.com](https://console.groq.com/)**.
2. Regístrate gratis o entra con Google/GitHub.
3. Dirígete a la sección de claves: 👉 **[console.groq.com/keys](https://console.groq.com/keys)**.
4. Pulsa en **«Create API Key»**, ponle un nombre (ej. `masterclass-groq`) y pulsa **Submit**.
5. Copia la clave generada (`gsk_...`) para pegarla en Continue.

### Vía B: OpenRouter (Hub multimodelo con modelos free)

1. Entra en OpenRouter: 👉 **[openrouter.ai](https://openrouter.ai/)**.
2. Inicia sesión con tu cuenta de Google o GitHub.
3. Ve a la gestión de claves: 👉 **[openrouter.ai/settings/keys](https://openrouter.ai/settings/keys)**.
4. Pulsa en **«Create Key»**, asígnale un nombre (ej. `masterclass-openrouter`) y pulsa **Create**.
5. Copia la clave generada (`sk-or-...`) para pegarla en Continue.

> [!CAUTION]
> **Seguridad importante:**  
> Tus API Keys son confidenciales. Nunca las compartas, no las subas a GitHub y no las pegues en tus archivos de código. Se configuran únicamente en tu archivo local de Continue.

---

## 4️⃣ Instalar y configurar Continue en VS Code (Opcional · Groq + OpenRouter)

Continue te permite alternar entre Groq y OpenRouter dentro de VS Code:

### Paso 1: Instalar la extensión Continue

1. En VS Code, ve a la pestaña de **Extensiones** (`Ctrl + Shift + X` / `Cmd + Shift + X`).
2. En el buscador escribe: `Continue`.
3. Haz clic en **Install** (Instalar) sobre la extensión oficial de **Continue**.
4. Aparecerá el icono de Continue en la barra lateral izquierda (o pulsa `Ctrl + L` / `Cmd + L` para abrir el chat).

### Opción A (Recomendada): Configuración rápida mediante `config.yaml`

1. En el panel de Continue, haz clic en el icono del **engranaje ⚙️ (Settings)** o pulsa `Ctrl/Cmd + Shift + P` y escribe `Continue: Open config.yaml`.
2. Pega la siguiente configuración completa:

```yaml
name: Main Config
version: 1.0.0
schema: v1
models:
  - name: qwen/qwen3.8-27b
    provider: groq
    model: qwen/qwen3.8-27b
    apiKey: ${{ secrets.GROQ_API_KEY }} # Se lee de tu archivo .env
    roles:
      - chat
      - edit
      - apply

  # Razonamiento y agentes complejos
  - name: Nemotron 3 Ultra - Free
    provider: openrouter
    model: nvidia/nemotron-3-ultra-550b-a55b:free
    apiBase: https://openrouter.ai/api/v1
    apiKey: ${{ secrets.OPENROUTER_API_KEY }} # Se lee de tu archivo .env
    roles:
      - chat
      - edit
      - apply
    capabilities:
      - tool_use

  # Especializado en desarrollo de software
  - name: North Mini Code - Free
    provider: openrouter
    model: cohere/north-mini-code:free
    apiBase: https://openrouter.ai/api/v1
    apiKey: ${{ secrets.OPENROUTER_API_KEY }} # Se lee de tu archivo .env
    roles:
      - chat
      - edit
      - apply
    capabilities:
      - tool_use

  # Bugs, tests y funcionalidades
  - name: Flint - Free
    provider: openrouter
    model: recursive/flint-v1.0:free
    apiBase: https://openrouter.ai/api/v1
    apiKey: ${{ secrets.OPENROUTER_API_KEY }} # Se lee de tu archivo .env
    roles:
      - chat
      - edit
      - apply
    capabilities:
      - tool_use

  # Análisis multimodal de interfaces
  - name: Nemotron Super VL - Free
    provider: openrouter
    model: nvidia/nemotron-3.5-super-vl:free
    apiBase: https://openrouter.ai/api/v1
    apiKey: ${{ secrets.OPENROUTER_API_KEY }} # Se lee de tu archivo .env
    roles:
      - chat
      - edit
      - apply
    capabilities:
      - tool_use
      - image_input

  # Modelo ligero para tareas rápidas
  - name: Nemotron Lightning - Free
    provider: openrouter
    model: nvidia/nemotron-3.5-lightning:free
    apiBase: https://openrouter.ai/api/v1
    apiKey: ${{ secrets.OPENROUTER_API_KEY }} # Se lee de tu archivo .env
    roles:
      - chat
      - edit
      - apply
    capabilities:
      - tool_use
context:
  - provider: code
  - provider: docs
  - provider: diff
  - provider: terminal
  - provider: problems
  - provider: folder
  - provider: codebase
```

3. **No pegues las claves en el YAML.** En la raíz del proyecto, duplica `.env.example` como `.env` y rellena `GROQ_API_KEY` y `OPENROUTER_API_KEY`. Continue las lee automáticamente con `${{ secrets.NOMBRE }}` (una sola clave de OpenRouter sirve para todos sus modelos). `.env` está en `.gitignore`, así que nunca se sube a GitHub.

### Opción B (Alternativa): Configurar mediante el asistente visual

1. En Continue, pulsa en el selector inferior de modelo ➔ **+ Add Chat model**.
2. **Para Groq:** Proveedor: **Groq** | Modelo: `qwen/qwen3.8-27b` | Pega tu clave `gsk_...`.
3. **Para OpenRouter:** Proveedor: **OpenRouter** | Modelo: `cohere/north-mini-code:free` | Pega tu clave `sk-or-v1-...`.
4. ¡Listo! Podrás alternar entre **Qwen en Groq** y los **modelos free de OpenRouter** desde el menú desplegable del chat.

---

## 5️⃣ Comprobación final ("Hola Mundo")

Para comprobar que todo funciona antes de la clase:

1. En el panel de **Continue** (o en el chat de **Copilot**), escribe en la caja de texto:
   > _«Hola, ¿me recibes bien? Estoy preparando el entorno para la clase.»_
2. Si el agente te responde en español y te saluda, **¡enhorabuena! 🎉 Tu entorno está 100% configurado y listo para la masterclass**.

---

## 📌 Resumen de opciones disponibles

| Herramienta               | Tipo                              | Proveedor / Modelos                 | ¿Qué necesitas?                                                                        |
| :------------------------ | :-------------------------------- | :---------------------------------- | :------------------------------------------------------------------------------------- |
| **GitHub Copilot**        | **Obligatorio**                   | GitHub / Microsoft                  | Iniciar sesión con tu cuenta de GitHub en VS Code                                      |
| **Google Antigravity**    | **Recomendado** · IDE de Google   | Google Gemini (`gemini-3.8-flash`)  | Descargar e instalar el IDE en [antigravity.google](https://antigravity.google/)       |
| **Continue + Groq**       | Opcional · Más tokens             | Groq (`qwen/qwen3.8-27b`)           | API Key gratuita en [console.groq.com/keys](https://console.groq.com/keys)             |
| **Continue + OpenRouter** | Opcional · Más tokens             | OpenRouter (modelos free de código) | API Key gratuita en [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) |

Con tener al menos **una de las opciones activas** (Copilot en VS Code, el IDE Antigravity con tu cuenta de Google, o Continue con Groq/OpenRouter) podrás realizar todos los ejercicios prácticos de la sesión.

---

## 📬 Soporte y contacto

¿Tienes dudas o algún problema bloqueante preparando tu entorno antes de la sesión?  
Puedes contactarme directamente en: **[info@enriqueteruel.com](mailto:info@enriqueteruel.com)**.
