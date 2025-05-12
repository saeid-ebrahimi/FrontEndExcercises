import { useParams } from 'react-router-dom';
import TreeEntry from './TreeEntry';
import useEntry from '../../hooks/useEntry';

function TreePanel() {
  const { owner, repoName } = useParams();
  const { entry, isLoading, error } = useEntry({
    owner,
    repoName,
    path: '',
  });

  if (isLoading) {
    return null;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="tree-panel drop-shadow-md overflow-hidden bg-gray-800">
      <div className="p-2 border-b border-gray-700">
        <h1 className="text-xl font-bold text-gray-50">{repoName}</h1>
      </div>
      <div className="h-full overflow-scroll">
        <TreeEntry entry={entry} owner={owner} repoName={repoName} />
      </div>
    </div>
  );
}

export default TreePanel;
