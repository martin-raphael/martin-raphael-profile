import Button from '../UI/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Martin Raphael</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Full Stack & Mobile Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I build exceptional digital experiences with expertise in web, mobile, 
            cloud computing, and cybersecurity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">
              View My Work
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="martin raphael"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;