import type { MouseEvent, PointerEvent } from "react";

type Gesture = { id: number; x: number; y: number; horizontal: boolean };

export function createSwipeHandlers(callbacks: {
  onSwipe: (direction: "next" | "previous") => void;
  onOffset: (offset: number) => void;
  onDragging: (dragging: boolean) => void;
}) {
  let gesture: Gesture | null = null;
  let suppressClickUntil = 0;

  function reset() {
    gesture = null;
    callbacks.onOffset(0);
    callbacks.onDragging(false);
  }

  return {
    onPointerDown(event: PointerEvent<HTMLElement>) {
      if (!event.isPrimary || event.button !== 0) return;
      gesture = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        horizontal: false,
      };
    },
    onPointerMove(event: PointerEvent<HTMLElement>) {
      const start = gesture;
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
        callbacks.onDragging(true);
      }
      callbacks.onOffset(Math.max(-110, Math.min(110, dx)));
    },
    onPointerUp(event: PointerEvent<HTMLElement>) {
      const start = gesture;
      if (!start || start.id !== event.pointerId) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (start.horizontal) suppressClickUntil = Date.now() + 500;
      if (
        start.horizontal &&
        Math.abs(dx) >= 40 &&
        Math.abs(dx) > Math.abs(dy) * 1.25
      ) {
        callbacks.onSwipe(dx < 0 ? "next" : "previous");
      }
      reset();
    },
    onPointerCancel(event: PointerEvent<HTMLElement>) {
      if (gesture?.id === event.pointerId) reset();
    },
    onLostPointerCapture(event: PointerEvent<HTMLElement>) {
      // Touch initially captures the image. Its bubbled loss is a transfer,
      // not a cancellation of the carousel's newly captured gesture.
      if (event.target === event.currentTarget && gesture?.id === event.pointerId) {
        reset();
      }
    },
    onClickCapture(event: MouseEvent<HTMLElement>) {
      if (Date.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
  };
}
