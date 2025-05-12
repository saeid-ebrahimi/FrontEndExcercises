import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useFile from '../../hooks/useFile';
import Editor from './Editor';
import ExplanationList from './ExplanationList';
import Breadcrumbs from './Breadcrumbs';

function EditorPage() {
  const { '*': path, owner, repoName } = useParams();
  const { file } = useFile(owner, repoName, path);
  const [selections, setSelections] = useState([]);
  const editorRef = useRef(null);

  const handleExplainRequest = ({ text, line, editor, path }) => {
    if (!text.trim() || selections.find((e) => e.line === line)) {
      return;
    }
    editorRef.current = editor;
    setSelections([...selections, { text, line, path }]);
  };
  const handleExplanationClose = (selection) => {
    setSelections(selections.filter((sel) => sel.line !== selection.line));
  };

  return (
    <div>
      <Breadcrumbs path={path} />
      <Editor onExplainRequest={handleExplainRequest} file={file} />
      <ExplanationList
        editorRef={editorRef}
        selections={selections}
        onExplanationClose={handleExplanationClose}
      />
    </div>
  );
}

export default EditorPage;
