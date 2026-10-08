/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsGrid } from './components/ToolsGrid';
import { ProductSection } from './components/ProductSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WhySection } from './components/WhySection';
import { DownloadSection } from './components/DownloadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ToolDetailModal } from './components/ToolDetailModal';
import { PrivacyModal } from './components/PrivacyModal';
import { PDFTool } from './types';

export default function App() {
  const [selectedTool, setSelectedTool] = useState<PDFTool | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 selection:bg-rose-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with Windows 11 Desktop Mockup */}
        <Hero />

        {/* 3. Herramientas (12 tools grid) */}
        <ToolsGrid onSelectTool={(tool) => setSelectedTool(tool)} />

        {/* 4. Sección de Producto (Una aplicación. Muchas herramientas. - Rápido, Sencillo, Todo en un solo lugar) */}
        <ProductSection />

        {/* 5. Características (6 checklist items with visual cards) */}
        <FeaturesSection />

        {/* 6. Sección de descarga de PDFToolsPro.exe */}
        <DownloadSection />

        {/* 7. ¿Por qué PDFTools Pro? (Simple, Rápido, Práctico) */}
        <WhySection />

        {/* 8. FAQ (Interactive accordions for 6 questions) */}
        <FaqSection />
      </main>

      {/* 9. Footer */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Interactive Modals */}
      <ToolDetailModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

    </div>
  );
}
