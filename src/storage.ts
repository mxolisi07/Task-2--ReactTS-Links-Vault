import type { LinkItem } from "../src/types";

const STORAGE_KEY = "linkVault";

export const getLinks = (): LinkItem[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveLinks = (links: LinkItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
};
