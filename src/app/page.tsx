import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import Skills from '../components/Home/Skills';
import Stats from '../components/Home/Stats';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>John Doe | Full Stack & Mobile Developer</title>
        <meta name="description" content="Professional portfolio of John Doe - Full Stack Developer specializing in web, mobile, cloud computing, and cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="John Doe | Full Stack & Mobile Developer" />
        <meta property="og:description" content="Professional portfolio showcasing my work in web, mobile, cloud, and cybersecurity development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/images/social-preview.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourhandle" />
      </Head>

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Hero Section */}
        <Hero />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Stats Section */}
        <Stats />
        
        {/* Optional CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm available for freelance work and full-time positions. Let's build something amazing together!
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="/projects" 
                className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}