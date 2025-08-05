import SectionTitle from '../UI/SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'Django', 'GraphQL', 'REST APIs']
    },
    {
      title: 'Mobile',
      icon: '📱',
      skills: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)']
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      title: 'Cybersecurity',
      icon: '🔒',
      skills: ['OWASP', 'Pen Testing', 'Cryptography', 'Security Protocols']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Technologies I work with" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;