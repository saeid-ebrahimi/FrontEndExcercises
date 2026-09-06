import { Card } from '$components/card';
import { Textarea } from '$components/textarea';
import { Button } from '$components/button';

// WRONG: Receiving state and setter as props
interface TextWidgetWrongProps {
  text: string;
  onTextChange: (text: string) => void;
}

export function TextWidgetWrong({ text, onTextChange }: TextWidgetWrongProps) {
  console.log('TextWidget rendered');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Text Widget
      </h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        Type something. Notice this re-renders when ANY widget updates because state is in the parent.
      </p>

      <Textarea
        label="Enter some text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        rows={4}
        placeholder="Start typing..."
      />

      <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-400">
        <span>{wordCount} {wordCount === 1 ? 'word' : 'words'}</span>
        <span>{charCount} {charCount === 1 ? 'character' : 'characters'}</span>
      </div>

      <div className="mt-4">
        <Button onClick={() => onTextChange('')} variant="secondary" size="small">
          Clear
        </Button>
      </div>
    </Card>
  );
}
