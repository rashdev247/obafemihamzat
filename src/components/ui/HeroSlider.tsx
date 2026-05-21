/* eslint-disable @next/next/no-img-element */
import React, {useCallback, useEffect, useState} from "react"
import useEmblaCarousel from "embla-carousel-react"
import {EmblaCarouselType} from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import {DotButton} from "../shared/EmblaCarouselDotButton"
import {heroSliderCarouselData} from "../constants"

const HeroSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
    },
    [Autoplay({playOnInit: true, delay: 3000}), Fade()]
  )

  const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi)

  return (
    <section className="embla_hero">
      <div className="embla__viewport_hero" ref={emblaRef}>
        <div className="embla__container_hero">
          {heroSliderCarouselData.map((value, index) => (
            <div className="embla__slide_hero" key={index}>
              <h1
                className="text-5xl select-none mb-6 lg:text-[76px] max-w-[1207px] w-full mx-auto font-semibold text-[#051438] lg:leading-[92px]"
                data-testid="cypress-title"
              >
                {value?.title}
              </h1>
              <p
                data-testid="cypress-subtitle"
                className={`text-[20px] select-none font-semibold mt-6 mx-auto lg:text-[22px] leading-[28px] lg:leading-[38px] text-[#677597]`}
              >
                {value?.subtitle}
              </p>
              <button
                className="mt-6 px-[26px] py-[12px] text-[18px] border border-[#0B0C7D] cursor-pointer font-semibold bg-[#0B0C7D] text-[#FFFFFF] rounded-[12px] shadow-md transition hover:[#0B0C7D]"
                onClick={() => window.open("https://app.plural.health/signup")}
              >
                Try NeoEHR for free
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots mx-auto mt-7 relative z-10">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}
