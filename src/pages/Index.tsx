import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-8 fade-in">
          <h1 className="hero-text">
            Revolutionizing
            <br />
            Fashion Photography
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your fashion brand with AI-powered photography that delivers
            unlimited possibilities, perfect consistency, and unmatched efficiency.
          </p>
          <Button size="lg" className="mt-8">
            Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Product Photos",
                description: "Upload your product images",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Creative Brief",
                description: "Define your vision and requirements",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "AI Generation",
                description: "Let our AI create perfect shots",
              },
              {
                icon: <ArrowRight className="h-8 w-8" />,
                title: "Final Delivery",
                description: "Receive your stunning photos",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg text-center fade-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-muted-foreground">
              Ready to transform your fashion photography? Contact us today.
            </p>
          </div>
          <div className="space-y-4 text-center">
            <p className="text-lg">
              Email:{" "}
              <a
                href="mailto:kordian@modelcode.io"
                className="text-primary hover:underline"
              >
                kordian@modelcode.io
              </a>
            </p>
            <p className="text-lg">
              Phone:{" "}
              <a href="tel:+48797502346" className="text-primary hover:underline">
                +48 797 502 346
              </a>
            </p>
            <p className="text-lg">
              Website:{" "}
              <a
                href="https://modelcode.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                modelcode.io
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;