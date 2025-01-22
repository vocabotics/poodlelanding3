import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';
import { Sun, Moon } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ImageCarousel = () => (
  <Carousel className="w-full max-w-5xl mx-auto">
    <CarouselContent>
      {[1, 2, 3].map((index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <AspectRatio ratio={16/9}>
              <img
                src={`/images/poodle-${index}.jpg`}
                alt={`Poodle ${index}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <h1 className="text-2xl font-bold text-primary">Poodle Paradise</h1>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
    </nav>
  );
};

const Features = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
    {[
      { title: 'Elegant Breed', description: 'Discover the grace and intelligence of standard poodles' },
      { title: 'Professional Grooming', description: 'Premium grooming services for your beloved companion' },
      { title: 'Training Programs', description: 'Expert-led obedience and agility training sessions' }
    ].map((feature, index) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export const Home = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 flex flex-col items-center justify-center py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 px-4"
      >
        <h2 className="text-4xl font-bold tracking-tight">Welcome to Poodle Paradise</h2>
        <p className="text-xl text-muted-foreground">Where elegance meets companionship</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full flex justify-center"
      >
        <ImageCarousel />
      </motion.div>

      <Features />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <Button size="lg">Schedule a Consultation</Button>
      </motion.div>
    </main>
  </div>
);