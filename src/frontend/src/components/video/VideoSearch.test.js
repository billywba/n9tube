import { render, fireEvent } from "@testing-library/react";

import VideoSearch from "./VideoSearch";

test("VideoSearch renders an input element to enter YouTube URL", () => {
  const { getByPlaceholderText } = render(<VideoSearch />);

  expect(getByPlaceholderText(/Enter YouTube URL/)).toBeInTheDocument();
});

test("VideoSearch input allows for video URL entry", () => {
  const { getByPlaceholderText } = render(<VideoSearch />);
  const inputEl = getByPlaceholderText(/Enter YouTube URL/);

  fireEvent.change(inputEl, {
    target: {
      value: "https://www.youtube.com/watch?v=Raxy3ZufLiA"
    }
  });

  expect(inputEl.value).toBe("https://www.youtube.com/watch?v=Raxy3ZufLiA");
});

test("VideoSearch renders Watch button", () => {
  const { getByText } = render(<VideoSearch />);

  expect(getByText(/Watch/)).toBeInTheDocument();
});
