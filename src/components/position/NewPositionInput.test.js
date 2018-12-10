import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import wait from "waait";

import NewPositionInput from "./NewPositionInput";
import { ADD_POSITION, GET_RESUME } from "./../../graphql/statements";
import mock_db = require("./../../../server/mock-data");

it("renders without error", () => {
	renderer.create(
		<MockedProvider mocks={mocks} addTypename={false}>
			<NewPositionInput />
		</MockedProvider>
	);
});