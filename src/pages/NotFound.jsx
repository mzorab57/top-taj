import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-2xl mb-8">Looks like the page is lost.</p>
      <p className="text-lg mb-8">
        This is not a fault, just an accident that was not intentional.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
