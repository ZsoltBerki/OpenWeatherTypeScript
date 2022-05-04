export const isMissing = (v: any) => v === undefined || v === null;
export const isEmpty = (v: string) =>
  v === undefined || v === null || v.length <= 0;
