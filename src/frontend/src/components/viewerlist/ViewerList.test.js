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

test("VideoSearch renders 'No other viewers' when no users connected", () => {
  const testViewerList = [];
  const { getByText, queryByText } = render(
    <ViewerList viewerList={testViewerList} />
  );

  expect(getByText(/No other viewers/)).toBeInTheDocument();
  expect(queryByText(/test_user_1/)).toBeNull();
});

test("VideoSearch adds a new user to the list when updated", () => {
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
