import {
  screen,
  render,
} from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays the primary language of the repository", () => {
  const repository = {
    stargazers_count: 1202,
    open_issues: 200,
    forks: 132,
    language: "Javascript"
  };

  render(<RepositoriesSummary repository={repository} />)

  const languageText = screen.getByText("Javascript")
  expect.toBeInTheDocument(languageText)
});
