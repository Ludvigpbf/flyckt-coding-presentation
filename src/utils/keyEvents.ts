export const handleKeyDown = (
  event: KeyboardEvent,
  setLeftActive: (value: boolean) => void,
  setRightActive: (value: boolean) => void,
  goToPreviousSlide: () => void,
  goToNextSlide: () => void
) => {
  switch (event.key) {
    case "ArrowLeft":
      console.log("Left arrow key pressed");
      setLeftActive(true);
      goToPreviousSlide();
      break;
    case "ArrowRight":
      console.log("Right arrow key pressed");
      setRightActive(true);
      goToNextSlide();
      break;
    default:
      break;
  }
};

export const handleKeyUp = (
  event: KeyboardEvent,
  setLeftActive: (value: boolean) => void,
  setRightActive: (value: boolean) => void
) => {
  switch (event.key) {
    case "ArrowLeft":
      setLeftActive(false);
      break;
    case "ArrowRight":
      setRightActive(false);
      break;
    default:
      break;
  }
};
