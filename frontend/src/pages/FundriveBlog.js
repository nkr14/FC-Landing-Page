import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";
import blog1stPhoto from "../images/blog-1st-photo.jpeg";
import blog2ndPhoto from "../images/blog-2nd-photo-reduced.jpeg";
import blog3rdPhoto from "../images/blog-3rd-photo.webp";
import blogVector from "../images/Blog-Vector.png";

const FundriveBlog = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <Navbar />
      
      {/* Hero Image - Full Width */}
      <div style={{ width: '100%', height: '700px', overflow: 'hidden' }}>
        <img 
          src={blogHeaderPhoto}
          alt="FUNdrive Campaign" 
          style={{ width: '100%', height: '700px', objectFit: 'cover', display: 'block' }}
        />
      </div>
      
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px' }}>
        {/* Hero Section */}
        <article style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>>
            <div style={{ color: '#a0a0a0', fontSize: '18px', display: 'block', textAlign: 'left' }}>
              November 14, 2025
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
              <h1 style={{ fontSize: '60px', fontWeight: '500', lineHeight: '1.2', flex: '1', margin: '0', color: '#ffffff', textAlign: 'left' }}>
                Join Our First Annual FUNdrive!
              </h1>
              
              {/* Vector Image */}
              <img 
                src={blogVector}
                alt="Decorative vector" 
                style={{ width: '96px', height: 'auto', flexShrink: 0 }}
              />
            </div>
            
            <p style={{ fontSize: '20px', color: '#d0d0d0', lineHeight: '1.6', maxWidth: '1000px', margin: '0', textAlign: 'left' }}>
              This November through December 7th, help us reach our $500 goal by donating clothing, textiles, and household goods.
            </p>
          </div>

          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px 0', textAlign: 'left' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', textTransform: 'uppercase', margin: '0', color: '#ffffff' }}>
              Not only is new life being given to each item, but more off the racks means less in landfills!
            </h2>

            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '0', color: '#e0e0e0' }}>
              <span style={{ fontSize: '48px', fontWeight: '500', float: 'left', marginRight: '12px', marginTop: '4px', lineHeight: '1' }}>W</span>
              e are hosting our first annual FUNdrive in November till December 7th! It is a great way to fashionably and sustainably give back to our community. This year our goal is to raise $500 through donations of clothing, household textiles, household goods, and books and media. Our motive as Fashion for Change is to engage with our audience in ways that promote the use of sustainable fashion, so join us in donating for this fundraiser!
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '0', color: '#e0e0e0' }}>
              You can drop-off items during our workshops November 8th and 9th, or at our Holiday Showcase on November 29th! FUNdrive is operated by a thrift retailer named Savers, that includes stores like Value Village and 2nd Thrift Avenue. The clothes donated to FUNdrive are resold in these stores, and very little goes to landfill as most of the items are either reused or recycled.
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '0', color: '#e0e0e0' }}>
              There is a huge issue with clothing not being properly recycled, and many clothing items that aren't sold in thrift stores end up in landfills that harm the environment. The good news is, there are various ways to help, such as thrifting more often! Not only is new life being given to each item, but more off the racks means less in landfills! It keeps clothes in use for much longer, minimizes overconsumption, and promotes the reuse of goods! If it's used, it's loved.
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '0', color: '#e0e0e0' }}>
              Ethical clothing consumption is something Fashion for Change is extremely passionate about, and you can join in by choosing quality over quantity, supporting brands with a sustainable and environmental background, minimize following trends that quickly vanish, and shop secondhand clothing. Depop and thrifting!!!! Finally we would love to see you all participate in our FUNdrive, and practice making sustainable choices for our planet with fashion!
            </p>
          </div>

          {/* Image Gallery */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', padding: '32px 0' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img 
                src={blog1stPhoto}
                alt="Sustainable fashion initiative" 
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img 
                src={blog2ndPhoto}
                alt="Community clothing drive" 
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img 
                src={blog3rdPhoto}
                alt="Fashion for Change event" 
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default FundriveBlog;
