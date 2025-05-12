import { Link } from 'react-router-dom';

function RepositoriesTable({ label, repositories, id }) {
  const rendered =
    repositories &&
    repositories.map((repo, i) => {
      return (
        <div key={repo.id} className="p-0.5">
          <Link
            className="text-blue-500"
            to={`/repositories/${repo.full_name}`}
          >
            {repo.full_name}
          </Link>
        </div>
      );
    });

  return (
    <div className="border p-4 rounded">
      <h1 id={id || ''} className="text-lg font-bold border-b mb-1">
        {label}
      </h1>
      {rendered}
    </div>
  );
}

export default RepositoriesTable;
