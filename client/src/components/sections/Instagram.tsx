import { motion } from "framer-motion";
import { Instagram as InstagramIcon, ExternalLink, Heart, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export default function Instagram() {
  // Static posts data for online teaching reels
  const staticPosts = [
    {
      id: "1",
      media_type: 'IMAGE' as const,
      media_url: "/attached_assets/Screenshot 2025-12-28 001447.png",
      permalink: "https://www.instagram.com/ybs.tuition/",
      caption: "Creating educational reels to share knowledge.",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2", 
      media_type: 'IMAGE' as const,
      media_url: "/attached_assets/Screenshot 2025-12-28 000201.png",
      permalink: "https://www.instagram.com/ybs.tuition/",
      caption: "Connect with us and learn together",
      timestamp: new Date().toISOString(),
    },
  ];

  const [posts, setPosts] = useState<InstagramPost[]>(staticPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/instagram/feed');
        const data = await response.json();
        
        if (data.success && data.posts) {
          setPosts(data.posts.slice(0, 6)); // Display first 6 posts
        } else {
          setError('Failed to load Instagram posts');
        }
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ybs.tuition/", "_blank", "noopener,noreferrer");
  };

  const handlePostClick = (permalink: string) => {
    window.open(permalink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="instagram" className="py-20 md:py-24 relative overflow-hidden">
      {/* Instagram Profile Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Image with Grid Pattern */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 h-full w-full opacity-[0.15] blur-[2px]">
            {/* Repeat background images in a grid pattern */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <img 
                  src={`/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.${String(2 + (i % 3)).padStart(2, '0')}_PM_1765627793402.jpeg`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-orange-50/80 dark:from-slate-900/80 dark:via-purple-950/40 dark:to-slate-900/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 flex items-center justify-center shadow-xl shadow-pink-500/50 ring-2 ring-white dark:ring-slate-900">
              <InstagramIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-orange-600 font-bold tracking-wide uppercase text-xs mb-2">Follow Us</h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 leading-tight">
            Connect on <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">Instagram</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Learn beyond the classroom with our educational Instagram reels.
          </p>
          <Button 
            size="sm"
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all gap-2"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow @ybs.tuition
            <ExternalLink className="h-3 w-3" />
          </Button>
        </motion.div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {staticPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card 
                className="group relative overflow-hidden cursor-pointer border-2 border-border hover:border-primary/50 transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
                onClick={() => handlePostClick(post.permalink)}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-50 dark:bg-gray-900">
                  <img
                    src={post.media_url}
                    alt={post.caption || `Instagram post ${post.id}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    {/* Instagram Icon */}
                    <div className="flex justify-end">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <InstagramIcon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Caption */}
                    <div className="text-white">
                      <p className="text-sm font-medium mb-2 line-clamp-2">
                        {post.caption}
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4 fill-white" />
                          <span>Like</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>Comment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <InstagramIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">@ybs.tuition</p>
                        <p className="text-xs text-muted-foreground">Online Teaching</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.caption}
                  </p>
                </div>

                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 font-medium text-lg">
            Join our community for <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text font-bold text-xl">Online Learning</span> and interactive sessions
          </p>
          <Button 
            variant="outline"
            size="lg"
            onClick={handleInstagramClick}
            className="rounded-full border-2 hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/20 gap-2 font-semibold px-8 py-6 text-base"
          >
            View All Posts
            <ExternalLink className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
