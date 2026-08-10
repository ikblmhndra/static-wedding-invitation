const navigationItems = [
  { label: "Home", href: "#hero" },
  { label: "Couple", href: "#couple" },
  // { label: "Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" }
];

type NavigationProps = {
  names: string;
  monogram: string;
};

export function Navigation({ names, monogram }: NavigationProps) {
  return (
    <header className="fixed inset-x-0 top-4 z-30">
      <div className="section-inner">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/90 bg-white/[0.76] px-4 py-3 shadow-card backdrop-blur-xl">
          <a
            href="#hero"
            className="flex min-w-0 cursor-pointer items-center gap-3 rounded-full px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d9b389] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,231,219,0.86))] font-display text-lg text-truffle">
              {monogram}
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate font-display text-[1.35rem] leading-none text-truffle">
                {names}
              </span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.34em] text-[#8d6e69]">
                Wedding Invitation
              </span>
            </span>
          </a>
          <nav className="flex min-w-0 gap-1 overflow-x-auto whitespace-nowrap rounded-full bg-[#fff8f3]/70 p-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cursor-pointer rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#705f59] transition-all duration-200 hover:bg-white hover:text-truffle hover:shadow-[0_10px_24px_rgba(122,90,80,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 sm:text-sm sm:tracking-[0.18em]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
