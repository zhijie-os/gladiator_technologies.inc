import { Blog } from "@/types/blog";

const productData: Blog[] = [
  {
    id: 1,
    title: "Internet and Technology Services",
    paragraph:
      "In the realm of internet and technology services, we offer advanced technical support and development services, including but not limited to website development, mobile app development, enterprise software solutions, and customized technology consulting. Our team consists of exceptional engineers and developers in the industry, equipped with extensive experience and profound expertise, enabling them to assist clients in achieving their technological goals.",
    image: "/images/blog/Internet.webp",
    author: {
      name: "Zhijie Xia",
      // image: "/images/blog/author-01.png",
      designation: "CEO",
    },
    href:"it-service",
    tags: ["creative"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Cybersecurity",
    paragraph:
      "In the field of cybersecurity, Gladiator Technologies offers comprehensive security solutions, including network security assessments, risk management, data protection, and intrusion detection. We understand the importance of data security in the digital age and are committed to safeguarding our customers' information from any form of cyber threats.",
    image: "/images/blog/Security.webp",
    author: {
      name: "Zhijie Xia",
      // image: "/images/blog/author-02.png",
      designation: "CEO",
    },
    href:"security",
    tags: ["computer"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "SaaS",
    paragraph:
      "As a SaaS service provider, we offer a variety of cloud-based software solutions, including Customer Relationship Management (CRM), Enterprise Resource Planning (ERP), and Supply Chain Management. Our SaaS platform is designed to help businesses improve efficiency, reduce costs, and facilitate the flow of information and collaboration.",
    image: "/images/blog/SaaS.webp",
    author: {
      name: "Zhijie Xia",
      // image: "/images/blog/author-03.png",
      designation: "CEO",
    },
    href:"saas",
    tags: ["design"],
    publishDate: "2023",
  },
];
export default productData;
