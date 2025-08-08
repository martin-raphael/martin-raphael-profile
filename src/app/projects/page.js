'use client';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import WebProjects from '@/components/Projects/WebProjects';
import MobileProjects from '@/components/Projects/MobileProjects';
import CloudProjects from '@/components/Projects/CloudProjects';
import { Suspense, useState } from 'react';
import FullStackLoader from '@/components/UI/FullStackLoader';

export default function Projects() {
  const [isGitHubLoading, setIsGitHubLoading] = useState(false);

  return (
    <Layout
      title="Projects | John Doe"
      description="Explore John Doe's portfolio of web, mobile, and cloud projects"
    >
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my work across web, mobile, and cloud platforms
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main projects loading */}
            <Suspense fallback={
              <div className="py-12">
                <FullStackLoader variant="section" message="Loading projects..." />
              </div>
            }>
              {/* Individual project sections with their own loading states */}
              <Suspense fallback={
                <div className="mb-12 min-h-[300px] flex items-center justify-center">
                  <FullStackLoader variant="section" />
                </div>
              }>
                <WebProjects />
              </Suspense>

              <Suspense fallback={
                <div className="mb-12 min-h-[300px] flex items-center justify-center">
                  <FullStackLoader variant="section" />
                </div>
              }>
                <MobileProjects />
              </Suspense>

              <Suspense fallback={
                <div className="mb-12 min-h-[300px] flex items-center justify-center">
                  <FullStackLoader variant="section" />
                </div>
              }>
                <CloudProjects />
              </Suspense>
            </Suspense>

            {/* Open Source Section with Loading */}
            <div className="mt-16 bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              {isGitHubLoading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-lg">
                  <FullStackLoader variant="button" />
                </div>
              )}
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Source Contributions</h2>
              <p className="text-gray-700 mb-6">
                I actively contribute to open source projects. Here are some of my notable contributions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>React Core Library - Performance optimizations</li>
                <li>Next.js - Documentation improvements</li>
                <li>Tailwind CSS - Plugin development</li>
                <li>Various security-related tools and libraries</li>
              </ul>
              <button
                onClick={() => {
                  setIsGitHubLoading(true);
                  window.open('https://github.com/martin-raphael', '_blank');
                  setTimeout(() => setIsGitHubLoading(false), 1000);
                }}
                disabled={isGitHubLoading}
                className="inline-flex items-center mt-6 text-blue-600 hover:underline"
              >
                View my GitHub profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
