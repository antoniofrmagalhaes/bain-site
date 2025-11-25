import { cn } from "@/lib/utils"; // se você tiver um utilitário de classes

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1500.8px] px-4", className)}>
      {children}
    </div>
  );
}
