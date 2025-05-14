import { StarIcon } from '@primer/octicons-react';

function RepositoriesSummary({ repository }) {
  const { stargazers_count, open_issues, forks, language } = repository;

  return (
    <div className="flex flex-row gap-4 text-gray-700">
      <div>
        <StarIcon aria-label="stars" size={16} /> {stargazers_count}
      </div>
      <div>{open_issues} issues need help</div>
      <div>{forks} Forks</div>
      <div>{language}</div>
    </div>
  );
}

export default RepositoriesSummary;
