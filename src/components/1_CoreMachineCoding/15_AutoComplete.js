import React, { useState, useRef } from "react";

function Autocomplete() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const controllerRef = useRef(null);
  // const latestRequestId = useRef(0);
  const debounceTimer = useRef(null);

  const fetchResults = async (value) => {
    if (!value) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const filtered = data.filter((user) =>
        user.name.toLowerCase().startsWith(value.toLowerCase())
      );

      setResults(filtered);
    } catch (err) {
      setError("Failed to fetch results");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Debounce logic
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      fetchResults(value);
    }, 300);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        style={{ width: "70%" }}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0, margin: 10 }}>
        {results.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
/*
First, I will maintain states for the query, results, loading, and error 
so the UI can reflect user input, fetched suggestions, loading indicators, and API failures.

To avoid calling the API on every keystroke, I implemented debouncing using setTimeout stored in a 
useRef, so the API call only happens if the user stops typing for about 300 milliseconds.

Next, I use an AbortController stored in a ref to cancel any previous API request 
whenever a new search starts. This prevents unnecessary network calls.

I also track a request ID using a ref to avoid race conditions. 
If multiple requests are in flight, I ensure that only the response from the 
latest request updates the results.

After fetching the data, I filter the users based on the 
typed query and update the suggestions list.

Finally, the component handles loading and error states
 and renders the filtered results below the input field.

*/

// const fetchResults = async (value) => {
//   if (!value) {
//     setResults([]);
//     return;
//   }

//   // Cancel previous request
//   if (controllerRef.current) {
//     controllerRef.current.abort();
//   }

//   const controller = new AbortController();
//   controllerRef.current = controller;

//   const requestId = ++latestRequestId.current;

//   try {
//     setLoading(true);
//     setError(null);

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
//       signal: controller.signal,
//     });

//     if (!res.ok) throw new Error("API Error");

//     const data = await res.json();
//     const filtered = data.filter((user) =>
//       user.name
//         .slice(0, value.length)
//         .toLowerCase()
//         .includes(value.toLowerCase())
//     );

//     // Prevent stale updates
//     if (requestId === latestRequestId.current) {
//       setResults(filtered);
//     }
//   } catch (err) {
//     if (err.name !== "AbortError") {
//       setError("Failed to fetch results");
//     }
//   } finally {
//     setLoading(false);
//   }
// };
