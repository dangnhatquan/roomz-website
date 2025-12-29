type Dict = Record<string, any>;
export function getValue(obj: Dict, path: string) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}
