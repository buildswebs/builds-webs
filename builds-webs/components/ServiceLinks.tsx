import Link from "next/link";

const ALL_SERVICES = [
  { href: "/services/local-seo", label: "Local SEO" },
  { href: "/services/google-business-profile", label: "Google Business Profile" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/whatsapp-automation", label: "WhatsApp automation" },
  { href: "/services/website-design", label: "Website design" },
  { href: "/services/ecommerce-development", label: "E-commerce development" },
  { href: "/services/custom-software", label: "Custom software" },
];

interface Props {
  /** hrefs to exclude from the list (e.g. the current page) */
  exclude?: string[];
}

export default function ServiceLinks({ exclude = [] }: Props) {
  const links = ALL_SERVICES.filter((s) => !exclude.includes(s.href));
  return (
    <section>
      <div className="wrap">
        <h2>Other services</h2>
        <ul className="tags">
          {links.map((s) => (
            <li key={s.href}>
              <Link href={s.href}>{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
