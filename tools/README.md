# Herramientas para Agentes de IA (Tools & MCP)

En este directorio se encuentran las herramientas locales y el servidor **MCP (Model Context Protocol)** del proyecto.

---

## 💡 Concepto clave: ¿Qué es una «Tool de IA»?

Un modelo de IA (LLM) es un motor lingüístico y probabilístico:

- **Sabe razonar, redactar y proponer soluciones.**
- **No sabe:** calcular con exactitud matemática el ratio de contraste WCAG, comprobar de verdad si un archivo existe en tu disco duro o saber qué proyectos tienes sin alucinar.

Para resolver esto existen las **Tools (Herramientas de Agente)**:

1. El programador escribe una función determinista en código tradicional (aquí en Node.js).
2. Se expone al modelo a través de un protocolo estándar como **MCP (Model Context Protocol)** mediante el archivo `.vscode/mcp.json` (Copilot lo detecta al abrir el proyecto en VS Code).
3. Cuando le pides al agente: _«Revisa si mi portfolio tiene errores de accesibilidad o enlaces rotos»_, el agente **decide llamar a la tool**, recibe los datos exactos y verídicos, y te explica el resultado.

> **En resumen:** El agente es el **cerebro**, y las tools son sus **ojos y manos** para interactuar con la realidad.
