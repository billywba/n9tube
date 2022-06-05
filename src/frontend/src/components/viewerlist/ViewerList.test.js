import { render, screen } from "@testing-library/react";

import ViewerList from "./ViewerList";

test("VideoSearch renders a list of viewer's usernames", () => {
  const testViewerList = [
    { username: "test_user_1" },
    { username: "yadk le in csgo" },
    { username: "tense1983" }
  ];
  const { getByText } = render(<ViewerList viewerList={testViewerList} />);

  expect(getByText(/test_user_1/)).toBeInTheDocument();
  expect(getByText(/yadk le in csgo/)).toBeInTheDocument();
});

test("VideoSearch renders 'No other viewers' when no users in prop", () => {
  const testViewerList = [];
  const { getByText, queryByText } = render(
    <ViewerList viewerList={testViewerList} />
  );

  expect(getByText(/No other viewers/)).toBeInTheDocument();
  expect(queryByText(/test_user_1/)).toBeNull();
});

test("VideoSearch renders a new user to the list when user is added to prop", () => {
  let testViewerList = [
    { username: "test_user_1" },
    { username: "yadk le in csgo" },
    { username: "tense1983" }
  ];
  const { rerender, getByText } = render(
    <ViewerList viewerList={testViewerList} />
  );

  // Add new user to the array and rerender the prop
  testViewerList = [...testViewerList, { username: "new_user_connected" }];
  rerender(<ViewerList viewerList={testViewerList} />);

  // Check for users
  expect(getByText(/test_user_1/)).toBeInTheDocument();
  expect(getByText(/yadk le in csgo/)).toBeInTheDocument();
  expect(getByText(/new_user_connected/)).toBeInTheDocument();
});

test("VideoSearch rerenders 'No other viewers' when users removed from prop", () => {
  let testViewerList = [
    { username: "test_user_1" },
    { username: "yadk le in csgo" }
  ];

  const { rerender, getByText, queryByText } = render(
    <ViewerList viewerList={testViewerList} />
  );

  // Set list to no viewers
  testViewerList = [];

  rerender(<ViewerList viewerList={testViewerList} />);
  expect(getByText(/No other viewers/)).toBeInTheDocument();
  expect(queryByText(/test_user_1/)).toBeNull();
});
