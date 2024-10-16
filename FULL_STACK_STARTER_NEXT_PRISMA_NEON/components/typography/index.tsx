import { cn } from "@/lib/utils";

export function H1({
  className,
  children,
}: {
  className?: string | null;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({
  className,
  children,
}: {
  className?: string | null;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({
  className,
  children,
}: {
  className?: string | null;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({
  className,
  children,
}: {
  className?: string | null;
  children: React.ReactNode;
}) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function P({
  className,
  children,
}: {
  className?: string | null;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}


export function SectionWrapper({
  className,
  inverted,
  children,
  id,
}: {
  className?: string | null;
  inverted?: boolean;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "p-24 space-y-4",
        inverted
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
        className
      )}
    >
      {children}
    </section>
  );
}
