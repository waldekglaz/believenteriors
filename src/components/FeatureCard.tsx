import Icon, { type IconName } from "./Icons";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-6 text-lg font-medium tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-taupe">{description}</p>
    </div>
  );
}
