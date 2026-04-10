import BlogLayout from "@/components/BlogLayout";
import siteContent from "@/data/siteContent";

const post = siteContent.blog.posts.find((p) => p.slug === "insurance-myths")!;

const InsuranceMyths = () => (
  <BlogLayout
    title={post.title}
    tag={post.tag}
    readTime={post.readTime}
    date={post.date}
    heroImage={post.heroImage}
    body={post.body}
  />
);

export default InsuranceMyths;
