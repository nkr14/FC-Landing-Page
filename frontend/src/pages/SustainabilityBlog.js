import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import sustainabilityHeader from '../images/blog/fashion-sustainability.jpg';
import universityFashionHeader from '../images/blog/university-fashion/Image_7.jpg';

const SustainabilityBlog = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <Navbar />

      {/* Hero Image - Full Width */}
      <div style={{ width: '100%', height: '700px', overflow: 'hidden' }}>
        <img
          src={sustainabilityHeader}
          alt="Sustainability in the Fashion Industry"
          style={{ width: '100%', height: '700px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
        {/* Hero Section */}
        <article style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            <div style={{ color: '#a0a0a0', fontSize: '18px', display: 'block', textAlign: 'left' }}>
              March 17, 2026
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
              <h1 style={{ fontSize: '60px', fontWeight: '500', lineHeight: '1.2', flex: '1', margin: '0', color: '#ffffff', textAlign: 'left' }}>
                Sustainability in the Fashion Industry
              </h1>
            </div>

            <p style={{ fontSize: '20px', color: '#d0d0d0', lineHeight: '1.6', maxWidth: '1200px', margin: '0', textAlign: 'left' }}>
              While many companies have set deep decarbonization goals, over 63% are not on track to reach them — and greenwashing is making it harder to tell who's actually doing the work.
            </p>
          </div>

          {/* Main Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            padding: '24px 0',
            textAlign: 'left',
            maxWidth: '1100px',
            margin: '0 auto',
            width: '100%'
          }}>
            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              While many companies in the fashion industry have set deep decarbonization goals for the next 15 years, over 63% are not on track to reach them. The push towards sustainability has encouraged some companies to shift their policies and workflows, yet we are finding increasing cases of greenwashing, a tactic wherein items are marketed as "eco friendly" or "sustainable" with limited backing.
            </p>

            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', textTransform: 'none', margin: '24px 0 0 0', color: '#ffffff' }}>
              Greenwashing
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Greenwashing is a prevalent technique used by companies to mask the harmful environmental effects of their products by marketing them as eco-conscious. The fashion industry is currently missing the 1.5 degree pathway of the Paris Agreement for decarbonization by about 50%. As a result, most brands purchase carbon offsets — credits for carbon that heighten their allowance for its production. This allows them to market their brands as emissions friendly without any active steps towards emission reduction.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Often, in marketing campaigns for the fashion industry, buzzwords like "green," "sustainable," and "eco friendly" are used without quantifiable action. This strategy imagines them sustainable without requiring altering production methods. Companies also often highlight the small environmental initiatives they take, directing our attention away from their larger negative impacts. Alternatively, more sustainably produced products may be advertised to a disproportionate extent, leading them to misrepresent the scale of their impact on the company.
            </p>

            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', textTransform: 'none', margin: '24px 0 0 0', color: '#ffffff' }}>
              What Are Companies Doing?
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              While greenwashing is a tempting method of drawing in business, some brands are taking the increasing awareness of eco consciousness as a driver for genuine change. Obtaining third party certifications such as B-corp status and fair trade certifications helps build our trust, as well as providing guidance for brands on what genuine ethical production looks like.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Aside from obtaining certifications, big brands are slowly moving towards more sustainable practices. One example is luxury brand Hermès, which has reduced their emissions by over 50% by following the circular economy model, and practicing frugality in their material management. They have also made the switch to renewable energy sources, helping them to support carbon mitigation efforts.
            </p>

            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', textTransform: 'none', margin: '24px 0 0 0', color: '#ffffff' }}>
              What Can Conumsers Do?
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              While we typically look for buzzwords such as "green" and "sustainable" for sustainable shopping, these labels don't always equate to action taken by companies. We can investigate company policies to determine whether these labels are backed by action, and familiarize ourselves with common third party eco-certifications.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Additionally, consumer shopping practices can play a great role in sustainable fashion. Thrifting and second hand shopping have increased in popularity, often making fashionable items available to consumers at lower price points, and reducing clothing waste. Furthermore, focusing on rewearing and restyling the clothing in one's wardrobe over buying new items can encourage creativity, and reduce consumption.
            </p>

            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', textTransform: 'none', margin: '24px 0 0 0', color: '#ffffff' }}>
              What is FC Doing?
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Fashion for Change is committed to sustainable practices. Many of our photoshoots and costumes showcase thrifted and handmade items. This allows one of a kind looks to be created with unique styling and minimal waste.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Our recent FUNdrive created a channel for students to donate used clothing, household items, books, and more to local thrift stores. Additionally, our partnerships with local thrift stores and businesses is helping to promote local, sustainable shopping in the region.
            </p>
          </div>
        </article>

        {/* Latest Blog Card */}
        <div style={{ marginTop: '120px', paddingTop: '80px', borderTop: '1px solid #333' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '500', marginBottom: '48px', color: '#ffffff', textAlign: 'left' }}>
            Previous Blog
          </h2>

          <a href="/blog/university-fashion" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article style={{
              display: 'grid',
              gridTemplateColumns: '500px 1fr',
              gap: '48px',
              alignItems: 'center',
              transition: 'opacity 0.3s',
              cursor: 'pointer'
            }}>
              <img
                src={universityFashionHeader}
                alt="University Fashion Through the Years"
                style={{
                  width: '500px',
                  height: '375px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  display: 'block'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                <time style={{ color: '#a0a0a0', fontSize: '16px' }}>
                  March 02, 2026
                </time>
                <h3 style={{ fontSize: '40px', fontWeight: '500', lineHeight: '1.2', margin: '0', color: '#ffffff' }}>
                  University Fashion: How Students Dressed Throughout the Years
                </h3>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#e0e0e0', margin: '0' }}>
                  From 90s streetwear to 2000s minimalism — exploring what drives student fashion choices, then and now at the University of Waterloo.
                </p>
              </div>
            </article>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SustainabilityBlog;
