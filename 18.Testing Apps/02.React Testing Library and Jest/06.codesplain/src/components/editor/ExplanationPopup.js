import useExplanation from '../../hooks/useExplanation';

function ExplanationPopup({ selection, onClose }) {
  const { explanation, isLoading, error } = useExplanation(selection);

  let content;
  if (isLoading) {
    content = 'Loading...';
  } else if (error) {
    content = error.message;
  } else if (explanation) {
    content = explanation;
  }

  const handleClose = () => {
    onClose(selection);
  };

  return (
    <div className="z-50 bg-gray-700 overflow-scroll relative w-96 p-2 pr-3 border drop-shadow-lg">
      <pre className="whitespace-pre-wrap text-xs">{content}</pre>
      <button onClick={handleClose} className="text-xs border px-2 py-0.5">
        Close
      </button>
    </div>
  );
}

export default ExplanationPopup;
