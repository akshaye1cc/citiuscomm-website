import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const leaders = [
  {
    id: 1,
    name: "Surendra Sancheti",
    experience: "20 Years Experience",
    designation: "Founder and Managing Director",
    image: "/images/about/Surendra-Sancheti.webp",
  },
  {
    id: 2,
    name: "Pramod Yadav",
    experience: "19 Years Experience",
    designation: "Senior roles at Mavenir, Mitel, Reliance Jio IIML / Harvard Business Publishing",
    image: "/images/about/pramod_yadav.webp",
  },
  {
    id: 3,
    name: "Piyush Dikshit",
    experience: "25 Years Experience",
    designation: "CXO Positions at Samvardhana Motherson Group, Amtek Auto, Corning Inc., IIM C",
    image: "/images/about/Piyush-Dikshit.webp",
  },
];

const Leadership = () => (
  <section id="leadership" className="bg-canvas py-16 md:py-20 lg:py-28">
    <div className="container">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {leaders.map((leader, i) => (
          <Reveal key={leader.id} delay={i * 0.1}>
            <div className="ds-sheen group relative h-full overflow-hidden rounded-2xl border border-edge bg-surface p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative mx-auto mb-6 h-[180px] w-[180px] overflow-hidden rounded-full border-4 border-brand-muted">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="180px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mb-1 text-xl font-bold uppercase tracking-wide text-fg">
                {leader.name}
              </h3>
              <p className="mb-3 text-sm font-semibold text-muted">{leader.experience}</p>
              <p className="text-sm font-medium leading-relaxed text-primary">
                {leader.designation}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
