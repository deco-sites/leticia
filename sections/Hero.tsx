import { ImageWidget } from "apps/admin/widgets.ts";

interface FancyCarouselProps {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  images?: ImageWidget[];
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  autoplay?: boolean;
  interval?: number;
}

export default function FancyCarousel({
  title = "Our Amazing Gallery",
  description = "Explore our stunning collection of images",
  images = [
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/b0f8ca2d-9c83-48f7-88de-1a6e6d1e9eb7",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  ],
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
  autoplay = true,
  interval = 5000,
}: FancyCarouselProps) {
  return (
    <div className="w-full py-12" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: textColor }}>
          {title}
        </h2>
        <p className="text-lg mb-8 text-center" style={{ color: textColor }}>
          {description}
        </p>
        <div className="carousel w-full rounded-xl shadow-2xl">
          {images.map((image, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <img src={image} className="w-full object-cover" alt={`Slide ${index + 1}`} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${index === 0 ? images.length : index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2 mt-4">
          {images.map((_, index) => (
            <a
              key={index}
              href={`#slide${index + 1}`}
              className="btn btn-xs btn-circle"
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
      {autoplay && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setInterval(() => {
                const carousel = document.querySelector('.carousel');
                const items = carousel.querySelectorAll('.carousel-item');
                const activeItem = carousel.querySelector('.carousel-item:target') || items[0];
                const nextItem = activeItem.nextElementSibling || items[0];
                window.location.hash = nextItem.id;
              }, ${interval});
            `,
          }}
        />
      )}
    </div>
  );
}