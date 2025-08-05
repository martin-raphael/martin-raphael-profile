const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      responsibilities: [
        'Led development of enterprise SaaS platform',
        'Implemented CI/CD pipelines',
        'Mentored junior developers'
      ]
    },
    {
      role: 'Mobile Developer',
      company: 'Digital Innovations',
      period: '2018 - 2020',
      responsibilities: [
        'Developed cross-platform mobile apps',
        'Optimized app performance',
        'Implemented secure authentication'
      ]
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h4 className="font-medium text-gray-900">{exp.role}</h4>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;