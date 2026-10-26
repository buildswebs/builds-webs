import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BuildsWebs – how we collect, use and protect your personal data under India's DPDPA 2023.",
  alternates: { canonical: "https://buildswebs.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="legal">
      <div className="wrap">
        <h1>Privacy policy</h1>
        <p>Last updated: 24 October 2026</p>

        <h2>Who we are</h2>
        <p>BuildsWebs (&quot;we&quot;, &quot;us&quot;) is a digital agency based in Greater Noida, Uttar Pradesh, India. You can reach us at hello@buildswebs.com or on WhatsApp at +91 82875 93102.</p>

        <h2>What we collect</h2>
        <p>This website does not have an account system or a contact form. We receive personal information only when you contact us, for example by WhatsApp, phone or email. This can include your name, phone number, email address, business name, city and anything you choose to tell us about your business.</p>
        <p>Our hosting provider may keep standard server logs, such as IP address and browser type, for security and reliability. If we add analytics or advertising tools to this site, we will list them here.</p>

        <h2>How we use it</h2>
        <ul>
          <li>To reply to your enquiry and prepare your free audit.</li>
          <li>To provide and manage services you ask us for.</li>
          <li>To send invoices and keep records we are required to keep.</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Who we share it with</h2>
        <p>We share information only with service providers we need to run our work, such as WhatsApp, Google, our hosting provider and payment or accounting tools, and where the law requires it. These providers handle data under their own policies.</p>

        <h2>How long we keep it</h2>
        <p>We keep enquiry details for as long as needed to respond to you and to meet legal and accounting requirements, and then delete them.</p>

        <h2>Your rights</h2>
        <p>Under India&apos;s Digital Personal Data Protection Act, 2023, you may ask us to give you a summary of the personal data we hold about you, correct it, or erase it. Write to hello@buildswebs.com and we will respond within a reasonable time.</p>

        <h2>Changes</h2>
        <p>We may update this policy. The date at the top shows when it last changed.</p>
      </div>
    </div>
  );
}
