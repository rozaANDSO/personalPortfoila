"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import "./roza/embla.css";
import "./roza/sandbox.css";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Calendar } from "lucide-react";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              {/*<div className="embla__slide__number">{index + 1}</div>*/}
              <div className="relative mb-6 sm:mb-0">
                <h2 className="mb-4 font-semibold">2022 -present day</h2>
                <div className="flex items-center">
                  <div
                    className="z-10 flex items-center justify-center w-8 h-8
                   bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900
                    sm:ring-8 dark:ring-gray-900 shrink-0"
                  >
                    <Calendar />

                    <svg
                      className="w-8 h-8 text-blue-900  dark:text-blue-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Frontend react developer
                  </h3>
                  <h2 className="uppercase tracking-widest py-3">
                    work at freelance
                  </h2>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </div>
              {/*<div className="embla__slide__number">{index + 1}</div>
              <h2>slide- {index + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                repudiandae eum earum atque quaerat assumenda reprehenderit
                sapiente veritatis sequi nam tempora fugit, omnis ea, illo rem!
                Soluta facilis sed maxime provident eius a consectetur,
              </p>
              */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots bg-green-500">
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
      </div>
    </section>
  );
};

export default EmblaCarousel;
