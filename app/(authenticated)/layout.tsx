import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SidebarNav } from "@/components/sidebar-nav"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const sidebarNavItems = [
    {
      title: "Profile",
      href: "/examples/forms",
    },
    {
      title: "Account",
      href: "/examples/forms/account",
    },
    {
      title: "Appearance",
      href: "/examples/forms/appearance",
    },
    {
      title: "Notifications",
      href: "/examples/forms/notifications",
    },
    {
      title: "Display",
      href: "/examples/forms/display",
    },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SiteHeader />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
        </div>

        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </ThemeProvider>
    </div>
  )
}
