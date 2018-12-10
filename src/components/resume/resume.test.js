import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import wait from "waait";

import Resume from "./Resume";
import { ADD_POSITION, GET_RESUME } from "./../../graphql/statements";
import mock_db from "./../../../server/mock-data";

const mocks = [
  {
    request: {
      query: GET_RESUME
    },
    result: {
      data: {
        resume: {}
      }
    }
  }
];

it("renders without error", () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Resume />
    </MockedProvider>
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <Resume />
    </MockedProvider>
  );

  const tree = component.toJSON();
  expect(tree).toContain("Loading...");
});

it("should render Resume", async () => {
  const resumeMock = {
    request: {
      query: GET_RESUME
    },
    result: {
      data: {
        resume: {
          ...mock_db.resume
        }
      }
    }
  };

  const component = renderer.create(
    <MockedProvider mocks={[resumeMock]} addTypename={false}>
      <Resume />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const p = component.root.findByType("h5");
  expect(p.children).toContain(mock_db.resume.name);
});

it("should show error UI", async () => {
  const mock = {
    request: { query: GET_RESUME },
    error: new Error("oops")
  };

  const component = renderer.create(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Resume />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const tree = component.toJSON();
  expect(tree).toContain("Error! Network error: oops");
});
