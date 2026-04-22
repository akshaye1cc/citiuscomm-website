import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="group h-full w-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary/50">
        
        {/* Gradient Accent Bar */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] transition-all duration-500 group-hover:bg-[position:100%_0]"></div>

        {/* Icon Container with Enhanced Styling */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-xl bg-primary/5 blur-xl transition-all duration-300 group-hover:bg-primary/10"></div>
          <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:from-primary/20 group-hover:to-accent/10 group-hover:shadow-lg">
            <div className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
            {title}
          </h3>

          <p className="text-body-color text-base leading-relaxed">
            {paragraph}
          </p>
        </div>

        {/* Corner Decoration */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-tl from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

export default SingleFeature;