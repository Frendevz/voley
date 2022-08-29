let id = 0;

export function genId() {
  return ++id;
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
