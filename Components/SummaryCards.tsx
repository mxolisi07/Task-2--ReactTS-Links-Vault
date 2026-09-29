import React from "react";
import type { LinkItem } from "../src/types";
import { FaLink, FaTags, FaMobileAlt } from "react-icons/fa";

interface Props {
  links: LinkItem[];
}

const SummaryCards: React.FC<Props> = ({ links }) => {
  const totalLinks = links.length;
  const uniqueTags = [...new Set(links.map((l) => l.tag))].filter(Boolean).length;

  return (
    <div className="summary-cards">
      <div className="summary-card">
        <FaLink className="summary-icon" />
        <span>Total Links:</span>
        <span className="total-links"> {totalLinks}</span>
      </div>
      <div className="summary-card">
        <FaTags className="summary-icon" />
        <span>Tags:</span>
        <span className="total-links"> {uniqueTags}</span>
      </div>
      <div className="summary-card">
        <FaMobileAlt className="summary-icon" />
        <span>Quick Access (From any device)</span>
      </div>
    </div>
  );
};

export default SummaryCards;
