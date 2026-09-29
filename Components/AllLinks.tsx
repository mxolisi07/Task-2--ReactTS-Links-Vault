import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LinkItem } from "../src/types";
import { getLinks, saveLinks } from "../src/storage";
import LinkCard from "../components/LinkCard";
import SearchBar from "../components/SearchBar";
import EditLinkModal from "../components/EditLinkModal";


const AllLinks: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLinks(getLinks());
  }, []);

  const deleteLink = (id: number) => {
    const updated = links.filter((l) => l.id !== id);
    setLinks(updated);
    saveLinks(updated);
  };

  const filteredLinks = links.filter(
    (l) => 
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.tag.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div>
      <div className="search-link-button2">
                {/* Search + Add Link button */}
            <SearchBar query={searchQuery} onSearch={setSearchQuery} />
            <button className="add-link-btn" onClick={() => navigate("/add")}>
                + Add Link
            </button>
        </div>
      
      {filteredLinks.length === 0 ? (
        <p>No links found.</p>
      ) : (
      <div className="card-grid">
          {filteredLinks.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              onDelete={deleteLink}
              onEdit={(l) => setEditingLink(l)}
            />
          ))}
        </div>
      )}

      {editingLink && (
        <EditLinkModal
          link={editingLink}
          onClose={() => setEditingLink(null)}
          onSave={(updated) => {
            setLinks(links.map((l) => (l.id === updated.id ? updated : l)));
          }}
        />
      )}
    </div>
  );
};

export default AllLinks;
