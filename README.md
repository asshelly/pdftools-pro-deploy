# PDFTools Pro

Sitio web de demostración construido con React, TypeScript y Vite. El repositorio contiene el código de la página; todavía no incluye un instalador de Windows.

## Ejecutar localmente

Requiere Node.js y npm.

```bash
npm ci
npm run dev
```

Para generar el sitio estático:

```bash
npm run build
```

Vite genera los archivos listos para publicar en `dist/`.

## Desplegar en Vercel

1. En Vercel, elige **Add New → Project** e importa este repositorio.
2. Usa la carpeta raíz del repositorio como **Root Directory**.
3. Vercel detecta Vite automáticamente. Si pide los valores manualmente, usa:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. No se requieren variables de entorno para esta página actualmente.

Al conectar GitHub con Vercel, los siguientes cambios en la rama principal pueden desplegarse desde Git.

## Descarga de la aplicación

El botón de descarga muestra un aviso informativo. No hay ningún archivo `.exe` publicado en este repositorio. El tamaño, el SHA-256 y cualquier afirmación sobre firma o análisis de seguridad deben añadirse solo cuando exista un instalador real y se hayan verificado sus datos.
