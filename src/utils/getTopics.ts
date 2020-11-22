const uniq = (arr: any) =>
  arr.filter((x: any, i: any, a: any) => a.indexOf(x) === i);

export const getTopics = (allTopics: string[]) =>
  allTopics.reduce(
    (a: any, c: any): string[] => uniq([...a, ...c.node.frontmatter.topics]),
    []
  );
