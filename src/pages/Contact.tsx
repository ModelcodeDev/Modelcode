import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/4bd6ab60-5e02-4314-adcb-146db2fc78ea.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl mb-12">
            We would love to hear from you.<br />
            Feel free to reach out using the below details.
          </p>
          
          <div className="space-y-6">
            <p className="text-lg">
              <a href="tel:+48797502346" className="hover:text-gray-300">
                +48 797 502 346
              </a>
            </p>
            <p className="text-lg">
              <a href="mailto:Kordian@modelcode.io" className="hover:text-gray-300">
                Kordian@modelcode.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;