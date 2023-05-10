export function useUtil() {
  /**
   * Returns true if running on client.
   */
  const isClient = () => {
    return typeof window !== 'undefined';
  };

  /**
   * Returns true if running on server.
   */
  const isServer = () => {
    return !isClient();
  };

  return {
    isClient,
    isServer,
  };
}
