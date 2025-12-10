import { notFound } from "next/navigation";
import { Service, services } from "@/data/services"; // Data Fetching happens here (Server)
import { slugify } from "@/lib/slugify"; // Utility function (Server)
import ServicePageContent from "./ServicePageContent"; // Client Component Import

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  // 1. Data Fetching and Logic (STAYS ON SERVER)
  const service: Service | undefined = services.find(
    (s) => slugify(s.id) === slug
  );  

  if (!service) return notFound();

  // 2. Rendering (Passes only serializable data to Client Component)
  return (
    <ServicePageContent
      service={service}
      services={services} 
    />
  );
}
