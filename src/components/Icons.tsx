import type { SVGProps } from "react";

export type IconName =
  | "softClose"
  | "ruler"
  | "scribe"
  | "install"
  | "clean"
  | "durable"
  | "door"
  | "hinge"
  | "handle"
  | "fill"
  | "shelf"
  | "email"
  | "phone"
  | "whatsapp";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function Svg({ children, ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      {children}
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  softClose: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M12 4v16" />
      <path d="M8 11.5l1.5 1.5" />
      <path d="M16 11.5l-1.5 1.5" />
    </>
  ),
  ruler: (
    <>
      <rect x="2.5" y="8" width="19" height="8" rx="1" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </>
  ),
  scribe: (
    <>
      <path d="M4 20V6c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M4 20h16" />
    </>
  ),
  install: (
    <>
      <path d="M14.5 5.5l4 4" />
      <path d="M3 21l5-1 9.5-9.5a2.1 2.1 0 0 0-3-3L5 17l-2 4z" />
    </>
  ),
  clean: (
    <>
      <path d="M9 3h6l1 5H8z" />
      <path d="M10 8v6a2 2 0 0 0 4 0V8" />
      <path d="M12 16v5" />
    </>
  ),
  durable: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  door: (
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18" />
      <circle cx="15.5" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  hinge: (
    <>
      <rect x="4" y="3" width="6" height="18" rx="1" />
      <rect x="14" y="3" width="6" height="18" rx="1" />
      <path d="M10 8h4M10 16h4" />
    </>
  ),
  handle: (
    <>
      <rect x="4" y="4" width="11" height="16" rx="1" />
      <path d="M18 9v6" />
      <path d="M18 9h2M18 15h2" />
    </>
  ),
  fill: (
    <>
      <path d="M3 14l7-7 7 7-7 7z" />
      <path d="M14 6l3-3 4 4-3 3" />
    </>
  ),
  shelf: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 10h18M3 15h18" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.6-4.5A8 8 0 1 1 8 19.5z" />
      <path d="M8.5 8.5c0 4 3 7 7 7 .8 0 1.3-.7.9-1.4l-1-1.4-2 .7-1.8-1.8.7-2-1.4-1c-.7-.4-1.4.1-1.4.9z" />
    </>
  ),
};

export default function Icon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  return <Svg {...props}>{paths[name]}</Svg>;
}
