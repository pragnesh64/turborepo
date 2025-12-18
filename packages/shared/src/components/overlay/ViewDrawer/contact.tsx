export const TEXTAREA_THRESHOLD = 50;

export const getNestedValue = (
  obj: Record<string, unknown>,
  path: string
): unknown => {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (typeof acc === "object" && acc !== null) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
};


