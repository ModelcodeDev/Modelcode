import React from 'react';

const Privacy = () => {
  return (
    <div className="container py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          At ModelCode, we respect your privacy and are committed to protecting your personal data.
          This privacy policy explains how we handle any personal information we collect from you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (name, email, phone number)</li>
          <li>Product images and related content</li>
          <li>Usage data and preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and improve our services</li>
          <li>Communicate with you about our services</li>
          <li>Process your transactions</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: kordian@modelcode.io
        </p>
      </div>
    </div>
  );
};

export default Privacy;