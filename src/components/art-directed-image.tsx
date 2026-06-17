import Image from "next/image";
import type { CSSProperties } from "react";

import type { ArtDirectedImageAsset } from "@/data/invitation";

type ArtDirectedImageProps = {
  image: ArtDirectedImageAsset;
  sizes: string;
  className?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

export function ArtDirectedImage({
  image,
  sizes,
  className = "",
  objectFit = "cover",
  objectPosition,
  priority = false,
  loading
}: ArtDirectedImageProps) {
  const style = {
    "--image-position-mobile": image.focus?.mobile ?? "center",
    "--image-position-desktop": image.focus?.desktop ?? image.focus?.mobile ?? "center",
    objectPosition: objectPosition ?? (objectFit === "contain" ? "center center" : undefined)
  } as CSSProperties;

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      loading={loading}
      sizes={sizes}
      style={style}
      className={`art-directed-image ${objectFit === "contain" ? "object-contain" : "object-cover"} ${className}`.trim()}
    />
  );
}
