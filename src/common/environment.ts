/**
 * Returns true if running on client.
 */
export function isClient() {
  return typeof window !== 'undefined';
}

/**
 * Returns true if running on server.
 */
export function isServer() {
  return !isClient();
}
