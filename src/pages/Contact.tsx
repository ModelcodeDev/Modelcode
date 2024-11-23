import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #000000, #1a1a1a)",
          opacity: 0.95
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-white">
            <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl mb-12 text-gray-200">
              Ready to transform your product photography?<br />
              Our team is here to help you get started.
            </p>
            
            <div className="space-y-8">
              <a 
                href="tel:+48797502346" 
                className="flex items-center space-x-4 text-lg hover:text-gray-300 transition-colors"
              >
                <Phone className="h-6 w-6" />
                <span>+48 797 502 346</span>
              </a>
              
              <a 
                href="mailto:Kordian@modelcode.io" 
                className="flex items-center space-x-4 text-lg hover:text-gray-300 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span>Kordian@modelcode.io</span>
              </a>

              <Button 
                className="w-full mt-8 bg-white text-black hover:bg-gray-200"
                size="lg"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;