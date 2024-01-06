import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 角斗士科技",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="联系我们"
        description="无论您的需求如何复杂，我们都有能力和专业知识来帮助您实现目标。请联系我们的团队，了解更多信息。"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
