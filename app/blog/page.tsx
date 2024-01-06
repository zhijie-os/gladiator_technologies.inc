import ProductBlog from "@/components/Blog/ProductBlog";
import productData from "@/components/Blog/productData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Solutions | Technical support",
  description: "角斗士科技， 商用产品， Technical support",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Gladiator Technologies, Inc"
        description="Welcome to Gladiator Technologies, Inc. We are a dedicated internet and high-tech company committed to innovation and excellence. Our vision is to be a pioneer in the field of technology services and network security, offering comprehensive solutions and services to our clients. At Gladiator Tech, we believe that innovation is the key to success. We continuously explore new technological frontiers and are dedicated to providing our clients with the highest quality of service and solutions.
        No matter how complex your needs may be, we have the capability and expertise to assist you in achieving your goals. Please contact our team for more information."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {productData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <ProductBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
