import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using BuildsWebs services. Governed by the laws of India.",
  alternates: { canonical: "https://buildswebs.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="legal">
      <div className="wrap">
        <h1>Terms and conditions</h1>
        <p>Last updated: 24 October 2026</p>

        <h2>About these terms</h2>
        <p>These terms apply to your use of buildswebs.com and to services provided by BuildsWebs, Greater Noida, Uttar Pradesh, India. Specific projects are covered by a written quote or agreement, which takes priority if it differs from these terms.</p>

        <h2>Our services</h2>
        <p>We provide website design, local SEO, Google Business Profile management, Google Ads management, WhatsApp automation, e-commerce development and custom software. The scope, price, timeline and payment schedule of each project are set out in the quote or agreement you accept.</p>

        <h2>Free audit</h2>
        <p>The free audit is a review of your public online presence. It is provided for information and does not create any obligation for either side.</p>

        <h2>No guarantee of rankings or results</h2>
        <p>Search rankings and advertising results depend on factors outside our control, including search engine algorithms, competition and ad auction prices. We do not guarantee any ranking, traffic, enquiry or sales figure.</p>

        <h2>Payments</h2>
        <p>Fees are payable as stated in your quote or agreement. Advertising spend paid to Google, Meta or other platforms is separate from our fees unless the agreement says otherwise.</p>

        <h2>Your content and ownership</h2>
        <p>You confirm that the content and materials you give us are yours to use. On full payment, you own the final deliverables made specifically for you. We keep ownership of our own tools, code libraries and know-how, and third-party software remains under its own licence.</p>

        <h2>Third-party platforms</h2>
        <p>Our work relies on platforms such as Google, WhatsApp and Meta. Their rules and policies can change, and we are not responsible for decisions or outages on those platforms.</p>

        <h2>Limit of liability</h2>
        <p>To the extent the law allows, our total liability for any claim relating to our services is limited to the fees you paid us for the service in question, and we are not liable for indirect or consequential losses.</p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India. Courts in Gautam Buddha Nagar, Uttar Pradesh have jurisdiction over any dispute.</p>

        <h2>Contact</h2>
        <p>Questions about these terms: hello@buildswebs.com.</p>
      </div>
    </div>
  );
}
