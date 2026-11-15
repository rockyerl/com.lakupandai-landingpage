import React, { useState } from 'react';
import { SiteHeader } from './components/navbar/SiteHeader';
import { ExecutiveHero } from './components/hero/ExecutiveHero';
import { OperatingReality } from './components/reality/OperatingReality';
import { ScenarioExplorer } from './components/scenarios/ScenarioExplorer';
import { OperatingModel } from './components/model/OperatingModel';
import { GovernanceMatrix } from './components/governance/GovernanceMatrix';
import { DeploymentArchitecture } from './components/deployment/DeploymentArchitecture';
import { CapabilityWorkstreams } from './components/capabilities/CapabilityWorkstreams';
import { ImplementationTimeline } from './components/implementation/ImplementationTimeline';
import { ProductRoadmap } from './components/roadmap/ProductRoadmap';
import { ExecutiveCTA } from './components/cta/ExecutiveCTA';
import { ProcurementFAQ } from './components/faq/ProcurementFAQ';
import { SiteFooter } from './components/footer/SiteFooter';
import { ExecutiveDemoModal } from './components/cta/ExecutiveDemoModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalPrefilledFocus, setModalPrefilledFocus] = useState<string | undefined>(undefined);

  const handleOpenDemo = (prefilledFocus?: string) => {
    setModalPrefilledFocus(prefilledFocus);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
    setModalPrefilledFocus(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#15273A] selection:bg-[#0056AA] selection:text-white font-sans">
      {/* 01. Site Header */}
      <SiteHeader onOpenDemo={() => handleOpenDemo()} />

      {/* 02. Executive Hero with Synthetic Operations Cockpit */}
      <ExecutiveHero onOpenDemo={() => handleOpenDemo()} />

      {/* 03. Operating Reality / Pain Framing */}
      <OperatingReality />

      {/* 04. Scenario Storytelling (6 Interactive Chapters) */}
      <ScenarioExplorer onOpenDemo={(focus) => handleOpenDemo(focus)} />

      {/* 05. One Operating Model (3-Layer Architecture) */}
      <OperatingModel />

      {/* 06. Governance & Trust (Control by Design Matrix) */}
      <GovernanceMatrix />

      {/* 07. Deployment & Integration (On-premise DC/DRC Architecture) */}
      <DeploymentArchitecture />

      {/* 08. Platform Capability Map (5 Executive Workstreams) */}
      <CapabilityWorkstreams />

      {/* 09. Implementation Approach (5 Controlled Stages) */}
      <ImplementationTimeline onOpenDemo={(focus) => handleOpenDemo(focus)} />

      {/* 10. Forward Product Roadmap (MVM-1 vs MVM-2 vs Custom Engagements) */}
      <ProductRoadmap />

      {/* 11. Executive Conversion CTA & Form */}
      <ExecutiveCTA onFormSubmitted={() => {}} prefilledFocus={modalPrefilledFocus} />

      {/* 12. Procurement & Compliance FAQ */}
      <ProcurementFAQ />

      {/* 13. Institutional Footer */}
      <SiteFooter onOpenDemo={() => handleOpenDemo()} />

      {/* Interactive Executive Demo Modal */}
      <ExecutiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        prefilledFocus={modalPrefilledFocus}
      />
    </div>
  );
}

export default App;
