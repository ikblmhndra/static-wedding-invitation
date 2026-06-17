const navigationItems = [
  { label: "Home", href: "#hero" },
  { label: "Couple", href: "#couple" },
  { label: "Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" }
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-4 z-30">
      <div className="section-inner">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-card backdrop-blur-xl">
          <a
            href="#hero"
            className="cursor-pointer rounded-full px-3 py-2 font-display text-xl tracking-[0.18em] text-truffle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          >
            A &amp; D
          </a>
          <nav className="flex min-w-0 gap-1 overflow-x-auto whitespace-nowrap">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-[#705f59] transition-colors duration-200 hover:bg-white hover:text-truffle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
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
