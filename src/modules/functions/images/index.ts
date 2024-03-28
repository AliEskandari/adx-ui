export async function createFileFromImageBitmap(
  imageBitmap: any,
  fileName: any
): Promise<File> {
  try {
    // Create a canvas and draw the ImageBitmap on it
    const canvas = document.createElement("canvas");
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    const ctx = canvas.getContext("2d");
    ctx!.drawImage(imageBitmap, 0, 0);

    // Convert the canvas to a Blob using the toBlob method
    return new Promise<File>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          // Create a File object from the Blob
          const file = new File([blob], fileName || "image.png", {
            type: blob.type,
            lastModified: Date.now(),
          });
          resolve(file);
        } else {
          reject(new Error("Failed to create File from ImageBitmap."));
        }
      });
    });
  } catch (error) {
    console.error("Error creating file:", error);
    throw error;
  }
}
