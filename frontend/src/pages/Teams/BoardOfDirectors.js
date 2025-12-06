import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

// GitHub repo image paths
import bodHeader1 from "../../images/BOD/bod-header-1.png";
import president from "../../images/BOD/president.jpeg";
import vicePresident from "../../images/BOD/vice-president.png";
import artistic from "../../images/BOD/artistic.jpeg";
import assistantArtistic from "../../images/BOD/assistant-artistic.jpeg";
import assistantModel from "../../images/BOD/assistant-model.jpg";
import events from "../../images/BOD/events.jpeg";
import finance from "../../images/BOD/finance.png";
import marketing from "../../images/BOD/marketing.jpg";
import model1 from "../../images/BOD/model-1-final-min.jpeg";
import model2 from "../../images/BOD/model-2.jpeg";
import publicRelations from "../../images/BOD/public-relations.jpeg";
import sponsorship from "../../images/BOD/sponsorship.jpeg";
import stage from "../../images/BOD/stage.jpg";
import collage1 from "../../images/BOD/collage-1.png";
import collage2 from "../../images/BOD/collage-2.png";
import collage3 from "../../images/BOD/collage-3.png";
import collage4 from "../../images/BOD/collage-4.png";
import collage5 from "../../images/BOD/collage-5.png";

const BoardOfDirectors = () => {
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
      title: "Stage",
      image: stage,
      description: "The Stage Director oversees technical and backstage preparations by managing the Stage Team and coordinating the lighting and sound elements of the show. They work closely with the Artistic and Model teams in the lead-up to show day to make sure everything runs smoothly on stage."
    },
    {
      title: "Finance",
      image: finance,
      description: "The Finance Director manages the club's budget and financial planning by leading the Finance Team and processing expenditures and reimbursements. They also draft endowment fund proposals to secure funding in support of the club's initiatives."
    },
    {
      title: "Events",
      image: events,
      description: "The Events Director leads the Events Committee in organizing social events and club activities throughout the year. They coordinate logistics, manage resources, and ensure events align with the club's goals and WUSA regulations."
    },
    {
      title: "Sponsorship",
      image: sponsorship,
      description: "The Sponsorship Director leads efforts to secure both monetary and non-monetary sponsorships, overseeing the Sponsorship Team and engaging with external partners."
    },
    {
      title: "Public Relations",
      image: publicRelations,
      description: "The PR Director leads the Public Relations Team, promoting the FC brand across online, digital, and physical media. They also manage communication with the selected charity and help strengthen the club's external relationships."
    },
    {
      title: "Marketing",
      image: marketing,
      description: "The Marketing Director oversees the development of visual and promotional content by managing a team of photographers/videographers, graphic designers and writers. They coordinate creative efforts to build a consistent and engaging brand image across all club activities."
    }
  ];

  const collageImages = [collage1, collage2, collage3, collage4, collage5];

  return (
    <div className="teams">
      <Navbar />
      
      {/* Board of Directors Header */}
      <div className="team-header" style={{ height: '700px', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <img src={bodHeader1} alt="board of directors" style={{ width: '100%', height: '700px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
        <div className="header-overlay">
          <h1>bod</h1>
        </div>
      </div>

      <div className="bod">
        <h1>Board of Directors (BOD)</h1>
        <h2>Purpose</h2>
        <p>The Board of Directors (BOD) leads the strategic direction and execution of Fashion for Change. Each director oversees their respective committee, making key decisions that shape the creative and operational success of the club. The BOD collaborates to ensure every show, event, and initiative aligns with our mission of creativity, inclusivity, and charitable impact. Together, they mentor their teams, foster collaboration, and create a platform where passion and purpose meet.</p>

        <div className="directors-box">
          {positions.map((position, index) => (
            <div className="directors" key={index}>
              <img 
                src={position.image} 
                alt="director" 
                style={{ 
                  width: '200px', 
                  height: '280px', 
                  objectFit: 'cover',
                  borderRadius: '20px',
                  flexShrink: 0
                }} 
              />
              <div className="text">
                <h1>{position.title}</h1>
                <p>{position.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="collage">
        {collageImages.map((img, index) => (
          <img key={index} src={img} alt="team collage" />
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default BoardOfDirectors;
