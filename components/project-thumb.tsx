import { FolderGit2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectThumbProps {
  title: string;
  category: string;
  image?: string;
  className?: string;
}

/** Generated thumbnail placeholder for projects — no photography available, so each card gets a distinct gradient + monogram instead of a broken image. */
export function ProjectThumb({ title, category, image, className }: ProjectThumbProps) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-t-2xl",
        "bg-[linear-gradient(135deg,rgba(0,194,168,0.16),rgba(255,176,32,0.08))]",
        className
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </>
      )}
      <div className="relative flex flex-col items-center gap-2">
        <span className="font-display text-4xl font-semibold tracking-tight text-foreground/80">
          {initials}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <FolderGit2 className="h-3 w-3" aria-hidden />
          {category}
        </span>
      </div>
    </div>
  );
}
