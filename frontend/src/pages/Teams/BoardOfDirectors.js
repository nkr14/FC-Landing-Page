import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";

// Import all BOD images
import bodHeader1 from "../assets/bod/bod-header-1.png";
import bodHeader2 from "../assets/bod/bod-header-2.png";
import president from "../assets/bod/president.jpeg";
import vicePresident from "../assets/bod/vice-president.png";
import artistic from "../assets/bod/artistic.jpeg";
import assistantArtistic from "../assets/bod/assistant-artistic.jpeg";
import assistantModel from "../assets/bod/assistant-model.jpg";
import events from "../assets/bod/events.jpeg";
import finance from "../assets/bod/finance.png";
import marketing from "../assets/bod/marketing.jpeg";
import model1 from "../assets/bod/model-1.jpeg";
import model2 from "../assets/bod/model-2.jpeg";
import publicRelations from "../assets/bod/public-relations.jpeg";
import sponsorship from "../assets/bod/sponsorship.jpeg";
import stage from "../assets/bod/stage.jpeg";
import collage1 from "../assets/bod/collage-1.png";
import collage2 from "../assets/bod/collage-2.png";
import collage3 from "../assets/bod/collage-3.png";
import collage4 from "../assets/bod/collage-4.png";
import collage5 from "../assets/bod/collage-5.png";

const BOD = () => {
  const positions = [
    {
      title: "President",
      image: president,
      description: "The President is responsible for leading the club, setting its direction, and overseeing the work of all teams. They make final decisions, coordinate major initiatives, and ensure the club stays on track throughout the year."
    },
    {
      title: "Vice President",
      image: vicePresident,
      description: "The Vice President is responsible for supporting the President and ensuring teams stay organized, meet deadlines, and communicate effectively. They help manage logistics, resolve issues, and keep operations running smoothly."
    },
    {
      title: "Artistic",
      image: artistic,
      description: "The Artistic Director is responsible for hiring choreographers and designers, creating the theme and scenes for the final winter showcase, and organizing the dance workshop in the fall. They work closely with other teams to oversee artistic progress and ensure cohesion across all creative elements."
    },
    {
      title: "Assistant Artistic",
      image: assistantArtistic,
      description: "The Assistant Artistic Director is responsible for aiding the creation of the theme and scenes for the final winter showcase, and organizing the dance workshop in the fall. They work closely with the Artistic Director to oversee artistic progress and ensure cohesion across all creative elements."
    },
    {
      title: "Model",
      image: model1,
      description: "The Model Director is responsible for recruiting, training, and coordinating models, ensuring their involvement in workshops, rehearsals, and fittings. They also work with choreographers and designers to assign roles and guide models throughout the fashion show process."
    },
    {
      title: "Model",
      image: model2,
      description: "The Model Director is responsible for recruiting, training, and coordinating models, ensuring their involvement in workshops, rehearsals, and fittings. They also work with choreographers and designers to assign roles and guide models throughout the fashion show process."
    },
    {
      title: "Assistant Model",
      image: assistantModel,
      description: "The Assistant Model Director supports the Model Director in recruiting, training, and coordinating models. They help ensure smooth operations during workshops, rehearsals, and fittings, and assist with role assignments throughout the fashion show process."
    },
    {
      title: "Finance",
      image: finance,
      description: "The Finance Director manages the club's budget and financial planning by leading the Finance Team and processing expenditures and reimbursements. They also draft endowment fund proposals to secure funding in support of the club's initiatives."
    },
    {
      title: "Stage",
      image: stage,
      description: "The Stage Director oversees technical and backstage preparations by managing the Stage Team and coordinating the lighting and sound elements of the show. They work closely with the Artistic and Model teams in the lead-up to show day to make sure everything runs smoothly on stage."
    },
    {
      title: "Sponsorship",
      image: sponsorship,
      description: "The Sponsorship Director leads efforts to secure both monetary and non-monetary sponsorships, overseeing the Sponsorship Team and engaging with external partners."
    },
    {
      title: "Events",
      image: events,
      description: "The Events Director leads the Events Committee in organizing social events and club activities throughout the year. They coordinate logistics, manage resources, and ensure events align with the club's goals and WUSA regulations."
    },
    {
      title: "Marketing",
      image: marketing,
      description: "The Marketing Director oversees the development of visual and promotional content by managing a team of photographers/videographers, graphic designers and writers. They coordinate creative efforts to build a consistent and engaging brand image across all club activities."
    },
    {
      title: "Public Relations",
      image: publicRelations,
      description: "The PR Director leads the Public Relations Team, promoting the FC brand across online, digital, and physical media. They also manage communication with the selected charity and help strengthen the club's external relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="relative bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img src={bodHeader1} alt="BOD Team 1" loading="eager" className="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover object-center" />
          <img src={bodHeader2} alt="BOD Team 2" loading="eager" className="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover object-center" />
        </div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl">bod</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Title and Purpose */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-8">Board of Directors (BOD)</h2>
          <div>
            <h3 className="text-3xl font-medium mb-4">Purpose</h3>
            <p className="text-lg leading-relaxed max-w-4xl">
              The Board of Directors (BOD) lead the strategic direction and execution of Fashion for Change. Each director oversees their respective committee, making key decisions that shape the creative and operational success of the club. The BOD collaborates to ensure every show, event, and initiative aligns with our mission of sustainability, inclusivity, and creative excellence. Together, they create the framework for an impactful student-run organization that empowers its members and inspires the community.
            </p>
          </div>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {positions.map((position, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 bg-black rounded-[15px] overflow-hidden">
                <img 
                  src={position.image} 
                  alt={position.title}
                  loading="lazy"
                  className="w-full md:w-48 h-64 object-cover rounded-[15px]"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-medium mb-3">{position.title}</h4>
                <p className="text-base leading-relaxed">{position.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gallery */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <img src={collage1} alt="Team group photo" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-[15px]" />
            <img src={collage2} alt="Fashion show performance" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-[15px]" />
            <img src={collage3} alt="Fashion for Change team event" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-[15px]" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            <img src={collage4} alt="Team collaboration" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-[15px]" />
            <img src={collage5} alt="Dance workshop preparation" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-[15px]" />
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  );
};

export default BOD;
