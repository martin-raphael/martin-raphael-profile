const Education = () => {
  const education = [
    {
      degree: 'M.Sc. Computer Science',
      institution: 'Tech University',
      year: '2018 - 2020',
      description: 'Specialized in Cybersecurity and Cloud Computing'
    },
    {
      degree: 'B.Sc. Software Engineering',
      institution: 'State University',
      year: '2014 - 2018',
      description: 'Graduated with Honors'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-medium text-gray-900">{item.degree}</h4>
            <p className="text-gray-600">{item.institution}</p>
            <p className="text-sm text-gray-500 mb-2">{item.year}</p>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;