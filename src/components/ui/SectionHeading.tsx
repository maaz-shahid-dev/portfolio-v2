import type { ReactNode } from "react";

type Props = {
  kicker?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ kicker, title, description, align = "left", id }: Props) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 id={id} className="section-heading">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
