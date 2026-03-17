import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";
import aiDilemmaHeader from "../images/IMG_0339.JPG";
import universityFashionHeader from "../images/blog/university-fashion/Image_8.jpg";
import sustainabilityHeader from '../images/blog/fashion-sustainability.jpg';

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
          BLOG
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
{/* Sustainability Blog Post - Most Recent */}
<Link to="/blog/sustainability" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article style={{ 
    display: 'grid', 
    gridTemplateColumns: '530px 1fr', 
    gap: '60px', 
    alignItems: 'center'
  }}>
    <img 
      src={sustainabilityHeader}
      alt="Sustainability in the fashion industry" 
      style={{ 
        width: '530px', 
        height: '330px', 
        objectFit: 'cover',
        borderRadius: '12px',
        flexShrink: 0,
        display: 'block'
      }}
    />
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      gap: '20px',
      textAlign: 'left'
    }}>
      <time style={{ color: '#a0a0a0', fontSize: '16px' }}>
        March 17, 2026
      </time>
      <h2 style={{ 
        fontSize: '56px', 
        fontWeight: '500', 
        lineHeight: '1.1',
        margin: '0',
        color: '#ffffff',
      }}>
        Sustainability in the Fashion Industry
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.5',
        color: '#e0e0e0',
        margin: '0'
      }}>
        Over 63% of fashion companies are not on track to meet their decarbonization goals — and greenwashing is making it harder to tell who's actually doing the work.
      </p>
    </div>
  </article>
</Link>
{/* University Fashion Blog Post */}
<Link to="/blog/university-fashion" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article style={{ 
    display: 'grid', 
    gridTemplateColumns: '530px 1fr', 
    gap: '60px', 
    alignItems: 'center'
  }}>
    <img 
      src={universityFashionHeader}
      alt="University fashion through the years" 
      style={{ 
        width: '530px', 
        height: '330px', 
        objectFit: 'cover',
        borderRadius: '12px',
        flexShrink: 0,
        display: 'block'
      }}
    />
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      gap: '20px',
      textAlign: 'left'
    }}>
      <time style={{ color: '#a0a0a0', fontSize: '16px' }}>
        March 02, 2026
      </time>
      <h2 style={{ 
        fontSize: '56px', 
        fontWeight: '500', 
        lineHeight: '1.1',
        margin: '0',
        color: '#ffffff',
        textTransform: 'none'
      }}>
        University Fashion:<br />How Students Dressed Throughout the Years
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.5',
        color: '#e0e0e0',
        margin: '0'
      }}>
        From 90s streetwear to 2000s minimalism — exploring what drives <br /> student fashion choices, then and now at the University of Waterloo.
      </p>
    </div>
  </article>
</Link>
          {/* AI Dilemma Blog Post */}
          <Link to="/blog/ai-dilemma" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article style={{ 
              display: 'grid', 
              gridTemplateColumns: '530px 1fr', 
              gap: '60px', 
              alignItems: 'center'
            }}>
              <img 
                src={aiDilemmaHeader}
                alt="Fashion's AI Dilemma featuring model in artistic pose" 
                style={{ 
                  width: '530px', 
                  height: '330px', 
                  objectFit: 'cover',
                  borderRadius: '12px',
                  flexShrink: 0,
                  display: 'block'
                }}
              />

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                gap: '20px',
                textAlign: 'left'
              }}>
                <time style={{ color: '#a0a0a0', fontSize: '16px' }}>
                  December 06, 2025
                </time>

                <h2 style={{ 
                  fontSize: '56px', 
                  fontWeight: '500', 
                  lineHeight: '1.1',
                  margin: '0',
                  color: '#ffffff',
                  textTransform: 'none'
                }}>
                  Fashion's AI Dilemma: Efficiency at What Cost?
                </h2>

                <p style={{ 
                  fontSize: '18px', 
                  lineHeight: '1.5',
                  color: '#e0e0e0',
                  margin: '0'
                }}>
                  As generative AI rises in popularity, fashion faces a critical question: can <br /> we harness efficiency without sacrificing creativity and human connection?
                </p>
              </div>
            </article>
          </Link>

          {/* FUNdrive Blog Post */}
          <Link to="/blog/fundrive" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article style={{ 
              display: 'grid', 
              gridTemplateColumns: '530px 1fr', 
              gap: '60px', 
              alignItems: 'center' 
            }}>
              <img 
                src={blogHeaderPhoto}
                alt="FUNdrive Campaign featuring sustainable fashion models" 
                style={{ 
                  width: '530px', 
                  height: '330px', 
                  objectFit: 'cover',
                  borderRadius: '12px',
                  flexShrink: 0,
                  display: 'block'
                }}
              />

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                gap: '20px',
                textAlign: 'left'
              }}>
                <time style={{ color: '#a0a0a0', fontSize: '16px' }}>
                  November 14, 2025
                </time>

                <h2 style={{ 
                  fontSize: '56px', 
                  fontWeight: '500', 
                  lineHeight: '1.1',
                  margin: '0',
                  color: '#ffffff',
                  textTransform: 'none'
                }}>
                  Join Our First Annual FUNdrive!
                </h2>

                <p style={{ 
                  fontSize: '18px', 
                  lineHeight: '1.5',
                  color: '#e0e0e0',
                  margin: '0'
                }}>
                  This November through December 7th, help us reach our $500 <br /> goal by donating clothing, textiles, and household goods.
                </p>
              </div>
            </article>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
