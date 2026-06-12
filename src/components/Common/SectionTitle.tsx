import Badge from "@/components/ui/Badge";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}

const SectionTitle = ({
  eyebrow,
  title,
  paragraph,
  width = "570px",
  center,
  mb = "60px",
}: SectionTitleProps) => (
  <div
    className={`w-full ${center ? "mx-auto text-center" : ""}`}
    style={{ maxWidth: width, marginBottom: mb }}
  >
    {eyebrow && (
      <div className="mb-4">
        <Badge variant="brand" dot>{eyebrow}</Badge>
      </div>
    )}
    <h2 className="mb-4 text-3xl font-bold leading-tight text-fg sm:text-4xl">
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
