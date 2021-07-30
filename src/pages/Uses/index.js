import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'components/ProjectLayout';
import Link from 'components/Link';
import usesBackground from 'assets/uses-background.mp4';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import prerender from 'utils/prerender';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import './index.css';
import { Table, TableCell, TableRow } from 'components/Table';

const Uses = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Skills | C Pallavi</title>
        <meta name="description" content="My skills" />
      </Helmet>
      <ProjectContainer className="uses">
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
          entered={!prerender}
        />
        <ProjectHeader title="SKILLS" />
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days.I have created few portfolio designs and Louis
                    vuitton redesign UI.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </li>
                  <li>
                    For algorithm coding i use{' '}
                    <Link href="https://www.python.org/">Python</Link>. This is always
                    been on of the most flexible language to use.
                  </li>
                  <li>
                    For animation and styling purposes, I use CSS and Sass.It is an
                    integral part of the modern web development process and a highly
                    effective tool that provides easy control over layout and presentation
                    of website pages by separating content from design.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cybersecurity</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    I have done web app penetration testing using tools like burpsuit,
                    wireshark, aircrack, etc.
                    <Link href="https://www.kali.org/">Kali Linux</Link> and{' '}
                    <Link href="https://sourceforge.net/projects/metasploitable/files/Metasploitable2/">
                      Metasploitable 2
                    </Link>{' '}
                    are the two major softwares that i use for penTest.
                  </li>
                  <li>
                    I have also learned ethical hacking like WPA/WPA2 cracking, MITM
                    attacks using bettercap, bypassing HTTPS, DNS spoofing, etc.
                  </li>
                  <li>
                    I could also perform ethical client side attacks like social
                    Engineering attack using tools like SET and Maltego and creating an
                    undetectable backdoor using veil.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Other Skills</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    One of my skill apart from these is DBMS.I have learned{' '}
                    <Link href="https://www.mysql.com/">MySQL</Link> to an intermediate
                    level.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Uses;
