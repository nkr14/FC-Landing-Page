import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-12 md:mb-20">
          the blog
        </h1>

        <Link to="/blog/fundrive" className="block group">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* ✅ HARD MAX-SIZE IMAGE LOCK */}
            <div className="flex justify-start">
              <div
                className="rounded-[20px] overflow-hidden"
                style={{
                  maxWidth: "906px",
                  width: "100%"
                }}
              >
                <img 
                  src={blogHeaderPhoto}
                  alt="FUNdrive Campaign featuring sustainable fashion models"
                  style={{
                    width: "100%",
                    maxWidth: "906px",
                    height: "auto",
                    display: "block"
                  }}
                  className="group-hover:opacity-90 transition-opacity"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <time className="text-gray-400 text-sm md:text-base">
                November 14, 2025
              </time>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight group-hover:text-gray-300 transition-colors">
                Join Our First Annual FUNdrive!
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
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
