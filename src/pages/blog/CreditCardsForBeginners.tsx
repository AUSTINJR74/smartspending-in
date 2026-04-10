import BlogLayout from "@/components/BlogLayout";
import siteContent from "@/data/siteContent";

const post = siteContent.blog.posts.find((p) => p.slug === "best-credit-cards-beginners-2025")!;

const CreditCardsForBeginners = () => (
  <BlogLayout
    title={post.title}
    tag={post.tag}
    readTime={post.readTime}
    date={post.date}
    heroImage={post.heroImage}
    body={post.body}
  />
);

export default CreditCardsForBeginners;
