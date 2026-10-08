import React from 'react';
import { X, Download, CircleAlert } from 'lucide-react';
import { DownloadDetails } from '../services/downloadService';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: DownloadDetails;
  onShowToast: (message: string) => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150">
        <div className="bg-gradient-to-r from-rose-600 to-red-600 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white backdrop-blur-xs">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-white leading-tight">
                Instalador aún no disponible
              </h3>
              <p className="text-xs text-rose-100 mt-0.5">Demostración web</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-slate-700 leading-relaxed flex items-start gap-3">
            <CircleAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              Actualmente no hay un archivo ejecutable publicado. Este botón solo muestra este aviso y no inicia ninguna descarga. Cuando se publique un instalador real, se podrán añadir su tamaño y el SHA-256 calculado a partir de ese archivo.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
