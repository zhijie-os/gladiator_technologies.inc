import { Blog } from "@/types/blog";

const productData: Blog[] = [
  {
    id: 1,
    title: "互联网和技术服务",
    paragraph:
      "在互联网和技术服务方面，我们提供先进的技术支持和开发服务，包括但不限于网站开发、移动应用开发、企业软件解决方案以及定制化的技术咨询。我们的团队由行业内优秀的工程师和开发人员组成，他们拥有广泛的经验和深厚的专业知识，能够帮助客户实现他们的技术目标。",
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
    title: "网络安全",
    paragraph:
      "在网络安全领域，角斗士科技提供全面的安全解决方案，包括网络安全评估、风险管理、数据保护和入侵检测。我们了解在数字化时代，数据安全的重要性，并致力于保护客户的信息免受任何形式的网络威胁。",
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
    title: "SaaS服务",
    paragraph:
      "作为SaaS服务提供商，我们提供多种基于云的软件解决方案，包括客户关系管理（CRM）、企业资源规划（ERP）和供应链管理。我们的SaaS平台旨在帮助企业提高效率，降低成本，并促进信息流动和协作。",
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
