import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Plus, 
  TrendingUp, 
  TrendingDown,
  PieChart,
  BarChart3,
  DollarSign,
  Edit,
  Trash2
} from "lucide-react";

const Investments = () => {
  const portfolios = [
    {
      name: "محفظة الأسهم",
      type: "أسهم",
      value: 28450,
      invested: 25000,
      return: 13.8,
      assets: 15,
    },
    {
      name: "الصناديق الاستثمارية",
      type: "صناديق",
      value: 12800,
      invested: 12000,
      return: 6.67,
      assets: 3,
    },
    {
      name: "العملات الرقمية",
      type: "عملات رقمية",
      value: 3980,
      invested: 4500,
      return: -11.56,
      assets: 4,
    },
  ];

  const assets = [
    { name: "Apple Inc.", symbol: "AAPL", type: "سهم", quantity: 50, price: 178.32, invested: 8500, value: 8916 },
    { name: "Microsoft Corp.", symbol: "MSFT", type: "سهم", quantity: 30, price: 374.58, invested: 10500, value: 11237 },
    { name: "Vanguard S&P 500", symbol: "VOO", type: "صندوق", quantity: 25, price: 412.15, invested: 9800, value: 10304 },
    { name: "Bitcoin", symbol: "BTC", type: "عملة رقمية", quantity: 0.08, price: 43250, invested: 3200, value: 3460 },
  ];

  const totalValue = portfolios.reduce((sum, p) => sum + p.value, 0);
  const totalInvested = portfolios.reduce((sum, p) => sum + p.invested, 0);
  const totalReturn = ((totalValue - totalInvested) / totalInvested) * 100;

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">إدارة الاستثمارات</h1>
            <p className="text-muted-foreground">تتبع محفظتك الاستثمارية</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                استثمار جديد
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إضافة استثمار جديد</DialogTitle>
                <DialogDescription>
                  أضف أصل جديد لمحفظتك الاستثمارية
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>نوع الأصل</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الأصل" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stock">سهم</SelectItem>
                      <SelectItem value="fund">صندوق استثماري</SelectItem>
                      <SelectItem value="crypto">عملة رقمية</SelectItem>
                      <SelectItem value="bond">سند</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>اسم الأصل</Label>
                  <Input placeholder="مثال: Apple Inc." />
                </div>
                <div className="space-y-2">
                  <Label>الرمز</Label>
                  <Input placeholder="مثال: AAPL" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الكمية</Label>
                    <Input type="number" placeholder="10" />
                  </div>
                  <div className="space-y-2">
                    <Label>سعر الشراء (€)</Label>
                    <Input type="number" placeholder="150" />
                  </div>
                </div>
                <Button className="w-full">إضافة الاستثمار</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                القيمة الإجمالية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">€{totalValue.toLocaleString()}</p>
              <p className={`mt-1 text-sm ${totalReturn >= 0 ? "text-accent" : "text-destructive"}`}>
                {totalReturn >= 0 ? "+" : ""}{totalReturn.toFixed(2)}% عائد إجمالي
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                المبلغ المستثمر
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">€{totalInvested.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الأرباح/الخسائر
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-3xl font-bold ${totalValue - totalInvested >= 0 ? "text-accent" : "text-destructive"}`}>
                {totalValue - totalInvested >= 0 ? "+" : ""}€{(totalValue - totalInvested).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="portfolios" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="portfolios">المحافظ</TabsTrigger>
            <TabsTrigger value="assets">الأصول</TabsTrigger>
          </TabsList>

          {/* Portfolios Tab */}
          <TabsContent value="portfolios" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolios.map((portfolio, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-primary/10 p-3">
                          <PieChart className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="mb-1">{portfolio.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{portfolio.type}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">القيمة الحالية</span>
                        <span className="font-bold text-foreground">€{portfolio.value.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">المستثمر</span>
                        <span className="text-sm text-foreground">€{portfolio.invested.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">العائد</span>
                        <span className={`text-sm font-medium ${portfolio.return >= 0 ? "text-accent" : "text-destructive"}`}>
                          {portfolio.return >= 0 ? "+" : ""}{portfolio.return.toFixed(2)}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">عدد الأصول</span>
                        <span className="text-sm text-foreground">{portfolio.assets}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      عرض التفاصيل
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assets Tab */}
          <TabsContent value="assets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>جميع الأصول</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assets.map((asset, idx) => {
                    const profitLoss = asset.value - asset.invested;
                    const returnPercent = (profitLoss / asset.invested) * 100;
                    
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-lg border border-border p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`rounded-full p-3 ${profitLoss >= 0 ? "bg-accent/10" : "bg-destructive/10"}`}>
                            {profitLoss >= 0 ? (
                              <TrendingUp className="h-5 w-5 text-accent" />
                            ) : (
                              <TrendingDown className="h-5 w-5 text-destructive" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{asset.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {asset.symbol} • {asset.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">الكمية</p>
                            <p className="font-medium text-foreground">{asset.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">السعر</p>
                            <p className="font-medium text-foreground">€{asset.price}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">القيمة</p>
                            <p className="font-bold text-foreground">€{asset.value}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">العائد</p>
                            <p className={`font-bold ${profitLoss >= 0 ? "text-accent" : "text-destructive"}`}>
                              {profitLoss >= 0 ? "+" : ""}{returnPercent.toFixed(2)}%
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Investments;
