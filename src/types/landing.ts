export type DeliveryPhase = 'mvm1' | 'mvm2' | 'separate-engagement';

export type ScenarioVisualKind =
  | 'agent-lifecycle'
  | 'transaction-status'
  | 'liquidity'
  | 'reconciliation'
  | 'approval'
  | 'product-economics';

export interface Scenario {
  id: string;
  order: number;
  kicker: string;
  headline: string;
  situation: string;
  platformResponse: string[];
  bankOutcome: string;
  visualKind: ScenarioVisualKind;
  capabilities: string[];
  phases: DeliveryPhase[];
  caveat?: string;
}

export interface CapabilityWorkstream {
  id: string;
  name: string;
  oneLiner: string;
  coverage: string[];
  capabilities: {
    name: string;
    description: string;
    phase: DeliveryPhase;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'architecture' | 'operations' | 'security' | 'commercial';
}

export interface LeadFormData {
  fullName: string;
  workEmail: string;
  institutionName: string;
  division: string;
  discussionFocus: string[];
  briefNotes: string;
  consent: boolean;
  website_url?: string; // honeypot
}
