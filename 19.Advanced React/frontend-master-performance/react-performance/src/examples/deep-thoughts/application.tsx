import { useState } from 'react';

import { Button } from '$/common/components/button';
import { Container } from '$/common/components/container';

import type { DeepThought, ThoughtChanges } from './types';

import { CaptureThought } from './components/capture-thought';
import { Thoughts } from './components/thoughts';

import { createThought } from './utilities/create-thought';
import { initialThoughts } from './utilities/initial-thoughts';

function Application() {
  const [thoughts, setThoughts] = useState<DeepThought[]>(initialThoughts);

  function addThought(content: string) {
    const newThought = createThought(content);
    setThoughts([...thoughts, newThought]);
  }

  function updateThought(id: string, changes: ThoughtChanges) {
    const thought = thoughts.find((t) => t.id === id);

    if (!thought) return;

    const updatedThought = { ...thought, ...changes };

    setThoughts(thoughts.map((t) => (t.id === id ? updatedThought : t)));
  }

  function deleteThought(id: string) {
    setThoughts(thoughts.filter((t) => t.id !== id));
  }

  function clearAll() {
    setThoughts([]);
  }

  return (
    <Container className="my-8 flex flex-col gap-8">
      <CaptureThought
        onSubmit={addThought}
      />

      <Thoughts
        updateThought={updateThought}
        deleteThought={deleteThought}
        addThought={addThought}
        thoughts={thoughts}
      />

      <div className="flex flex-wrap items-center justify-end gap-4 p-4">
        <Button variant="danger" onClick={clearAll}>
          Clear All
        </Button>
      </div>
    </Container>
  );
}

export default Application;
