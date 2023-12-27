"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="让我们来帮助你的企业"
          paragraph="我们的团队致力于为企业提供前沿科技解决方案。我们深信，创新的科技可以推动企业发展，解决复杂问题。我们的目标是通过提供专业的技术支持和服务，帮助企业达到他们的业务目标，优化流程效率，提升市场竞争力，共创美好的科技未来。"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-blue-500 transition hover:bg-opacity-100"
                  >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1436.000000pt" height="1436.000000pt" viewBox="0 0 1436.000000 1436.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1436.000000) scale(0.100000,-0.100000)"
fill="#64748b" stroke="none">
<path d="M6785 14199 c-1125 -64 -2163 -372 -3125 -924 -925 -531 -1750 -1304
-2346 -2200 -655 -983 -1031 -2052 -1151 -3270 -25 -253 -25 -958 0 -1225 89
-938 316 -1748 717 -2550 873 -1748 2474 -3078 4345 -3609 456 -130 883 -207
1405 -253 191 -17 886 -17 1080 0 909 80 1696 289 2472 656 1038 493 1941
1235 2639 2171 1183 1588 1632 3615 1238 5590 -364 1819 -1444 3417 -3014
4461 -759 504 -1583 844 -2496 1029 -539 109 -1208 157 -1764 124z m998 -469
c632 -61 1203 -197 1783 -423 1616 -631 2943 -1911 3639 -3512 528 -1214 678
-2604 419 -3895 -348 -1738 -1376 -3254 -2872 -4235 -732 -479 -1578 -813
-2438 -964 -427 -75 -682 -96 -1149 -96 -479 0 -749 24 -1200 105 -937 169
-1870 572 -2666 1150 -1104 802 -1941 1946 -2374 3245 -229 685 -335 1361
-335 2136 0 379 22 648 85 1025 276 1659 1185 3147 2547 4175 771 581 1650
978 2618 1183 288 61 687 112 1015 130 182 10 728 -4 928 -24z"/>
<path d="M3816 9370 c-60 -24 -109 -69 -139 -130 l-22 -45 0 -2015 0 -2015 24
-48 c13 -26 42 -63 64 -82 82 -70 -206 -65 3427 -65 3695 0 3351 -8 3440 78
88 85 81 -106 78 2148 l-3 1989 -24 53 c-28 62 -85 115 -149 136 -41 14 -387
16 -3346 16 -3231 -1 -3302 -1 -3350 -20z m3788 -1584 c570 -330 1033 -602
1029 -606 -12 -11 -2071 -1200 -2077 -1200 -3 0 -6 543 -6 1206 0 663 4 1204
8 1202 5 -1 476 -273 1046 -602z"/>
</g>
</svg>

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="custom"
        url={"/test.mp4"}
        autoplay={true}
        start={true}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
 
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
