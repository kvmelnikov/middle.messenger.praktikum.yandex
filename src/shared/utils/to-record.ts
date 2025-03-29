export function roRecord<T extends object>(obj: T): Record<string, string> {
  const record: Record<string, string> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      record[key] = String(obj[key]);
    }
  }
  return record;
}
