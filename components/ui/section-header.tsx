import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    align = "center",
    className
}: SectionHeaderProps) {
    return (
        <div className={cn("space-y-4 mb-12", align === "center" ? "text-center" : "text-left", className)}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground relative inline-block">
                {title}
                {align === "center" && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-primary" />
                )}
                {align === "left" && (
                    <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full bg-primary" />
                )}
            </h2>
            {subtitle && (
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
