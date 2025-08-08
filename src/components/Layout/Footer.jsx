import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Martin Raphael </h2>
            <p className="text-gray-600">Full Stack & Mobile Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiGithub className="w-6 h-6" />
            </a>
            <a href="https://github.com/martin-raphael" className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/TechRalph" className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiTwitter className="w-6 h-6" />
            </a>
            <a href="mailto:michaelsoftware0@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Martin Raphael. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
