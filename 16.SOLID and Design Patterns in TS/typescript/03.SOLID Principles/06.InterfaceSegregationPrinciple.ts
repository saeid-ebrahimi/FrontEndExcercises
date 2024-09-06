// interface Machine {
//     print(document: Document): void;
//     scan(document: Document): void;
//     fax(document: Document): void;
// }

// according to ISP we should refactor Machine to three Separate interface
interface Printer {
    print(document: Document): void;
}

interface Scanner {
    scan(document: Document): void;
}

interface FaxMachine {
    fax(document: Document): void;
}

class SimplePrinter implements Printer {
    print(document: Document): void {
        console.log("The Printer is printing.");
    }
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
    print(document: Document): void {
        console.log("The Machine is printing.");
    }

    scan(document: Document): void {
        console.log("The Machine is scanning.");
    }

    fax(document: Document): void {
        console.log("The Machine is sending a fax.");
    }
}

