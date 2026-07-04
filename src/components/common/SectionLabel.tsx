import type { SectionLabelProps } from "../../types";

export default function SectionLabel({
  text,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: "var(--text-label)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        color: "var(--primary)",
        marginBottom: "var(--space-4)",
      }}
    >
      [ {text} ]
    </p>
  );
}
