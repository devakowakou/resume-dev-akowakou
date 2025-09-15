export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint?: string;
  demoUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
};

export type Article = {
  id: string;
  title: string;
  date: string;
  description: string;
  slug: string;
};
