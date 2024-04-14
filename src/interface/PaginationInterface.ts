
export interface PaginationProps {
    leftActive: boolean;
    rightActive: boolean;
    onPrevious: () => void;
    onNext: () => void;
    activeSlide?: number | null;
    firstSlide: boolean;
    lastSlide: boolean;
  }