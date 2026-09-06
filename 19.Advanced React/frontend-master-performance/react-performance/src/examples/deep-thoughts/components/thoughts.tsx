import type { DeepThought, ThoughtActions } from '../types';
import { Thought } from './thought';

type ThoughtsProps = ThoughtActions & {
  thoughts: DeepThought[];
};

export const Thoughts = ({ thoughts, ...actions }: ThoughtsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {thoughts.map((thought) => (
        <Thought key={thought.id} {...thought} {...actions} />
      ))}
    </div>
  );
};
