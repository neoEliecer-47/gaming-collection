import "@testing-library/jest-dom"; // For extra matchers like toBeInTheDocument()

// Mock ResizeObserver for Jest in TypeScript
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = MockResizeObserver;