import { render } from "@testing-library/react";

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
  const { getByText } = render(<ViewerList viewerList={testViewerList} />);

  expect(getByText(/No other viewers/)).toBeInTheDocument();
});
