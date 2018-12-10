import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { ADD_POSITION, GET_RESUME } from "./../../graphql/statements";

class NewPositionInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			company: "",
			year: "",
			role: "",
			description: ""
		};
	}
	handleSubmit(e, addPositionGraphQL) {
		e.preventDefault();
		const position = this.state;
		addPositionGraphQL({ variables: { position: position } });

		// reset state
		this.setState({
			company: "",
			year: "",
			role: "",
			description: ""
		});
	}

	handleFieldChange(e, key) {
		const value = e.target.value;
		this.setState({ [`${key}`]: value });
	}

	render() {
		return (
			<Mutation
				mutation={ADD_POSITION}
				refetchQueries={[{ query: GET_RESUME }]}
			>
				{(addPositionGraphQL, { loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error!</p>;
					return (
						<div className="card">
							<div className="card-body">
								<form
									onSubmit={e =>
										this.handleSubmit(e, addPositionGraphQL)
									}
								>
									<fieldset>
										<legend>Add a new position</legend>
										<div className="form-group">
											<label htmlFor="Company">
												Company
											</label>
											<input
												type="text"
												className="form-control"
												id="Company"
												aria-describedby="Company"
												placeholder="Company"
												onChange={e =>
													this.handleFieldChange(
														e,
														"company"
													)
												}
												required
											/>
										</div>
										<div className="form-group">
											<label htmlFor="Year">Year</label>
											<input
												type="text"
												className="form-control"
												id="Year"
												aria-describedby="Year"
												placeholder="Year"
												onChange={e =>
													this.handleFieldChange(
														e,
														"year"
													)
												}
												required
											/>
										</div>
										<div className="form-group">
											<label htmlFor="Role">Role</label>
											<input
												type="text"
												className="form-control"
												id="Role"
												aria-describedby="Role"
												placeholder="Role"
												onChange={e =>
													this.handleFieldChange(
														e,
														"role"
													)
												}
												required
											/>
										</div>
										<div className="form-group">
											<label htmlFor="description">
												Description
											</label>
											<input
												type="text"
												className="form-control"
												id="description"
												aria-describedby="emailHelp"
												placeholder="Description"
												onChange={e =>
													this.handleFieldChange(
														e,
														"description"
													)
												}
												required
											/>
										</div>
										<button
											type="submit"
											className="btn btn-primary"
										>
											Submit
										</button>
									</fieldset>
								</form>
							</div>
						</div>
					);
				}}
			</Mutation>
		);
	}
}

export default NewPositionInput;
