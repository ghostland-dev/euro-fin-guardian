import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  CreditCard, 
  Calendar,
  AlertCircle,
  CheckCircle2,
  Edit,
  Trash2
} from "lucide-react";

const Debts = () => {
  const debts = [
    {
      name: "قرض سيارة",
      lender: "بنك ABC",
      totalAmount: 15000,
      paidAmount: 7500,
      monthlyPayment: 350,
      interestRate: 3.5,
      nextPaymentDate: "2025-02-01",
      remainingMonths: 22,
    },
    {
      name: "قرض شخصي",
      lender: "بنك XYZ",
      totalAmount: 8000,
      paidAmount: 3000,
      monthlyPayment: 250,
      interestRate: 5.2,
      nextPaymentDate: "2025-02-05",
      remainingMonths: 20,
    },
    {
      name: "بطاقة ائتمان",
      lender: "Visa Gold",
      totalAmount: 3500,
      paidAmount: 2000,
      monthlyPayment: 150,
      interestRate: 18.9,
      nextPaymentDate: "2025-01-25",
      remainingMonths: 10,
    },
  ];

  const totalDebt = debts.reduce((sum, debt) => sum + (debt.totalAmount - debt.paidAmount), 0);
  const totalPaid = debts.reduce((sum, debt) => sum + debt.paidAmount, 0);
  const monthlyPayments = debts.reduce((sum, debt) => sum + debt.monthlyPayment, 0);

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">إدارة الديون</h1>
            <p className="text-muted-foreground">تتبع قروضك ومدفوعاتك</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                دين جديد
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إضافة دين جديد</DialogTitle>
                <DialogDescription>
                  سجل قرض أو دين جديد لتتبع المدفوعات
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>اسم الدين</Label>
                  <Input placeholder="مثال: قرض سيارة" />
                </div>
                <div className="space-y-2">
                  <Label>الجهة المقرضة</Label>
                  <Input placeholder="مثال: بنك ABC" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>المبلغ الإجمالي (€)</Label>
                    <Input type="number" placeholder="10000" />
                  </div>
                  <div className="space-y-2">
                    <Label>معدل الفائدة (%)</Label>
                    <Input type="number" step="0.1" placeholder="5.0" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>القسط الشهري (€)</Label>
                    <Input type="number" placeholder="300" />
                  </div>
                  <div className="space-y-2">
                    <Label>تاريخ القسط التالي</Label>
                    <Input type="date" />
                  </div>
                </div>
                <Button className="w-full">إضافة الدين</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card className="border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي الديون المتبقية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">€{totalDebt.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي المدفوع
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">€{totalPaid.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الأقساط الشهرية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">€{monthlyPayments}</p>
            </CardContent>
          </Card>
        </div>

        {/* Debts List */}
        <div className="space-y-6">
          {debts.map((debt, idx) => {
            const percentage = (debt.paidAmount / debt.totalAmount) * 100;
            const remaining = debt.totalAmount - debt.paidAmount;
            const isUpcoming = new Date(debt.nextPaymentDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            
            return (
              <Card key={idx} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-warning/10 p-3">
                        <CreditCard className="h-6 w-6 text-warning" />
                      </div>
                      <div>
                        <CardTitle className="mb-1">{debt.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{debt.lender}</p>
                      </div>
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
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">التقدم في السداد</span>
                      <span className="font-medium">
                        €{debt.paidAmount.toLocaleString()} / €{debt.totalAmount.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{percentage.toFixed(0)}% مدفوع</span>
                      <span>متبقي €{remaining.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-border p-3">
                      <p className="mb-1 text-xs text-muted-foreground">القسط الشهري</p>
                      <p className="text-lg font-bold text-foreground">€{debt.monthlyPayment}</p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <p className="mb-1 text-xs text-muted-foreground">معدل الفائدة</p>
                      <p className="text-lg font-bold text-foreground">{debt.interestRate}%</p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <p className="mb-1 text-xs text-muted-foreground">الأقساط المتبقية</p>
                      <p className="text-lg font-bold text-foreground">{debt.remainingMonths}</p>
                    </div>
                    <div className={`rounded-lg border p-3 ${isUpcoming ? "border-warning bg-warning/5" : "border-border"}`}>
                      <p className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                        {isUpcoming && <AlertCircle className="h-3 w-3 text-warning" />}
                        القسط التالي
                      </p>
                      <p className="text-sm font-bold text-foreground">{debt.nextPaymentDate}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      جدول المدفوعات
                    </Button>
                    <Button size="sm" className="flex-1">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      تسجيل دفعة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Debts;
