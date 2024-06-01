import { Link } from "react-router-dom";

const PageUnderConstruction = () => {
  return (
    <main className="flex justify-center items-center flex-col w-[100vw-10px] h-[100dvh] gap-10 bg-white text-black dark:bg-[rgb(2,8,23)] dark:text-white">
      <h1 className="text-[3em] text-center px-2 mt-6">Coming Soon!</h1>
      <h2 className="text-[3em] text-center font-[500] px-2">
        This page is still under construction.
      </h2>
      <h3 className="text-[1.5em] text-blue-600 text-center mt-4 px-2 mb-10">
        <Link to="/#projects">Click here to go back to the Home Page</Link>
      </h3>
    </main>
  );
};

export default PageUnderConstruction;

// Page for on-going projects
