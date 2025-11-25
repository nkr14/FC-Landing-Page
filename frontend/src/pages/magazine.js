// UPDATED TO PDF INSTEAD OF FLIPBOOK

import Nav from '../components/Navbar.js'
import Footer from "../components/Footer.js";
import MagazinePDF from '../images/magazine.pdf';

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
                    data={`${MagazinePDF}#view=FitH`}
                    type="application/pdf"
                    width="100%"
                    height="800px"
                    style={{ 
                        border: "1px solid lightgray",
                        minHeight: "800px"
                    }}
                >
                    <iframe
                        src={`${MagazinePDF}#view=FitH`}
                        width="100%"
                        height="800px"
                        style={{ border: "1px solid lightgray" }}
                        title="Magazine PDF"
                    >
                        <p>
                            Your browser doesn't support PDF viewing. 
                            <a href={MagazinePDF}>Download the PDF</a> instead.
                        </p>
                    </iframe>
                </object>
            </div>
            <Footer/>
        </div>
    )
}

export default Magazine;
