import React, { useState, useEffect, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const ProjectImg = ({ filearray, alt }) => {
    console.log('this is a slide show');
    console.log(filearray);
    const [imagename, changeImage] = useState(filearray[0]);
    let i = 0;

    useEffect(() => {
        setInterval(() => {
            i++;
            if (i > filearray.length - 1) {
                i = 0;
            }
            console.log(i);
            changeImage(filearray[i]);
        }, 3000);
    }, []);

    return (
        <StaticQuery
            query={graphql`
					query {
						images: allFile {
							edges {
								node {
									relativePath
									name
									publicURL
									childImageSharp {
										fluid(maxWidth: 1366) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				`}
            render={(data) => {
                const image = data.images.edges.find((n) => n.node.relativePath.includes(imagename));
                return <img src={image.node.publicURL} />

            }}
        />
    )
};

ProjectImg.propTypes = {
    filename: PropTypes.string,
    alt: PropTypes.string,
};

export default ProjectImg;
