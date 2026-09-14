import { useRef, useState } from "react";
import { createSwipeHandlers } from "./swipeGesture";

export function useSwipe(onSwipe: (direction: "next" | "previous") => void) {
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const latestSwipe = useRef(onSwipe);
  latestSwipe.current = onSwipe;
  const [handlers] = useState(() =>
    createSwipeHandlers({
      onSwipe: (direction) => latestSwipe.current(direction),
      onOffset: setOffset,
      onDragging: setDragging,
    }),
  );
  return { handlers, offset, dragging };
}
