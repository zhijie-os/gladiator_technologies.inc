import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 角斗士科技",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="No matter how complex your needs may be, we have the capability and professional expertise to assist you in achieving your goals. Please reach out to our team to learn more."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
