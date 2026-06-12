import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="h-full w-full rounded-2xl border border-edge bg-surface p-8 transition-colors duration-200 hover:border-primary/40">
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
