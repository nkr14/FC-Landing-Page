import { Link } from "react-router-dom";
import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <BlogHeader />
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-12 md:mb-20">
          the blog
        </h1>

        {/* Blog Card - Clickable */}
        <Link to="/blog/fundrive" className="block group">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center hover:opacity-90 transition-opacity">
            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={blogHeaderPhoto}
                alt="FUNdrive Campaign featuring sustainable fashion models" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <time className="text-gray-500 text-sm md:text-base">
                November 14, 2025
              </time>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight group-hover:text-gray-600 transition-colors">
                Join Our First Annual FUNdrive!
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                This November through December 7th, help us reach our $500 goal by donating clothing, textiles, and household goods.
              </p>
            </div>
          </article>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
