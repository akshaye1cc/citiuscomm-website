import Image from "next/image";

const leaders = [
  {
    id: 1,
    name: "SURENDRA SANCHETI",
    experience: "20 Years Experience",
    designation: "Founder and Managing Director",
    image: "/images/about/Surendra-Sancheti.webp",
  },
  {
    id: 2,
    name: "PRAMOD YADAV",
    experience: "19 Years Experience",
    designation: "Senior roles at Mavenir, Mitel, Reliance Jio IIML / Harvard Business Publishing",
    image: "/images/about/pramod_yadav.webp",
  },
  {
    id: 3,
    name: "PIYUSH DIKSHIT",
    experience: "25 Years Experience",
    designation: "CXO Positions at Samvardhana Motherson Group, Amtek Auto, Corning Inc., IIM C",
    image: "/images/about/Piyush-Dikshit.webp",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-16 md:py-20 lg:py-28">
      <div className="container">

        {/* Title */}
        <h2 className="text-black dark:text-white mb-16 text-center text-3xl font-bold sm:text-4xl md:text-[40px]">
          Leadership
        </h2>

        {/* Leaders Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="flex flex-col items-center text-center w-[280px]"
            >
              {/* Circular Image - Light Mode */}
              <div className="relative mb-6 h-[200px] w-[200px] overflow-hidden rounded-full dark:hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover drop-shadow-three"
                />
              </div>

              {/* Circular Image - Dark Mode */}
              <div className="relative mb-6 h-[200px] w-[200px] overflow-hidden rounded-full hidden dark:block">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover dark:drop-shadow-none"
                />
              </div>

              {/* Name */}
              <h3 className="text-black dark:text-white text-xl font-bold uppercase mb-2">
                {leader.name}
              </h3>

              {/* Experience */}
              <p className="text-body-color font-bold text-base mb-2">
                {leader.experience}
              </p>

              {/* Designation */}
              <p className="text-primary text-base font-medium">
                {leader.designation}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;