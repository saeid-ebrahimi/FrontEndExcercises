// If the compound components need to share state, use Context. If they only need configuration/data, prefer props.

import {
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { createContext, useContext, useState } from "react";

type AccordionContextValue = {
    expanded: string | false;
    setExpanded: (value: string | false) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            "Accordion components must be used inside <Accordion>"
        );
    }

    return context;
};

type AccordionProps = {
    children: React.ReactNode;
    defaultExpanded?: string | false;
};

type AccordionItemProps = {
    value: string;
    children: React.ReactElement;
};

type AccordionTriggerProps = {
    children: React.ReactNode;
};

type AccordionContentProps = {
    children: React.ReactNode;
};

type AccordionComponent = React.FC<AccordionProps> & {
    Item: React.FC<AccordionItemProps>;
    Trigger: React.FC<AccordionTriggerProps>;
    Content: React.FC<AccordionContentProps>;
};

export const Accordion: AccordionComponent = ({ children, defaultExpanded = false }: AccordionProps) => {
    const [expanded, setExpanded] = useState<string | false>(defaultExpanded);
    return (
        <AccordionContext.Provider value={{
            expanded,
            setExpanded
        }}>
            {children}
        </AccordionContext.Provider>
    )
};

Accordion.Item = function Item({ value, children }: AccordionItemProps) {
    const { expanded, setExpanded } = useAccordionContext();
    const isExpanded = expanded === value;
    const handleChange = () => {
        setExpanded(isExpanded ? false : value)
    }
    return (
        <MuiAccordion
            expanded={isExpanded}
            onChange={handleChange}
        >
            {children}
        </MuiAccordion>
    );
}

Accordion.Trigger = function Trigger({
    children,
}) {
    return (
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{children}</Typography>
        </AccordionSummary>
    );
};

Accordion.Content = function Content({
    children,
}) {
    return (
        <AccordionDetails>
            {children}
        </AccordionDetails>
    );
};