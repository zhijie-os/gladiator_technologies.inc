import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gladiator Technolgoies",
  description: "Gladiator Technologies was founded in 2024. We specialize in web services, building digital platforms, and providing all-in-one solutions. We assist businesses in overcoming technical challenges and driving business growth.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName= "About Gladiator"
        description="Gladiator Technologies was founded in 2024. We specialize in web services, building digital platforms, and providing all-in-one solutions. We assist businesses in overcoming technical challenges and driving business growth."
        keywords={["Innovation", "Hardcore", "Pragmatic", "Professional", "Efficient"]}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
