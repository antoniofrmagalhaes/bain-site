"use client";

import { BsDiscord, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import { useApplication } from "@/contexts/application-context";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionImg = motion.img;

export default function Hero() {
  const { pageContent } = useApplication();

  return (
    <div className="relative w-full min-h-screen overflow-hidden py-8 px-4 sm:px-6 lg:px-12 xl:px-24 flex items-center">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/VIDEO_PROMO_BAIN_8mb.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className="absolute inset-0 backdrop-blur-[6px]"></div>
      </div>

      <div className="z-10 flex w-full items-center gap-12">
        <div className="flex-1 text-white">
          <div className="space-y-4 max-w-[600px]">
            <MotionP
              className="inline-block rounded-full font-medium uppercase text-[#FFB430]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              » BAIN «
            </MotionP>

            <MotionP
              className="font-bold tracking-tight"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.15, ease: "easeOut" }}
            >
              <span className="block text-[38px] leading-[52px] sm:text-[44px] sm:leading-[62px] lg:text-[64px] lg:leading-[70px] max-[767px]:text-[44px]">
                {pageContent.pages.home.hero.title}
              </span>
            </MotionP>

            <MotionP
              className="text-base sm:text-xl lg:text-2xl font-light text-white/90"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.15, ease: "easeOut" }}
            >
              {pageContent.pages.home.hero.description}
            </MotionP>
          </div>

          <div className="mt-8 space-y-4">
            <MotionP
              className="text-white"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.15, ease: "easeOut" }}
            >
              {pageContent.pages.home.hero.socialTitle}
            </MotionP>

            <MotionDiv
              className="flex items-center gap-6 text-[26px] [&>a>svg]:cursor-pointer [&>a>svg:hover]:text-[#FFB430]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.15, ease: "easeOut" }}
            >
              <a
                href="https://discord.gg/bainclan"
                target="_blank"
                rel="noreferrer"
              >
                <BsDiscord />
              </a>
              <a
                href="https://www.youtube.com/@hll.bainclan"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube />
              </a>
              <a
                href="https://www.instagram.com/bastardos.inglorios_bain/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@bain.clan?_t=ZM-8ticPEkF0bd&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <BsTiktok />
              </a>
            </MotionDiv>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 justify-center max-w-[700px]">
          <MotionImg
            src="/logo.webp"
            alt="Logo"
            className="h-[500px] w-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
