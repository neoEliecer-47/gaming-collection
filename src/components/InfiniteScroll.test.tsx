import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InfiniteScroll from "./InfiniteScroll";
import { fetchCollections } from "@/server/actions";

jest.mock("@/server/actions", () => ({
  fetchCollections: jest.fn(),
}));

const mockInitialData = [
  { id: 1, name: "Collection 1", slug: 'gameOne', image_background: 'image', games: [{
    id: 1,
    name: 'ganme 1',
    slug: 'game 11',
    added: 4,
  }] },
  { id: 2, name: "Collection 2", slug: 'gameTwo', image_background: 'image2', games: [{
    id: 1,
    name: 'ganme 2',
    slug: 'game 22',
    added: 5,
  }] },
];

// Mock CollectionCard component
jest.mock("../components/card/CollectionCard.tsx", () => ({ collectionData }: any) => (
  <div data-testid="collection-card">{collectionData.title}</div>
));

// Mock Loading Spinner
jest.mock("../components/card/LoadingCollectionSpinner", () => () => (
  <div data-testid="loading-spinner">Loading...</div>
));

describe("InfiniteScroll Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders initial data correctly", () => {
    render(
      <InfiniteScroll
        collectionTypeEndpoint="test-endpoint"
        initialData={mockInitialData}
      />
    );

    // expect(screen.getAllByTestId("collection-card")).toHaveLength(2);
    // expect(screen.getByText("Collection 1")).toBeInTheDocument();
    // expect(screen.getByText("Collection 2")).toBeInTheDocument();
  });

  it("fetches more data when observer triggers", async () => {
    (fetchCollections as jest.Mock).mockResolvedValue({
      data: [{ id: 1, name: "Collection 1", slug: 'gameOne', image_background: 'image', games: [{
        id: 1,
        name: 'ganme 1',
        slug: 'game 11',
        added: 4,
      }] }],
      isNextPage: true,
    });

    render(
      <InfiniteScroll
        collectionTypeEndpoint="test-endpoint"
        initialData={mockInitialData}
      />
    );

    // Simulate scrolling to bottom (trigger observer)
    const observerDiv = screen.getByTestId("observer-div");
    observerDiv.scrollIntoView();

    

    await waitFor(() => {
      expect(fetchCollections).toHaveBeenCalledWith(1, "test-endpoint");
    });

    // New data should be added
    await waitFor(() => {
      expect(screen.getByText("Collection 3")).toBeInTheDocument();
    });
  });

  it("shows loading spinner while fetching", async () => {
    (fetchCollections as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve({ data: [], isNextPage: false }), 1000))
    );

    render(
      <InfiniteScroll
        collectionTypeEndpoint="test-endpoint"
        initialData={mockInitialData}
      />
    );

    // Trigger loading state
    const observerDiv = screen.getByTestId("observer-div");
    observerDiv.scrollIntoView();

    await waitFor(() => {
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });
  });

  it("stops fetching when hasMore is false", async () => {
    (fetchCollections as jest.Mock).mockResolvedValue({
      data: [],
      isNextPage: false,
    });

    render(
      <InfiniteScroll
        collectionTypeEndpoint="test-endpoint"
        initialData={mockInitialData}
      />
    );

    // Trigger fetch
    const observerDiv = screen.getByTestId("observer-div");
    observerDiv.scrollIntoView();

    await waitFor(() => {
      expect(fetchCollections).toHaveBeenCalledTimes(1);
    });

    // Try triggering again
    observerDiv.scrollIntoView();
    await waitFor(() => {
      expect(fetchCollections).toHaveBeenCalledTimes(1); // Should not call again
    });
  });
});