import gql from "graphql-tag";

export const GET_RESUME = gql`
	{
		resume {
			name
			github_url
			photo_url
			city
			positions {
				role
				description
				year
				company
			}
		}
	}
`;

export const ADD_POSITION = gql`
	mutation AddPosition($position: PositionInput!) {
		AddPosition(position: $position) {
			company
		}
	}
`;
