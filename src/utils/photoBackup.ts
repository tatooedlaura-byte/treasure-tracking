import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

/**
 * Save a photo to the device's photo library as a backup.
 * Only runs on native platforms; silently skips on web.
 * Best-effort — errors are logged but never thrown.
 */
export async function backupPhotoToLibrary(file: File): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const base64 = arrayBufferToBase64(arrayBuffer);

    await Filesystem.writeFile({
      path: `TreasureTracking/${file.name}`,
      data: base64,
      directory: Directory.Library,
      recursive: true,
    });
  } catch (err) {
    console.warn('[photoBackup] Failed to save to library:', err);
  }
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
