import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <header className="border-b border-gray-800 bg-white py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img 
            src="/FC-Header-Logo.png" 
            alt="Fashion for Change Logo" 
            className="h-12 md:h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/blog" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
            Blog
          </Link>
          <Link to="/board-of-directors" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
            Board of Directors
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
