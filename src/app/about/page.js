import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import Bio from '@/components/About/Bio';
import Education from '@/components/About/Education';
import Experience from '@/components/About/Experience';

export default function About() {
  return (
    <Layout
      title="About | John Doe"
      description="Learn about John Doe's professional background, education, and technical expertise"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full Stack Developer with expertise in web, mobile, cloud computing, and cybersecurity
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Bio />
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Education />
                <Experience />
              </div>
            </div>

            <div className="mt-16 bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Development Philosophy</h3>
                  <p className="text-gray-700">
                    I believe in clean, maintainable code with security built in from the start. 
                    Every project should be scalable, performant, and deliver real value to users.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-700">
                    The tech landscape evolves rapidly. I dedicate time each week to learning new technologies 
                    and best practices to stay at the forefront of development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}