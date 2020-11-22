const uniq = (arr: string[]) =>
  arr.filter((x: string, i: number, a: string[]) => a.indexOf(x) === i);

export const getTopics = (allTopics: string[]) =>
  allTopics.reduce(
    (a: any, c: any): string[] => uniq([...a, ...c.node.frontmatter.topics]),
    []
  );
