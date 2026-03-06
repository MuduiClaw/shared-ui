import React, { type ReactNode } from "react";

function cn(...parts: Array<string | null | undefined | false>): string {
  return parts.filter(Boolean).join(" ");
}

export function PageIntro({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  );
}

export function Section({
  title,
  children,
  className,
  id,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mb-8", className)}>
      <h2 className="section-title">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Card({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card", className)}>
      {title ? (
        <div className="card-header">
          <p className="card-title">{title}</p>
        </div>
      ) : null}
      <div className="card-content">{children}</div>
    </div>
  );
}

export function MetricCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string | number;
  note?: string;
}) {
  return (
    <Card title={label}>
      <p className="metric-value">{value}</p>
      {note ? <p className="metric-note">{note}</p> : null}
    </Card>
  );
}

export function StatusBadge({
  status,
  label,
}: {
  status: string;
  label?: string;
}) {
  const value = status.toLowerCase();
  let cls = "badge";

  if (/(ok|pass|running|enabled|healthy|active|yes|true|运行)/.test(value)) {
    cls = "badge badge-ok";
  } else if (/(error|fail|crash|timeout|false|no)/.test(value)) {
    cls = "badge badge-error";
  } else if (/(stale|idle|disabled|none|过期|禁用)/.test(value)) {
    cls = "badge badge-stale";
  } else if (/(warn|unknown|marginal|待命)/.test(value)) {
    cls = "badge badge-warn";
  } else {
    cls = "badge badge-info";
  }

  return <span className={cls}>{label ?? status}</span>;
}

export function PrimaryButton({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="rounded-[4px] border border-[#0f4c81] bg-[#0f4c81] px-3 py-2 text-sm text-white hover:bg-[#0d3f6e] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export function OutlineButton({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="rounded-[4px] border border-[#8e99a4] bg-[#fafbfc] px-3 py-2 text-sm font-medium text-[#4a5568] transition-all hover:border-[#0f4c81] hover:bg-[#e8eef4] hover:text-[#0f4c81] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export function TruncatedText({
  text,
  maxLength = 120,
}: {
  text: string;
  maxLength?: number;
}) {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span title={text} className="cursor-help">
      {text.slice(0, maxLength)}...
    </span>
  );
}

export function EmptyState({ text }: { text: string }) {
  return <div className="panel p-4 text-sm text-[#666]">{text}</div>;
}

export function DataError({ text }: { text: string }) {
  return (
    <div className="rounded-[4px] border border-[#fecaca] bg-[#fef2f2] p-3 text-sm text-[#c53030]">
      {text}
    </div>
  );
}
