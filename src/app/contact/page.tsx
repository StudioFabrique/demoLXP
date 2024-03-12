import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ",
  description: "Contactez nous pour devenir partenaire",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactez-nous"
        description="Intéressé à devenir partenaire ? Contactez-nous pour en savoir plus sur les opportunités de collaboration. Ensemble, innovons et construisons une nouvelle expérience d apprentissage."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
