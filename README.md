# Edify Consulting Website

Professional consulting website built with Next.js, featuring AI integration and systems consulting services.

## 🎨 Customization Guide

### Uploading Your Own Topographic Background

To replace the default topographic pattern on the homepage hero section:

1. **Prepare your SVG file**
   - Name it `topographic-bg.svg`
   - Recommended dimensions: 1440×640 or larger
   - Ensure it's a valid SVG file

2. **Upload to the public folder**
   ```bash
   # Place your file at:
   /public/topographic-bg.svg
   ```

3. **Update the hero section**
   - Open `app/page.tsx`
   - Find the comment: `/* TO REPLACE: Upload your own topographic SVG file */`
   - Replace the entire `<div>` containing the inline SVG with:
   ```tsx
   <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
     <Image src="/topographic-bg.svg" alt="" fill style={{ objectFit: "cover", opacity: 0.3 }} />
   </div>
   ```

4. **Adjust opacity if needed**
   - Change the `opacity` value (0.1 to 0.5 recommended) to control visibility

### Replacing the Placeholder Headshot

1. **Prepare your photo**
   - Recommended: Professional headshot, 800×1000px or similar 4:5 aspect ratio
   - Format: JPG or PNG
   - Name it `headshot.jpg` (or `.png`)

2. **Upload to the public folder**
   ```bash
   # Place your file at:
   /public/headshot.jpg
   ```

3. **Update both pages**
   - **Homepage** (`app/page.tsx`): Find `src="/headshot-placeholder.svg"` and replace with `src="/headshot.jpg"`
   - **About page** (`app/about/page.tsx`): Find `src="/headshot-placeholder.svg"` and replace with `src="/headshot.jpg"`

4. **Update the name**
   - In both files, replace `"Your Name"` with your actual name
   - Update the title if needed (currently "Founder & Principal Advisor")

## 📧 Email Configuration

The contact form currently logs submissions to the console. To enable actual email sending:

1. **Choose an email service**
   - [Resend](https://resend.com) (recommended, simple setup)
   - [SendGrid](https://sendgrid.com)
   - [AWS SES](https://aws.amazon.com/ses/)

2. **Install the SDK**
   ```bash
   npm install resend
   # or
   npm install @sendgrid/mail
   ```

3. **Update the API route**
   - Open `app/api/contact/route.ts`
   - Follow the commented example code
   - Add your API key to environment variables

4. **Set environment variable**
   ```bash
   # Add to .env.local
   RESEND_API_KEY=your_key_here
   ```

## 🚀 Deployment

This site is configured for Vercel deployment:

1. Push changes to GitHub
2. Vercel auto-deploys (if connected)
3. Changes appear live in ~30 seconds

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── page.tsx              # Homepage
├── about/page.tsx        # About page
├── components/
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── EdifyLogo.tsx     # Logo component
│   └── ContactModal.tsx  # Contact form modal
├── api/contact/          # Contact form API endpoint
└── globals.css           # Global styles & animations

public/
├── headshot-placeholder.svg  # Replace with your photo
└── (topographic-bg.svg)      # Optional: Your custom background
```

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Professional contact modal with form validation
- ✅ Animated gradient hero background
- ✅ Customizable topographic pattern
- ✅ AI & systems consulting content
- ✅ EdifySuite integration
- ✅ Type-safe with TypeScript
- ✅ Optimized for performance

## 📝 Content Updates

All content is in:
- **Homepage**: `app/page.tsx`
- **About**: `app/about/page.tsx`

Simply edit the text directly in these files and push to GitHub to deploy.

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Domain**: edifyvision.com

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
