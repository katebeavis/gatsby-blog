export interface Node {
  node: {
    id: string;
    frontmatter: {
      title: string;
      lastUpdated: string;
      topics: string[];
    };
    fields: {
      slug: string;
    };
    excerpt?: string;
  };
}
