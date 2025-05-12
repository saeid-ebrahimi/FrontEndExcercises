import { ChevronRightIcon } from '@primer/octicons-react';

function Breadcrumbs({ path }) {
  const pathParts = path.split('/').filter((p) => p);

  const renderedPaths = pathParts.map((part, i) => {
    return (
      <li key={part + i} className="text-xs text-gray-400">
        {part}
        {i < pathParts.length - 1 && (
          <ChevronRightIcon aria-label="separator" size={12} />
        )}
      </li>
    );
  });

  return (
    <div className="pb-0.5 h-5" style={{ backgroundColor: '#1e1e1e' }}>
      <ol className="px-3 py-0.5 drop-shadow-2xl flex items-center gap-1">
        {renderedPaths}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
