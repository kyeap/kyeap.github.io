import React, { useState, useEffect, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FALSE, TRUE } from 'node-sass';

const ProjectImg = ({ filearray, alt }) => {
	// console.log('this is a slide show');
	// console.log(filearray);
	// const [imagename, changeImage] = useState(filearray[0]);
	// let i = 0;

	// useEffect(() => {
	// 	setInterval(() => {
	// 		i++;
	// 		if (i > filearray.length - 1) {
	// 			i = 0;
	// 		}
	// 		console.log(i);
	// 		changeImage(filearray[i]);
	// 	}, 3000);
	// }, []);

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
				let urlArray = [];
				filearray.forEach(filename => {
					const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
					urlArray.push(image);
				});
				console.log(urlArray[0].node.publicURL);
				// return <img src={image.node.publicURL} />

				return (
					<Carousel autoPlay={TRUE} showStatus={FALSE}>
						<div>
							<img src={urlArray[0].node.publicURL} />
						</div>
						<div>
							<img src={urlArray[1].node.publicURL} />
						</div>
						<div>
							<img src={urlArray[2].node.publicURL} />
						</div>
					</Carousel>
				)

			}}
		/>
	)
};

ProjectImg.propTypes = {
	filename: PropTypes.string,
	alt: PropTypes.string,
};

export default ProjectImg;
