import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import ContactForm from '@/components/Contact/Form';
import Social from '@/components/Contact/Social';

export default function Contact() {
  return (
    <Layout
      title="Contact | John Doe"
      description="Get in touch with John Doe for your next web, mobile, or cloud project"
    >
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Me</h1>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>
            <div className="order-1 lg:order-2">
              <Social />
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Looking for immediate assistance?</h2>
            <p className="text-gray-600 mb-6">
              I typically respond to messages within 24 hours. For urgent inquiries, please call directly.
            </p>
            <a 
              href="tel:+254797488445" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: +254797488445
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}