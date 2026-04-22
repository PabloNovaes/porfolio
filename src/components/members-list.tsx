import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function MemberList({
  members,
  className,
}: {
  members: string[];
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}) {
  if (!members?.length) return null;

  return (
    <div
      className={cn(
        "border-border bg-card rounded-full flex items-center gap-1.5 border p-1 shadow-sm shadow-black/5",
        className,
      )}>
      <AvatarGroup>
        {members.map((member) => (
          <a
            key={member}
            href={`https://github.com/${member}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative transition-all duration-200 ease-in-out hover:z-10 hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:rounded-full">
            <Avatar className="size-7 border border-transparent hover:border-border cursor-pointer">
              <AvatarImage
                src={`https://github.com/${member}.png`}
                alt={member}
              />
              <AvatarFallback>
                {member
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </a>
        ))}
      </AvatarGroup>
      <p className="text-muted-foreground me-1.5 text-xs font-semibold">
        Membros do projeto
      </p>
    </div>
  );
}
