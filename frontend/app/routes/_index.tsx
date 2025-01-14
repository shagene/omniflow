import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "OmniFlow Dashboard" },
    { name: "description", content: "Welcome to OmniFlow - AI-powered business operations platform" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to OmniFlow
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Your AI-powered business operations platform
        </p>
      </header>

      <nav className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map(({ text, icon, description }) => (
          <div 
            key={text}
            className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
          >
            <div className="flex items-center gap-3">
              {icon}
              <h2 className="font-semibold text-gray-800 dark:text-gray-200">{text}</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        ))}
      </nav>
    </div>
  );
}

const quickActions = [
  {
    text: "Tasks",
    description: "Create and manage your business tasks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 dark:stroke-gray-400"
      >
        <path
          d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Analytics",
    description: "View your business performance metrics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 dark:stroke-gray-400"
      >
        <path
          d="M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Documents",
    description: "Access and manage your files",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 dark:stroke-gray-400"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    text: "Settings",
    description: "Configure your workspace",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 dark:stroke-gray-400"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];