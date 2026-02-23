import { z } from 'zod';

const requiredString = (label, min = 2) =>
  z.string({ required_error: `${label} is required` }).trim().min(min, `${label} is too short`);

export const contactSchema = z.object({
  name: requiredString('Name'),
  email: z.string({ required_error: 'Email is required' }).trim().email('Enter a valid email address'),
  message: requiredString('Message', 10),
  website: z.string().optional().default('')
});

export const getDeliverySchema = z.object({
  name: requiredString('Name'),
  phone: requiredString('Phone', 7),
  email: z.string({ required_error: 'Email is required' }).trim().email('Enter a valid email address'),
  location: requiredString('Location', 3),
  message: requiredString('Message', 10),
  website: z.string().optional().default('')
});

export const newsletterSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).trim().email('Enter a valid email address'),
  website: z.string().optional().default('')
});
