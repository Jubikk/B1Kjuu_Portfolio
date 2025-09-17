import react from 'react';


const AboutMe = () => {
   
  return (
    <section id="aboutme" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <p className="max-w-3xl text-lg text-gray-700 leading-relaxed mb-6 text-center">
        Hello! I'm B1Kjuu, a passionate developer with a love for creating innovative solutions. 
        With a background in computer engineering and a knack for problem-solving, I enjoy turning ideas into reality through code.
      </p>
      <p className="max-w-3xl text-lg text-gray-700 leading-relaxed mb-6 text-center">
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or indulging in my hobbies like gaming and music.
      </p>
      <p className="max-w-3xl text-lg text-gray-700 leading-relaxed text-center">
        Feel free to explore my projects and get in touch if you'd like to collaborate or just say hi!
      </p>
    </section>

  );

};


export default AboutMe;