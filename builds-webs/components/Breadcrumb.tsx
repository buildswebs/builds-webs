import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: Props) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && " / "}
          {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
        </span>
      ))}
    </nav>
  );
}
