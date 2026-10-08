# PDFTools Pro

Sitio web de PDFTools Pro construido con React, TypeScript y Vite. El repositorio contiene el código de la página; el ejecutable de Windows se aloja en Vercel Blob.

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

Los botones de descarga enlazan directamente a `PDFToolsPro.exe` en Vercel Blob. El binario no se guarda en este repositorio. No se publica aquí un tamaño, SHA-256 ni estado de firma para ese archivo.
