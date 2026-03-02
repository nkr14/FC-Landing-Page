import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import blogHeaderPhoto from "../images/blog-header-photo.jpeg";
import aiDilemmaHeader from "../images/IMG_0339.JPG";
import aiDilemmaPhoto1 from "../images/IMG_9877.JPG";
import aiDilemmaPhoto2 from "../images/IMG_9879.JPG";
import universityFashionHeader from "../images/blog/university-fashion/Image_7.jpg";

const AIDilemmaBlog = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <Navbar />
      
      {/* Hero Image - Full Width */}
      <div style={{ width: '100%', height: '700px', overflow: 'hidden' }}>
        <img 
          src={aiDilemmaHeader}
          alt="Fashion's AI Dilemma" 
          style={{ width: '100%', height: '700px', objectFit: 'cover', display: 'block' }}
        />
      </div>
      
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px' }}>
        {/* Hero Section */}
        <article style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            <div style={{ color: '#a0a0a0', fontSize: '18px', display: 'block', textAlign: 'left' }}>
              December 06, 2025
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
              <h1 style={{ fontSize: '60px', fontWeight: '500', lineHeight: '1.2', flex: '1', margin: '0', color: '#ffffff', textAlign: 'left' }}>
                Fashion's AI Dilemma: Efficiency at What Cost?
              </h1>
            </div>
            
            <p style={{ fontSize: '20px', color: '#d0d0d0', lineHeight: '1.6', maxWidth: '1200px', margin: '0', textAlign: 'left' }}>
              As generative AI rises in popularity, fashion faces a critical question: Can we have efficiency without sacrificing creativity and human connection?
            </p>
          </div>

          {/* Main Content - Centered with reduced width */}
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
              AS GENERATIVE ARTIFICIAL INTELLIGENCE RISES IN POPULARITY, MANY INDUSTRIES ARE BEING FORCED TO REEVALUATE THEIR LONG-TERM STRATEGIES. FASHION IS AMONG THEM, FACING FEARS AROUND THREATS TO CREATIVITY, JOB SECURITY, AND INNOVATION. HOWEVER, THE POTENTIAL INCREASES IN EFFICIENCY AND DATA ANALYSIS ARE NOT TO BE DISCOUNTED. FASHION EXECUTIVES AND DESIGNERS ARE TORN BETWEEN EMBRACING THESE TOOLS WHILE CAUTIOUSLY PRESERVING THE HUMAN ELEMENT THAT HAS ALWAYS BEEN <br /> THE HEART OF THE INDUSTRY.
            </p>

            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', margin: '24px 0 0 0', color: '#ffffff' }}>
              AI IN FASHION
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              AI offers high potential for data analysis and prediction. This is allowing many fashion companies to predict trends more accurately and improve overall efficiency. AI aids in trend forecasting, personalized product recommendations, and can analyze consumer data such that specific styles and colors online retailers can be analyzed for pattern recognition.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              While this does drive potential marketability for large brands, it also risks reducing individuality. Trends often have a place of community, shaped by lived experiences and authentic cultural moments. AI is removing these human elements, using pattern recognition leads to increasingly monotonous designs, drawing from tried and true trends, and combines have rather than bringing refreshing originality. With an increased focus on cyclical patterns and consumer trends, we risk robbing the voice of environmental dimension.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Many are drawn to the use of AI in the creative process, particularly in the early brainstorming stages. It holds the tempting possibility of streamlining design process and increasing efficiency. While designers previously spent hours creating initial sketches and choosing material palettes, AI can now swiftly generate design alternatives in seconds. Now data is too completed in seconds with generative AI.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              While this may aid creativity in some cases, allowing designers to generate and test more ideas in a short period of time, overreliance on AI threatens to push the creative process to a level of inoffensiveness and efficiency beyond the uniqueness of a foundation of diverse, individualized thought and ideas influenced by individual experience. When AI overrides human intuition, critical thinking and creativity become vulnerable. The reliance on AI to speed up the process of trial and error that designers have traditionally worked through has the potential to diminish human autonomy and allow them to replace individual thought.
            </p>
          </div>

          {/* Image Gallery - Full width within main container */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px', padding: '32px 0', maxWidth: '1184px', margin: '0 auto', width: '100%' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img 
                src={aiDilemmaPhoto1}
                alt="Fashion model in black and white" 
                style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img 
                src={aiDilemmaPhoto2}
                alt="Fashion model in white outfit" 
                style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Continued Content - Centered with reduced width */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '32px', 
            textAlign: 'left',
            maxWidth: '1100px',
            margin: '0 auto',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', margin: '24px 0 0 0', color: '#ffffff' }}>
              MODELING AND AI
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              With AI's ability to create something visuals, the use of AI models is on the rise. These models can appear on virtual photo platforms are more hyper-realistic than ever before. Brands are increasingly moving toward using AI-generated models to represent their products. This leads fashion modelers in an increasingly human-less where human models can be created as a fraction of the previous cost. This leads fashion modelers in an increasingly human-led world in which human figures are pushed aside by their automated counterparts.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Increasingly, AI models, in a commercial medium, threaten to compromise the values and philosophy inherent in a precarious place. Where there hasn't been a call able to embrace diversity, AI models are increasingly seen as a more cost-effective alternative to real, human models. This concerns artists and corporations alike due to how traditional modeling jobs will be rendered obsolete.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Increased automation can also create threats to jobs in the fashion production industry. Impacting workers in already fragile roles. The clothing factories and production programs to help reduce the potential harms to workers.
            </p>

            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', margin: '24px 0 0 0', color: '#ffffff' }}>
              ENVIRONMENTAL IMPACT
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              While AI can be helpful for fast fashion manufacturers, who are urgently criticized for harmful environmental practices, it also poses its own environmental risks. It consumes extremely high levels of water in order to stay in operation, risking potential water shortages already occurring in many water scarce regions. The data centers that AI rely on pose material hazards as they require extensive physical materials to create and of hazardous materials into the environment. Raw materials required to create and maintain these data centers are also often mined in unsustainable ways, creating additional damage in the form of habitat disruption and social exploitation.
            </p>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              Despite these risks, AI poses potential benefits to helping fast fashion companies move towards sustainable production. Oftentimes, overproduction of clothing can lead to incredibly wasteful excess. AI's use in predicting demand and in material optimization may provide this to a point, using data-driven analysis to prevent overproduction and reduce unnecessary usage of already-depleted natural resources. Furthermore, AI has been developed to create solutions to navigate fashion without the environmental toll. These are positive applications of AI, particularly for online retailers. While these tools do offer promising solutions, their sources of resources leaves many fashion companies and others questioning to what extent they are being used.
            </p>

            <h2 style={{ fontSize: '32px', fontWeight: '500', lineHeight: '1.3', margin: '24px 0 0 0', color: '#ffffff' }}>
              CONCLUSION
            </h2>

            <p style={{ fontSize: '20px', lineHeight: '1.7', margin: '0', color: '#e0e0e0' }}>
              The integration of AI in fashion is unavoidable, but how we integrate it is not. Finding a balance between innovation and tradition, between efficiency and artistry, is critical. The fashion industry has always been about self-expression, culture, and the human experience. While AI can enhance certain aspects of the industry, it should not replace the irreplaceable: the creativity, emotion, and humanity that define fashion at its core.
            </p>
          </div>
        </article>

        {/* Previous Blog Card */}
        <div style={{ marginTop: '120px', paddingTop: '80px', borderTop: '1px solid #333' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '500', marginBottom: '48px', color: '#ffffff', textAlign: 'left' }}>
            latest blog
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

export default AIDilemmaBlog;
