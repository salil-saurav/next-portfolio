import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  root = null;
  rootMargin = "";
  thresholds = [];
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver
});

// Global mock for framer-motion to handle animations in all components
vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: vi.fn().mockImplementation(({ children, ...props }) => {
        const { whileHover, whileInView, initial, animate, exit, transition, viewport, ...rest } = props;
        return <div {...rest}>{children}</div>;
      }),
      section: vi.fn().mockImplementation(({ children, ...props }) => {
        const { whileHover, whileInView, initial, animate, exit, transition, viewport, ...rest } = props;
        return <section {...rest}>{children}</section>;
      }),
      h1: vi.fn().mockImplementation(({ children, ...props }) => {
        const { whileHover, whileInView, initial, animate, exit, transition, viewport, ...rest } = props;
        return <h1 {...rest}>{children}</h1>;
      }),
      h2: vi.fn().mockImplementation(({ children, ...props }) => {
        const { whileHover, whileInView, initial, animate, exit, transition, viewport, ...rest } = props;
        return <h2 {...rest}>{children}</h2>;
      }),
      p: vi.fn().mockImplementation(({ children, ...props }) => {
        const { whileHover, whileInView, initial, animate, exit, transition, viewport, ...rest } = props;
        return <p {...rest}>{children}</p>;
      }),
      article: vi.fn().mockImplementation(({ children, ...props }) => {
        const { whileHover, whileInView, initial, animate, exit, transition, viewport, ...rest } = props;
        return <article {...rest}>{children}</article>;
      }),
      span: vi.fn().mockImplementation(({ children, ...props }) => {
        const { whileHover, whileInView, initial, animate, exit, transition, viewport, ...rest } = props;
        return <span {...rest}>{children}</span>;
      }),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});
