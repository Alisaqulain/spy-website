import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const caseStudies: Record<string, {
  title: string;
  sector: string;
  problem: string;
  riskIdentified: string;
  solution: string;
  outcome: string;
}> = {
  "steel-plant-risk-programme": {
    title: "Integrated Steel Plant Risk Programme",
    sector: "Iron & Steel",
    problem: "A large steel producer with multiple manufacturing locations had fragmented property, business interruption, and liability covers. Terms and limits were inconsistent, and there was no single point of contact for risk and claims.",
    riskIdentified: "Exposure to fire, machinery breakdown, and third-party liability across sites; potential gaps and overlaps in coverage; complex renewal and claims coordination.",
    solution: "We conducted a risk assessment across sites and designed a master programme with local policies. We aligned limits, deductibles, and policy wordings, and placed the programme with a lead insurer and reinsurance support. We also set up a dedicated claims and risk coordination process.",
    outcome: "The client achieved consistent coverage across locations, better terms due to consolidated placement, and a single relationship manager for all risk and insurance matters. Claims handling improved with one point of contact.",
  },
  "power-project-car": {
    title: "Power Project Construction Cover",
    sector: "Power",
    problem: "A renewable energy developer was building a new solar power project and needed contractors' all risks (CAR) and erection all risks (EAR) insurance. Lenders had specific insurance requirements that had to be met for financial close.",
    riskIdentified: "Construction and erection risks; delay in start-up (DSU) exposure; lender requirements for insurance covenants and naming rights.",
    solution: "We structured CAR and EAR policies to match the construction schedule and lender requirements. We coordinated with the project team and lenders' advisors to ensure wordings and endorsements were acceptable. We placed the programme with insurers experienced in renewable projects.",
    outcome: "The project achieved financial close with insurance in place. Construction proceeded with appropriate coverage, and the client had clarity on claims process and lender reporting.",
  },
  "corporate-group-health": {
    title: "Corporate Group Health Restructuring",
    sector: "Corporate",
    problem: "A mid-sized corporate with over 500 employees wanted to consolidate group health insurance, improve employee experience, and control rising premium costs.",
    riskIdentified: "Fragmented coverage, poor claim turnaround, and lack of wellness and preventive care focus leading to higher claims and dissatisfaction.",
    solution: "We reviewed existing policies and claims data, then recommended a switch to a carrier with a stronger hospital network, digital claims process, and wellness benefits. We negotiated terms and managed the transition, including employee communication.",
    outcome: "Premium reduced by a meaningful percentage while network and claim experience improved. Employee satisfaction scores increased, and the client had a single, scalable structure for future growth.",
  },
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const c = caseStudies[params.id];
  if (!c) return { title: "Case Study | SPY Insurance Brokers" };
  return {
    title: `${c.title} | Case Study`,
    description: `${c.sector}: ${c.outcome.slice(0, 120)}...`,
  };
}

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  const c = caseStudies[params.id];
  if (!c) {
    return (
      <div className="section-padding text-center">
        <p className="text-primary-navy/80 mb-6">Case study not found.</p>
        <Link href="/case-studies" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={c.title}
        subtitle={c.sector}
        description={c.problem}
        breadcrumb={[{ label: "Case Studies", href: "/case-studies" }, { label: c.title, href: `/case-studies/${params.id}` }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary-navy mb-3">Problem</h2>
              <p className="text-primary-navy/80 leading-relaxed">{c.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-navy mb-3">Risk Identified</h2>
              <p className="text-primary-navy/80 leading-relaxed">{c.riskIdentified}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-navy mb-3">Solution Provided</h2>
              <p className="text-primary-navy/80 leading-relaxed">{c.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-navy mb-3">Outcome</h2>
              <p className="text-primary-navy/80 leading-relaxed">{c.outcome}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom flex flex-wrap justify-center gap-4">
          <Link href="/case-studies" className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Discuss Your Needs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
