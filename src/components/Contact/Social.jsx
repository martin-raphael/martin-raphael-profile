import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Social = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      value: "michaelsoftware0@gmail.com",
      href: "mailto:michaelsoftware0@gmail.com"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      value: "+254797488445",
      href: "tel:+254797488445"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-blue-600" />,
      title: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      name: "GitHub",
      href: "https://github.com/martin-raphael"
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "#"
    },
    {
      icon: <FiTwitter className="w-6 h-6" />,
      name: "Twitter",
      href: "https://x.com/TechRalph"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h2>
      
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              {method.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{method.title}</h3>
              <a 
                href={method.href} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {method.value}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Social Profiles</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
