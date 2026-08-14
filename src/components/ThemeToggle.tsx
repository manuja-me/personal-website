import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2.5 rounded-full border border-border/80 bg-card/90 backdrop-blur-md px-3.5 py-1.5 shadow-sm hover:border-primary/40 transition-all duration-200">
      <Sun className={cn("h-4 w-4 transition-colors duration-200", !isDark ? "text-amber-500" : "text-muted-foreground/60")} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Moon className={cn("h-4 w-4 transition-colors duration-200", isDark ? "text-primary" : "text-muted-foreground/60")} />
    </div>
  );
}
