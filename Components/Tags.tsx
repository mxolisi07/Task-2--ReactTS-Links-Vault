import React, { useEffect, useState } from "react";
import type { LinkItem } from "../src/types";
import { getLinks } from "../src/storage";
import LinkCard from "../Components/LinkCard";



const Tags: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    setLinks(getLinks());
  }, []);

  const deleteLink = (id: number) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
    localStorage.setItem("links", JSON.stringify(updatedLinks));
  };

  // Group links by tag
  const grouped = links.reduce((acc: Record<string, LinkItem[]>, link) => {
    if (!acc[link.tag]) acc[link.tag] = [];
    acc[link.tag].push(link);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="tags">Tags</h2>
      {Object.keys(grouped).length === 0 ? (
        <p>No tags yet.</p>
      ) : (
        Object.keys(grouped).map((tag) => (
          <div className="tags-group" key={tag}>
            <h3 className="category">{tag}</h3>
            {grouped[tag].map((link) => (
               <LinkCard
              key={link.id}
              link={link}
              onDelete={deleteLink}
              onEdit={() => {}}
            />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Tags;
