import { Link } from 'react-router-dom';
import FileIcon from '../tree/FileIcon';
import RepositoriesSummary from './RepositoriesSummary';

function RepositoriesListItem({ repository }) {
  const { full_name, language, description, owner, name } = repository;

  return (
    <div className="py-3 border-b flex">
      <FileIcon name={language} className="shrink w-6 pt-1" />
      <div>
        <Link to={`/repositories/${full_name}`} className="text-xl">
          {owner.login}/<span className="font-bold">{name}</span>
        </Link>
        <p className="text-gray-500 italic py-1">{description}</p>
        <RepositoriesSummary repository={repository} />
      </div>
    </div>
  );
}

export default RepositoriesListItem;
