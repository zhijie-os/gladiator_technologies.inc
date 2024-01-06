"use client";
import Image from "next/image";
import Link from "next/link";
import { BsWechat } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="flex flex-col jusitify-center mb-8">
                  <Image
                    src="/images/logo/logo-black.svg"
                    alt="logo"
                    className="w-32 dark:hidden"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo-white.svg"
                    alt="logo"
                    className="hidden w-32 dark:block"
                    width={30}
                    height={30}
                  />
                </Link>
                <p className="dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color">
                    See your IT from a better place — Your dream partner, Gladiator Technologies, Inc.
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                  >
                    <BsWechat />
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                  >
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  About
                </h2>
                <ul>
                    {/* <li>
                      <a
                        href="/pricing"
                        className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                      >
                        Pricing
                      </a>
                    </li> */}
                  <li>
                    <a
                      href="/about"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      Gladiator Technolgoies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Service and policy 
                </h2>
                <ul>
                  <li>
                    <a
                      href="/documents/terms_of_use.pdf"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/privacy_policy.pdf"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      法律信息
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Technical support
                </h2>
                <ul>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      Contact US
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      After-sales Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      Business Cooperation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8 flex-col">
            <p className="text-center text-base text-body-color dark:text-white">
            Copyright © 2023 Gladiator Technologies, Inc.
            </p>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
