import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Member = {
  id: number;
  name: string;
  role: string;
  description: string;
  /** Optional real photo. When omitted, an initials placeholder is rendered. */
  image?: string;
};

type TeamGroup = {
  title: string;
  members: Member[];
};

// TODO: add photos for all members by dropping images in /public/images/about
// and setting the `image` field on each member.
const teams: TeamGroup[] = [
  {
    title: "Leadership Team",
    members: [
      {
        id: 1,
        name: "Surendra Sancheti",
        role: "Co-founder & Managing Partner",
        description:
          "Two decades of leadership across telecom and enterprise technology, steering Citiuscomm's vision and execution.",
        image: "/images/about/Surendra-Sancheti.webp",
      },
      {
        id: 2,
        name: "Pramod Yadav",
        role: "Co-founder & Director",
        description:
          "Senior roles at Mavenir, Mitel, and Reliance Jio — deep expertise in network products and go-to-market.",
        image: "/images/about/pramod_yadav.webp",
      },
      {
        id: 3,
        name: "Siba Dash",
        role: "Chief Delivery Officer",
        description:
          "Leads delivery excellence and operational execution across all Citiuscomm initiatives, ensuring world-class service delivery.",
      },
    ],
  },
  {
    title: "Business Development",
    members: [
      {
        id: 4,
        name: "Vishal Patil",
        role: "VP Enterprise Sales",
        description:
          "Drives enterprise sales strategy and client partnerships, bringing deep market expertise and relationship-building excellence.",
      },
      {
        id: 5,
        name: "Pravin Redekar",
        role: "VP Sales",
        description:
          "Leads sales execution and market expansion, building strong client relationships across key market segments.",
      },
      {
        id: 6,
        name: "Avnish Rana",
        role: "VP Business Strategy",
        description:
          "Shapes strategic direction and market positioning, driving growth initiatives and competitive advantage.",
      },
    ],
  },
  {
    title: "Business Relations",
    members: [
      {
        id: 7,
        name: "Runa Mondal",
        role: "Director, Operations",
        description:
          "Oversees operational excellence and business relations, ensuring seamless execution and stakeholder alignment.",
      },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const Avatar = ({ member }: { member: Member }) =>
  member.image ? (
    <div className="relative mx-auto mb-6 h-[160px] w-[160px] overflow-hidden rounded-full border-4 border-brand-muted">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="160px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  ) : (
    <div
      aria-hidden
      className="mx-auto mb-6 flex h-[160px] w-[160px] items-center justify-center rounded-full border-4 border-brand-muted bg-brand-muted text-3xl font-bold tracking-wide text-primary transition-transform duration-500 group-hover:scale-105"
    >
      {initials(member.name)}
    </div>
  );

const MemberCard = ({ member }: { member: Member }) => (
  <div className="ds-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
    <Avatar member={member} />
    <h3 className="mb-1 text-xl font-bold uppercase tracking-wide text-fg">{member.name}</h3>
    <p className="mb-3 text-sm font-semibold text-primary">{member.role}</p>
    <p className="text-sm leading-relaxed text-muted">{member.description}</p>
  </div>
);

const Leadership = () => (
  <section id="leadership" className="relative overflow-hidden bg-canvas py-16 md:py-20 lg:py-28">
    {/* Decorative dot background */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="ds-dots absolute inset-0 text-primary/[0.08] dark:text-brand/[0.1]" />
      <div className="absolute -top-40 right-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-3xl dark:bg-brand/[0.05]" />
    </div>

    <div className="container relative z-10 space-y-16 lg:space-y-20">
      {teams.map((team) => (
        <div key={team.title}>
          <Reveal>
            <h2 className="mb-8 text-2xl font-bold text-fg sm:text-3xl">{team.title}</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {team.members.map((member, i) => (
              <Reveal
                key={member.id}
                delay={i * 0.1}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[280px]"
              >
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Leadership;
