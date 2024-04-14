import { useCallback, useEffect, useState } from "react";
import "./style/App.css";
import Logo from "./components/Logo";
import Slide from "./components/Slide";
import Pagination from "./components/Pagination";
import Files from "./components/Files";
import { handleKeyDown, handleKeyUp } from "./utils/keyEvents";
import { slides } from "./data/SlideData";
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
} from "./components/slides";

function App() {
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const [isOverviewActive, setIsOverViewActive] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (
      !isOverviewActive &&
      activeSlide !== null &&
      activeSlide < slides.length - 1
    ) {
      setActiveSlide(activeSlide + 1);
      if (activeSlide + 1 === slides.length - 1) {
        setLastSlide(true);
        setRightActive(false);
      } else {
        setLastSlide(false);
        if (activeSlide >= 0) {
          setFirstSlide(false);
        }
      }
    }
  }, [activeSlide, isOverviewActive]);

  const goToPreviousSlide = useCallback(() => {
    if (activeSlide !== null && activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
      if (activeSlide - 1 === 0) {
        setFirstSlide(true);
      } else {
        setFirstSlide(false);
        if (activeSlide <= 19) {
          setLastSlide(false);
        }
      }
      setLeftActive(true);
    } else if (activeSlide === 0) {
      setLeftActive(false);
    }
  }, [activeSlide]);

  useEffect(() => {
    console.log(
      "Active slide is: ",
      activeSlide !== null ? activeSlide + 1 : null
    );
  }, [activeSlide]);

  useEffect(() => {
    if (activeSlide !== -1) {
      setIsOverViewActive(false);
    }
  }, [activeSlide]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      handleKeyDown(
        event,
        setLeftActive,
        setRightActive,
        goToPreviousSlide,
        goToNextSlide
      );
    const onKeyUp = (event: KeyboardEvent) =>
      handleKeyUp(event, setLeftActive, setRightActive);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [goToNextSlide, goToPreviousSlide]);

  const slideData = slides;

  const slideComponents = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15,
    Slide16,
    Slide17,
    Slide18,
    Slide19,
    Slide20,
  ];

  return (
    <div className="slideshow">
      {isOverviewActive && hoveredSlide !== null && (
        <div className="hovered-slide-indicator">
          <h1> Gå till slide {hoveredSlide + 1}</h1>
        </div>
      )}
      <Logo
        className={activeSlide === 0 && logoClicked ? "shake" : ""}
        onClick={() => {
          setActiveSlide(0);
          setFirstSlide(true);
          if (activeSlide === 0) {
            setLogoClicked(!logoClicked);
          } else {
            setLogoClicked(false);
          }
        }}
      />
      <div
        className={`slide-container ${
          isOverviewActive ? "overview-active" : ""
        }`}
      >
        {slideData.map((slide, index) => {
          const SlideComponent = slideComponents[index];
          return (
            <Slide
              key={index}
              style={{
                "--i": index,
              }}
              slideId={slide.slideId}
              className={
                isOverviewActive
                  ? "overview"
                  : activeSlide !== null && index === activeSlide
                  ? "active"
                  : !isOverviewActive &&
                    activeSlide !== null &&
                    index < activeSlide
                  ? "previous"
                  : ""
              }
              onClick={() => {
                if (isOverviewActive) {
                  setActiveSlide(index);
                  if (index === 0) {
                    setFirstSlide(true);
                    setLastSlide(false);
                  } else if (index === slides.length - 1) {
                    setFirstSlide(false);
                    setLastSlide(true);
                  } else {
                    setFirstSlide(false);
                    setLastSlide(false);
                  }
                }
              }}
              onMouseEnter={() => setHoveredSlide(index)}
              onMouseLeave={() => setHoveredSlide(null)}
            >
              <SlideComponent {...slide} />
            </Slide>
          );
        })}
      </div>
      <Files setIsOverviewActive={setIsOverViewActive} />
      {!isOverviewActive && (
        <Pagination
          leftActive={leftActive}
          rightActive={rightActive}
          onPrevious={goToPreviousSlide}
          onNext={goToNextSlide}
          activeSlide={activeSlide}
          firstSlide={firstSlide}
          lastSlide={lastSlide}
        />
      )}
    </div>
  );
}

export default App;
