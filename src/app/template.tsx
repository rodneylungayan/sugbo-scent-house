/** Soft fade-in on every page change (opacity only, off for reduced motion). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade">{children}</div>;
}
