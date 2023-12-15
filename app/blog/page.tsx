import ProductBlog from "@/components/Blog/ProductBlog";
import productData from "@/components/Blog/productData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "数字解决方案 | 技术支持",
  description: "浙江角斗士科技， 商用产品， 技术支持",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="浙江角斗士科技有限公司"
        description="欢迎来到浙江角斗士科技有限公司，我们是一家致力于创新和卓越的互联网和高科技公司。我们的愿景是成为技术服务和网络安全领域的先驱，为客户提供全方位的解决方案和服务。在浙江角斗士科技，我们相信创新是推动成功的关键。我们不断探索新的技术边界，致力于为客户提供最优质的服务和解决方案。
        无论您的需求如何复杂，我们都有能力和专业知识来帮助您实现目标。请联系我们的团队，了解更多信息。"
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
