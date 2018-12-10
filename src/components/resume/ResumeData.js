import React from "react";

const ResumeData = props => {
	return (
		<div className="col-md-4 col-xs-12">
			<div className="card mb-3">
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<h6 className="card-subtitle text-muted">
						Based in {props.city}. Find me on{" "}
						<a
							href={props.github_url}
							rel="noopener noreferrer"
							target="_blank"
						>
							{" "}
							Github
						</a>
						.
					</h6>
				</div>
				<img
					style={{ height: "auto", width: "100%", display: "block" }}
					src={props.photo_url ? props.photo_url : ""}
					alt={props.name}
				/>
			</div>
		</div>
	);
};

export default ResumeData;
