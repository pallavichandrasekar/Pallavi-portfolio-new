import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Intro from 'pages/Home/Intro';
import ProjectSummary from 'pages/Home/ProjectSummary';
import Profile from 'pages/Home/Profile';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import { useLocation } from 'react-router-dom';
import airpodsTexturePlaceholder from 'assets/airpods-ui-interaction.PNG';
import airpodsTexture from 'assets/airpods-ui-interaction.PNG';
import airpodsTextureLarge from 'assets/airpods-ui-interaction.PNG';
import airbnbTexture from 'assets/airbnb-clone.PNG';
import airbnbTextureLarge from 'assets/airbnb-clone.PNG';
import airbnbTexturePlaceholder from 'assets/airbnb-clone.PNG';
import amazonTexture from 'assets/amazon-clone.PNG';
import amazonTextureLarge from 'assets/amazon-clone.PNG';
import amazonTexturePlaceholder from 'assets/amazon-clone.PNG';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import './index.css';

const disciplines = [
  'Developer',
  'Cybersecurity Enthusiast',
  'Ethical Hacker',
  'Illustrator',
  'Artist',
];

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [intro, projectOne, details];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>C.Pallavi | Designer + Developer</title>
        <meta
          name="description"
          content="Portfolio of C Pallavi – a digital designer working on web."
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Apple Airpods website UI interaction"
        description="Designing the Airpods UI inreaction similar to that in the apple website using Figma."
        buttonText="View Project"
        buttonLink="https://github.com/pallavichandrasekar/Airpods-pro-website-interaction"
        model={{
          type: 'laptop',
          alt: 'Apple Airpods website UI interaction',
          textures: [
            {
              src: airpodsTexture,
              srcSet: `${airpodsTexture} 800w, ${airpodsTextureLarge} 1440w`,
              placeholder: airpodsTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Airbnb website clone"
        description="Developed an Airbnb clone using React js and Firebase"
        buttonText="View Project"
        buttonLink="https://github.com/pallavichandrasekar/Airbnb-clone"
        model={{
          type: 'laptop',
          alt: 'Airbnb clone',
          textures: [
            {
              src: airbnbTexture,
              srcSet: `${airbnbTexture} 800w, ${airbnbTextureLarge} 1440w`,
              placeholder: airbnbTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Amazon website clone (Complete E-commerce website)"
        description="Developed an Amazon clone using React js and Firebase"
        buttonText="View Project"
        buttonLink="https://github.com/pallavichandrasekar/Amazon-clone"
        model={{
          type: 'laptop',
          alt: 'Amazon clone',
          textures: [
            {
              src: amazonTexture,
              srcSet: `${amazonTexture} 980w, ${amazonTextureLarge} 1376w`,
              placeholder: amazonTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;
