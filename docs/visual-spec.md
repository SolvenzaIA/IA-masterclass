# Especificación visual de la plantilla

La captura `references/portfolio.png` es una **referencia estética**, no un modelo literal ni una fuente de datos personales. No reproduzcas su nombre, textos, enlaces ni proyectos.

## Diseño actual que debe preservarse
- One-page con navegación compacta, hero editorial en dos columnas, proyectos, competencias, contacto y footer.
- Fondo cálido `#f0edec`, tinta casi negra `#111111`, superficies `#dedad8` y acento coral `#cc4528`.
- Tipografía sans-serif, títulos grandes y composición despejada.
- Retrato proporcionado por la persona participante en la cabecera; no usar imágenes de terceros.
- Dos columnas de proyectos en escritorio y una en móvil. Si no hay proyectos reales, conservar el estado vacío en vez de inventar tarjetas.
- Footer oscuro, enlaces de contacto en coral, foco visible y menú móvil desplegable.

## Prioridades de adaptación
1. Jerarquía y legibilidad; las descripciones no deben quedar cortadas.
2. Usabilidad por teclado y lector de pantalla.
3. Espaciado consistente y ausencia de scroll horizontal.
4. Responsive en 375, 768 y 1440 px.
5. Respetar `prefers-reduced-motion` si se añaden animaciones.

## Qué se puede cambiar en el taller
- Nombre, titular, biografía, proyectos y enlaces desde `src/data/`.
- Paleta y tipografía, con contraste suficiente.
- Detalles de las tarjetas o un bloque del hero, de forma incremental.

No afirmes "pixel perfect" ni "WCAG AA aprobado" sin comprobarlo en un navegador.
