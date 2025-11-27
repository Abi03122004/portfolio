# Quick EmailJS Setup - 5 Minutes

Your messages ARE being saved locally. Now let's set up email notifications!

## ⚡ Step 1: Go to EmailJS (2 min)

1. Open: https://www.emailjs.com
2. Click **"Sign Up Free"** → Sign with Google
3. Choose your Gmail: abinesharjunan850@gmail.com
4. Done! You're logged in

---

## ⚡ Step 2: Connect Gmail Service (2 min)

1. Click **"Email Services"** on left sidebar
2. Click **"Create New Service"** (blue button)
3. Select **"Gmail"**
4. Click **"Connect Gmail"**
5. Select abinesharjunan850@gmail.com
6. Click **"Allow"**
7. You'll see your Service ID - should look like: `service_xxxxxxxx`

✅ Gmail connected!

---

## ⚡ Step 3: Create Email Template (1 min)

1. Click **"Email Templates"** on left sidebar
2. Click **"Create New Template"**
3. **Name it:** `template_portfolio` (EXACTLY this!)
4. In the template, replace content with:

```
FROM: {{from_name}}
EMAIL: {{from_email}}

MESSAGE:
{{message}}

Sent: {{timestamp}}
```

5. Click **"Save"**

✅ Template created!

---

## ⚡ Step 4: Get Your Public Key (Very Important!)

1. Click your **profile icon** (top right)
2. Click **"Account"**
3. Look for **"Public Key"** - copy it (starts with `pk_`)
4. **DON'T share this but it's safe for frontend code**

Your Public Key: `G_a0h_qkBPADeecGt` (already in your code!)

---

## ⚛ Step 5: Verify Setup is Working

1. Go back to your portfolio: http://localhost:8000
2. Scroll to "Get In Touch"
3. Fill the form:
   - Name: Test User
   - Email: your.email@gmail.com
   - Message: Test message

4. Click "Send Message"
5. You should see: ✅ Message saved instantly
6. Check your Gmail inbox (abinesharjunan850@gmail.com)
7. You should get an email in 5-10 seconds!

---

## ❓ If Email Still Not Arriving:

### Check 1: Spam Folder
- Look in Gmail Spam/Junk folder
- If found, mark as "Not spam"

### Check 2: Gmail Service Connected?
- Go to Email Services
- Do you see a green checkmark next to Gmail?
- If red X, click "Reconnect Gmail"

### Check 3: Template Name Correct?
- Go to Email Templates
- Template must be named EXACTLY: `template_portfolio`
- No spaces, no caps differences!

### Check 4: Clear Browser Cache
- Refresh page: Ctrl+F5 (hard refresh)
- Try sending again

### Check 5: Check Browser Console
- Press F12 → Console tab
- Look for errors
- Copy the error and share it

---

## 📱 Where Messages Go:

**1. Saved Locally (Instant)** ✅
- View in browser: F12 → Application → Local Storage
- Type in Console: `showAllMessages()`

**2. Email to You (5-10 sec)** ✅
- Check: abinesharjunan850@gmail.com
- May take up to 10 seconds
- Check spam folder!

**3. Phone Notification**
- Open Gmail app on phone
- Go to Settings → Notifications
- Turn ON notifications
- You'll get instant alerts when emails arrive!

---

## 🆘 Still Not Working?

1. Take a screenshot of your Email Services page
2. Take a screenshot of your Email Templates page
3. Share them - the issue will be obvious!

---

## ✅ Success Signs:

- ✅ Form submits instantly (< 1 second)
- ✅ Confirmation popup appears
- ✅ Message shows in Console when you type: `showAllMessages()`
- ✅ Email arrives in inbox within 10 seconds
- ✅ Email from "portfolio contact form"

---

## Final Check:

Did you:
1. ✅ Sign up on emailjs.com?
2. ✅ Connect Gmail service?
3. ✅ Create template named `template_portfolio`?
4. ✅ Have your Public Key in the code?

If YES to all 4 → **It will work!**

Test now and let me know what happens! 🚀
