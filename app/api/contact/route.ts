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
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          padding: 20px;
          min-height: 100vh;
        }
        
        .container {
          max-width: 700px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        .header-content {
          position: relative;
          z-index: 2;
        }
        
        .logo {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 15px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .header h1 {
          font-size: 32px;
          margin-bottom: 15px;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header p {
          font-size: 18px;
          opacity: 0.95;
          font-weight: 400;
        }
        
        .notification-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          margin-top: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 35px;
        }
        
        .info-item {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 20px;
          border-radius: 15px;
          border: 1px solid rgba(102, 126, 234, 0.1);
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .info-item::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 0 15px 15px 0;
        }
        
        .info-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .info-label {
          font-weight: 600;
          color: #667eea;
          margin-bottom: 8px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .info-value {
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 500;
        }
        
        .message-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 25px;
          border-radius: 15px;
          margin-bottom: 30px;
          border: 1px solid rgba(102, 126, 234, 0.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .message-label {
          font-weight: 600;
          color: #667eea;
          margin-bottom: 15px;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .message-label::before {
          content: '💬';
          font-size: 20px;
        }
        
        .message-content {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          white-space: pre-wrap;
          line-height: 1.8;
          font-size: 16px;
          color: #333;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .skills-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 25px;
          border-radius: 15px;
          margin-bottom: 30px;
          border: 1px solid rgba(102, 126, 234, 0.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .skills-title {
          font-weight: 600;
          color: #667eea;
          margin-bottom: 20px;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .skills-title::before {
          content: '⚡';
          font-size: 20px;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }
        
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 15px 10px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .skill-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .skill-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        
        .skill-name {
          font-size: 10px;
          font-weight: 500;
          color: #666;
          text-align: center;
        }
        
        .footer {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e9ecef;
          position: relative;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }
        
        .footer p {
          color: #666;
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        .footer-links {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .footer-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(102, 126, 234, 0.1);
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-1px);
        }
        
        .contact-info {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 25px;
          text-align: center;
        }
        
        .contact-info h3 {
          margin-bottom: 15px;
          font-size: 20px;
          font-weight: 600;
        }
        
        .contact-details {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }
        
        .contact-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        @media (max-width: 600px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
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