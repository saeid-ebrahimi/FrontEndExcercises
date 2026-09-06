import { Input } from '$components/input';
import { Button } from '$components/button';

interface GameInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  disabled: boolean;
}

export const GameInput = ({ value, onChange, onSubmit, disabled }: GameInputProps) => {
  console.log('GameInput rendered');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <Input
        id="game-input"
        label="Enter a hex color"
        type="text"
        maxLength={6}
        pattern="[a-fA-F0-9]{6}"
        placeholder="e.g., A3F2B1"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="flex-1"
      />
      <Button type="submit" disabled={disabled}>
        Guess
      </Button>
    </form>
  );
};
