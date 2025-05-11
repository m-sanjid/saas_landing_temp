import { BarChart2 } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md text-primary-foreground">
      <BarChart2 size={20} className="h-5 w-5" />
    </div>
  );
}