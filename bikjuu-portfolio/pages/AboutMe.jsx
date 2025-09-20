const AboutMe = ({ theme }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-700';
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';

  return (
    <section id="aboutme" className={`min-h-screen flex flex-col justify-center items-center p-8 ${bgColor} transition-colors duration-300`}>
      <h1 className={`text-4xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About Me</h1>
      <p className={`max-w-3xl text-lg ${textColor} leading-relaxed mb-6 text-center`}>
        Hello! I'm B1Kjuu, a passionate developer with a love for creating innovative solutions. 
        With a background in computer engineering and a knack for problem-solving, I enjoy turning ideas into reality through code.
      </p>
      <p className={`max-w-3xl text-lg ${textColor} leading-relaxed mb-6 text-center`}>
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or indulging in my hobbies like gaming and music.
      </p>
      <p className={`max-w-3xl text-lg ${textColor} leading-relaxed text-center`}>
        Feel free to explore my projects and get in touch if you'd like to collaborate or just say hi!
      </p>
    </section>
  );
};


export default AboutMe;