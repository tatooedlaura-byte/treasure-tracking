import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

/**
 * Take a photo using the device camera.
 * On native: uses Capacitor Camera plugin.
 * On web: falls back to a file input with capture attribute.
 */
export async function takePhoto(): Promise<File> {
  if (Capacitor.isNativePlatform()) {
    return takePhotoNative();
  }
  return takePhotoWeb();
}

async function takePhotoNative(): Promise<File> {
  const image = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 90,
  });

  const response = await fetch(image.webPath!);
  const blob = await response.blob();
  const filename = `photo_${Date.now()}.${image.format || 'jpeg'}`;
  return new File([blob], filename, { type: `image/${image.format || 'jpeg'}` });
}

function takePhotoWeb(): Promise<File> {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';

    input.onchange = () => {
      const file = input.files?.[0];
      if (file) {
        resolve(file);
      } else {
        reject(new Error('No photo selected'));
      }
    };

    // Handle cancel
    const onFocus = () => {
      window.removeEventListener('focus', onFocus);
      setTimeout(() => {
        if (!input.files?.length) {
          reject(new Error('Camera cancelled'));
        }
      }, 500);
    };
    window.addEventListener('focus', onFocus);

    input.click();
  });
}
