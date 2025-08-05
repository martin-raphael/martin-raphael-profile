import Card from '../UI/Card';
import Image from 'next/image';

const MobileProjects = () => {
  const projects = [
    {
      title: "Fitness Tracker App",
      description: "Cross-platform mobile application for workout tracking and health monitoring.",
      technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
      link: "#",
      image: "/images/projects/fitness.png"
    },
    {
      title: "Social Media App",
      description: "Mobile-first social network with real-time messaging and content sharing.",
      technologies: ["Flutter", "Node.js", "WebSockets", "MongoDB"],
      link: "#",
      image: "/images/projects/social.png"
    }
  ];

  return (
    <div className="mb-12 text-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        Mobile Development Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MobileProjects;