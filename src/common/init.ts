export const ELEMENTS_TELEPORT_TARGET = 'ETeleportTarget';

export function createElementsTeleportTarget(): void {
  if (typeof document === 'undefined') return;
  let global = document.getElementById(ELEMENTS_TELEPORT_TARGET);
  if (!global) {
    global = document.createElement('div');
    global.id = ELEMENTS_TELEPORT_TARGET;
    document.body.appendChild(global);
  }
}
