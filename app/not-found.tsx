import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-black gradient-text">404</h1>
      <p className="mt-3 font-mono text-sm text-theme-muted">// page not found</p>
      <p className="mt-2 text-sm text-theme-muted">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg gradient-primary px-5 py-2.5 text-sm font-semibold text-white"
      >
        Go Home
      </Link>
    </div>
  );
}
