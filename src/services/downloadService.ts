/**
 * Servicio para mostrar la disponibilidad de descarga de PDFTools Pro.
 * El instalador todavía no se ha publicado; estos datos no describen un archivo real.
 */

export interface DownloadDetails {
  version: string;
  architecture: string;
  os: string;
  fileSize: string;
  fileName: string;
  releaseDate: string;
  sha256: string;
}

export const DOWNLOAD_METADATA: DownloadDetails = {
  version: 'Demostración',
  architecture: 'No disponible',
  os: 'Windows (objetivo)',
  fileSize: 'No disponible',
  fileName: 'Instalador no publicado',
  releaseDate: 'No publicada',
  sha256: 'No disponible',
};

// Listener global para activar el aviso desde cualquier botón de la UI.
type DownloadListener = (details: DownloadDetails) => void;
const listeners: Set<DownloadListener> = new Set();

export function subscribeToDownloadEvents(listener: DownloadListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Abre el aviso de disponibilidad; no descarga ningún archivo.
 */
export function downloadDemo(): void {
  listeners.forEach((listener) => listener(DOWNLOAD_METADATA));
}
