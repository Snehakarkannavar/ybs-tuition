import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Aditi S.",
    grade: "Class 10 Student",
    text: "YBS Tuition helped me understand concepts I struggled with for years. Yeshwant Sir's teaching style is unique and very easy to grasp.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    grade: "Class 9 Student",
    text: "The best part is the friendly environment. I can ask doubts without hesitation. My grades improved significantly in Science.",
    rating: 5,
  },
  {
    name: "Mrs. Patil",
    grade: "Parent",
    text: "I've seen a huge boost in my son's confidence. The personal attention they provide is commendable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha K.",
    grade: "Class 12 Student",
    text: "Physics was my nightmare until I joined YBS. Now it's my favorite subject. The notes are super helpful for board prep.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">Student Stories</h3>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from our students and parents about their journey with YBS.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="h-full border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <div className="mb-6 flex-grow">
                          <MessageSquare className="h-8 w-8 text-primary/20 mb-3" />
                          <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                        </div>
                        <div className="border-t border-border pt-4 mt-auto">
                          <p className="font-heading font-bold text-foreground">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.grade}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
