import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
  readingTime?: string;
  tags: string[];
}

export interface Props {
  title?: string;
  description?: string;
  posts?: Post[];
  subscriptionTitle?: string;
  subscriptionDescription?: string;
  subscriptionButtonText?: string;
  subscriptionBackgroundColor?: string;
  bottomImage?: ImageWidget;
  bottomImageTitle?: string;
  bottomImageDescription?: string;
  bottomImageButtonText?: string;
  bottomImageButtonLink?: string;
  bannerTitle?: string;
  bannerDescription?: string;
  bannerButtonText?: string;
  bannerButtonLink?: string;
  bannerBackgroundColor?: string;
  newBannerTitle?: string;
  newBannerDescription?: string;
  newBannerButtonText?: string;
  newBannerButtonLink?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  posts = [
    {
      title: "Title of blogpost #1",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Title of blogpost #2",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Title of blogpost #3",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
  ],
  subscriptionTitle = "Subscribe to Our Newsletter",
  subscriptionDescription = "Stay updated with our latest blog posts and news.",
  subscriptionButtonText = "Subscribe Now",
  /**
   * @format color-input
   */
  subscriptionBackgroundColor = "#f3f4f6",
  bottomImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  bottomImageTitle = "Discover More",
  bottomImageDescription = "Explore our latest content and stay ahead in the world of technology.",
  bottomImageButtonText = "Learn More",
  bottomImageButtonLink = "#",
  bannerTitle = "New Banner Title",
  bannerDescription = "This is a new banner below the image. You can customize this text.",
  bannerButtonText = "Click Here",
  bannerButtonLink = "#",
  /**
   * @format color-input
   */
  bannerBackgroundColor = "#4a5568",
  newBannerTitle = "New Banner Title",
  newBannerDescription = "This is a new banner. You can customize this text.",
  newBannerButtonText = "Learn More",
  newBannerButtonLink = "#",
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-4xl leading-snug">
              {title}
            </h2>
            <p class="text-lg">
              {description}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div class="border border-secondary rounded-lg overflow-hidden">
              <Image
                width={640}
                class="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="font-semibold">{post.readingTime}</div>
                <div class="space-y-2">
                  <h3 class="text-2xl">{post.title}</h3>
                  <p class="text-base">{post.excerpt}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg badge-primary text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
                <div class="flex flex-wrap gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="rounded-lg p-8 mt-12" style={{ backgroundColor: subscriptionBackgroundColor }}>
          <div class="max-w-2xl mx-auto text-center">
            <h3 class="text-3xl font-bold mb-4">{subscriptionTitle}</h3>
            <p class="text-lg mb-6">{subscriptionDescription}</p>
            <form class="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                class="input input-bordered w-full sm:w-64"
              />
              <button class="btn btn-primary">{subscriptionButtonText}</button>
            </form>
          </div>
        </div>
        <div class="mt-16 relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={bottomImage}
            alt="Bottom image"
            width={1200}
            height={400}
            class="w-full h-96 object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-center text-white p-8">
              <h3 class="text-4xl font-bold mb-4">{bottomImageTitle}</h3>
              <p class="text-xl mb-6">{bottomImageDescription}</p>
              <a href={bottomImageButtonLink} class="btn btn-primary btn-lg">
                {bottomImageButtonText}
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 rounded-lg p-8" style={{ backgroundColor: bannerBackgroundColor }}>
          <div class="max-w-4xl mx-auto text-center text-white">
            <h3 class="text-3xl font-bold mb-4">{bannerTitle}</h3>
            <p class="text-lg mb-6">{bannerDescription}</p>
            <a href={bannerButtonLink} class="btn btn-primary btn-lg">
              {bannerButtonText}
            </a>
          </div>
        </div>
        <div class="mt-8 bg-primary text-primary-content rounded-lg p-8">
          <div class="max-w-4xl mx-auto text-center">
            <h3 class="text-3xl font-bold mb-4">{newBannerTitle}</h3>
            <p class="text-lg mb-6">{newBannerDescription}</p>
            <a href={newBannerButtonLink} class="btn btn-secondary btn-lg">
              {newBannerButtonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}