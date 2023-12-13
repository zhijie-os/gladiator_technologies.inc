import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "角斗士 - 关于我们",
  description: "角斗士科技成立于2023，我们专注于网络服务，搭建数字化平台，提供一站式解决方案。帮助企业攻克技术难题，驱动业务增长。",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于角斗士科技"
        description="角斗士科技成立于2023，我们专注于网络服务，搭建数字化平台，提供一站式解决方案。帮助企业攻克技术难题，驱动业务增长。"
        keywords={["创新", "硬核", "务实", "专业", "高效"]}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
