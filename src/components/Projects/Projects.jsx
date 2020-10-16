import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import SlideShow from '../Image/SlideShow';
import { projectsData } from '../../mock/data';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <div className="project-wrapper">
        <Title title="Projects" />
        <div className="flex-container">
          {projectsData.map((project) => {
            const { title, info, point, url, tag, img, id } = project;
            return (
              <div class="card">
                <h1 className="title" >{title}</h1>
                <div className="link">
                  <a href={url}>{url}</a>
                </div>
                <div className="image-container">
                  {!Array.isArray(img) && <ProjectImg alt={title} filename={img} />}
                  {Array.isArray(img) && <SlideShow alt={title} filearray={img} />}
                </div>
                <p className="description">{info}</p>
                <div className="bullet">
                  <ul>
                    {Object.values(point).map((value, index) => {
                      return <li>{value}</li>
                    })}
                  </ul>
                </div>
                <div className="tag-container">
                  {Object.values(tag).map((value) => {
                    return <div className="tag"> {value} </div>
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
