import {
  screen,
  render,
} from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays all needed props of the component", () => {
  const repository = {
    stargazers_count: 1202,
    open_issues: 200,
    forks: 132,
    language: "Javascript"
  };

  render(<RepositoriesSummary repository={repository} />)

  for (let key in repository) {
    const value = repository[key];
    const elementText = screen.getByText(new RegExp(value, "i"))
    expect(elementText).toBeInTheDocument(elementText)
  }
});
