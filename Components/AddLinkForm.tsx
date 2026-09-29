import React, { useState } from "react";
import type { LinkItem } from "../src/types";
import { getLinks, saveLinks } from "../src/storage";
import { useNavigate } from "react-router-dom";

const AddLink: React.FC = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) return;

    const newLink: LinkItem = {
      id: Date.now(),
      title,
      url,
      description,
      tag,
    };

    const updated = [...getLinks(), newLink];
    saveLinks(updated);

    // Navigate back to Home after adding
    navigate("/");
  };

  return (
    <div className="edit-screen">
      <h2>Add a New Link</h2>
      <form className="add-link-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tag (optional)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button type="submit">Save Link</button>
      </form>
    </div>
  );
};

export default AddLink;
