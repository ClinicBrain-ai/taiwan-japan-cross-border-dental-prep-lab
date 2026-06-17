type SyntheticLabelProps = {
  text?: string;
};

export function SyntheticLabel({
  text = "Synthetic demo",
}: SyntheticLabelProps) {
  return <span className="synthetic-label">{text}</span>;
}
