import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  image?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}

export default function Banner({
  title = "Welcome to Our Website",
  description = "Discover amazing products and services tailored just for you.",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937"
}: Props) {
  return (
    <div className="relative" style={{ backgroundColor }}>
      <img
        src={image}
        alt="Banner"
        className="w-full h-64 md:h-96 object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: textColor }}>
          {title}
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl" style={{ color: textColor }}>
          {description}
        </p>
      </div>
    </div>
  );
}