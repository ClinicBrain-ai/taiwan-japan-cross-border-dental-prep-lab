import Link from "next/link";
import { pageContent } from "./content";
import { PageShell } from "./page-shell";

const primaryRoutes = [
  { href: "/demo", label: "Open synthetic demo" },
  { href: "/framework", label: "Review framework" },
  { href: "/safety", label: "Check safety boundaries" },
  { href: "/examples", label: "View synthetic examples" },
  { href: "/designer", label: "Study designer notes" },
  { href: "/about", label: "Read about the lab" },
] as const;

export default function Home() {
  return (
    <PageShell currentPath="/" {...pageContent.home}>
      <section className="route-panel" aria-label="Project routes">
        {primaryRoutes.map((route) => (
          <Link href={route.href} key={route.href}>
            {route.label}
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
