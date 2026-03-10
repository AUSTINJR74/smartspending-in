import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/blog-insurance-myths.png";

const InsuranceMyths = () => (
  <BlogLayout
    title="5 Insurance Myths That Cost You Money"
    tag="Insurance"
    readTime="5 min read"
    date="March 10, 2025"
    heroImage={heroImg}
  >
    <h2>Introduction</h2>
    <p>
      Insurance is often misunderstood. Many people either avoid it completely or buy the wrong type of coverage because of common myths. Understanding how insurance works can protect you from unexpected financial shocks.
    </p>

    <h2>Myth 1: "I'm Too Young for Insurance"</h2>
    <p>
      Many people believe insurance is only necessary later in life. In reality, buying insurance early can provide better coverage at lower premiums.
    </p>

    <h2>Myth 2: "Employer Insurance Is Enough"</h2>
    <p>
      Employer health insurance is helpful but often limited. If you change jobs or lose employment, the coverage may stop.
    </p>

    <h2>Myth 3: "Insurance Is a Waste of Money"</h2>
    <p>
      Insurance is not meant to generate profit — it protects you from financial risk during unexpected situations.
    </p>

    <h2>Myth 4: "All Policies Are the Same"</h2>
    <p>
      Different policies offer different benefits. Reading policy terms carefully is important before choosing coverage.
    </p>

    <h2>Myth 5: "Claims Are Always Rejected"</h2>
    <p>
      Claims are usually approved when policy terms are followed correctly.
    </p>

    <h2>Final Thoughts</h2>
    <p>
      Insurance is a safety net, not an investment. Understanding its purpose helps you choose the right protection for your financial future.
    </p>
  </BlogLayout>
);

export default InsuranceMyths;
