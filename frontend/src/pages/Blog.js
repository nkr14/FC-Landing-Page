import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";

const Blog = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <Navbar />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px' }}>
        <h1 style={{ 
          fontSize: '96px', 
          fontWeight: '500', 
          marginBottom: '80px',
          letterSpacing: '-0.02em',
          color: '#ffffff',
          textAlign: 'left',
          paddingLeft: '0'
        }}>
          the blog
        </h1>

        <Link to="/blog/fundrive" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ 
            display: 'grid', 
            gridTemplateColumns: '600px 1fr', 
            gap: '48px', 
            alignItems: 'center' 
          }}>
            {/* Featured Image */}
            <img 
              src={blogHeaderPhoto}
              alt="FUNdrive Campaign featuring sustainable fashion models" 
              style={{ 
                width: '600px', 
                height: '450px', 
                objectFit: 'cover',
                borderRadius: '20px',
                flexShrink: 0,
                display: 'block'
              }}
            />

            {/* Content */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              gap: '24px',
              textAlign: 'left'
            }}>
              <time style={{ color: '#a0a0a0', fontSize: '16px' }}>
                November 14, 2025
              </time>

              <h2 style={{ 
                fontSize: '48px', 
                fontWeight: '500', 
                lineHeight: '1.2',
                margin: '0',
                color: '#ffffff',
                textTransform: 'none'
              }}>
                Join Our First Annual FUNdrive!
              </h2>

              <p style={{ 
                fontSize: '20px', 
                lineHeight: '1.6',
                color: '#e0e0e0',
                margin: '0'
              }}>
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
