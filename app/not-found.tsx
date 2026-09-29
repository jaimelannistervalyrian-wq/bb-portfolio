import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFound">
      <p className="kicker">404 / PAGE NOT FOUND</p>
      <h1>This page stepped out.</h1>
      <p>The link may be outdated, or the page may still be in production.</p>
      <Link className="button buttonDark" href="/">Back to portfolio <span>↗</span></Link>
    </main>
  );
}
