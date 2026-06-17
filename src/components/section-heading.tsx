type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const dividerClass =
    align === "center"
      ? "mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      : "mt-6 h-px w-24 bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0";

  return (
    <div className={alignmentClass}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <div className={dividerClass} />
      <p className="section-copy">{description}</p>
    </div>
  );
}
