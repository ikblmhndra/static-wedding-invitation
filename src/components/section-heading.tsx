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
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}
