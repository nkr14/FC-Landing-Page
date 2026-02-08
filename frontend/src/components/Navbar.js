import '../App.css'
import logo from '../images/FC-Logo.svg'

export default function Navbar() {
    return (
        <div className="nav">

            <a href='/'>
                <img className='logo' src={logo} alt='FC Logo'></img>
            </a>

            <div className="pages">
                <a href='/about-us'>ABOUT US</a>
                <a href='/magazine'>MAGAZINE</a>
                <div className="dropdown">
                    <a href='/teams/bod'>TEAMS</a>

                    <div className="dropdown-content">
                        <a href="/teams/bod">BOARD OF DIRECTORS</a>
                        <a href="/teams/artistic">ARTISTIC</a>
                        <a href="/teams/events">EVENTS</a>
                        <a href="/teams/stage">STAGE</a>
                        <a href="/teams/marketing">MARKETING</a>
                        <a href="/teams/finance">FINANCE</a>
                        <a href="/teams/pr">PUBLIC RELATIONS</a>
                        <a href="/teams/model">MODEL</a>
                        <a href="/teams/sponsorship">SPONSORSHIP</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href='/events'>GET INVOLVED</a>

                    <div className="dropdown-content">
                        <a href='/events'>EVENTS</a>
                        <a href='/sponsorship'>SPONSORSHIP</a>
                        <a href='/stand-for'>CHARITIES</a>
                        <a href='/blog'>BLOG</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href='/past-shows/arcana'>SHOWS</a>

                    <div className="dropdown-content">
                        <a href="/past-shows/arcana">ARCANA</a>
                        <a href="/past-shows/spun-from-gold">SPUN FROM GOLD</a>
                        <a href="/past-shows/soul">SOULD</a>
                        <a href="/past-shows/academy-awards">THE ACADEMY AWARDS</a>
                        <a href="/past-shows/tuesday">TUESDAY</a>
                        <a href="/past-shows/pandoras">PANDORAS BOX</a>
                        <a href="/past-shows/ttd">THROUGH THE DECADES</a>
                        <a href="/past-shows/sytygs">SO YOU THINK YOU GOT STYLE</a>
                        <a href="/past-shows/fcmas">FCMAS</a>
                        <a href="/past-shows/enchanted">ENCHANTED</a>
                        <a href="/past-shows/cover-to-cover">COVER TO COVER</a>
                        <a href="/past-shows/directors-cut">DIRECTORS CUT</a>
                        <a href="/past-shows/ffc">FASHION FOR CHANGE</a>
                    </div>
                </div>
                <a href="/contact-us">CONTACT US</a>

            </div>
        </div>
    )
}
