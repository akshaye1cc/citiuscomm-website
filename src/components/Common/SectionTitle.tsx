import Badge from "@/components/ui/Badge";
import SectionAccent from "@/components/ui/SectionAccent";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  /** Render the shared 2px accent above the eyebrow. Opt-in, so pages that
   *  have not had the harmony pass keep their current heading exactly. */
  accent?: boolean;
}

const SectionTitle = ({
  eyebrow,
  title,
  paragraph,
  width = "570px",
  center,
  mb = "60px",
  accent,
}: SectionTitleProps) => (
  <div
    className={`w-full ${center ? "mx-auto text-center" : ""}`}
    style={{ maxWidth: width, marginBottom: mb }}
  >
    {accent && (
      <div className={`mb-6 flex ${center ? "justify-center" : ""}`}>
        <SectionAccent />
      </div>
    )}
    {eyebrow && (
      <div className="mb-4">
        <Badge variant="brand" dot>{eyebrow}</Badge>
      </div>
    )}
    <h2 className="mb-4 text-3xl font-bold leading-tight text-heading sm:text-4xl">
      {title}
    </h2>
    {paragraph && (
      <p className="text-base leading-relaxed text-muted md:text-lg">
        {paragraph}
      </p>
    )}
  </div>
);

export default SectionTitle;
