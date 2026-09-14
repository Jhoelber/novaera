import test from 'node:test';
import assert from 'node:assert/strict';
import { createSwipeHandlers } from '../src/swipeGesture.ts';

function setup() {
  const state = { slides: [], offset: 0, dragging: false, captures: [] };
  const image = {};
  const surface = { setPointerCapture: id => state.captures.push(id) };
  const handlers = createSwipeHandlers({
    onSwipe: direction => state.slides.push(direction),
    onOffset: offset => { state.offset = offset; },
    onDragging: dragging => { state.dragging = dragging; },
  });
  const event = (x, y = 100, extra = {}) => ({
    pointerId: 1, pointerType: 'touch', isPrimary: true, button: 0,
    clientX: x, clientY: y, target: surface, currentTarget: surface, ...extra,
  });
  return { state, image, surface, handlers, event };
}

for (const [end, direction] of [[100, 'next'], [300, 'previous']]) {
  test(`touch capture transfer from image still advances ${direction}`, () => {
    const { state, image, handlers: h, event: e } = setup();
    h.onPointerDown(e(200, 100, { target: image }));
    h.onPointerMove(e(200 + (end - 200) / 5));
    assert.deepEqual(state.captures, [1]);
    // Native touch releases implicit image capture when the parent captures it.
    h.onLostPointerCapture(e(200, 100, { target: image }));
    assert.equal(state.dragging, true);
    h.onPointerMove(e(end));
    h.onPointerUp(e(end));
    h.onLostPointerCapture(e(end));
    assert.deepEqual(state.slides, [direction]);
    assert.equal(state.offset, 0);
    assert.equal(state.dragging, false);
    let prevented = false;
    h.onClickCapture({ preventDefault: () => { prevented = true; }, stopPropagation() {} });
    assert.equal(prevented, true, 'swipe must not open the testimonial dialog');
  });
}

test('vertical scroll, tap and short drag do not change cards', () => {
  for (const [x, y] of [[200, 180], [200, 100], [220, 102]]) {
    const { state, handlers: h, event: e } = setup();
    h.onPointerDown(e(200));
    h.onPointerMove(e(x, y));
    h.onPointerUp(e(x, y));
    assert.deepEqual(state.slides, []);
    assert.equal(state.offset, 0);
  }
});

for (const cancel of ['onPointerCancel', 'onLostPointerCapture']) {
  test(`${cancel} on the carousel cancels and allows the next gesture`, () => {
    const { state, handlers: h, event: e } = setup();
    h.onPointerDown(e(200));
    h.onPointerMove(e(150));
    h[cancel](e(150));
    h.onPointerUp(e(80));
    assert.deepEqual(state.slides, []);
    assert.equal(state.offset, 0);
    h.onPointerDown(e(200));
    h.onPointerMove(e(120));
    h.onPointerUp(e(100));
    assert.deepEqual(state.slides, ['next']);
  });
}

test('unrelated pointer events do not cancel the active swipe', () => {
  const { state, handlers: h, event: e } = setup();
  h.onPointerDown(e(200));
  h.onPointerMove(e(150));
  h.onPointerDown(e(200, 100, { pointerId: 2, isPrimary: false }));
  h.onPointerCancel(e(150, 100, { pointerId: 2 }));
  h.onLostPointerCapture(e(150, 100, { pointerId: 2 }));
  h.onPointerUp(e(100));
  assert.deepEqual(state.slides, ['next']);
});
