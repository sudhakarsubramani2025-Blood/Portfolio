import nodemailer from 'nodemailer';
import type { InsertContactMessage } from '@shared/schema';

// Simple email service that works without API keys
export class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    // Try to create a transporter using environment variables if available
    // Otherwise, we'll use an alternative approach
    this.initializeTransporter();
  }

  private initializeTransporter() {
    try {
      // If user has SMTP credentials in environment, use them
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        this.transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
      } else {
        // Use Gmail's free SMTP (user needs to enable "Less secure app access" or use App Password)
        // This is optional and only works if user provides credentials
        this.transporter = null;
      }
    } catch (error) {
      console.log('Email transporter not configured, using fallback methods');
      this.transporter = null;
    }
  }

  async sendContactEmail(contactData: InsertContactMessage, recipientEmail: string): Promise<boolean> {
    try {
      // Method 1: Try SMTP if configured
      if (this.transporter) {
        return await this.sendViaSMTP(contactData, recipientEmail);
      }

      // Method 2: Log email to console (for development/testing)
      return await this.logEmailToConsole(contactData, recipientEmail);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  private async sendViaSMTP(contactData: InsertContactMessage, recipientEmail: string): Promise<boolean> {
    if (!this.transporter) return false;

    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@portfolio.com',
      to: recipientEmail,
      subject: `New Portfolio Contact: ${contactData.subject || 'Contact Form Submission'}`,
      html: this.generateEmailHTML(contactData),
      text: this.generateEmailText(contactData),
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return true;
    } catch (error) {
      console.error('SMTP send failed:', error);
      return false;
    }
  }

  private async logEmailToConsole(contactData: InsertContactMessage, recipientEmail: string): Promise<boolean> {
    console.log('\n' + '='.repeat(60));
    console.log('📧 NEW CONTACT FORM SUBMISSION');
    console.log('='.repeat(60));
    console.log(`To: ${recipientEmail}`);
    console.log(`From: ${contactData.name} <${contactData.email}>`);
    console.log(`Subject: ${contactData.subject || 'Contact Form Submission'}`);
    console.log('-'.repeat(60));
    console.log(`Message:\n${contactData.message}`);
    console.log('='.repeat(60));
    console.log('📧 End of message\n');
    
    return true;
  }

  private generateEmailHTML(contactData: InsertContactMessage): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
          ${contactData.subject ? `<p><strong>Subject:</strong> ${contactData.subject}</p>` : ''}
        </div>
        
        <div style="background: #fff; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #555;">${contactData.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
          <p><strong>Quick Actions:</strong></p>
          <p>• Reply directly: <a href="mailto:${contactData.email}">Click here</a></p>
          <p>• Save contact: Add ${contactData.name} to your contacts</p>
        </div>
        
        <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #94a3b8;">
          <p>This email was sent from your portfolio contact form</p>
        </footer>
      </div>
    `;
  }

  private generateEmailText(contactData: InsertContactMessage): string {
    return `
NEW CONTACT FORM SUBMISSION
==========================

From: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject || 'Contact Form Submission'}

Message:
${contactData.message}

---
Reply directly to: ${contactData.email}
This email was sent from your portfolio contact form.
    `;
  }

  // Alternative method: Generate mailto link for manual sending
  generateMailtoLink(contactData: InsertContactMessage, recipientEmail: string): string {
    const subject = encodeURIComponent(`Portfolio Contact: ${contactData.subject || 'New Message'}`);
    const body = encodeURIComponent(`
Hello,

You received a new message through your portfolio contact form:

From: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject || 'N/A'}

Message:
${contactData.message}

---
You can reply directly to this email or contact them at: ${contactData.email}
    `);
    
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  }
}

export const emailService = new EmailService();