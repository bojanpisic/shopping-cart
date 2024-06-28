export const localData = {
  add: (key: string, value: unknown): void => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: string): void => localStorage.removeItem(key),
  get: <T>(key: string): T | undefined => {
    const data = localStorage.getItem(key);
    return (data ? JSON.parse(data) : undefined) as T | undefined;
  },
};