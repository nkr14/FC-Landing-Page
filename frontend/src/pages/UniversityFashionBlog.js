import React from 'react';
import Navbar from '../../components/Navbar.js';

import img7 from '../../images/blog/university-fashion/Image_7.jpg';
import img6 from '../../images/blog/university-fashion/Image_6.jpg';
import img3 from '../../images/blog/university-fashion/Image_3.jpg';
import img2 from '../../images/blog/university-fashion/Image_2.jpg';
import img1 from '../../images/blog/university-fashion/Image_1.jpg';
import img4 from '../../images/blog/university-fashion/Image_4.jpg';

export default function UniversityFashionBlog() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', paddingTop: '10vh' }}>
      <Navbar />

      {/* Hero / Title */}
      <div style={{
        backgroundColor: 'black',
        padding: '4rem 5vw 2rem 5vw',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p style={{
          color: '#aaa',
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '1rem',
          fontFamily: 'Futura, sans-serif',
        }}>
          Fashion &amp; Culture
        </p>

        <h1 style={{
          color: 'white',
          fontFamily: 'Futura, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 'bold',
          textTransform: 'lowercase',
          lineHeight: 1.15,
          marginBottom: '1.5rem',
        }}>
          university fashion: how students dressed throughout the years
        </h1>

        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#5ba9e1',
          marginBottom: '3rem',
        }} />

        {/* Article Body */}
        <div style={{
          color: '#e0e0e0',
          fontFamily: 'Futura, sans-serif',
          fontSize: '18px',
          lineHeight: '1.9',
        }}>

          {/* Intro paragraph */}
          <p style={{ marginBottom: '2rem' }}>
            Fashion has been a means of creative expression since we were old enough to dress ourselves. Growing into a personal style requires the act of growing up, and with that, the influences that shape the domain in which our creativity falls. For every generation, fashion inspiration may have stemmed from the admiration of family members, celebrities, or the creativity that comes with the search for oneself. A multitude of fashion decisions arise from and are inspired by favoured individuals who introduce a shift in perspective — like the character Blair Waldorf from the show "Gossip Girl". In regards to student life, it is interesting to see how fashion brings eccentricity to the mundane, and what influences student fashion choices.
          </p>

          {/* 1990s */}
          <h2 style={{
            color: 'white',
            fontFamily: 'Futura, sans-serif',
            fontSize: '1.6rem',
            textTransform: 'lowercase',
            fontWeight: 'bold',
            margin: '3rem 0 1rem 0',
          }}>
            the 1990s
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Going back to the 1990s, students were slowly letting go of disco, bright colours, tied-up buttoned shirts, and eccentric patterns on capris. This style of clothing was pushed into the background while streetwear came into the limelight. Students began to feel confident in more comfy clothes, bridging into streetwear — a style still worn today and likely not leaving anytime soon. Clothing like casual jerseys, baggy pants, and monochromatic colours were popular, and both males and females wore clothes that weren't strictly feminine nor masculine. Of course, films of the day influenced a portion of these styles, such as the film "Anywhere but Here" starring Natalie Portman, whose character's laid-back nature was accentuated by her clothing — greatly leaning on baggy pants, caps, and monochromatic colours of the day.
          </p>

          {/* 2000s */}
          <h2 style={{
            color: 'white',
            fontFamily: 'Futura, sans-serif',
            fontSize: '1.6rem',
            textTransform: 'lowercase',
            fontWeight: 'bold',
            margin: '3rem 0 1rem 0',
          }}>
            the 2000s
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Skipping forward ten years, the 2000s brought an incredibly fresh perspective of fashion, highlighting the excitement around a new millennium. Trends that influenced music, attitudes, and films were tracksuits, baguette bags, Uggs, many shades of pink, low risen pants, and animal prints. Male fashion centred around the flannel shirt, slim cut jeans, and of course, the letterman jacket. An excellent film of its day (and a classic for now and forever) that encapsulates early 2000s student fashion is "Mean Girls". The character of Regina George influenced a wide young female audience in their style, ranging from mini skirts and baguette bags to her mother's famous pink tracksuit.
          </p>

          {/* Section header */}
          <h2 style={{
            color: 'white',
            fontFamily: 'Futura, sans-serif',
            fontSize: '1.6rem',
            textTransform: 'lowercase',
            fontWeight: 'bold',
            margin: '3rem 0 1rem 0',
          }}>
            student fashion at waterloo
          </h2>
          <p style={{ marginBottom: '2.5rem' }}>
            All of these styles lead me to a curiosity about what drives fashion choices in the modern day — specifically at the University of Waterloo. From my personal lens of sitting next to amazingly stylish people in my lectures to seeing modern day influencers online, it is safe to say that conceptualizing 21st century fashion is incredibly difficult. We have become unapologetically unique in our appearances to the point where student fashion exists as its own subcategory, gnawing at the rules of "oh but that shouldn't go together!" University students are gaining confidence in their own eccentric sense of style, transforming the act of dressing into a contemporary art.
          </p>

          {/* Tops image */}
          <figure style={{ margin: '2rem 0 3rem 0' }}>
            <img
              src={img7}
              alt="Student tops — crew necks, sweaters, button-ups, tank tops"
              style={{ width: '100%', borderRadius: '10px', display: 'block' }}
            />
            <figcaption style={{ color: '#888', fontSize: '14px', marginTop: '0.75rem', fontStyle: 'italic' }}>
              tops spotted on campus: asymmetrical cuts, button-ups, sweaters & more
            </figcaption>
          </figure>

          <p style={{ marginBottom: '2rem' }}>
            Students expressed a love for tops like crew necks, big sweaters, backless tops, button ups, tank tops, and asymmetrical tops.
          </p>

          {/* Bottoms image */}
          <figure style={{ margin: '2rem 0 3rem 0' }}>
            <img
              src={img6}
              alt="Student bottoms — jeans, lounging pants, lacy skirts"
              style={{ width: '100%', borderRadius: '10px', display: 'block' }}
            />
            <figcaption style={{ color: '#888', fontSize: '14px', marginTop: '0.75rem', fontStyle: 'italic' }}>
              bottoms of choice: wide-leg jeans, lounging pants, lacy skirts
            </figcaption>
          </figure>

          <p style={{ marginBottom: '2rem' }}>
            In terms of bottoms, a multitude of jeans took over (unsurprisingly), alongside lounging pants, lacy skirts, and — as one student especially expressed — "pants with cuffed/slimming ankles make me sick," which may be due to it becoming an outdated look.
          </p>

          {/* Seasonal outfits image */}
          <figure style={{ margin: '2rem 0 3rem 0' }}>
            <img
              src={img4}
              alt="November outfit — warm tones, bomber jacket, wide trousers"
              style={{ width: '100%', borderRadius: '10px', display: 'block' }}
            />
            <figcaption style={{ color: '#888', fontSize: '14px', marginTop: '0.75rem', fontStyle: 'italic' }}>
              a cozy november look: warm earth tones, suede bomber, cord trousers
            </figcaption>
          </figure>

          <p style={{ marginBottom: '2rem' }}>
            Students helped outline cozy outfits for September and November, detailing how colour scheme is involved with dressing for different seasons.
          </p>

          {/* Accessories image */}
          <figure style={{ margin: '2rem 0 3rem 0' }}>
            <img
              src={img3}
              alt="Student accessories — rings, chains, bracelets, earrings, bags"
              style={{ width: '100%', borderRadius: '10px', display: 'block' }}
            />
            <figcaption style={{ color: '#888', fontSize: '14px', marginTop: '0.75rem', fontStyle: 'italic' }}>
              accessories & bags: rings, chains, bracelets, earrings
            </figcaption>
          </figure>

          <p style={{ marginBottom: '2rem' }}>
            The opinion for accessories and shoes went hand-in-hand, with students expressing either intricate kinds for each, or simply devoting that choice to blend in with whatever outfit they wear. For specifics, accessories included rings, chains, bracelets, bags, and earrings. Shoes included sneakers, platform boots or Uggs, and Timberlands.
          </p>

          {/* Makeup image */}
          <figure style={{ margin: '2rem 0 3rem 0' }}>
            <img
              src={img2}
              alt="Student makeup — simple looks, skincare-first approach"
              style={{ width: '100%', borderRadius: '10px', display: 'block' }}
            />
            <figcaption style={{ color: '#888', fontSize: '14px', marginTop: '0.75rem', fontStyle: 'italic' }}>
              makeup on campus: from clean girl to full glam
            </figcaption>
          </figure>

          <p style={{ marginBottom: '2rem' }}>
            Wearing makeup to school has definitely had its stages throughout the years. Now, in the modern day, individuals are given free rein to express themselves through this common but underrated form of art. Many students displayed a commonality in simple makeup looks, with the minority choosing to do a full glam look, and a few others sticking to all natural.
          </p>

          {/* Hair image */}
          <figure style={{ margin: '2rem 0 3rem 0' }}>
            <img
              src={img1}
              alt="Student hair styles — French braid, taper fade, heatless curls, dyed hair"
              style={{ width: '100%', borderRadius: '10px', display: 'block' }}
            />
            <figcaption style={{ color: '#888', fontSize: '14px', marginTop: '0.75rem', fontStyle: 'italic' }}>
              hair at waterloo: braids, fades, heatless curls, protective styles & dyed ends
            </figcaption>
          </figure>

          <p style={{ marginBottom: '2rem' }}>
            Hair is a form of creative expression and showcasing of tactile skill. Students provided the most variety for this section, outlining a love for the French braid, a grown out low taper fade, heatless curls, and dyed hair. For the curly girls, here's advice from a lazy curly natural on the form: short afro in warm weather, natural twists for any season, and protective flat twists in the winter.{' '}
            <a
              href="https://pin.it/3Uyp9sXSQ"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#5ba9e1', textDecoration: 'underline' }}
            >
              Check out the Pinterest board for visual inspo ↗
            </a>
          </p>

          {/* Closing */}
          <h2 style={{
            color: 'white',
            fontFamily: 'Futura, sans-serif',
            fontSize: '1.6rem',
            textTransform: 'lowercase',
            fontWeight: 'bold',
            margin: '3rem 0 1rem 0',
          }}>
            dressing until you feel like you
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            In conclusion, fashion has forever been a way to express oneself, spread awareness about critical topics, and curate a physical representation of who you are. We are slowly moving away from the extreme influence of films and celebrities to guide our fashion choices, and are taking the reins of our imagination, wearing whatever we want. It is amazing to compare the diverse way students at the University of Waterloo dress, and how we as Fashion for Change wish to continue fostering a safe space for students to take risks in fashion.
          </p>
          <p style={{ marginBottom: '4rem' }}>
            Fashion for Change actively encourages creative autonomy through the inclusion of ideas, and most notably, designer scenes that are performed at the annual end of year show. Designers are given full independence in their scenes, allowing their individual authenticity to shine from start to finish — sketching and sewing each piece themselves, and creatively challenged by styling models for a multitude of photoshoots throughout the year. Fashion for Change cultivates an experience for all people to explore their sense of style, no matter what it entails. So turn on your playlist, open your closet, and dress until you feel like you.
          </p>

        </div>
      </div>

      {/* Footer spacer */}
      <div style={{ height: '4rem' }} />
    </div>
  );
}
