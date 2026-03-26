import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">

        <div className="bg-primary/10 text-primary mb-6 flex h-[55px] w-[55px] items-center justify-center rounded-md">
          {icon}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
          {title}
        </h3>

        <p className="text-body-color text-sm leading-relaxed">
          {paragraph}
        </p>

      </div>
    </div>
  );
};

export default SingleFeature;