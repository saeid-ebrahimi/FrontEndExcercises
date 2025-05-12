import { useSearchParams } from 'react-router-dom';
import useRepositories from '../hooks/useRepositories';
import RepositoriesListItem from '../components/repositories/RepositoriesListItem';

function RepositoriesSearchRoute() {
  const [params] = useSearchParams();
  const {
    data: repositories,
    isLoading,
    error,
  } = useRepositories(params.get('q'));

  if (isLoading) {
    return 'Loading...';
  } else if (error) {
    return error.message;
  }

  const renderedRepositories = repositories.map((r) => {
    return <RepositoriesListItem key={r.id} repository={r} />;
  });

  return <div className="container mx-auto">{renderedRepositories}</div>;
}

export default RepositoriesSearchRoute;
