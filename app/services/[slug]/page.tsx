import { notFound } from "next/navigation";
import { Service, services } from "@/data/services";
import { FullCaseStudy, caseStudies } from "@/data/case-studies";
import { slugify } from "@/lib/slugify";
import ServicePageContent from "./ServicePageContent";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  // Find the service by slug
  const service: Service | undefined = services.find(
    (s) => slugify(s.id) === slug
  );

  if (!service) return notFound();

  // Resolve caseStudyIds to full objects
  const resolvedCaseStudies: FullCaseStudy[] = service.caseStudyIds
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter(Boolean) as FullCaseStudy[];

  // Pass resolved case studies to client
  const serviceWithCaseStudies = {
    ...service,
    caseStudies: resolvedCaseStudies,
  };

  return (
    <ServicePageContent service={serviceWithCaseStudies} services={services} />
  );
}
