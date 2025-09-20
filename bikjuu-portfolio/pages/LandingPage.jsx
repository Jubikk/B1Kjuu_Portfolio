import ThemeToggle from "../src/components/ThemeToggle"


const LandingPage = ({ theme }) => {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl">Current theme: {theme}</p>
    </div>
  );
}
export default LandingPage;