import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  CreditCard, 
  TrendingUp, 
  BarChart3, 
  Target,
  Settings,
  Menu,
  X,
  LogOut,
  LayoutDashboard
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/dashboard", label: "لوحة التحكم", icon: LayoutDashboard },
    { path: "/budget", label: "الميزانية", icon: Wallet },
    { path: "/debts", label: "الديون", icon: CreditCard },
    { path: "/investments", label: "الاستثمارات", icon: TrendingUp },
    { path: "/reports", label: "التقارير", icon: BarChart3 },
    { path: "/goals", label: "الأهداف", icon: Target },
    { path: "/settings", label: "الإعدادات", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
                <Wallet className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">مالي</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    asChild
                  >
                    <Link to={item.path} className="gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <LogOut className="mr-2 h-4 w-4" />
                تسجيل الخروج
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-card md:hidden">
            <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    variant={isActive ? "default" : "ghost"}
                    className="justify-start gap-2"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link to={item.path}>
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
              <Button variant="ghost" className="justify-start gap-2">
                <LogOut className="h-4 w-4" />
                تسجيل الخروج
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default AppLayout;
