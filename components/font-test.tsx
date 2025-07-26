"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FontTest() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-handicrafts-black">اختبار الخطوط</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-handicrafts">
            اختبار الخط العربي المخصص TheYearofHandicrafts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Inter Font Test */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="font-inter">خط Inter (الإنجليزية)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-inter font-normal">عادي: The quick brown fox jumps over the lazy dog</div>
              <div className="font-inter font-medium">متوسط: The quick brown fox jumps over the lazy dog</div>
              <div className="font-inter font-semibold">شبه عريض: The quick brown fox jumps over the lazy dog</div>
              <div className="font-inter font-bold">عريض: The quick brown fox jumps over the lazy dog</div>
              <div className="font-inter font-black">أسود: The quick brown fox jumps over the lazy dog</div>
            </CardContent>
          </Card>

          {/* Noto Sans Arabic Test */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="font-arabic">خط Noto Sans Arabic (العربية)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-arabic font-normal">عادي: النص العربي للاختبار</div>
              <div className="font-arabic font-medium">متوسط: النص العربي للاختبار</div>
              <div className="font-arabic font-bold">عريض: النص العربي للاختبار</div>
            </CardContent>
          </Card>

          {/* The Year of Handicrafts Test */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="font-handicrafts">خط The Year of Handicrafts (العربية المخصصة)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-handicrafts font-normal">عادي: النص العربي للاختبار</div>
              <div className="font-handicrafts font-medium">متوسط: النص العربي للاختبار</div>
              <div className="font-handicrafts font-semibold">شبه عريض: النص العربي للاختبار</div>
              <div className="font-handicrafts font-bold">عريض: النص العربي للاختبار</div>
              <div className="font-handicrafts-black">أسود: النص العربي للاختبار</div>
            </CardContent>
          </Card>

          {/* Mixed Content Test */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="font-handicrafts">محتوى مختلط</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-inter">
                <span className="font-inter">English: </span>
                <span className="font-handicrafts">العربية: </span>
                Mixed content with both languages
              </div>
              <div className="font-handicrafts">
                <span className="font-inter">English: </span>
                <span className="font-handicrafts">العربية: </span>
                محتوى مختلط باللغتين
              </div>
            </CardContent>
          </Card>

          {/* Headings Test */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="font-handicrafts">العناوين</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h1 className="text-2xl font-handicrafts-black">عنوان رئيسي كبير</h1>
              <h2 className="text-xl font-handicrafts font-bold">عنوان فرعي</h2>
              <h3 className="text-lg font-handicrafts font-semibold">عنوان صغير</h3>
              <p className="font-handicrafts font-normal">نص عادي للقراءة</p>
            </CardContent>
          </Card>

          {/* Performance Test */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="font-handicrafts">اختبار الأداء</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-handicrafts">
                <p>اختبار تحميل الخط مع الخط العربي المخصص</p>
                <p>Font loading test with custom Arabic font</p>
              </div>
              <div className="text-sm text-muted-foreground font-handicrafts">
                تحقق من أدوات المطور في المتصفح لرؤية أداء تحميل الخط
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 