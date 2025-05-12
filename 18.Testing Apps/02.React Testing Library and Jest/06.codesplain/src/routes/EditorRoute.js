import Split from 'react-split';
import TreePanel from '../components/tree/TreePanel';
import EditorPanel from '../components/editor/EditorPanel';

function EditorRoute() {
  return (
    <div>
      <Split
        sizes={[15, 85]}
        gutterSize={6}
        direction="horizontal"
        cursor="col-resize"
        className="flex flex-row"
      >
        <div>
          <TreePanel />
        </div>
        <div>
          <EditorPanel />
        </div>
      </Split>
    </div>
  );
}

export default EditorRoute;
