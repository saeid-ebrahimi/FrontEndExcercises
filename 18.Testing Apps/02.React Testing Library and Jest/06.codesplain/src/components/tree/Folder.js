import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { ChevronRightIcon, ChevronDownIcon } from '@primer/octicons-react';
import TreeEntry from './TreeEntry';
import useEntry from '../../hooks/useEntry';

function Folder({ repoName, owner, folder }) {
  const { '*': path } = useParams();
  const [expanded, setExpanded] = useState(() => {
    return (path || '').startsWith(folder.path);
  });

  const { entry, error } = useEntry({
    repoName,
    owner,
    path: folder.path,
  });
  if (error) {
    console.error(error);
  }

  let name = '';
  if (folder.name) {
    name = (
      <div
        className="select-none whitespace-nowrap"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded(!expanded);
        }}
      >
        {expanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        {folder.name}
      </div>
    );
  }

  const childEntries = entry?.entries || [];
  const children =
    expanded &&
    childEntries.map((entry) => (
      <TreeEntry
        key={entry.name}
        owner={owner}
        repoName={repoName}
        entry={entry}
      />
    ));

  return (
    <div>
      <div className="hover:font-bold">{name}</div>
      {expanded && (
        <div
          className={classNames(
            { 'border-l': expanded },
            'ml-1.5 border-gray-400'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

Folder.propTypes = {
  repoName: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  folder: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Folder;
