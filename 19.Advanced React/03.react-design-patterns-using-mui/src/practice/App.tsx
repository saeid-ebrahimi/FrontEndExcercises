import { Box, Button, Card, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";
import { Panel } from "../09.compound-components/01.named-sub-components";
import { Panel as NewPanel } from "../09.compound-components/02.structured-compound-component";
import { Accordion } from "../09.compound-components/03.context-based-compound-components";
export default function App() {

    return <Box p={5}>
        <Panel>
            <Panel.Header>
                <Typography component={"h1"} variant={"h4"}>The Main Header</Typography>
            </Panel.Header>
            <Panel.Content>
                <Typography component={"p"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facilis omnis voluptas facere similique ullam sapiente quas quisquam quaerat minus rem, placeat optio non esse alias vitae molestiae officia excepturi.
                </Typography>
            </Panel.Content>
            <Stack gap={2}>
                <Card>
                    <CardHeader title={"Title 1"} sx={{ py: 2 }} />
                    <CardContent>The content of the Card 1</CardContent>
                </Card>
                <Card>
                    <CardHeader title={"Title 2"} sx={{ py: 2 }} />
                    <CardContent>The content of the Card 2</CardContent>
                </Card>
            </Stack>
            <Panel.Footer>
                <Box display={"flex"} gap={2}>
                    <Button variant={"contained"}>Confirm</Button>
                    <Button variant={"outlined"} color={"error"}>Cancel</Button>
                </Box>
            </Panel.Footer>
        </Panel>
        <Divider sx={{ my: 4 }} />
        <NewPanel>
            <Panel.Header>
                <Typography component={"h1"} variant={"h4"}>The Main Header</Typography>
            </Panel.Header>
            <Panel.Content>
                <Typography component={"p"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facilis omnis voluptas facere similique ullam sapiente quas quisquam quaerat minus rem, placeat optio non esse alias vitae molestiae officia excepturi.
                </Typography>
            </Panel.Content>
            <Stack gap={2}>
                <Card>
                    <CardHeader title={"Title 1"} sx={{ py: 2 }} />
                    <CardContent>The content of the Card 1</CardContent>
                </Card>
                <Card>
                    <CardHeader title={"Title 2"} sx={{ py: 2 }} />
                    <CardContent>The content of the Card 2</CardContent>
                </Card>
            </Stack>
            <Panel.Footer>
                <Box display={"flex"} gap={2}>
                    <Button variant={"contained"}>Confirm</Button>
                    <Button variant={"outlined"} color={"error"}>Cancel</Button>
                </Box>
            </Panel.Footer>
        </NewPanel>
        <Divider sx={{ my: 4 }} />
        <Accordion>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>
                    What is React?
                </Accordion.Trigger>

                <Accordion.Content>
                    React is a JavaScript library for building user interfaces.
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2">
                <Accordion.Trigger>
                    What is TypeScript?
                </Accordion.Trigger>

                <Accordion.Content>
                    TypeScript adds static typing to JavaScript.
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
                <Accordion.Trigger>
                    What is Context API?
                </Accordion.Trigger>

                <Accordion.Content>
                    Context allows components to share data without passing
                    props through every level.
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    </Box>

};