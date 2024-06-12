"use client";
import { useState, useEffect } from "react";

//BIG TODO!: Add typing
export const SearchBar = (searchItems: any[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const filter = (searchItems: any[]) => {
    // Idea: Instead of filter try a groupBy function
    const results = searchItems.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setResults(results);
  };

  //TODO: add debouncing
  useEffect(() => {
    filter(searchItems);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {results.map((item) => (
          /* TODO: make this a component */
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
