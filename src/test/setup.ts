import "@testing-library/jest-dom/vitest";

// jsdom has no scrollIntoView or matchMedia; the page uses both.
Element.prototype.scrollIntoView = function () {};
window.matchMedia =
  window.matchMedia ||
  ((query: string) =>
    ({ matches: false, media: query, onchange: null, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {}, dispatchEvent: () => false }) as MediaQueryList);
