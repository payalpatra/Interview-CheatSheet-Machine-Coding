import React, { useState, useRef, useEffect } from "react";

export default function InfiniteScrollObserver() {
  const allItems = Array.from(
    { length: 1000 },
    (_, index) => `Item ${index + 1}`
  );

  const ITEMS_PER_LOAD = 20;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Runs this logic whenever visibleCount changes

    if (visibleCount >= allItems.length) return;
    // Stop if all items are already visible (no more items to load)

    const lastElement = containerRef.current?.lastElementChild;
    // Get the last rendered DOM element inside the container

    if (!lastElement) return;
    // Exit if there is no last element yet

    if (observerRef.current) observerRef.current.disconnect();
    // Disconnect any existing observer to avoid multiple observers

    observerRef.current = new IntersectionObserver((entries) => {
      // Create a new observer that watches when the element enters the viewport

      if (entries[0].isIntersecting) {
        // Check if the observed element is currently visible in the viewport

        setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
        // Load more items by increasing the visible item count
      }
    });

    observerRef.current.observe(lastElement);
    // Start observing the last item in the list

    return () => observerRef.current.disconnect();
  }, [visibleCount]);

  return (
    <div ref={containerRef} style={{ padding: "20px" }}>
      {allItems.slice(0, visibleCount).map((item, index) => (
        <div
          key={index}
          style={{
            padding: "12px",
            margin: "8px 0",
            background: "#f2f2f2",
            borderRadius: "6px",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

/*

I will implement infinite scrolling using the IntersectionObserver API. 
I initially render a limited number of items using visibleCount. 
Then I create an IntersectionObserver and attach it to the last 
rendered element in the list using a ref. 
The observer watches when that element enters the viewport. 
When entries[0].isIntersecting becomes true, 
it means the user has scrolled to the bottom, 
so I increase visibleCount to load more items. 
When new items render, the effect runs again and the observer 
attaches to the new last element. 
I also disconnect the previous observer to avoid duplicate 
observers and potential memory leaks.
*/
