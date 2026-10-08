/**
 * Descarga directa del ejecutable de PDFTools Pro alojado en Vercel Blob.
 */
export const DOWNLOAD_URL =
  'https://slcr5vbrwx8za9k4.public.blob.vercel-storage.com/PDFToolsPro.exe?download=1';

export function downloadApp(): void {
  window.location.assign(DOWNLOAD_URL);
}
