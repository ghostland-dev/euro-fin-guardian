import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Download, 
  FileText, 
  PieChart,
  BarChart3,
  TrendingUp,
  Calendar
} from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "تقرير الميزانية الشهرية",
      description: "ملخص شامل للدخل والمصروفات",
      period: "يناير 2025",
      icon: BarChart3,
      color: "primary",
    },
    {
      title: "تحليل الإنفاق",
      description: "توزيع المصروفات حسب الفئات",
      period: "آخر 3 أشهر",
      icon: PieChart,
      color: "accent",
    },
    {
      title: "تقرير الاستثمارات",
      description: "أداء المحفظة والعوائد",
      period: "2025",
      icon: TrendingUp,
      color: "warning",
    },
    {
      title: "ملخص الديون",
      description: "حالة القروض والمدفوعات",
      period: "يناير 2025",
      icon: FileText,
      color: "destructive",
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">التقارير والتحليلات</h1>
            <p className="text-muted-foreground">احصل على رؤى مفصلة حول وضعك المالي</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="اختر الفترة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">هذا الأسبوع</SelectItem>
                <SelectItem value="month">هذا الشهر</SelectItem>
                <SelectItem value="quarter">هذا الربع</SelectItem>
                <SelectItem value="year">هذا العام</SelectItem>
                <SelectItem value="custom">فترة مخصصة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي الدخل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">€9,100</p>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي المصروفات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">€6,690</p>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الادخار
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">€2,410</p>
              <p className="text-xs text-muted-foreground">26.5% من الدخل</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                العائد الاستثماري
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-warning">+8.2%</p>
              <p className="text-xs text-muted-foreground">هذا العام</p>
            </CardContent>
          </Card>
        </div>

        {/* Available Reports */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>التقارير المتاحة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {reports.map((report, idx) => {
                const Icon = report.icon;
                return (
                  <Card key={idx} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`rounded-full bg-${report.color}/10 p-3`}>
                            <Icon className={`h-6 w-6 text-${report.color}`} />
                          </div>
                          <div>
                            <h3 className="mb-1 font-semibold text-foreground">{report.title}</h3>
                            <p className="text-sm text-muted-foreground">{report.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{report.period}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            عرض
                          </Button>
                          <Button size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            تحميل
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>خيارات التصدير</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                صدّر تقاريرك المالية بصيغ مختلفة لمشاركتها أو حفظها
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  تصدير PDF
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  تصدير Excel
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  تصدير CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Reports;
