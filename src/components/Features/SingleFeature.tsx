import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="h-full w-full rounded-2xl border border-gray-200 bg-white p-8 transition-colors duration-200 hover:border-primary/40 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary/40">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-body-color text-base leading-relaxed">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
