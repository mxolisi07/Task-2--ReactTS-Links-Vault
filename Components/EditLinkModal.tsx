import React, { useState } from "react";
import type { LinkItem } from "../src/types";
import { getLinks, saveLinks } from "../src/storage";

interface Props {
  link: LinkItem | null;
  onClose: () => void;
  onSave: (updated: LinkItem) => void;
}

const EditLinkModal: React.FC<Props> = ({ link, onClose, onSave }) => {
  if (!link) return null;

  const [title, setTitle] = useState(link.title);
  const [url, setUrl] = useState(link.url);
  const [tag, setTag] = useState(link.tag);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = { ...link, title, url, tag };
    const all = getLinks().map((l) => (l.id === link.id ? updated : l));
    saveLinks(all);
    onSave(updated);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Link</h2>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
          <input value={tag} onChange={(e) => setTag(e.target.value)} />
          <div className="modal-actions">
            <button className="save" type="submit">Save</button>
            <button className="cancel" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLinkModal;
