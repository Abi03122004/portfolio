# EmailJS Setup Guide - Complete Steps (NEW VERSION)

This guide will help you set up email notifications for your portfolio. When someone sends you a message, you'll get an email instantly!

---

## Step 1: Sign Up on EmailJS (FREE)

### What is EmailJS?
EmailJS is a free service that sends emails from your portfolio without needing a backend server.

### How to Sign Up:

1. Open your browser and go to: **https://www.emailjs.com**

2. Click **"Sign Up Free"** button (usually in top right)

3. You'll see options:
   - **Sign up with Google** (Recommended - easiest)
   - **Sign up with Email**

4. **Choose "Sign up with Google":**
   - Click the Google button
   - Select your Gmail account (abinesharjunan850@gmail.com)
   - Click "Allow" to give EmailJS permission
   - You'll be logged in automatically

5. Or **Sign up with Email:**
   - Enter your email: `abinesharjunan850@gmail.com`
   - Create a password
   - Click "Sign Up"
   - Verify your email (click link in confirmation email)

✅ **You're now logged into EmailJS!**

---

## Step 2: Find Your PUBLIC KEY (NEW VERSION)

This is what you need to use now (NOT User ID).

### Where to Find Your PUBLIC KEY:

1. After logging in, click your **profile icon** (top right corner)

2. Select **"Account"** from the dropdown menu

3. You'll see your dashboard with:
   - **Public Key**: `pk_xxxxxxxxxxxxxxxx` (long string starting with "pk_")
   - **Private Key**: `sk_xxxxxxxxxxxxxxxx` (keep this SECRET - don't share!)

4. Look for the **PUBLIC KEY** section

5. **Click the copy icon** next to your Public Key to copy it

6. **Important:** 
   - Use only the **PUBLIC KEY** in your code
   - Keep the **PRIVATE KEY** secret (never share it!)

✅ **Public Key copied!**

---

## Step 3: Create an Email Service

This tells EmailJS which email to send FROM.

### Steps:

1. On the left sidebar, click **"Email Services"**

2. Click the blue **"Create New Service"** button

3. Choose **"Gmail"** (recommended for this guide)

4. You'll see a popup asking for permission

5. Click **"Connect Gmail"**

6. Select your Gmail account: `abinesharjunan850@gmail.com`

7. Click **"Allow"** to give EmailJS permission to send emails

8. The service will be created. You'll see:
   - **Service Name**: `My Gmail` (or your custom name)
   - **Service ID**: `service_xxxxxxxxx` (copy this!)
   - **Status**: Connected ✓

9. **Copy the Service ID** - should be something like:
   ```
   service_xxxxxxxxx
   ```

10. In your portfolio code, update this line:
    ```javascript
    emailjs.send('service_portfolio', 'template_portfolio', {
    ```
    Change `service_portfolio` to your actual Service ID:
    ```javascript
    emailjs.send('service_xxxxxxxxx', 'template_portfolio', {
    ```

✅ **Email Service created!**

---

## Step 4: Create an Email Template

This is the format of emails you'll receive.

### Steps:

1. On the left sidebar, click **"Email Templates"**

2. Click the blue **"Create New Template"** button

3. You'll see a template editor

4. **Template Name:** Set it to:
   ```
   template_portfolio
   ```
   (This name MUST match what's in your portfolio code)

5. **Template ID:** Should auto-fill as `template_portfolio`

6. In the template editor, replace the content with this:

```
FROM: {{from_name}}
EMAIL: {{from_email}}
DATE: {{timestamp}}

MESSAGE:
{{message}}

---
This message came from your portfolio contact form!
Reply to: {{from_email}}
```

7. Or use a fancier HTML version:

```html
<h2>New Message from Your Portfolio! 📬</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a></p>
<p><strong>Time:</strong> {{timestamp}}</p>

<hr>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>

<p><em>Reply to: {{from_email}}</em></p>
```

8. Click **"Save"** button

✅ **Email Template created!**

---

## Step 5: Update Your Portfolio Code

Now you need to put your PUBLIC KEY into the portfolio code.

### Steps:

1. Open your portfolio file: **`index.html`**

2. Find this line (around line 150):
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```

3. Replace `YOUR_PUBLIC_KEY` with your actual Public Key

   **Example - Before:**
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```

   **After:**
   ```javascript
   emailjs.init('pk_a1b2c3d4e5f6g7h8i9j0');
   ```

4. Also make sure these lines match your EmailJS setup:
   ```javascript
   emailjs.send('service_portfolio', 'template_portfolio', {
   ```
   
   - `'service_portfolio'` = Your actual Service ID (if different, update it)
   - `'template_portfolio'` = Your Template Name (must match exactly!)

5. **Save the file** (Ctrl+S)

6. Refresh your portfolio in the browser (F5)

✅ **Code updated!**

---

## Step 6: Test It!

Now test if everything works!

### How to Test:

1. Go to your portfolio: **http://localhost:8000**

2. Scroll to the **"Get In Touch"** section

3. Fill in the form:
   - **Your name:** Test User
   - **Your email:** your.email@gmail.com
   - **Message:** This is a test message

4. Click **"Send Message"** button

5. Wait 2-3 seconds (you'll see "Sending..." on the button)

6. You should see: **"✅ Thank you for your message!"**

7. Check your email inbox (abinesharjunan850@gmail.com)

8. You should see a new email with the message!

✅ **Success! You're getting email notifications!**

---

## Step 7: Phone Notifications

Now you'll get notifications on your phone!

### How to Enable Phone Notifications:

1. Open Gmail app on your phone (iOS or Android)

2. Go to **Settings** → **Notifications**

3. Turn on:
   - ✅ **Notifications** (ON)
   - ✅ **Sound** (ON)
   - ✅ **Vibration** (ON - optional)

4. Now whenever you get an email, you'll get a **push notification on your phone** 📱

5. You can click the notification to open the email immediately

✅ **Phone notifications enabled!**

---

## Important: Public Key vs Private Key

| Key | Type | Use | Share? |
|-----|------|-----|--------|
| **Public Key** (pk_...) | Public | Put in your code | ✅ OK to share |
| **Private Key** (sk_...) | Secret | Keep in backend only | ❌ NEVER share |

For this portfolio, you only need the **Public Key** in your HTML file.

---

## Troubleshooting

### Problem 1: "Error sending email"
- **Solution:** Check your Public Key is correct (no spaces before/after)
- Copy it directly from emailjs.com Account page
- Make sure it starts with `pk_`

### Problem 2: Email not received
- **Solution 1:** Check spam/junk folder
- **Solution 2:** Make sure Gmail service is connected (green checkmark in Email Services)
- **Solution 3:** Template name must be exactly `template_portfolio`
- **Solution 4:** Wait 30 seconds and refresh email (sometimes delayed)

### Problem 3: "Forbidden" error or "Service not found"
- **Solution:** 
  1. Go to EmailJS Email Services
  2. Check the Service ID you're using in code
  3. Make sure it matches exactly

### Problem 4: "Template not found"
- **Solution:**
  1. Make sure template name is exactly: `template_portfolio`
  2. No spaces or typos
  3. Check it's saved in EmailJS

### Problem 5: Can't find Public Key
- **Solution:** 
  1. Log into emailjs.com
  2. Click your profile icon (top right)
  3. Click "Account"
  4. Look for "Public Key" field
  5. It should start with "pk_"

---

## Summary

| Step | Action | What You Get |
|------|--------|-------------|
| 1 | Sign up on emailjs.com | Free account |
| 2 | Get Public Key | String like `pk_abc123...` |
| 3 | Create Gmail Service | Service ID (service_xxx) |
| 4 | Create Email Template | Template for email format |
| 5 | Update portfolio code | Replace Public Key in HTML |
| 6 | Test the form | Receive test email |
| 7 | Enable phone notifications | Get alerts on your phone 📱 |

---

## What Happens Now?

1. **Visitor fills form** → Message sent
2. **EmailJS processes** (using your Public Key) → 2-3 seconds
3. **Email arrives** → In your inbox (abinesharjunan850@gmail.com)
4. **Phone notifies** → Push notification 📱
5. **You respond** → Reply to the email

---

## Video Tutorial Alternative

If you prefer watching instead of reading:
- YouTube: Search "EmailJS setup tutorial 2024"
- Most tutorials are 5-10 minutes

---

## Support

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Common Issues:** https://www.emailjs.com/docs/sdk/errors/
- **Contact EmailJS Support:** https://www.emailjs.com/contact/

Good luck! 🚀
