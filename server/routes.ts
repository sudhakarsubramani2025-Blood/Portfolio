import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { emailService } from "./email-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
    app.post("/api/contact", async (req, res) => {
      try {
        const validatedData = insertContactMessageSchema.parse(req.body);
        const message = await storage.createContactMessage(validatedData);
        
        // Send email notification
        const recipientEmail = process.env.RECIPIENT_EMAIL || 'your-email@example.com';
        const emailSent = await emailService.sendContactEmail(validatedData, recipientEmail);
        
        if (emailSent) {
          console.log("✅ Contact form submitted and email notification sent");
        } else {
          console.log("⚠️ Contact form submitted but email notification failed");
        }
        
        res.json({ 
          success: true, 
          message: "Message sent successfully! I'll get back to you soon.",
          emailSent: emailSent
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          res.status(400).json({ 
            success: false, 
            message: "Invalid form data", 
            errors: error.errors 
          });
        } else {
          console.error("Contact form error:", error);
          res.status(500).json({ 
            success: false, 
            message: "Failed to send message" 
          });
        }
      }
    });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  // Email configuration status endpoint
  app.get("/api/email-config", async (req, res) => {
    const recipientEmail = process.env.RECIPIENT_EMAIL;
    const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
    
    res.json({
      configured: !!recipientEmail && recipientEmail !== 'your-email@example.com',
      recipientEmail: recipientEmail || 'Not configured',
      hasSmtpSettings: hasSmtp,
      method: hasSmtp ? 'SMTP Email' : 'Console Logging',
      instructions: {
        step1: 'Add RECIPIENT_EMAIL=your-actual-email@domain.com to your Secrets tab',
        step2: 'Optional: Add SMTP settings if you want to send actual emails',
        step3: 'Otherwise, contact messages will be logged to console for you to see'
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
