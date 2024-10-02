export function isSafari(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1;
}

function supportStorageAccessApi(): boolean {
  return 'hasStorageAccess' in document && 'requestStorageAccess' in document;
}

export function hasStorageAccess(): Promise<boolean> {
  return document.hasStorageAccess();
}

export function requestStorageAccess(): Promise<void> {
  return document.requestStorageAccess();
}

export function requiresStoragePermissions(): boolean {
  return isSafari() && supportStorageAccessApi();
}
