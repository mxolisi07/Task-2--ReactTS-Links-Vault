import React from "react";

interface FiltersProps {
  filter: string;
  setFilter: (tag: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filter, setFilter }) => {
  const tags = ["All", "Work", "Learning", "Personal"];

  return (
    <div className="filters">
      {tags.map((tag) => (
        <button
          key={tag}
          className={filter === tag ? "active" : ""}
          onClick={() => setFilter(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Filters;
