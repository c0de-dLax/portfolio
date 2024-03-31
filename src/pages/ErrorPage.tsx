import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main>
      <h1 className="text-[4em] text-center px-2 mt-6">Oops!</h1>
      <h1 className="text-[4.5em] text-center font-[500] px-2">Error 404</h1>
      <h2 className="text-[2.5em] text-center px-2">Page Not Found</h2>
      <h3 className="text-[1.5em] text-blue-600 text-center mt-6 px-2">
        <Link to="/portfolio/">
          Click here to go back to the Home Page
        </Link>
      </h3>
    </main>
  );
}
