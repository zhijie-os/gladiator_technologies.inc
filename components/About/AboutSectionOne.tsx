import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1515.000000pt"
    height="1515.000000pt"
    viewBox="0 0 1515.000000 1515.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,1515.000000) scale(0.100000,-0.100000)"
      fill="#64748b"
      stroke="none"
    >
      <path
        d="M14570 13215 c-25 -7 -121 -34 -215 -60 -1761 -487 -3524 -1515
-5420 -3159 -1193 -1035 -2785 -2654 -4294 -4369 -52 -59 -97 -107 -100 -107
-3 0 -21 39 -40 88 -316 821 -711 1460 -1129 1826 -428 375 -864 547 -1308
516 -444 -32 -809 -252 -1131 -685 -73 -98 -176 -263 -227 -363 l-25 -50 77
-7 c262 -22 469 -99 672 -251 259 -193 479 -503 684 -965 35 -79 104 -227 154
-329 328 -673 615 -1384 1155 -2860 163 -444 339 -914 447 -1190 79 -204 98
-230 195 -276 91 -43 178 -30 275 41 40 29 64 64 160 232 146 255 411 699 610
1023 1216 1977 2563 3799 4064 5500 778 881 1820 1936 2674 2707 921 832 1882
1606 2802 2256 266 188 325 237 387 321 36 48 43 66 41 95 -4 44 -26 56 -124
71 -99 14 -330 11 -384 -5z"
      />
    </g>
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-blue-500">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="选择我们"
                paragraph="我们的愿景是成为互联网服务和网络安全领域的先驱，为客户提供全方位的解决方案和服务。在角斗士科技，我们相信创新是推动成功的关键。我们不断探索新的技术边界，致力于为客户提供最优质的服务和解决方案。同时我们是一只年轻化的团队，我们有数不尽的激情和创造力，我们由衷地相信我们的产品和服务能够帮助您实现目标。"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="支持开源" />
                    <List text="研发创新" />
                    <List text="优质售后" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="紧急响应" />
                    <List text="定制方案" />
                    <List text="技术过硬" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/choose_us.png"
                  alt="choose us"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
