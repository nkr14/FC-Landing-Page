import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";
import blog1stPhoto from "../images/blog-1st-photo.jpeg";
import blog2ndPhoto from "../images/blog-2nd-photo-reduced.jpeg";
import blog3rdPhoto from "../images/blog-3rd-photo.webp";

const FundriveBlog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        {/* Hero Section */}
        <article className="space-y-8">
          <div className="space-y-4">
            <time className="text-gray-500 text-lg md:text-xl block">
              November 14, 2025
            </time>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
              Join Our First Annual FUNdrive!
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed max-w-5xl">
              This November through December 7th, help us reach our $500 goal by donating clothing, textiles, and household goods.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full rounded-3xl overflow-hidden my-12">
            <img 
              src={blogHeaderPhoto}
              alt="FUNdrive Campaign" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8 py-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight uppercase">
              Not only is new life being given to each item, but more off the racks means less in landfills!
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              <span className="text-5xl md:text-6xl lg:text-7xl font-medium float-left mr-4 mt-1 leading-none">W</span>
              e are hosting our first annual FUNdrive in November till December 7th! It is a great way to fashionably and sustainably give back to our community. This year our goal is to raise $500 through donations of clothing, household textiles, household goods, and books and media. Our motive as Fashion for Change is to engage with our audience in ways that promote the use of sustainable fashion, so join us in donating for this fundraiser!
            </p>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              You can drop-off items during our workshops November 8th and 9th, or at our Holiday Showcase on November 29th! FUNdrive is operated by a thrift retailer named Savers, that includes stores like Value Village and 2nd Thrift Avenue. The clothes donated to FUNdrive are resold in these stores, and very little goes to landfill as most of the items are either reused or recycled.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              There is a huge issue with clothing not being properly recycled, and many clothing items that aren't sold in thrift stores end up in landfills that harm the environment. The good news is, there are various ways to help, such as thrifting more often! Not only is new life being given to each item, but more off the racks means less in landfills! It keeps clothes in use for much longer, minimizes overconsumption, and promotes the reuse of goods! If it's used, it's loved.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              Ethical clothing consumption is something Fashion for Change is extremely passionate about, and you can join in by choosing quality over quantity, supporting brands with a sustainable and environmental background, minimize following trends that quickly vanish, and shop secondhand clothing. Depop and thrifting!!!! Finally we would love to see you all participate in our FUNdrive, and practice making sustainable choices for our planet with fashion!
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={blog1stPhoto}
                alt="Sustainable fashion initiative" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={blog2ndPhoto}
                alt="Community clothing drive" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={blog3rdPhoto}
                alt="Fashion for Change event" 
                className="w-full h-full object-cover aspect-[4/5]"
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
