import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="ds-sheen group relative h-full w-full overflow-hidden rounded-3xl border border-edge/60 bg-gradient-to-br from-surface to-surface/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-muted to-brand-muted/60 text-brand transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-fg">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
