/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { type ReactNode, useState, createContext, useContext } from 'react';
import { NavLink, useLocation } from '@remix-run/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SidebarProps {
  children: ReactNode;
  className?: string;
}

interface SidebarContentProps {
  className?: string;
  mainNav: ReactNode;
  bottomNav: ReactNode;
}

interface LinkProps {
  label: string;
  href: string;
  icon: ReactNode;
}

interface SidebarLinkProps {
  link: LinkProps;
  className?: string;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export function Sidebar({ children, className }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function SidebarContent({ className, mainNav, bottomNav }: SidebarContentProps) {
  const { open, setOpen } = useSidebar();

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "p-4 hidden md:flex md:flex-col bg-gray-100 dark:bg-gray-800 h-[calc(100vh-4rem)]",
          open ? "w-[200px]" : "w-[80px]",
          "transition-all duration-300",
          className
        )}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            {mainNav}
          </div>
          <div className="mt-auto pt-4 border-t dark:border-gray-700">
            {bottomNav}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <div className="p-4 flex justify-end">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {open && (
          <div 
            className="fixed inset-0 bg-black/50 z-40" 
            onClick={() => setOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setOpen(false);
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div 
              className="fixed top-16 bottom-0 left-0 w-[300px] bg-white dark:bg-gray-800 p-4 z-50"
              onClick={e => e.stopPropagation()}
              role="navigation"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex-grow">
                  {mainNav}
                </div>
                <div className="mt-auto pt-4 border-t dark:border-gray-700">
                  {bottomNav}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export function SidebarLink({ link, className }: SidebarLinkProps) {
  const { open } = useSidebar();
  const location = useLocation();
  const isActive = location.pathname === link.href;

  return (
    <NavLink
      to={link.href}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
          "text-gray-700 dark:text-gray-200",
          "hover:bg-gray-200 dark:hover:bg-gray-700",
          isActive && "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400",
          className
        )
      }
    >
      <span className={cn(
        isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"
      )}>
        {link.icon}
      </span>
      <span 
        className={cn(
          "text-sm transition-[width] duration-200",
          open ? "w-auto opacity-100" : "w-0 opacity-0 md:hidden"
        )}
      >
        {link.label}
      </span>
    </NavLink>
  );
}