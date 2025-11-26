import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";

const Blog = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-12 md:mb-20">
          the blog
        </h1>

        {/* Blog Card - Clickable */}
        <Link to="/blog/fundrive" className="block group">
          <article className="grid gap-8 lg:gap-12 items-center" style={{ gridTemplateColumns: "400px 1fr" }}>
            {/* Featured Image */}
            <img 
              src={blogHeaderPhoto}
              alt="FUNdrive Campaign featuring sustainable fashion models" 
              style={{ 
                width: '400px', 
                height: '300px', 
                objectFit: 'cover',
                borderRadius: '20px',
                flexShrink: 0
              }}
              className="group-hover:opacity-90 transition-opacity"
            />

            {/* Content */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <time className="text-sm md:text-base" style={{ color: '#a0a0a0' }}>
                November 14, 2025
              </time>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight group-hover:opacity-70 transition-opacity">
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
