import { useElementRect } from "@/shared/hooks";
import { ChildrenProps } from "@/shared/interfaces/props";
import { TabType, useMedicalStore } from "@/shared/stores";
import { cn } from "@/shared/utils";
import { JSX, useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
  slides: [TabType, JSX.Element][];
  defaultTab: TabType;
}

export const CarouselWrapper = ({ slides, defaultTab }: Props) => {
  const tab = useMedicalStore((state) => state.tab);
  const setTab = useMedicalStore((state) => state.setTab);
  const [rect, ref] = useElementRect<HTMLDivElement>();
  const [canSwipe, setCanSwipe] = useState(false);
  const carouselRef = useRef<Carousel>(null);
  const [commonArrowStyle] = useState(
    "flex-center fixed h-14 w-8 rounded-full bg-slate-500/30 text-2xl text-white top-1/2",
  );
  const isFirstRef = useRef(true);

  useEffect(() => {
    setTab(defaultTab);
  }, [defaultTab]);

  useEffect(() => {
    if (isFirstRef.current) {
      isFirstRef.current = false;
      return;
    }
    const tabIndex = slides.findIndex((slide) => slide[0] === tab);

    if (tabIndex !== undefined) {
      carouselRef.current?.goToSlide(tabIndex);
    }
  }, [tab]);

  return (
    <div ref={ref} className="flex-1 overflow-hidden">
      <Carousel
        ref={carouselRef}
        className="h-full"
        responsive={responsive}
        // arrows={false}
        draggable={false}
        swipeable={canSwipe}
        customLeftArrow={
          <IoIosArrowBack className={cn(commonArrowStyle, "left-4 pr-0.5")} />
        }
        customRightArrow={
          <IoIosArrowForward
            className={cn(commonArrowStyle, "right-4 pl-0.5")}
          />
        }
        focusOnSelect
        afterChange={(_previousSlide, { currentSlide }) => {
          const slide = slides[currentSlide];
          setTab(slide[0]);
        }}
      >
        {slides.map(([tab, component]) => (
          <CarouseBox key={tab} height={rect.height} onCanSwipe={setCanSwipe}>
            {component}
          </CarouseBox>
        ))}
      </Carousel>
    </div>
  );
};

const CarouseBox = ({
  children,
  height,
  onCanSwipe,
}: ChildrenProps & {
  height: number;
  onCanSwipe: (canSwipe: boolean) => void;
}) => {
  const swipeRef = useRef<HTMLDivElement>(null);
  const hScrollExistsRef = useRef(false);

  return (
    <div
      onPointerDown={() => {
        const current = swipeRef.current;
        if (current) {
          const isHScrollExists = current.clientWidth < current.scrollWidth;
          hScrollExistsRef.current = isHScrollExists;
          onCanSwipe(!isHScrollExists);
        }
      }}
      ref={swipeRef}
      className="h-full w-full overflow-auto p-2"
      style={{ height }}
    >
      {children}
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};