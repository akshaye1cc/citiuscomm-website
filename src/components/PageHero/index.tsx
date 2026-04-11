type PageHeroProps = {
  title: string;
  highlight?: string;
  description: string;
};

const PageHero = ({ title, highlight, description }: PageHeroProps) => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-gray-50 pb-16 pt-[120px] dark:from-secondary dark:to-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">

      <div className="absolute right-0 top-0 z-0 opacity-40 lg:opacity-60">
        <div className="h-[450px] w-[450px] rounded-full bg-gradient-to-r from-primary/40 to-secondary/30 blur-3xl"></div>
      </div>

      <div className="absolute -left-20 bottom-0 z-0 opacity-30 lg:opacity-50">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-secondary/40 to-primary/30 blur-3xl"></div>
      </div>

      <div className="absolute right-1/4 top-1/3 z-0 h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/10 blur-3xl opacity-50 dark:opacity-30"></div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl">
            {title} {highlight && <span className="text-primary">{highlight}</span>}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl">
            {description}
          </p>

        </div>
      </div>

    </section>
  );
};

export default PageHero;