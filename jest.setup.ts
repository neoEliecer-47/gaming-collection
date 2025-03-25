import "@testing-library/jest-dom"; // For extra matchers like toBeInTheDocument()

beforeAll(() => {
      // Mock scrollIntoView
      window.HTMLElement.prototype.scrollIntoView = jest.fn();
    });
// Mock ResizeObserver for Jest in TypeScript
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.options = options;
  }

  observe = jest.fn(); // Mock the observe method
  unobserve = jest.fn(); // Mock the unobserve method
  disconnect = jest.fn(); // Mock the disconnect method
}



global.ResizeObserver = MockResizeObserver;
global.IntersectionObserver = MockIntersectionObserver as any;