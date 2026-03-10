import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import type { JSX } from 'react';

const itemWidth = 450;
const itemHeight = 626;

export const Carousel = (): JSX.Element => {
  const theme = useTheme();

  const totalSlides = 5;
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const currentIndexRef = useRef<number>(currentIndex);
  const autoPlayTimer = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer.current = window.setInterval(() => {
      moveCarousel(1, true);
    }, 7_000);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current !== null) {
      window.clearInterval(autoPlayTimer.current);
      autoPlayTimer.current = null;
    }
  };

  const updateCarousel = (index = currentIndexRef.current) => {
    const track = trackRef.current;
    if (!track) return;

    const items = track.querySelectorAll<HTMLElement>('.carousel-item');
    const dots = document.querySelectorAll<HTMLElement>('.dot-indicator');

    const offset = -index * itemWidth;
    track.style.transform = `translateX(${offset}px)`;

    items.forEach((item) => {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('bg-primary');
        dot.classList.remove('dark:bg-white/10');
        dot.classList.remove('bg-slate-300');
      } else {
        dot.classList.remove('bg-primary');
        dot.classList.add('dark:bg-white/10');
        dot.classList.add('bg-slate-300');
      }
    });
  };

  const moveCarousel = (direction: number, isAuto = false) => {
    const next =
      (currentIndexRef.current + direction + totalSlides) % totalSlides;
    currentIndexRef.current = next;
    setCurrentIndex(next);
    updateCarousel(next);
    if (!isAuto) startAutoPlay();
  };

  const goToSlide = (index: number) => {
    const normalized = ((index % totalSlides) + totalSlides) % totalSlides;
    currentIndexRef.current = normalized;
    setCurrentIndex(normalized);
    updateCarousel(normalized);
    startAutoPlay();
  };

  useEffect(() => {
    updateCarousel(currentIndexRef.current);
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, []);

  return (
    <div className="relative overflow-visible max-w-full group">
      <div className="flex items-center justify-center relative">
        <div
          className="overflow-hidden relative"
          style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out h-full items-center"
            id="carousel-track"
            ref={trackRef}
            style={{ transform: 'translateX(0px)' }}
          >
            <CarouselItem src={`carousel/01-${theme}.webp`} />
            <CarouselItem src={`carousel/02-${theme}.webp`} />
            <CarouselItem src={`carousel/03-${theme}.webp`} />
            <CarouselItem src={`carousel/04-${theme}.webp`} />
            <CarouselItem src={`carousel/05-${theme}.webp`} />
          </div>
        </div>
        <CarouselBtn direction="left" onClick={() => moveCarousel(-1)} />
        <CarouselBtn direction="right" onClick={() => moveCarousel(1)} />
      </div>
      <div className="flex justify-center gap-3 mt-12">
        <CarouselDotBtn onClick={() => goToSlide(0)} />
        <CarouselDotBtn onClick={() => goToSlide(1)} />
        <CarouselDotBtn onClick={() => goToSlide(2)} />
        <CarouselDotBtn onClick={() => goToSlide(3)} />
        <CarouselDotBtn onClick={() => goToSlide(4)} />
      </div>
    </div>
  );
};

interface CarouselBtn {
  direction: 'left' | 'right';
  onClick: () => void;
}
const CarouselBtn = ({ direction, onClick }: CarouselBtn) => {
  const posClass =
    direction === 'left'
      ? 'left-4 sm:left-[-56px]'
      : 'right-4 sm:right-[-56px]';

  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={`absolute ${posClass} top-1/2 -translate-y-1/2 w-10 h-10 rounded-full dark:bg-black/50 bg-slate-100 dark:border-white/10 border-slate-200 flex items-center justify-center text-primary backdrop-blur-sm hover:bg-primary/20 transition-all z-30 opacity-0 group-hover:opacity-100 cursor-pointer`}
    >
      <span className="material-symbols-outlined text-xl">
        {direction === 'right' ? 'chevron_right' : 'chevron_left'}
      </span>
    </button>
  );
};

const CarouselDotBtn = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    className="dot-indicator w-1.5 h-1.5 rounded-full dark:bg-white/10 bg-slate-300 cursor-pointer transition-all hover:scale-125"
    onClick={() => onClick()}
  />
);

const CarouselItem = ({ src }: { src: string }) => (
  <div
    className={`carousel-item flex-shrink-0 px-4 opacity-100 transition-all duration-700`}
    style={{ minWidth: `${itemWidth}px` }}
  >
    <div
      className={`rounded-2xl border-2 dark:border-slate-700/20 border-slate-200 dark:bg-[#16121c] bg-slate-50 dark:shadow-2xl shadow-[0_10px_30px_rgba(14,20,30,0.12)] overflow-hidden relative group/slide`}
      style={{ height: `${itemHeight}px` }}
    >
      <div className="h-full flex flex-col">
        <img
          className="w-full h-full object-cover"
          alt="Carousel Item"
          src={src}
        />
      </div>
    </div>
  </div>
);
