const DEFAULT_BLOB_IMAGE_BASE_URL =
  "https://res.cloudinary.com/duafntunw/image/upload";

const BLOB_IMAGE_BASE_URL = (
  process.env.NEXT_PUBLIC_BLOB_API_URL || DEFAULT_BLOB_IMAGE_BASE_URL
).replace(/\/+$/, "");

export function getBlobImageUrl(fileName: string): string {
  return `${BLOB_IMAGE_BASE_URL}/${fileName.replace(/^\/+/, "")}`;
}
