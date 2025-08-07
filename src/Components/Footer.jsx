import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 border-t ">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-md text-gray-500">
            &copy; {new Date().getFullYear()} WasteLess. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/more" className="hover:underline">
            More
          </Link>
        </div>
      </div>
    </footer>
  );
}