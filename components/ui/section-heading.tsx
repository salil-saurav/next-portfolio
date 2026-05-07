type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-mint">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
