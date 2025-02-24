import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { useState } from "react"

export function AccordionFunctionality() {
    const FAQs = [
        { question: "Question 1", answer: "Here is Answer 1" },
        { question: "Question 2", answer: "Here is Answer 2" },
        { question: "Question 3", answer: "Here is Answer 3" },
        { question: "Question 4", answer: "Here is Answer 4" },
    ]
    // const [expanded, setExpanded] = useState<string[]>([])
    const [expandedOne, setExpandedOne] = useState<boolean | string>(false)

    // function handleExpand(question: string) {
    //     let newExpanded = [...expanded]
    //     if (expanded.includes(question)) {
    //         newExpanded = newExpanded.filter(expandedQuestion => expandedQuestion !== question)
    //     } else {
    //         newExpanded.push(question)
    //     }
    //     setExpanded(newExpanded)
    // }

    const handleExpandOne = (question: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpandedOne(newExpanded ? question : false)
    }
    return (
        <div>
            {FAQs.map(({ question, answer }) => (
                <Accordion
                    disabled={question === FAQs[2].question}
                    // expanded={expanded.includes(question)}
                    // onChange={() => handleExpand(question)}
                    expanded={expandedOne === question}
                    onChange={handleExpandOne(question)}
                    slotProps={{
                        transition: {
                            unmountOnExit: true
                        }
                    }}

                    key={question} disableGutters square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>{question}</AccordionSummary>
                    <AccordionDetails>
                        <Typography variant={"body1"}>{answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}
