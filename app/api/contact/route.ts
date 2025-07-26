import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'الاسم الأول يجب أن يكون على الأقل حرفين').max(50, 'الاسم الأول يجب أن يكون أقل من 50 حرف'),
  lastName: z.string().min(2, 'الاسم الأخير يجب أن يكون على الأقل حرفين').max(50, 'الاسم الأخير يجب أن يكون أقل من 50 حرف'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  subject: z.string().min(5, 'الموضوع يجب أن يكون على الأقل 5 أحرف').max(100, 'الموضوع يجب أن يكون أقل من 100 حرف'),
  message: z.string().min(10, 'الرسالة يجب أن تكون على الأقل 10 أحرف').max(1000, 'الرسالة يجب أن تكون أقل من 1000 حرف'),
})

// Email template
const createEmailTemplate = (data: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}) => {
  const currentDate = new Date().toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>رسالة جديدة من موقع يوسف والفريق</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', 'Noto Sans Arabic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: #000000;
          padding: 20px;
          min-height: 100vh;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 24px 24px;
          background-position: center center;
          position: relative;
        }
        
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }
        
        .container {
          max-width: 700px;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.95);
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
        }
        
        .header {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.5;
        }
        
        .header-content {
          position: relative;
          z-index: 2;
        }
        
        .logo {
          font-family: 'TheYearofHandicrafts', 'Noto Sans Arabic', 'Arial', sans-serif;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          background: linear-gradient(45deg, #ffffff, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .header h1 {
          font-size: 32px;
          margin-bottom: 15px;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          color: #ffffff;
        }
        
        .header p {
          font-size: 18px;
          opacity: 0.9;
          font-weight: 400;
          color: #cccccc;
        }
        
        .notification-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 24px;
          border-radius: 25px;
          margin-top: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-weight: 500;
        }
        
        .content {
          padding: 40px 30px;
          background: rgba(0, 0, 0, 0.8);
        }
        
        .contact-info {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
          padding: 25px;
          border-radius: 20px;
          margin-bottom: 30px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .contact-info::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 16px 16px;
          opacity: 0.3;
        }
        
        .contact-info h3 {
          margin-bottom: 20px;
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          position: relative;
          z-index: 2;
        }
        
        .contact-details {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }
        
        .contact-detail {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #cccccc;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 35px;
        }
        
        .info-item {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 25px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }
        
        .info-item::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 0 20px 20px 0;
        }
        
        .info-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 12px 12px;
          opacity: 0.2;
        }
        
        .info-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .info-label {
          font-weight: 600;
          color: #667eea;
          margin-bottom: 10px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 2;
        }
        
        .info-value {
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          position: relative;
          z-index: 2;
        }
        
        .message-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 30px;
          border-radius: 20px;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .message-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 12px 12px;
          opacity: 0.2;
        }
        
        .message-label {
          font-weight: 600;
          color: #667eea;
          margin-bottom: 20px;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }
        
        .message-label::before {
          content: '💬';
          font-size: 22px;
        }
        
        .message-content {
          background: rgba(0, 0, 0, 0.5);
          padding: 25px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          white-space: pre-wrap;
          line-height: 1.8;
          font-size: 16px;
          color: #ffffff;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
        }
        
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 35px 30px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }
        
        .footer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 12px 12px;
          opacity: 0.2;
        }
        
        .footer p {
          color: #cccccc;
          font-size: 14px;
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
        }
        
        .footer-links {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }
        
        .footer-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          padding: 12px 20px;
          border-radius: 25px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          transition: all 0.3s ease;
          color: #ffffff;
        }
        
        .footer-link:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        
        @media (max-width: 600px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .header {
            padding: 30px 20px;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .contact-details {
            flex-direction: column;
            gap: 15px;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 15px;
          }
          
          .logo {
            font-size: 28px;
          }
          
          .header h1 {
            font-size: 24px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-content">
            <div class="logo">يوسف والفريق</div>
            <h1>رسالة جديدة من موقعنا</h1>
            <p>تم استلام رسالة جديدة من أحد الزوار</p>
            <div class="notification-badge">
              📧 رسالة جديدة
            </div>
          </div>
        </div>
        
        <div class="content">
          <div class="contact-info">
            <h3>معلومات المرسل</h3>
            <div class="contact-details">
              <div class="contact-detail">
                <span>👤</span>
                <span>${data.firstName} ${data.lastName}</span>
              </div>
              <div class="contact-detail">
                <span>📧</span>
                <span>${data.email}</span>
              </div>
              <div class="contact-detail">
                <span>📅</span>
                <span>${currentDate}</span>
              </div>
            </div>
          </div>
          
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">الاسم الكامل</div>
              <div class="info-value">${data.firstName} ${data.lastName}</div>
            </div>
            
            <div class="info-item">
              <div class="info-label">البريد الإلكتروني</div>
              <div class="info-value">${data.email}</div>
            </div>
            
            <div class="info-item">
              <div class="info-label">الموضوع</div>
              <div class="info-value">${data.subject}</div>
            </div>
            
            <div class="info-item">
              <div class="info-label">تاريخ الإرسال</div>
              <div class="info-value">${currentDate}</div>
            </div>
          </div>
          
          <div class="message-section">
            <div class="message-label">محتوى الرسالة</div>
            <div class="message-content">${data.message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>هذه الرسالة تم إرسالها تلقائياً من نموذج الاتصال في موقع يوسف والفريق</p>
          <p>© 2024 يوسف والفريق - جميع الحقوق محفوظة</p>
          <div class="footer-links">
            <a href="https://yussef-portfolio.vercel.app" class="footer-link">الموقع الرئيسي</a>
            <a href="mailto:yussef.ali.it@gmail.com" class="footer-link">تواصل معنا</a>
            <a href="https://github.com/your-username" class="footer-link">GitHub</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validationResult = contactSchema.safeParse(body)
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(err => ({
        field: err.path[0],
        message: err.message
      }))
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'بيانات غير صحيحة',
          errors 
        },
        { status: 400 }
      )
    }
    
    const { firstName, lastName, email, subject, message } = validationResult.data
    
  
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yussef.ali.it@gmail.com',
        pass: 'nklm iuvh mqib fdac',
      },
    })
    
    // Email options
    const mailOptions = {
      from: `"موقع يوسف والفريق" <${process.env.GMAIL_EMAIL}>`,
      to: 'yussef.ali.it@gmail.com',
      subject: `رسالة جديدة: ${subject}`,
      html: createEmailTemplate({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
      replyTo: email,
    }
    
    // Send email
    await transporter.sendMail(mailOptions)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.' 
      },
      { status: 500 }
    )
  }
} 