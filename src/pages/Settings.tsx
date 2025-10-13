import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  User,
  Bell,
  Shield,
  Globe,
  Moon,
  Lock,
  Mail,
  Download,
  Trash2,
  Eye,
  FileText
} from "lucide-react";

const Settings = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">الإعدادات</h1>
          <p className="text-muted-foreground">إدارة حسابك وتفضيلاتك</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Settings */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  الملف الشخصي
                </CardTitle>
                <CardDescription>
                  معلوماتك الشخصية وبيانات الحساب
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>الاسم الأول</Label>
                    <Input placeholder="أحمد" />
                  </div>
                  <div className="space-y-2">
                    <Label>اسم العائلة</Label>
                    <Input placeholder="محمد" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>البريد الإلكتروني</Label>
                  <Input type="email" placeholder="ahmed@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>رقم الهاتف</Label>
                  <Input type="tel" placeholder="+33 6 12 34 56 78" />
                </div>
                <Button>حفظ التغييرات</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  الأمان والخصوصية
                </CardTitle>
                <CardDescription>
                  إعدادات الأمان وحماية البيانات
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-foreground">تغيير كلمة المرور</h3>
                  <div className="space-y-2">
                    <Label>كلمة المرور الحالية</Label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label>كلمة المرور الجديدة</Label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label>تأكيد كلمة المرور</Label>
                    <Input type="password" />
                  </div>
                  <Button>تحديث كلمة المرور</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>المصادقة الثنائية</Label>
                      <p className="text-sm text-muted-foreground">
                        أمّن حسابك بخطوة تحقق إضافية
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-foreground">الخصوصية والبيانات (GDPR)</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Eye className="mr-2 h-4 w-4" />
                      عرض بياناتي المخزنة
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      تحميل نسخة من بياناتي
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      سياسة الخصوصية
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      <Trash2 className="mr-2 h-4 w-4" />
                      حذف حسابي وجميع بياناتي
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  الإشعارات
                </CardTitle>
                <CardDescription>
                  إدارة التنبيهات والإشعارات
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>إشعارات البريد الإلكتروني</Label>
                    <p className="text-sm text-muted-foreground">
                      تلقي التحديثات عبر البريد
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تنبيهات الميزانية</Label>
                    <p className="text-sm text-muted-foreground">
                      عند تجاوز حدود الإنفاق
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تذكير الأقساط</Label>
                    <p className="text-sm text-muted-foreground">
                      تذكير بمواعيد الدفع
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تقارير شهرية</Label>
                    <p className="text-sm text-muted-foreground">
                      ملخص مالي شهري
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  اللغة والمنطقة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>اللغة</Label>
                  <Select defaultValue="ar">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">العربية</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>المنطقة الزمنية</Label>
                  <Select defaultValue="paris">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">Paris (GMT+1)</SelectItem>
                      <SelectItem value="london">London (GMT+0)</SelectItem>
                      <SelectItem value="berlin">Berlin (GMT+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>العملة</Label>
                  <Select defaultValue="eur">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">يورو (€)</SelectItem>
                      <SelectItem value="usd">دولار ($)</SelectItem>
                      <SelectItem value="gbp">جنيه (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="h-5 w-5" />
                  المظهر
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>الوضع الليلي</Label>
                    <p className="text-sm text-muted-foreground">
                      تبديل بين الوضعين
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="border-warning">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <Lock className="h-5 w-5" />
                  خصوصية البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  نحن ملتزمون بحماية خصوصيتك وفقاً للائحة GDPR الأوروبية.
                </p>
                <ul className="list-disc space-y-1 pr-4">
                  <li>بياناتك مشفرة بالكامل</li>
                  <li>لا نشارك معلوماتك مع أطراف ثالثة</li>
                  <li>يمكنك حذف بياناتك في أي وقت</li>
                  <li>خوادمنا موجودة في الاتحاد الأوروبي</li>
                </ul>
                <Button variant="link" className="h-auto p-0">
                  اقرأ المزيد عن سياسة الخصوصية
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
