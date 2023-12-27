import TagButton from "@/components/Blog/TagButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品 | 浙江角斗士科技",
  description: "互联网服务 | Internet Service | 浙江角斗士科技",
  // other metadata
};

const BlogDetails = () => { 
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  互联网时代
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>浙江角斗士科技</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        Dec 23, 2023
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-500 px-4 py-2 text-sm font-semibold text-white"
                    >
                      联系我们
                    </a>
                  </div>
                </div>
                <div>
                  <strong className="py-1 pb-2 text-blue-500 dark:text-white">
                    互联网的时代到来
                  </strong>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">在当今这个信息化时代，互联网服务已经成为我们日常生活和商业活动中不可或缺的一部分。从基本的网络连接到复杂的云计算解决方案，互联网服务提供了一个平台，使个人和企业能够以前所未有的方式进行交流、合作和创新。通过这些服务，我们可以迅速访问大量信息，享受便捷的在线交易，并利用各种在线工具和应用来提高工作效率和生活质量。随着技术的不断进步，互联网服务的范围和质量也在持续扩展和改进，为我们带来更加丰富多彩的数字生活体验。</p>
                  
                  <strong className="py-1 pb-2 text-blue-500 dark:text-white">
                    认识角斗士技术公司
                  </strong>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    角斗士科技，作为一家领先的互联网技术公司，致力于提供创新和高效的网络解决方案。我们的服务范围广泛，包括但不限于云计算、大数据分析、网络安全以及定制化的软件开发。我们的云服务平台为企业提供了弹性、安全且易于管理的云基础设施，帮助客户轻松实现数字化转型。此外，我们的大数据解决方案能够协助企业从海量数据中提取有价值的洞见，支持更明智的商业决策。在网络安全方面，角斗士科技提供全面的安全策略和服务，确保客户数据的安全和完整性。我们还专注于为不同行业提供定制化的软件解决方案，以满足特定的业务需求。在角斗士科技，我们不断探索和创新，旨在为客户提供前沿的技术和卓越的服务体验。
                  </p>


                  <strong className="py-1 pb-2 text-blue-500 dark:text-white">
                    角斗士产品
                  </strong>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      云计算和虚拟化解决方案： 我们提供先进的云计算服务，包括云存储、云服务器和云应用平台。利用虚拟化技术，我们帮助企业轻松实现资源优化和成本节约，同时确保数据安全和系统可靠性。
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      数据分析和机器学习：通过应用机器学习和深度学习技术，我们提供定制的数据分析解决方案。这些服务有助于企业从大量数据中提取有价值的洞见，从而支持更明智的商业决策和策略。
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      API开发和集成服务：我们专注于开发高效、安全的API，为各种应用和系统提供无缝集成。我们的API解决方案强调易用性和可扩展性，帮助企业提高运营效率和用户体验。
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      移动应用开发：我们专业开发iOS和Android平台的移动应用。无论是电商、社交媒体还是企业应用，我们都能提供个性化的设计和开发服务，满足不同客户的需求。
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      区块链技术应用：我们利用区块链技术开发安全、透明的应用解决方案。包括加密货币、智能合约和供应链管理等，为企业提供去中心化、不可篡改的数字解决方案。
                    </li>
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Stay hungry. Stay foolish. - Steve Jobs
                    </p>
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        关键词 :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="云计算" />
                        <TagButton text="机器学习" />
                        <TagButton text="API开发" />
                        <TagButton text="区块链" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
