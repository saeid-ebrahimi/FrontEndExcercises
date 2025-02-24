
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { useState } from "react"

export function AccordionCustomization() {
    const FAQs = [
        { question: "Question 1", answer: "Here is Answer 1" },
        { question: "Question 2", answer: "Here is Answer 2" },
        { question: "Question 3", answer: "Here is Answer 3" },
        { question: "Question 4", answer: "Here is Answer 4" },
    ]
    const [expandedOne, setExpandedOne] = useState<boolean | string>(false)

    const handleExpandOne = (question: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpandedOne(newExpanded ? question : false)
    }
    return (
        <div>
            {FAQs.map(({ question, answer }) => (
                <Accordion
                    disabled={question === FAQs[2].question}
                    expanded={expandedOne === question}
                    onChange={handleExpandOne(question)}
                    slotProps={{
                        transition: {
                            unmountOnExit: true
                        }
                    }}
                    sx={{
                        bgcolor: "rgb(30, 41, 59)",
                        maxWidth: "300px",
                        "& svg": {
                            color: "rgb(148, 163, 184)",
                        },
                        "&.Mui-expanded .MuiAccordionDetails-root": {
                            bgcolor: "rgb(51, 65, 85)",
                            color: "white",
                            minHeight: "6rem"
                        },
                        "&.Mui-expanded .MuiAccordionSummary-root": {
                            color: "white",
                            "& svg": {
                                color: "white",
                            }
                        },
                        "&.Mui-disabled .MuiAccordionSummary-root": {
                            color: "rgb(148, 163, 184)",
                            bgcolor: "rgb(51, 65, 85)",
                            opacity: "0.5",
                            "& svg": {
                                color: "rgb(148, 163, 184)",
                            }
                        }
                    }}
                    key={question} disableGutters square>
                    <AccordionSummary sx={{
                        color: "rgb(148, 163, 184)",
                        fontFamily: "Verdana",
                        fontSize: "1.2rem",
                        height: "4rem"
                    }} expandIcon={<ExpandMoreIcon />}>{question}</AccordionSummary>
                    <AccordionDetails>
                        <Typography variant={"body1"}>{answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </div >
    )
}
