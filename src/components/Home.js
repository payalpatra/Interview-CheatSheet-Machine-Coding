import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <>
          <h1>
            Machine Coding & Frontend Interview Prep — Experience-Based Roadmap
          </h1>
          <h2>2–4 Years Experience (Core Expectations)</h2>
          <h3>Core Machine Coding Components</h3>
          <Link to="/accodian">Accodian</Link>
          <Link to="/pagination">Pagination</Link>
          <Link to="/infiniteScroll">Infinite scroll list</Link>
          <Link to="/virtualization">Virtualisation</Link>
          <Link to="/tabs">Tabs</Link>
          <Link to="/form">Form</Link>
          <Link to="/modal">Modal</Link>
          <Link to="/carousal">Carousal</Link>
          <Link to="/dropdown">Dropdown</Link>
          <Link to="/progressBar">Progress Bar</Link>
          <Link to="/checkboxTree">Checkbox Tree</Link>
          <div>Reusable Button</div>
          <Link to="/toast">Toast</Link>
          <Link to="/textStreamer"> Text Streamer</Link>
          <Link to="/autoComplete"> Auto Complete</Link>

          <div>File Upload </div>
          <div> Star Rating </div>
          <div>Multi form Component/Stepper </div>
          <div>Table with sorting / filtering</div>
          <h3>Basic System-Level Machine Coding</h3>
          <Link to="/trafficLights">Traffic lights</Link>
          <div>Data table</div>
          <div>Autocomplete search</div>
          <div>Dynamic form</div>
          <div>Modal manager</div>
          <h3>Product-Level UI Problems</h3>
          {/* <div>Carousel component</div> */}
          <Link to="/todo">Todo app (with persistence & filters)</Link>

          <Link to="/fileExplorer">Folder structure / File explorer</Link>
          <Link to="/nestedComments">Nested Comments</Link>
          <div>Search + API + debounce</div>
          <h3>System Design</h3>
          <a
            href="https://excalidraw.com/#json=RI15o0VOhfNnCqtHki9aW,XinC0yZNWU_saQFemfQeXA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Auto Complete System Design
          </a>
          <h3>Custom Hooks & Utilities</h3>
          <div>Custom useFetch hook</div>
          <div>Controlled vs Uncontrolled form</div>
          <div>Error boundary</div>
          <div>Debounce hook</div>
          <div>Throttle hook</div>
          <div>usePrevious hook</div>
          <div>useLocalStorage hook</div>
          <div>useOutsideClick hook</div>
          <h3>Basic Performance Awareness</h3>
          <div>Prevent unnecessary re-renders</div>
          <div>Memoization demo (useMemo/useCallback/React.memo)</div>
          <div>Image lazy loading</div>
          <hr />
          <h2>4+ Years Experience (Advanced / Product-Level Expectations)</h2>
          <h3>Advanced System-Level Machine Coding</h3>
          <div>Chat UI</div>
          <div>Dashboard widgets</div>
          <div>Kanban board</div>
          <div>File explorer</div>
          <div>Calendar UI</div>
          <h3>Performance-Focused Implementations</h3>
          <div>Virtualized list (large data rendering)</div>
          <div>Code splitting demo</div>
          <div>Prevent unnecessary re-renders example</div>
          <h3>Advanced UI Behavior</h3>
          <div>Drag and drop without library</div>
          <div>Keyboard accessible navigation</div>
          <div>Focus trap inside modal</div>
          <div>Resizable panels</div>
          <div>Split view layout</div>
          <h3>State Management Patterns</h3>
          <div>Global state using Context API</div>
          <div>Zustand state example</div>
          <div>Redux slice demo</div>
          <div>Server state using React Query</div>
          <div>Optimistic UI update example</div>
          <h3>Async & Networking Patterns</h3>
          <div>API retry mechanism</div>
          <div>Request cancellation (AbortController)</div>
          <div>Polling UI</div>
          <div>WebSocket live updates UI</div>
          <div>Error handling boundary system</div>
          <h3>System Architecture Patterns</h3>
          <div>Multi-step form with stepper</div>
          <div>Role-based UI rendering</div>
          <div>Feature flag UI</div>
          <div>Plugin-based component architecture</div>
          <div>Config-driven UI rendering</div>
          <h3>Accessibility Implementations</h3>
          <div>ARIA-enabled modal</div>
          <div>Keyboard navigable dropdown</div>
          <div>Screen-reader friendly form</div>
          <div>Focus management example</div>
        </>
      </div>
    </div>
  );
}

export default Home;
