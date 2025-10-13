import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
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
  Calendar,
  Edit,
  Trash2,
  Download
} from "lucide-react";

const Budget = () => {
  const categories = [
    { name: "السكن", budget: 1500, spent: 1200, color: "primary" },
    { name: "الطعام", budget: 600, spent: 450, color: "accent" },
    { name: "النقل", budget: 400, spent: 200, color: "warning" },
    { name: "الترفيه", budget: 300, spent: 180, color: "chart-4" },
    { name: "التسوق", budget: 500, spent: 320, color: "chart-5" },
    { name: "الفواتير", budget: 350, spent: 340, color: "destructive" },
  ];

  const incomes = [
    { source: "راتب شهري", amount: 8750, date: "2025-01-01", recurring: true },
    { source: "مكافأة عمل حر", amount: 350, date: "2025-01-10", recurring: false },
  ];

  const expenses = [
    { category: "السكن", description: "إيجار الشقة", amount: 1200, date: "2025-01-05" },
    { category: "الطعام", description: "تسوق سوبرماركت", amount: 85.5, date: "2025-01-12" },
    { category: "النقل", description: "بنزين", amount: 60, date: "2025-01-08" },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">إدارة الميزانية</h1>
            <p className="text-muted-foreground">تتبع دخلك ومصروفاتك بدقة</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              هذا الشهر
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              تصدير
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي الدخل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <p className="text-3xl font-bold text-foreground">€9,100</p>
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي المصروفات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <p className="text-3xl font-bold text-foreground">€6,690</p>
                <TrendingDown className="h-5 w-5 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الرصيد المتبقي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <p className="text-3xl font-bold text-accent">€2,410</p>
                <span className="text-sm text-muted-foreground">26.5%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="categories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">الفئات</TabsTrigger>
            <TabsTrigger value="income">الدخل</TabsTrigger>
            <TabsTrigger value="expenses">المصروفات</TabsTrigger>
          </TabsList>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>الميزانية حسب الفئة</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        فئة جديدة
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>إضافة فئة جديدة</DialogTitle>
                        <DialogDescription>
                          أضف فئة جديدة لتنظيم ميزانيتك بشكل أفضل
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label>اسم الفئة</Label>
                          <Input placeholder="مثال: التعليم" />
                        </div>
                        <div className="space-y-2">
                          <Label>الميزانية الشهرية (€)</Label>
                          <Input type="number" placeholder="500" />
                        </div>
                        <Button className="w-full">إضافة الفئة</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {categories.map((category, idx) => {
                  const percentage = (category.spent / category.budget) * 100;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{category.name}</span>
                        <span className="text-muted-foreground">
                          €{category.spent} / €{category.budget}
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{percentage.toFixed(0)}% مستخدم</span>
                        <span>متبقي €{category.budget - category.spent}</span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Income Tab */}
          <TabsContent value="income" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>مصادر الدخل</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        دخل جديد
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>إضافة مصدر دخل</DialogTitle>
                        <DialogDescription>
                          سجل مصدر دخل جديد لحساب ميزانيتك
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label>المصدر</Label>
                          <Input placeholder="مثال: راتب شهري" />
                        </div>
                        <div className="space-y-2">
                          <Label>المبلغ (€)</Label>
                          <Input type="number" placeholder="5000" />
                        </div>
                        <div className="space-y-2">
                          <Label>التاريخ</Label>
                          <Input type="date" />
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="recurring" />
                          <Label htmlFor="recurring">دخل متكرر شهرياً</Label>
                        </div>
                        <Button className="w-full">إضافة الدخل</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incomes.map((income, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg border border-border p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-accent/10 p-2">
                          <TrendingUp className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{income.source}</p>
                          <p className="text-sm text-muted-foreground">
                            {income.date} {income.recurring && "• متكرر"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-accent">+€{income.amount}</p>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Expenses Tab */}
          <TabsContent value="expenses" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>المصروفات</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        مصروف جديد
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>إضافة مصروف</DialogTitle>
                        <DialogDescription>
                          سجل مصروف جديد لتتبع إنفاقك
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label>الفئة</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="اختر فئة" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat.name} value={cat.name}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>الوصف</Label>
                          <Input placeholder="مثال: فاتورة الكهرباء" />
                        </div>
                        <div className="space-y-2">
                          <Label>المبلغ (€)</Label>
                          <Input type="number" placeholder="150" />
                        </div>
                        <div className="space-y-2">
                          <Label>التاريخ</Label>
                          <Input type="date" />
                        </div>
                        <Button className="w-full">إضافة المصروف</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expenses.map((expense, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg border border-border p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-destructive/10 p-2">
                          <TrendingDown className="h-5 w-5 text-destructive" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{expense.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {expense.category} • {expense.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-foreground">-€{expense.amount}</p>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Budget;
