import type { CampaignGalleryItem } from "@/data/campaignContent";
import { galleryItems, heroSlides, primaryResult } from "@/data/campaignContent";
import { ArrowLeft, ArrowRight, FileVideo, Mic2, Play } from "lucide-react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import Slider, { type CustomArrowProps, type Settings } from "react-slick";

type ArrowProps = CustomArrowProps & {
  direction: "previous" | "next";
};

function SlickArrow({ direction, onClick }: ArrowProps) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      aria-label={isPrevious ? "Previous slide" : "Next slide"}
      onClick={onClick}
      className={`absolute top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-card border border-white/25 bg-[var(--campaign-green-900)] text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:border-secondary-500 hover:bg-secondary-500 hover:text-primary-900 md:flex ${
        isPrevious ? "left-5" : "right-5"
      }`}
    >
      {isPrevious ? (
        <ArrowLeft aria-hidden="true" className="h-5 w-5" />
      ) : (
        <ArrowRight aria-hidden="true" className="h-5 w-5" />
      )}
    </button>
  );
}

function CompactSlickArrow({ direction, onClick }: ArrowProps) {
  const isPrevious = direction === "previous";
  const isDisabled = !onClick;

  return (
    <button
      type="button"
      aria-label={isPrevious ? "Previous media" : "Next media"}
      disabled={isDisabled}
      onClick={onClick}
      className={`absolute top-[44%] z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/28 bg-[rgba(3,31,25,0.72)] text-white shadow-[0_12px_26px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 ${
        isPrevious ? "left-3" : "right-3"
      } ${
        isDisabled
          ? "pointer-events-none opacity-0"
          : "hover:border-secondary-500 hover:bg-secondary-500 hover:text-primary-900"
      }`}
    >
      {isPrevious ? (
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      ) : (
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  );
}

const heroCarouselSettings: Settings = {
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5200,
  cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  dots: true,
  fade: true,
  infinite: true,
  nextArrow: <SlickArrow direction="next" />,
  pauseOnHover: true,
  prevArrow: <SlickArrow direction="previous" />,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 850,
};

const galleryCarouselSettings: Settings = {
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3600,
  centerMode: true,
  centerPadding: "72px",
  cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  dots: true,
  infinite: true,
  nextArrow: <SlickArrow direction="next" />,
  pauseOnHover: true,
  prevArrow: <SlickArrow direction="previous" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 650,
};

const primaryResultMediaSettings: Settings = {
  arrows: true,
  autoplay: false,
  cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  dots: true,
  infinite: false,
  nextArrow: <CompactSlickArrow direction="next" />,
  prevArrow: <CompactSlickArrow direction="previous" />,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 540,
  swipeToSlide: true,
};

const primaryResultFeatureCards = [
  {
    icon: FileVideo,
    title: "Media kit",
    copy: "Official result clips, visuals, and press assets.",
  },
  {
    icon: Mic2,
    title: "Speeches",
    copy: "Remarks, acceptance notes, and public statements.",
  },
  {
    icon: Play,
    title: "Campaign films",
    copy: "Short films and video moments from the movement.",
  },
];

type PrimaryResultMediaSlide = (typeof primaryResult.mediaSlides)[number];
type PrimaryResultFeatureCard = (typeof primaryResultFeatureCards)[number];

export function CampaignHeroCarousel() {
  return (
    <div className="koh-hero-carousel relative min-w-0 overflow-hidden rounded-card border border-white/12 bg-white/8 shadow-[0_35px_100px_rgba(0,0,0,0.36)] backdrop-blur">
      <Slider {...heroCarouselSettings}>
        {heroSlides.map((slide, index) => (
          <article key={slide.title} className="relative h-[520px] md:h-[640px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,31,25,0.92)] via-[rgba(3,31,25,0.18)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 pb-16 md:p-8 md:pb-20">
              <div className="max-w-md border-l-4 border-secondary-500 pl-5">
                <p className="font-heading text-3xl font-black leading-tight text-white md:text-4xl">
                  {slide.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78 md:text-base">
                  {slide.caption}
                </p>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </div>
  );
}

function GallerySlide({ item }: { item: CampaignGalleryItem }) {
  return (
    <article className="campaign-dark-section interactive-card group relative mx-2 h-[360px] overflow-hidden rounded-card bg-primary-900 shadow-brand-card md:h-[420px]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 720px) 92vw, (max-width: 1024px) 48vw, 32vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,31,25,0.9)] via-[rgba(3,31,25,0.24)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="h-1 w-12 bg-secondary-500 transition-all duration-300 group-hover:w-20" />
        <h3 className="mt-4 font-heading text-2xl font-black leading-tight text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/74">{item.caption}</p>
      </div>
    </article>
  );
}

function PrimaryMediaSlide({
  slide,
  priority,
}: {
  slide: PrimaryResultMediaSlide;
  priority: boolean;
}) {
  return (
    <article className="primary-media-slide">
      <div className="relative aspect-video overflow-hidden rounded-card bg-black">
        {slide.type === "video" ? (
          <video
            aria-label={slide.title}
            className="h-full w-full bg-black object-cover"
            controls
            playsInline
            preload="metadata"
            src={slide.src}
          />
        ) : (
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 92vw, 44vw"
            className="object-cover"
          />
        )}
      </div>
    </article>
  );
}

function PrimaryResultFeatureCard({ item }: { item: PrimaryResultFeatureCard }) {
  const Icon = item.icon;

  return (
    <div className="interactive-card rounded-card border border-white/14 bg-white/10 p-4 backdrop-blur">
      <Icon aria-hidden="true" className="h-5 w-5 text-secondary-400" />
      <p className="mt-3 font-heading text-lg font-black text-white">
        {item.title}
      </p>
      <p className="mt-2 text-xs leading-6 text-white/68">{item.copy}</p>
    </div>
  );
}

export function PrimaryResultMediaCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeMedia =
    primaryResult.mediaSlides[activeSlide] ?? primaryResult.mediaSlides[0];
  const slideCount = primaryResult.mediaSlides.length;
  const mediaSettings = useMemo<Settings>(
    () => ({
      ...primaryResultMediaSettings,
      afterChange: (currentSlide) => setActiveSlide(currentSlide),
      beforeChange: () => {
        carouselRef.current
          ?.querySelectorAll("video")
          .forEach((video) => video.pause());
      },
    }),
    []
  );

  return (
    <div
      id="primary-result-media"
      ref={carouselRef}
      className="primary-video-card min-w-0 rounded-card border border-white/18 bg-white/10 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl"
    >
      <div className="koh-primary-media-carousel relative min-w-0 overflow-hidden rounded-card">
        <Slider {...mediaSettings}>
          {primaryResult.mediaSlides.map((slide, index) => (
            <PrimaryMediaSlide
              key={slide.src}
              slide={slide}
              priority={index === 1}
            />
          ))}
        </Slider>
      </div>
      <div className="flex flex-col gap-3 border-white/12 pt-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary-400">
            {activeMedia.type === "video"
              ? "Campaign film"
              : "Primary photo archive"}
          </p>
          <p className="mt-2 font-heading text-xl font-black leading-tight text-white">
            {activeMedia.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {activeMedia.caption}
          </p>
        </div>
        <p className="w-fit flex-none rounded-full border border-white/14 bg-white/10 px-3 py-1 text-xs font-black tabular-nums text-white/76">
          {String(activeSlide + 1).padStart(2, "0")} /{" "}
          {String(slideCount).padStart(2, "0")}
        </p>
      </div>
      <div className="grid gap-3 pt-3 sm:grid-cols-3">
        {primaryResultFeatureCards.map((item) => (
          <PrimaryResultFeatureCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export function CampaignGalleryCarousel() {
  return (
    <div className="koh-gallery-carousel relative -mx-2 mt-10 min-w-0">
      <Slider {...galleryCarouselSettings}>
        {galleryItems.map((item) => (
          <GallerySlide key={item.title} item={item} />
        ))}
      </Slider>
    </div>
  );
}
