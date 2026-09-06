export function beBusy(duration: number) {
  const end = Date.now() + duration;

  while (Date.now() < end) {
    // Literally do nothing but burn CPU cycles.
  }
}
