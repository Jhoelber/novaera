import { useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";

type Gesture = { id: number; x: number; y: number; horizontal: boolean };

export function useSwipe(onSwipe: (direction: "next" | "previous") => void) {
  const gesture = useRef<Gesture | null>(null);
  const suppressClickUntil = useRef(0);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  function reset() {
    gesture.current = null;
    setOffset(0);
    setDragging(false);
  }

  const handlers = {
    onPointerDown(event: PointerEvent<HTMLElement>) {
      if (!event.isPrimary || event.button !== 0) {
        reset();
        return;
      }
      gesture.current = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        horizontal: false,
      };
    },
    onPointerMove(event: PointerEvent<HTMLElement>) {
      const start = gesture.current;
      if (!start || start.id !== event.pointerId) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (!start.horizontal) {
        if (Math.abs(dy) > 12 && Math.abs(dy) >= Math.abs(dx)) {
          reset();
          return;
        }
        if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy) * 1.25) return;
        start.horizontal = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragging(true);
      }
      setOffset(Math.max(-110, Math.min(110, dx)));
    },
    onPointerUp(event: PointerEvent<HTMLElement>) {
      const start = gesture.current;
      if (!start || start.id !== event.pointerId) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (start.horizontal) suppressClickUntil.current = Date.now() + 500;
      if (
        start.horizontal &&
        Math.abs(dx) >= 40 &&
        Math.abs(dx) > Math.abs(dy) * 1.25
      ) {
        onSwipe(dx < 0 ? "next" : "previous");
      }
      reset();
    },
    onPointerCancel: reset,
    onLostPointerCapture: reset,
    onClickCapture(event: MouseEvent<HTMLElement>) {
      if (Date.now() < suppressClickUntil.current) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
  };

  return { handlers, offset, dragging };
}
