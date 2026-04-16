import React, { useState, useEffect } from "react";

function UIPagination() {
  const allItems = Array.from(
    { length: 100 },
    (_, index) => `Item ${index + 1}`
  );

  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(allItems.slice(startIndex, endIndex));
  }, [currentPage]);

  return (
    <div>
      <h3>UI Pagination</h3>

      {currentItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage * itemsPerPage >= allItems.length}
      >
        Next
      </button>
    </div>
  );
}

export default UIPagination;
/*
I maintain a currentPage state to track which page the user is on. 
Based on that, I calculate the startIndex using (currentPage - 1) * itemsPerPage and 
determine the endIndex by adding itemsPerPage. 
Then I use Array.slice() to extract only the items for the current page 
and render them. The Prev and Next buttons update the page number 
while being disabled at boundaries to prevent navigating beyond 
available pages
*/
