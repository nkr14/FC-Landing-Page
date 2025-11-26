import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";
import blog1stPhoto from "../images/blog-1st-photo.jpeg";
import blog2ndPhoto from "../images/blog-2nd-photo-reduced.jpeg";
import blog3rdPhoto from "../images/blog-3rd-photo.webp";
import blogVector from "../images/Blog-Vector.png";

const FundriveBlog = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        {/* Hero Section */}
        <article className="space-y-8">
          <div className="space-y-4">
            <time className="text-gray-400 text-base md:text-lg block">
              November 14, 2025
            </time>
            
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight flex-1">
                Join Our First Annual FUNdrive!
              </h1>
              
              {/* Vector Image */}
              <img 
                src={blogVector}
                alt="Decorative vector" 
                className="w-16 md:w-20 lg:w-24 h-auto flex-shrink-0"
              />
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl">
              This November through December 7th, help us reach our $500 goal by donating clothing, textiles, and household goods.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full rounded-[20px] overflow-hidden my-8">
            <img 
              src={blogHeaderPhoto}
              alt="FUNdrive Campaign" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8 py-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight uppercase">
              Not only is new life being given to each item, but more off the racks means less in landfills!
            </h2>

            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-4xl md:text-5xl font-medium float-left mr-3 mt-1 leading-none">W</span>
              e are hosting our first annual FUNdrive in November till December 7th! It is a great way to fashionably and sustainably give back to our community. This year our goal is to raise $500 through donations of clothing, household textiles, household goods, and books and media. Our motive as Fashion for Change is to engage with our audience in ways that promote the use of sustainable fashion, so join us in donating for this fundraiser!
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              You can drop-off items during our workshops November 8th and 9th, or at our Holiday Showcase on November 29th! FUNdrive is operated by a thrift retailer named Savers, that includes stores like Value Village and 2nd Thrift Avenue. The clothes donated to FUNdrive are resold in these stores, and very little goes to landfill as most of the items are either reused or recycled.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              There is a huge issue with clothing not being properly recycled, and many clothing items that aren't sold in thrift stores end up in landfills that harm the environment. The good news is, there are various ways to help, such as thrifting more often! Not only is new life being given to each item, but more off the racks means less in landfills! It keeps clothes in use for much longer, minimizes overconsumption, and promotes the reuse of goods! If it's used, it's loved.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Ethical clothing consumption is something Fashion for Change is extremely passionate about, and you can join in by choosing quality over quantity, supporting brands with a sustainable and environmental background, minimize following trends that quickly vanish, and shop secondhand clothing. Depop and thrifting!!!! Finally we would love to see you all participate in our FUNdrive, and practice making sustainable choices for our planet with fashion!
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="rounded-[20px] overflow-hidden">
              <img 
                src={blog1stPhoto}
                alt="Sustainable fashion initiative" 
                className="w-full h-[350px] md:h-[400px] object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden">
              <img 
                src={blog2ndPhoto}
                alt="Community clothing drive" 
                className="w-full h-[350px] md:h-[400px] object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden">
              <img 
                src={blog3rdPhoto}
                alt="Fashion for Change event" 
                className="w-full h-[350px] md:h-[400px] object-cover"
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
