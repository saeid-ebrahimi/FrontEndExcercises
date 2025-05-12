import File from './File';
import Folder from './Folder';

function TreeEntry({ owner, repoName, entry }) {
  if (entry.type === 'dir') {
    return (
      <div className="ml-1.5 my-[3px] text-sm text-gray-200">
        <Folder folder={entry} owner={owner} repoName={repoName} />
      </div>
    );
  } else {
    return (
      <div className="ml-1.5 my-[3px] text-sm text-gray-200">
        <File file={entry} owner={owner} repoName={repoName} />
      </div>
    );
  }
}

export default TreeEntry;
