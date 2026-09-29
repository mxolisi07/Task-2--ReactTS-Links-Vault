import React from "react";

interface SearchBarProps {
  query: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search links..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
