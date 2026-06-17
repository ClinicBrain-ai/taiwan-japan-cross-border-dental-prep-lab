import { URGENT_WARNING_NOTICE } from "@/lib/boundaryChecks";

type RedFlagNoticeProps = {
  active?: boolean;
};

export function RedFlagNotice({ active = true }: RedFlagNoticeProps) {
  if (!active) {
    return null;
  }

  return (
    <aside className="red-flag-notice" role="note" aria-label="Urgent warning notice">
      <h2>Urgent warning notice</h2>
      <p>{URGENT_WARNING_NOTICE}</p>
    </aside>
  );
}
