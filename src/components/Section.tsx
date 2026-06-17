import type { ElementType, ReactNode } from "react";

type Tone = "paper" | "cream" | "ink";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-umber",
  cream: "bg-cream text-umber",
  ink: "bg-ink text-white",
};

export default function Section({
  tone = "paper",
  as: Tag = "section",
  className = "",
  containerClassName = "",
  children,
}: {
  tone?: Tone;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`${tones[tone]} px-6 py-20 sm:px-10 sm:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </Tag>
  );
}
