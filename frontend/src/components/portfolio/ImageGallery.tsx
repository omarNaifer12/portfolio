import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ImageIcon } from "lucide-react";

const PREVIEW_COUNT = 6;

export const ImageGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(
    () => setLightboxIdx((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setLightboxIdx((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, close, prev, next]);

  if (!images.length) {
    return (
      <div className="absolute inset-0 grid place-items-center p-8 text-center">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="relative space-y-3">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-secondary border border-border">
            <ImageIcon className="text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground max-w-xs">Add screenshot URLs to the images array</p>
        </div>
      </div>
    );
  }

  const main = images[activeIdx];
  const previewImages = images.slice(0, PREVIEW_COUNT);
  const remaining = images.length - PREVIEW_COUNT;

  return (
    <>
      {/* Main image */}
      <button
        type="button"
        onClick={() => setLightboxIdx(activeIdx)}
        className="absolute inset-0 group"
        aria-label="Open image"
      >
        <img
          src={main}
          alt={`${title} screenshot ${activeIdx + 1}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
        />
      </button>

      {/* Nav arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-10 w-10 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((i) => (i + 1) % images.length);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-10 w-10 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Thumbnails strip */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex gap-2 overflow-x-auto pb-1">
        {previewImages.map((src, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(i);
            }}
            className={`relative flex-shrink-0 h-14 w-20 rounded-lg overflow-hidden border-2 transition-all ${
              activeIdx === i ? "border-primary scale-105" : "border-border/50 opacity-70 hover:opacity-100"
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
        {remaining > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx(PREVIEW_COUNT);
            }}
            className="relative flex-shrink-0 h-14 w-20 rounded-lg overflow-hidden border-2 border-border/50 glass grid place-items-center text-xs font-semibold hover:border-primary"
          >
            +{remaining} more
          </button>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md grid place-items-center p-4 animate-in fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 grid place-items-center h-12 w-12 rounded-full glass hover:bg-destructive hover:text-destructive-foreground transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full glass text-sm font-medium">
            {lightboxIdx + 1} / {images.length}
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-14 w-14 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-14 w-14 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          <img
            src={images[lightboxIdx]}
            alt={`${title} screenshot ${lightboxIdx + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            style={{ width: "90vw", height: "85vh", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
};
