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
import { Button } from 'components/Button';
import Link from 'components/Link';
import usesBackground from 'assets/uses-background.mp4';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import prerender from 'utils/prerender';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import './index.css';
import { Table, TableCell, TableRow } from 'components/Table';

const Publications = ({ buttonLink }) => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Skills | C Pallavi</title>
        <meta name="description" content="My skills" />
      </Helmet>
      <ProjectContainer className="publications">
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
          entered={!prerender}
        />
        <ProjectHeader title="PUBLICATIONS" />
        <ProjectSection first className="publications__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>
                An Analysis on Network Security Tools and Systems:
              </ProjectSectionHeading>
              <ProjectSectionText>
                Due to rapid development of an Internet and e-commerce, networks are
                easily vulnerable to many attacks.Large usage of the internet by users
                made the door open to various attacks. Consequences of attacks are growing
                exponentially. In this paper, we investigate the effort of security in
                network and indication of several tools which are mandatory to identify
                the various threats.This paper was published in International Conference
                on Innovative Computing & Communication(ICICC 2021).
                <ProjectSectionHeading></ProjectSectionHeading>
                <Button
                  iconHoverShift
                  href="https://drive.google.com/file/d/1jdJhcXNx06dYIFhbOl7pR5C7735MHlr9/view?usp=sharing"
                  iconEnd="arrowRight"
                >
                  View Certificate
                </Button>
                <ProjectSectionHeading></ProjectSectionHeading>
                <Button
                  iconHoverShift
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3833455"
                  iconEnd="arrowRight"
                >
                  View Paper
                </Button>
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>
                A Relative Investigation of Various Algorithms for Online Financial Fraud
                Detection Techniques:
              </ProjectSectionHeading>
              <ProjectSectionText>
                As the online transaction is becoming more well known the types of online
                transaction frauds associated with this are likewise rising which affects
                the money related industry.In this paper we did various machine learning
                algorithms to detect credit card fraud and compared the model's accuracy.
                This paper is yet to be published in a journal through International
                Conference on Recent Trends In Computing(ICRTC 2021).
                <ProjectSectionHeading></ProjectSectionHeading>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSectionHeading></ProjectSectionHeading>
        <ProjectSectionHeading></ProjectSectionHeading>
        <ProjectHeader title="ACHIEVEMENTS" />
        <ProjectSection first className="publications__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>
                Best Paper Award in ICRTC 2021:
              </ProjectSectionHeading>
              <ProjectSectionText>
                Won the Best paper award for the paper "A Relative Investigation of
                Various Algorithms for Online Financial Fraud Detection Techniques" in
                International Conference on Innovative Computing & Communication(ICICC
                2021).
                <ProjectSectionHeading></ProjectSectionHeading>
                <Button
                  iconHoverShift
                  href="https://drive.google.com/file/d/1ZywVjSFw7_iFgrH-zXFUCWSdJhaOwIfK/view?usp=sharing"
                  iconEnd="arrowRight"
                >
                  View Certificate
                </Button>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Publications;
