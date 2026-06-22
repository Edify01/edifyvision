# Email Setup Guide for Contact Form

The contact form is fully functional and ready to send emails. You just need to connect it to an email service. Here's how:

## 🚀 Quick Setup with Resend (Recommended - 5 minutes)

Resend is the easiest option and has a free tier (100 emails/day).

### Step 1: Sign Up

1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email address

### Step 2: Get API Key

1. In the Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name like "Edify Consulting Website"
4. Copy the API key (it starts with `re_`)

### Step 3: Add API Key to Your Project

1. In your project root (`edify-consulting/`), create a file called `.env.local`:

```bash
RESEND_API_KEY=re_your_api_key_here
```

2. **Important**: Make sure `.env.local` is in your `.gitignore` (it already is by default)

### Step 4: Install Resend

```bash
cd ~/edify-consulting
npm install resend
```

### Step 5: Update the API Route

Open `app/api/contact/route.ts` and replace the entire file with:

```typescript
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, description } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessName || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Edify Website <onboarding@resend.dev>', // Change this after domain verification
      to: ['info@edifyvision.com'],
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>What they're looking for:</strong></p>
        <p>${description}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
```

### Step 6: Verify Your Domain (Optional but Recommended)

To send emails from `website@edifyvision.com` instead of `onboarding@resend.dev`:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `edifyvision.com`
4. Follow the DNS instructions to add the records
5. Once verified, change the `from` field in the code to:
   ```typescript
   from: 'Edify Consulting <website@edifyvision.com>',
   ```

### Step 7: Test It!

1. Rebuild and restart your dev server:
   ```bash
   npm run build
   npm run dev
   ```

2. Go to `http://localhost:3000`
3. Click "Book a Free Consultation"
4. Fill out the form and submit
5. Check your inbox at `info@edifyvision.com`

### Step 8: Deploy to Vercel

1. Push your changes to GitHub:
   ```bash
   git add -A
   git commit -m "feat: connect contact form to Resend"
   git push
   ```

2. Add the environment variable to Vercel:
   - Go to your Vercel dashboard
   - Click on your project
   - Go to **Settings** → **Environment Variables**
   - Add: `RESEND_API_KEY` = `re_your_key_here`
   - Click **Save**

3. Redeploy (or wait for auto-deploy)

---

## 📧 Alternative: SendGrid

If you prefer SendGrid:

### 1. Sign up at [sendgrid.com](https://sendgrid.com)

### 2. Get API Key

- Go to Settings → API Keys
- Create API Key
- Copy the key (starts with `SG.`)

### 3. Add to `.env.local`

```bash
SENDGRID_API_KEY=SG.your_api_key_here
```

### 4. Install SendGrid

```bash
npm install @sendgrid/mail
```

### 5. Update API Route

```typescript
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, description } = body;

    if (!name || !email || !phone || !businessName || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await sgMail.send({
      to: 'info@edifyvision.com',
      from: 'website@edifyvision.com', // Must be verified in SendGrid
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Message:</strong></p>
        <p>${description}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
```

---

## ✅ Current Status

**What's already done:**
- ✅ Contact form UI (fully functional)
- ✅ Form validation (all fields required)
- ✅ API endpoint (`/api/contact`)
- ✅ Success/error states
- ✅ Modal opens from all "Book a Consultation" buttons (including navbar)

**What you need to do:**
1. Sign up for Resend (or SendGrid)
2. Get API key
3. Add to `.env.local`
4. Install the package (`npm install resend`)
5. Update `app/api/contact/route.ts` with the code above
6. Add environment variable to Vercel
7. Test and deploy!

---

## 🔒 Security Notes

- **Never commit `.env.local`** to GitHub (it's already in `.gitignore`)
- API keys should only be in:
  - Your local `.env.local` file
  - Vercel environment variables
- The API route runs on the server, so your API key is never exposed to the browser

---

## 🆘 Troubleshooting

### Form submits but no email arrives

1. Check the browser console for errors
2. Check Vercel logs: `https://vercel.com/your-username/edifyvision/logs`
3. Verify API key is correct in Vercel environment variables
4. Check Resend/SendGrid dashboard for delivery logs

### "Failed to send email" error

- Verify your API key is correct
- Check if you've exceeded free tier limits
- Make sure `from` email is verified in your email service

### Email goes to spam

- Verify your domain in Resend/SendGrid
- Use a custom domain email (not `onboarding@resend.dev`)
- Add SPF and DKIM records (Resend provides these)

---

## 💡 Pro Tips

1. **Test emails locally first** before deploying
2. **Monitor your email quota** - Free tier is usually 100-300/day
3. **Set up email templates** in Resend for better branding
4. **Add form spam protection** (Google reCAPTCHA) if you get spam submissions

---

**Need help?** The code is ready to go - you just need to connect the email service!
