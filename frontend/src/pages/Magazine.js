// UPDATED TO PDF INSTEAD OF FLIPBOOK

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer.js";
import MagazinePDF from '../images/magazine.pdf';
import './Magazine.css';

const Magazine = () => {
    return(
        <div className="magazine-page">
            <Navbar/>
            <div className="pdf-container">
                <object
                    data={`${MagazinePDF}#view=FitH`}
                    type="application/pdf"
                    width="100%"
                    height="800px"
                    className="pdf-viewer"
                >
                    <iframe
                        src={`${MagazinePDF}#view=FitH`}
                        width="100%"
                        height="800px"
                        className="pdf-fallback"
                        title="Magazine PDF"
                    >
                        <p>
                            Your browser doesn't support PDF viewing. 
                            <a href={MagazinePDF} className="pdf-download-link">Download the PDF</a> instead.
                        </p>
                    </iframe>
                </object>
            </div>
            <Footer/>
        </div>
    )
}

export default Magazine;
