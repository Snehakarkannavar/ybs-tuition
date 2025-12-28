# Instagram Integration Setup

This application fetches and displays real Instagram posts from the @ybs.tuition account.

## Current Status

The app is currently using **mock data** with local images. To display real Instagram posts, you need to set up Instagram API credentials.

## Setup Instructions

### Option 1: Instagram Basic Display API (Recommended for Personal Accounts)

1. **Create a Facebook App:**
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Click "My Apps" → "Create App"
   - Select "Consumer" as the app type
   - Fill in the app details

2. **Add Instagram Basic Display:**
   - In your app dashboard, click "Add Product"
   - Find "Instagram Basic Display" and click "Set Up"
   - Click "Create New App" in the Basic Display section

3. **Configure Instagram Basic Display:**
   - Add a valid OAuth Redirect URI: `https://localhost:5000/auth/instagram/callback`
   - Add a valid Deauthorize Callback URL: `https://localhost:5000/auth/instagram/deauthorize`
   - Add a valid Data Deletion Request URL: `https://localhost:5000/auth/instagram/delete`
   - Save changes

4. **Get Your Access Token:**
   - Go to "Instagram Basic Display" → "Basic Display"
   - Under "User Token Generator", add your Instagram account
   - Click "Generate Token" and authorize the app
   - Copy the generated Access Token

5. **Get Your Instagram User ID:**
   - Use the Access Token to make a request:
   ```bash
   curl -X GET "https://graph.instagram.com/me?fields=id,username&access_token=YOUR_ACCESS_TOKEN"
   ```
   - Copy the `id` from the response

6. **Set Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   INSTAGRAM_ACCESS_TOKEN=your_access_token_here
   INSTAGRAM_USER_ID=your_user_id_here
   ```

7. **Restart the Application:**
   ```bash
   npm run dev
   ```

### Option 2: Instagram Graph API (For Business Accounts)

1. Convert your Instagram account to a Business or Creator account
2. Connect it to a Facebook Page
3. Use Facebook Graph API to access Instagram Business Account data
4. Follow similar steps but use the Graph API endpoints

## API Endpoints

The server exposes the following endpoints:

- `GET /api/instagram/feed` - Fetches Instagram posts
- `GET /api/instagram/status` - Check if Instagram API is configured

## Features

✅ Automatically fetches latest posts from @ybs.tuition
✅ Displays images and videos with proper thumbnails
✅ Shows post captions on hover
✅ Clickable posts that open directly on Instagram
✅ Loading states and error handling
✅ Falls back to mock data if API is not configured

## Troubleshooting

**Issue: Access Token Expired**
- Instagram access tokens expire after 60 days
- Generate a long-lived token (valid for 60 days):
```bash
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_ACCESS_TOKEN"
```

**Issue: "Invalid OAuth access token"**
- Make sure you're using the correct access token
- Verify the token hasn't expired
- Check that the Instagram account is connected to your Facebook app

**Issue: Not showing real posts**
- Check `/api/instagram/status` to see if API is configured
- Verify environment variables are set correctly
- Check server logs for error messages

## Mock Data Behavior

When Instagram API credentials are not configured:
- The app uses local images from `/attached_assets/`
- All posts link to https://www.instagram.com/ybs.tuition/
- This allows the site to function without API setup
- Real data will automatically load once credentials are added

## Security Notes

⚠️ **Never commit your Access Token to version control**
- Always use environment variables
- Add `.env` to `.gitignore`
- Rotate tokens periodically
- Use long-lived tokens in production

## Need Help?

For detailed Instagram API documentation:
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Instagram Graph API](https://developers.facebook.com/docs/instagram-api)
