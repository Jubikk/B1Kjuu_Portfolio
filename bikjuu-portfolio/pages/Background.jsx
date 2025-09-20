const Background = ({ theme }) => {
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`min-h-screen p-8 ${bgColor} transition-colors duration-300`}>
      <h1 className={`text-3xl font-bold mb-6 ${headingColor}`}>
        Education
      </h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        <p className={`text-lg ${textColor}`}>
          • Bachelor of Science in Computer Engineering, Polytechnic University of the Philippines (2020-2026)
        </p>
        <p className={`text-lg ${textColor}`}>
          • Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management
        </p>
        <p className={`text-lg ${textColor}`}>
          • Certifications: Certified JavaScript Developer, AWS Certified Solutions Architect
        </p>
      </div>
    </div>
    
  );

}


export default Background;