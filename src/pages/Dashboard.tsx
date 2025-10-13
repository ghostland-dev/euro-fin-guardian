import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  CreditCard, 
  PiggyBank, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">لوحة التحكم</h1>
            <p className="text-muted-foreground">نظرة عامة على وضعك المالي</p>
          </div>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            هذا الشهر
          </Button>
        </div>
        {/* Overview Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="relative overflow-hidden border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الرصيد الكلي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-3xl font-bold text-foreground">€45,231</p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-accent">
                    <TrendingUp className="h-4 w-4" />
                    <span>+12.5%</span>
                  </div>
                </div>
                <div className="rounded-full bg-primary/10 p-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الدخل الشهري
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-3xl font-bold text-foreground">€8,750</p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-accent">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>+5.2%</span>
                  </div>
                </div>
                <div className="rounded-full bg-accent/10 p-3">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-l-4 border-l-destructive">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                المصروفات الشهرية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-3xl font-bold text-foreground">€6,420</p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-destructive">
                    <ArrowDownRight className="h-4 w-4" />
                    <span>+3.1%</span>
                  </div>
                </div>
                <div className="rounded-full bg-destructive/10 p-3">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الديون المتبقية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-3xl font-bold text-foreground">€12,500</p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-warning">
                    <CreditCard className="h-4 w-4" />
                    <span>3 قروض</span>
                  </div>
                </div>
                <div className="rounded-full bg-warning/10 p-3">
                  <CreditCard className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Budget Progress */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>الميزانية الشهرية</span>
                <span className="text-sm font-normal text-muted-foreground">
                  73% مستخدم
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">السكن</span>
                  <span className="font-medium">€1,200 / €1,500</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">الطعام</span>
                  <span className="font-medium">€450 / €600</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">النقل</span>
                  <span className="font-medium">€200 / €400</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">الترفيه</span>
                  <span className="font-medium">€180 / €300</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>الاستثمارات</span>
                <Button variant="ghost" size="sm">
                  عرض الكل
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">محفظة الأسهم</p>
                    <p className="text-sm text-muted-foreground">15 سهم</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">€28,450</p>
                  <p className="text-sm text-accent">+8.2%</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-accent/10 p-2">
                    <PiggyBank className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">الصناديق الاستثمارية</p>
                    <p className="text-sm text-muted-foreground">3 صناديق</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">€12,800</p>
                  <p className="text-sm text-accent">+6.5%</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-warning/10 p-2">
                    <DollarSign className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="font-medium">العملات الرقمية</p>
                    <p className="text-sm text-muted-foreground">4 عملات</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">€3,980</p>
                  <p className="text-sm text-destructive">-2.3%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>آخر المعاملات</span>
              <Button variant="ghost" size="sm">
                عرض الكل
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "راتب شهري", amount: "+€8,750", date: "اليوم", type: "income" },
                { name: "إيجار الشقة", amount: "-€1,200", date: "أمس", type: "expense" },
                { name: "تسوق سوبرماركت", amount: "-€85.50", date: "أمس", type: "expense" },
                { name: "استثمار في الأسهم", amount: "-€500", date: "منذ 2 يوم", type: "investment" },
                { name: "مكافأة عمل حر", amount: "+€350", date: "منذ 3 أيام", type: "income" },
              ].map((transaction, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${
                        transaction.type === "income"
                          ? "bg-accent/10"
                          : transaction.type === "investment"
                            ? "bg-primary/10"
                            : "bg-destructive/10"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                      ) : transaction.type === "investment" ? (
                        <TrendingUp className="h-4 w-4 text-primary" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <p
                    className={`text-lg font-bold ${
                      transaction.type === "income" ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
