import { MatchReader } from "./composition/MatchReader";
import { Summary } from './composition/Summary';

// const reader = new CsvFileReader('football.csv');
// reader.read();

// console.log(reader.data);

// let manUnitedWins = 0;

// for (let match of reader.data) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCSV('football.csv')
matchReader.load();

// const summary = new Summary(
//   new WinAnalysis("Man United"), new ConsoleReport()
// );

const summary = Summary.winsAnalysisWithHtmlReport("Man United")
summary.buildAndPrintReport(matchReader.matches)