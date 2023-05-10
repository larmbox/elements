const ELEMENTS_TELEPORT_TARGET = 'e';

export const TeleportTarget = {
  Modal: `${ELEMENTS_TELEPORT_TARGET}-md`,
  Tooltip: `${ELEMENTS_TELEPORT_TARGET}-tt`,
  Toast: `${ELEMENTS_TELEPORT_TARGET}-to`,
};

export function createElementsTeleportTarget(): void {
  if (typeof document === 'undefined') return;
  let global = document.getElementById(ELEMENTS_TELEPORT_TARGET);
  if (!global) {
    global = document.createElement('div');
    global.id = ELEMENTS_TELEPORT_TARGET;
    document.body.appendChild(global);
  }

  Object.values(TeleportTarget).forEach((a) => {
    let target = document.getElementById(a);
    if (!target) {
      target = document.createElement('div');
      target.setAttribute('id', a);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      global!.appendChild(target);
    }
  });
}
