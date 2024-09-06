import { match } from "assert";
import { MatchData } from "./MatchData";
import { WinAnalysis } from "./analyzers/WinsAnalysuis";
import { HtmlReport } from "./reportTargets/HtmlReport";
export interface Analyzer{
    run(matches: MatchData[]):string;

}

export interface OutputTarget{
    print(report:string):void;
}

export class Summary{
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){};
    buildAndPrintReport(matches: MatchData[]):void {
       const output = this.analyzer.run(matches);
       this.outputTarget.print(output);
    }
    static winsAnalysisWithHtmlReport(team:string){
        return new Summary(
            new WinAnalysis(team), new HtmlReport()
        )
    }
}

