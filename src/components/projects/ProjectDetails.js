import React from 'react';

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return(
			<div className="container section prject-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">
							Project TItle - { id }
						</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
						</p>
					</div>
					<div className="card-action gret lighten-4 grey-text">
						<div>Post by someone</div>
						<div>2nd September, 2am</div>
					</div>
				</div>
			</div>
		)
}

export default ProjectDetails