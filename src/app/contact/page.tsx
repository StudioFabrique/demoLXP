import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactez-nous"
        description="Intéressé à devenir partenaire ? Contactez-nous pour en savoir plus sur les opportunités de collaboration. Ensemble, innovons et construisons une nouvelle expérience d'apprentissage."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
