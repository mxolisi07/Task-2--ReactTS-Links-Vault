import React, { useEffect, useState } from "react";
import type { LinkItem } from "../src/types";
import { getLinks, saveLinks } from "../src/storage";
import SearchBar from "../components/SearchBar";
import SummaryCards from "../components/SummaryCards";
import LinkCard from "../components/LinkCard";
import EditLinkModal from "../components/EditLinkModal";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
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

  const filteredLinks = links.filter((link) => {
    const matchesSearch =
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.tag.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filter === "All" || link.tag === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
        <div className="search-link-button2">
        {/* Search + Add Link button */}
      <SearchBar query={searchQuery} onSearch={setSearchQuery} />
      <button className="add-link-btn" onClick={() => navigate("/add")}>
        + Add Link
      </button>
      </div>

      <h2 className="greeting">Hey, Mxoliswa!</h2>
      <p className="description">Here are your favorite links. Keep them organized and access them from anywhere.</p>

      {/* Summary cards */}
      <SummaryCards links={links} />

      {/* Category filters */}
      <div className="filters">
        {["All", "Work", "Learning", "Personal"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Your Links */}
      <h3 className="your-links">Your Links</h3>
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

      {/* Edit modal */}
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

export default Home;
