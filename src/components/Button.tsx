import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "ghost-light" | "ghost-dark";

const variants: Record<Variant, string> = {
  // Outlined gold that fills on hover — gold is never a resting background.
  gold: "border border-gold text-gold hover:bg-gold hover:text-ink focus-visible:bg-gold focus-visible:text-ink",
  // For dark sections: white outline → white fill.
  "ghost-light":
    "border border-white/40 text-white hover:border-white hover:bg-white hover:text-ink",
  // For light sections: ink outline → ink fill.
  "ghost-dark":
    "border border-ink/30 text-ink hover:bg-ink hover:text-paper",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type AsButton = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export default function Button(props: AsLink | AsButton) {
  const { variant = "gold", className = "", children, href, ...rest } = props;
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href !== undefined) {
    const external = /^https?:|^mailto:|^tel:/.test(href);
    if (external) {
      return (
        <a href={href} className={classes} {...(rest as ComponentProps<"a">)}>
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<ComponentProps<typeof Link>, "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
