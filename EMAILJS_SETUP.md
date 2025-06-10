# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form functionality.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., "service_abc123")

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the Websure Software contact form.
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "user_abcdef123456")

## 5. Update Environment Variables

1. Open the `.env` file in the project root
2. Replace the placeholder values with your actual credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=user_abcdef123456
```

## 6. Test the Form

1. Start the development server: `npm start`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email for the test message

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles the secure email sending on their servers
- Your actual email credentials are never exposed in the frontend code

## Troubleshooting

- **403 Forbidden**: Check that your public key is correct
- **Template not found**: Verify the template ID matches exactly
- **Service not found**: Ensure the service ID is correct and the service is active
- **Email not received**: Check spam folder and verify email template settings

## Rate Limits

- Free tier: 200 emails/month
- Check EmailJS pricing for higher limits if needed
