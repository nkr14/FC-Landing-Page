// DONE

import Nav from '../components/Navbar.js'
import Footer from "../components/Footer.js";

const Magazine = () => {
    return(
        <div className="magazine-page">
            <Nav/>
            <div className="pdf-container" style={{ 
                width: "100%", 
                maxWidth: "1200px", 
                margin: "0 auto",
                padding: "20px"
            }}>
                <object
                    data="/path-to-your-magazine.pdf#view=FitH"
                    type="application/pdf"
                    width="100%"
                    height="800px"
                    style={{ 
                        border: "1px solid lightgray",
                        minHeight: "800px"
                    }}
                >
                    <iframe
                        src="/magazine.pdf#view=FitH"
                        width="100%"
                        height="800px"
                        style={{ border: "1px solid lightgray" }}
                        title="Magazine PDF"
                    >
                        <p>
                            Your browser doesn't support PDF viewing. 
                            <a href="/path-to-your-magazine.pdf">Download the PDF</a> instead.
                        </p>
                    </iframe>
                </object>
            </div>
            <Footer/>
        </div>
    )
}

export default Magazine;
