import Frame from "./Frame";
import { projects } from "@/lib/data";

// Varied aspect ratios create the masonry rhythm (true CSS-columns masonry).
const aspects = [
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/6]",
];

export default function GalleryMosaic() {
  return (
    <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-gap:1.5rem]">
      {projects.map((project, idx) => (
        <li key={project.title} className="mb-6 break-inside-avoid">
          <figure className="group relative overflow-hidden">
            <Frame
              src={project.src}
              alt={project.title}
              className={`${aspects[idx % aspects.length]} w-full`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Caption over a gradient — works with photos and placeholders alike */}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 pt-12">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                {project.category}
              </p>
              <h3 className="mt-1 font-serif text-lg text-white">
                {project.title}
              </h3>
            </figcaption>

            {/* Hover: gold ring + faint wash */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-transparent transition-all duration-300 group-hover:bg-ink/5 group-hover:ring-gold"
            />
          </figure>
        </li>
      ))}
    </ul>
  );
}
