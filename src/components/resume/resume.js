import React, { Component } from "react";
import { Query } from "react-apollo";

import ResumeData from "./ResumeData";
import PositionList from "./../position/PositionList";
import { GET_RESUME } from "./../../graphql/statements";

class Resume extends Component {
  render() {
    return (
      <Query query={GET_RESUME}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          const resume_props = data.resume ? data.resume : {};

          return (
            <div className="row" style={{ marginTop: "20px" }}>
              <ResumeData {...resume_props} />

              <PositionList
                positions={data.resume ? data.resume.positions : []}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Resume;
