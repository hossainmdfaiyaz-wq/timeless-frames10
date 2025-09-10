import emailjs from '@emailjs/browser';

// EmailJS configuration
const PUBLIC_KEY = 'gX6bt-5rG_0D6te47';
const SERVICE_ID = 'service_58k5xmu';
const TEMPLATE_ID = 'template_lo3r9wo';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'MD FAIYAZ HOSSAIN', // Your name for the template
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};