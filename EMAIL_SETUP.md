# Email Setup Instructions

## 1. Create Environment Variables File

Create a `.env.local` file in the root of your project with these variables:

```
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

## 2. Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the key and add it to your `.env.local` file

## 3. Domain Verification (Important!)

- For production, you need to verify your domain with Resend
- For testing, you can use `onboarding@resend.dev` as the `from` address
- Update the `from` field in `src/app/api/contact/route.ts` accordingly

## 4. Update Contact Email

- Replace `your-email@example.com` in `.env.local` with your actual email
- This is where contact form submissions will be sent

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message
5. Look for success/error toast notifications

## Features Implemented

✅ **Email Sending**: Contact form now sends actual emails using Resend  
✅ **Global Notifications**: Success/error messages appear as toast notifications  
✅ **Form Validation**: Client and server-side validation  
✅ **Loading States**: Button shows "Sending..." while processing  
✅ **Form Reset**: Form clears after successful submission  
✅ **Professional Email**: HTML formatted emails with sender info  
✅ **Reply-To**: You can reply directly to the sender's email  

## Troubleshooting

- Check browser console for any errors
- Verify your API key is correct
- Make sure your domain is verified with Resend
- Check that environment variables are loaded correctly 