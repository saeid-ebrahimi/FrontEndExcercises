import { Badge } from '$components/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$components/card';
import { Progress } from '$components/progress';
import { Tag } from '$components/tag';
import type Pokedex from '../pokedex.json';

type PokemonRecord = (typeof Pokedex)[number];

const typeColors: Record<string, 'neutral' | 'success' | 'warning' | 'error' | 'info'> = {
  Fire: 'error',
  Water: 'info',
  Grass: 'success',
  Electric: 'warning',
  Poison: 'neutral',
  Flying: 'info',
  Bug: 'success',
  Normal: 'neutral',
  Ground: 'warning',
  Fairy: 'neutral',
  Fighting: 'error',
  Psychic: 'neutral',
  Rock: 'neutral',
  Ghost: 'neutral',
  Ice: 'info',
  Dragon: 'neutral',
  Dark: 'neutral',
  Steel: 'neutral',
};

export const Pokemon = ({
  id,
  name,
  type,
  species,
  description,
  base,
  profile,
  image,
}: PokemonRecord) => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle>
              {name.english}
              <span className="ml-2 text-sm font-normal text-slate-500">
                #{id.toString().padStart(3, '0')}
              </span>
            </CardTitle>
            <CardDescription>{species}</CardDescription>
          </div>
          {image.thumbnail && (
            <img src={image.thumbnail} alt={name.english} className="h-20 w-20 object-contain" />
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {type.map((t) => (
            <Badge key={t} variant={typeColors[t] || 'neutral'}>
              {t}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">{description}</p>

        <div className="mb-4 space-y-3">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Base Stats</h4>
          {base && Object.entries(base).map(([stat, value]) => (
            <div key={stat}>
              <div className="mb-1 flex justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>{stat}</span>
                <span>{value}</span>
              </div>
              <Progress
                value={value}
                max={255}
                variant={value >= 100 ? 'success' : value >= 60 ? 'default' : 'error'}
              />
            </div>
          ))}
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Height:</span>{' '}
            <span className="text-slate-600 dark:text-slate-400">{profile.height}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Weight:</span>{' '}
            <span className="text-slate-600 dark:text-slate-400">{profile.weight}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Abilities</h4>
          <div className="flex flex-wrap gap-2">
            {profile.ability.map(([ability, isHidden]) => (
              <Tag key={ability} variant={isHidden === 'true' ? 'primary' : 'default'} size="sm">
                {ability}
                {isHidden === 'true' && ' (Hidden)'}
              </Tag>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
