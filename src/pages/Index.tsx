import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wallet, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  CreditCard, 
  PiggyBank, 
  Lock,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                متوافق مع GDPR الأوروبي
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-6xl">
              إدارة مالية ذكية
              <br />
              لمستقبل أفضل
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              تحكم في ميزانيتك، تابع استثماراتك، وأدر ديونك بسهولة وأمان
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-card text-primary hover:bg-card/90"
                asChild
              >
                <Link to="/dashboard">
                  ابدأ الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-card/20"
              >
                شاهد العرض التوضيحي
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">
            كل ما تحتاجه لإدارة أموالك
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            منصة شاملة تجمع كل أدوات الإدارة المالية الشخصية في مكان واحد
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>إدارة الميزانية</CardTitle>
              <CardDescription>
                تتبع دخلك ومصروفاتك بدقة مع تصنيفات ذكية وتنبيهات تلقائية
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تصنيف تلقائي للنفقات
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تقارير شهرية وسنوية
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تنبيهات عند التجاوز
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-xl bg-warning/10 p-3">
                <CreditCard className="h-8 w-8 text-warning" />
              </div>
              <CardTitle>إدارة الديون</CardTitle>
              <CardDescription>
                راقب قروضك ومدفوعاتك مع جدولة ذكية وتذكيرات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  حساب الفوائد تلقائياً
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تذكيرات بالمواعيد
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  خطط سداد مخصصة
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>تتبع الاستثمارات</CardTitle>
              <CardDescription>
                راقب محفظتك الاستثمارية بتحليلات متقدمة وتقارير شاملة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تحليل الأرباح والخسائر
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  رسوم بيانية تفاعلية
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تنويع المحفظة
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>تقارير متقدمة</CardTitle>
              <CardDescription>
                احصل على رؤى عميقة مع تقارير قابلة للتخصيص والتصدير
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تقارير مخصصة
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تصدير PDF/Excel
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تحليلات ذكية
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-xl bg-destructive/10 p-3">
                <Lock className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle>أمان متقدم</CardTitle>
              <CardDescription>
                حماية بياناتك بأعلى معايير الأمان والتشفير
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تشفير SSL متقدم
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  مصادقة ثنائية
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  نسخ احتياطي تلقائي
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3">
                <PiggyBank className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>أهداف مالية</CardTitle>
              <CardDescription>
                حدد أهدافك المالية وتتبع تقدمك نحو تحقيقها
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  خطط توفير ذكية
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  تتبع التقدم
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  نصائح مخصصة
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">
                أمانك وخصوصيتك أولويتنا
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                نلتزم بأعلى معايير الأمان والخصوصية مع امتثال كامل للوائح GDPR الأوروبية
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      متوافق مع GDPR
                    </h3>
                    <p className="text-muted-foreground">
                      امتثال كامل لجميع متطلبات حماية البيانات الأوروبية
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      تشفير متقدم
                    </h3>
                    <p className="text-muted-foreground">
                      جميع بياناتك مشفرة بأحدث تقنيات التشفير SSL
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      حقوقك محفوظة
                    </h3>
                    <p className="text-muted-foreground">
                      حق الوصول، التصحيح، الحذف، والنقل لبياناتك متاح دائماً
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-primary p-1">
                <div className="rounded-xl bg-card p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between rounded-lg border border-border p-4">
                      <span className="font-medium text-foreground">مصادقة ثنائية</span>
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border p-4">
                      <span className="font-medium text-foreground">تشفير البيانات</span>
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border p-4">
                      <span className="font-medium text-foreground">نسخ احتياطي يومي</span>
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border p-4">
                      <span className="font-medium text-foreground">خوادم أوروبية</span>
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-2xl bg-gradient-hero p-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary-foreground">
            ابدأ رحلتك المالية اليوم
          </h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            انضم لآلاف المستخدمين الذين يديرون أموالهم بذكاء وأمان
          </p>
          <Button 
            size="lg" 
            className="bg-card text-primary hover:bg-card/90"
            asChild
          >
            <Link to="/dashboard">
              ابدأ مجاناً
              <ArrowRight className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">مالي</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 مالي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
