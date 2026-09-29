import React from "react";
import type { LinkItem } from "../src/types";
import { FaTrash, FaEdit, FaExternalLinkAlt, FaEllipsisV } from "react-icons/fa";


interface Props {
  link: LinkItem;
  onDelete: (id: number) => void;
  onEdit: (link: LinkItem) => void; // triggers modal
}

const LinkCard: React.FC<Props> = ({ link, onDelete, onEdit }) => {

        let faviconUrl = "";
        try {
        faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}`;
        } catch {
        faviconUrl = "default-icon.png"; // fallback
        }
  return (
    <div className="link-card">
      <div className="card-header">
        <div className="card-logo">
            <img src={faviconUrl} alt={`${link.title} logo`} />
            <h3>{link.title}</h3>
        </div>
        
        <div className="card-actions">
          <button onClick={() => window.open(link.url, "_blank")}>
            <FaExternalLinkAlt />
          </button>
          <button onClick={() => onEdit(link)}>
            <FaEdit />
          </button>
          <button onClick={() => onDelete(link.id)}>
            <FaTrash />
          </button>
          <button>
            <FaEllipsisV />
          </button>
        </div>
      </div>

      <a href={link.url} target="_blank" rel="noopener noreferrer" className="card-url">
        {link.url}
      </a>

      {link.description && <p className="card-description">{link.description}</p>}

      {link.tag && <button className="tag-btn">{link.tag}</button>}
    </div>
  );
};

export default LinkCard;
