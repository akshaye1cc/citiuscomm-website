import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="ds-card ds-sheen group relative h-full w-full overflow-hidden p-8">
      <div className="relative">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-muted text-brand">
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
