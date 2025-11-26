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
          {/*  Card Image (350px) + Text */}
          <article
            className="grid gap-10 items-center"
            style={{
              gridTemplateColumns: "minmax(0, 350px) 1fr"
            }}
          >
            {/* Image */}
            <img
              src={blogHeaderPhoto}
              alt="FUNdrive Campaign featuring sustainable fashion models"
              style={{
                width: "350px",
                height: "490px",
                objectFit: "cover",
                borderRadius: "20px",
                flexShrink: 0
              }}
              className="group-hover:opacity-90 transition-opacity"
            />

            <div className="flex flex-col justify-center space-y-4 md:space-y-6 max-w-xl">
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
