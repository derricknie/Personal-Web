export function SectionDivider() {
  return (
    <div aria-hidden="true" className="mx-auto flex max-w-7xl items-center px-5 sm:px-8">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="mx-4 flex items-center gap-2 text-appleBlue/45">
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        <span className="h-px w-10 bg-gradient-to-r from-current to-transparent" />
        <span className="h-2.5 w-2.5 rounded-full border border-current" />
        <span className="h-px w-10 bg-gradient-to-l from-current to-transparent" />
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent" />
    </div>
  );
}
