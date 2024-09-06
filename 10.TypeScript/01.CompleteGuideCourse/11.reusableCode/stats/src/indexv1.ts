import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';
import fs from "fs";

const fileReader = new CSVFileReader("football.csv");
fileReader.read();


let manUnitedWins = 0;
for (let match of fileReader.data)
{
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    {
        manUnitedWins++;
    } else if(match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
