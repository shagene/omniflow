import { type ReactNode } from 'react';
import { Link } from '@remix-run/react';
import { 
  Bell, 
  Search, 
  Settings, 
  User,
  LayoutDashboard,
  ClipboardList,
  BarChart,
  HelpCircle,
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Sidebar, SidebarContent, SidebarLink } from '../../components/custom/sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navItems = [
    {
      label: "Dashboard",
      href: "/",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      label: "Tasks",
      href: "/tasks",
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const faqItem = {
    label: "FAQ",
    href: "/faq",
    icon: <HelpCircle className="h-5 w-5" />,
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b bg-white dark:bg-gray-800">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-light.png" alt="OmniFlow" className="hidden h-8 dark:block" />
            <img src="/logo-dark.png" alt="OmniFlow" className="h-8 dark:hidden" />
          </Link>
          
          {/* Search and Navigation */}
          <div className="ml-auto flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-64 rounded-md border border-gray-200 bg-white pl-8 pr-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
            
            {/* Action Buttons */}
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        <Sidebar>
          <SidebarContent
            mainNav={
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <SidebarLink key={item.href} link={item} />
                ))}
              </div>
            }
            bottomNav={
              <div className="flex flex-col gap-2">
                <SidebarLink key={faqItem.href} link={faqItem} />
              </div>
            }
          />
        </Sidebar>

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;