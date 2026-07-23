import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarPlaceholderProps {
  className?: string;
  initials?: string;
  src?: string;
  alt?: string;
}

/** Responsive avatar placeholder backed by a generated SVG or a real photo if one is available. */
export function AvatarPlaceholder({ className, src, alt }: AvatarPlaceholderProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-border/70", className)}>
      <Image
        src={src ?? "/images/avatar-placeholder.svg"}
        alt={alt ?? "Portrait placeholder for Pabasara"}
        fill
        sizes="(max-width: 1024px) 90vw, 420px"
        className="object-cover"
        priority
      />
    </div>
  );
}
