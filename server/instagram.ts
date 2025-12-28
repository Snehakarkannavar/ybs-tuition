import { Express } from "express";

// Instagram API configuration
// You'll need to set these in your environment variables or directly here
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || '';
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID || '';

interface InstagramMedia {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

// Fallback mock data if API is not configured
const mockInstagramData = [
  {
    id: "1",
    media_type: "VIDEO",
    media_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.07_PM_(1)_1765627793403.jpeg",
    thumbnail_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.07_PM_(1)_1765627793403.jpeg",
    permalink: "https://www.instagram.com/ybs.tuition/",
    caption: "YBS Tuition - Learning Excellence",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    media_type: "VIDEO",
    media_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.06_PM_1765627793402.jpeg",
    thumbnail_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.06_PM_1765627793402.jpeg",
    permalink: "https://www.instagram.com/ybs.tuition/",
    caption: "Student Success Stories",
    timestamp: new Date().toISOString(),
  },
  {
    id: "3",
    media_type: "VIDEO",
    media_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.45_PM_1765627793404.jpeg",
    thumbnail_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.45_PM_1765627793404.jpeg",
    permalink: "https://www.instagram.com/ybs.tuition/",
    caption: "Celebration at YBS",
    timestamp: new Date().toISOString(),
  },
  {
    id: "4",
    media_type: "IMAGE",
    media_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.44_PM_(1)_1765627793403.jpeg",
    thumbnail_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.44_PM_(1)_1765627793403.jpeg",
    permalink: "https://www.instagram.com/ybs.tuition/",
    caption: "Classroom Moments",
    timestamp: new Date().toISOString(),
  },
  {
    id: "5",
    media_type: "VIDEO",
    media_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.44_PM_1765627793404.jpeg",
    thumbnail_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.44_PM_1765627793404.jpeg",
    permalink: "https://www.instagram.com/ybs.tuition/",
    caption: "YBS Family",
    timestamp: new Date().toISOString(),
  },
  {
    id: "6",
    media_type: "IMAGE",
    media_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.02_PM_1765627793402.jpeg",
    thumbnail_url: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.02_PM_1765627793402.jpeg",
    permalink: "https://www.instagram.com/ybs.tuition/",
    caption: "Learning Together",
    timestamp: new Date().toISOString(),
  },
];

async function fetchInstagramPosts(): Promise<InstagramMedia[]> {
  // If no access token is configured, return mock data
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.log('Instagram API not configured, using mock data');
    return mockInstagramData as any;
  }

  try {
    // Fetch user's media using Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`
    );

    if (!response.ok) {
      console.error('Instagram API error:', response.statusText);
      return mockInstagramData as any;
    }

    const data = await response.json();
    return data.data || mockInstagramData;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return mockInstagramData as any;
  }
}

export function registerInstagramRoutes(app: Express) {
  // Endpoint to fetch Instagram posts
  app.get('/api/instagram/feed', async (req, res) => {
    try {
      const posts = await fetchInstagramPosts();
      res.json({
        success: true,
        posts: posts.slice(0, 12), // Return max 12 posts
      });
    } catch (error) {
      console.error('Error in Instagram feed endpoint:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch Instagram feed',
        posts: mockInstagramData, // Return mock data on error
      });
    }
  });

  // Health check endpoint
  app.get('/api/instagram/status', (req, res) => {
    res.json({
      configured: !!(INSTAGRAM_ACCESS_TOKEN && INSTAGRAM_USER_ID),
      usingMockData: !(INSTAGRAM_ACCESS_TOKEN && INSTAGRAM_USER_ID),
    });
  });
}
