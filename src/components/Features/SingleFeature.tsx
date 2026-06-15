import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="ds-sheen group relative h-full w-full overflow-hidden rounded-2xl border border-edge bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-muted text-primary">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-fg">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-muted">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
