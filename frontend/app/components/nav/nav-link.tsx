// app/components/nav/nav-link.tsx
import { NavLink as RemixNavLink } from "@remix-run/react";
import { cn } from "../../lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ to, children, className, ...props }: NavLinkProps) {
  return (
    <RemixNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "transition-colors hover:text-foreground/80",
          isActive ? "text-foreground font-medium" : "text-foreground/60",
          className
        )
      }
      {...props}
    >
      {children}
    </RemixNavLink>
  );
}