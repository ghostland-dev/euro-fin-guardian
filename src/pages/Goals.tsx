import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Target,
  Home,
  Car,
  GraduationCap,
  Plane,
  Edit,
  Trash2,
  CheckCircle2
} from "lucide-react";

const Goals = () => {
  const goals = [
    {
      title: "شراء منزل",
      description: "الدفعة الأولى لشراء منزل جديد",
      targetAmount: 50000,
      currentAmount: 18500,
      deadline: "2027-12-31",
      icon: Home,
      color: "primary",
    },
    {
      title: "سيارة جديدة",
      description: "استبدال السيارة القديمة",
      targetAmount: 25000,
      currentAmount: 12000,
      deadline: "2026-06-30",
      icon: Car,
      color: "accent",
    },
    {
      title: "التعليم الجامعي",
      description: "تكاليف دراسة الأبناء",
      targetAmount: 40000,
      currentAmount: 8500,
      deadline: "2030-09-01",
      icon: GraduationCap,
      color: "warning",
    },
    {
      title: "رحلة حول العالم",
      description: "عطلة سياحية مميزة",
      targetAmount: 15000,
      currentAmount: 5200,
      deadline: "2026-12-31",
      icon: Plane,
      color: "chart-4",
    },
  ];

  const totalTargets = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalSaved = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const overallProgress = (totalSaved / totalTargets) * 100;

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الأهداف المالية</h1>
            <p className="text-muted-foreground">حدد أهدافك وتتبع تقدمك نحو تحقيقها</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                هدف جديد
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إضافة هدف مالي جديد</DialogTitle>
                <DialogDescription>
                  حدد هدفاً مالياً وابدأ في التخطيط لتحقيقه
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>عنوان الهدف</Label>
                  <Input placeholder="مثال: شراء منزل" />
                </div>
                <div className="space-y-2">
                  <Label>الوصف</Label>
                  <Textarea placeholder="أضف وصفاً تفصيلياً للهدف..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>المبلغ المستهدف (€)</Label>
                    <Input type="number" placeholder="50000" />
                  </div>
                  <div className="space-y-2">
                    <Label>المبلغ الحالي (€)</Label>
                    <Input type="number" placeholder="5000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>الموعد النهائي</Label>
                  <Input type="date" />
                </div>
                <Button className="w-full">إضافة الهدف</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>التقدم الإجمالي</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-3xl font-bold text-foreground">€{totalSaved.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    من أصل €{totalTargets.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{overallProgress.toFixed(1)}%</p>
                  <p className="text-sm text-muted-foreground">مكتمل</p>
                </div>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <p className="text-sm text-muted-foreground">
                متبقي €{(totalTargets - totalSaved).toLocaleString()} لتحقيق جميع أهدافك
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Goals List */}
        <div className="space-y-6">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            const percentage = (goal.currentAmount / goal.targetAmount) * 100;
            const remaining = goal.targetAmount - goal.currentAmount;
            const daysRemaining = Math.ceil((new Date(goal.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
            const monthlyTarget = remaining / (daysRemaining / 30);
            
            return (
              <Card key={idx} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`rounded-full bg-${goal.color}/10 p-3`}>
                        <Icon className={`h-6 w-6 text-${goal.color}`} />
                      </div>
                      <div>
                        <CardTitle className="mb-1">{goal.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{goal.description}</p>
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
                      <span className="text-muted-foreground">التقدم</span>
                      <span className="font-medium">
                        €{goal.currentAmount.toLocaleString()} / €{goal.targetAmount.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{percentage.toFixed(1)}% مكتمل</span>
                      <span>متبقي €{remaining.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-border p-3">
                      <p className="mb-1 text-xs text-muted-foreground">الموعد النهائي</p>
                      <p className="text-sm font-bold text-foreground">{goal.deadline}</p>
                      <p className="text-xs text-muted-foreground">{daysRemaining} يوم متبقي</p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <p className="mb-1 text-xs text-muted-foreground">الادخار الشهري المطلوب</p>
                      <p className="text-lg font-bold text-primary">€{monthlyTarget.toFixed(0)}</p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <p className="mb-1 text-xs text-muted-foreground">الحالة</p>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${percentage >= 75 ? "bg-accent" : percentage >= 50 ? "bg-warning" : "bg-destructive"}`} />
                        <span className="text-sm font-medium text-foreground">
                          {percentage >= 75 ? "على المسار" : percentage >= 50 ? "جيد" : "يحتاج عناية"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Plus className="mr-2 h-4 w-4" />
                          إضافة مبلغ
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>إضافة مبلغ إلى الهدف</DialogTitle>
                          <DialogDescription>
                            أضف مبلغاً جديداً لتقترب من تحقيق هدفك
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label>المبلغ (€)</Label>
                            <Input type="number" placeholder="500" />
                          </div>
                          <Button className="w-full">إضافة المبلغ</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {percentage >= 100 && (
                      <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        تم التحقيق
                      </Button>
                    )}
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

export default Goals;
