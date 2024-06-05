export type ClassListType = Record<string, boolean | string>;

export function getClassName(initClassList: string, classList: ClassListType) {
  return Object.entries(classList)
    .reduce(
      (acc, [name, isName]) => {
        if (isName) acc.push(name);
        return acc;
      },
      [initClassList],
    )
    .join(' ');
}
