# MuGonza · Sitio web corporativo

## Publicar en GitHub Pages

1. Sube **todos** los archivos y la carpeta `assets` al repositorio `MUGONZA` (la raíz, no una carpeta adicional).
2. En el repositorio, entra a **Settings → Pages** y configura **Deploy from a branch**, rama `main`, carpeta `/(root)`, si aún no está configurado.
3. El sitio estará en `https://jorgeadrianmuca-dotcom.github.io/MUGONZA/` si conservas ese repositorio.

## Logo original

Guarda el logo que compartiste como `assets/logo.png` (preferiblemente PNG transparente). La cabecera lo mostrará automáticamente. Mientras el archivo no exista, se muestra la palabra MuGonza como sustituto tipográfico. El favicon SVG es provisional y puede sustituirse por el oficial.

## Imágenes

Los SVG incluidos son **ilustraciones técnicas originales**, no fotografías de obras realizadas, y no pretenden representar un catálogo exacto. Se usan para evitar fotos de stock repetidas o engañosas. Pueden reemplazarse en `index.html` por fotografías reales de MuGonza, conservando los nombres de archivo o cambiando `src` y los textos alternativos.

## Cotizaciones

El formulario valida los campos y abre el cliente de correo con un mensaje preparado para `ventas@mugonza.cl`. **No transmite datos a un servidor ni adjunta archivos automáticamente.** Se puede incorporar un backend o servicio de formularios en una versión posterior. No se agregó un número de WhatsApp porque aún no se ha proporcionado.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: apariencia y diseño adaptable.
- `script.js`: menú móvil, selector de servicio y formulario de correo.
- `assets/`: ilustraciones SVG y favicon; agregar aquí `logo.png`.
