import { useState, useMemo } from 'react';
import { Container } from '$components/container';
import { Input } from '$components/input';
import { PrimeGrid } from './components/prime-grid';
import { Stats } from './components/stats';
import { calculatePrimes } from './utilities/calculate-primes';

function Application() {
  const [limit, setLimit] = useState(10000);

  // Expensive computation: calculate all prime numbers up to limit
  // This runs on every input change, making typing feel laggy
  const primes = useMemo(() => calculatePrimes(limit), [limit]);

  const largestPrime = primes.length > 0 ? primes[primes.length - 1] : 0;

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Prime Time</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Enter a number to find all prime numbers up to that limit. Try typing quickly - notice how
          the input field feels sluggish as it recalculates primes on every keystroke.
        </p>
      </section>

      <section className="space-y-4">
        <Input
          type="number"
          label="Find primes up to:"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          min={2}
          max={100000}
          placeholder="Enter a number (e.g., 10000)"
        />
      </section>

      <section>
        <Stats count={primes.length} largestPrime={largestPrime} limit={limit} />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Prime Numbers Found
        </h2>
        <PrimeGrid primes={primes} />
      </section>
    </Container>
  );
}

export default Application;
