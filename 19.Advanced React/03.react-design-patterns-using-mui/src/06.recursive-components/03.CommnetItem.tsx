import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";

export type TCommentItem = {
    id: number;
    username: string;
    text: string;
    replies: TCommentItem[]
}
export function CommentItem({ comment }: { comment: TCommentItem }) {
    return (
        <Card sx={{ p: 2, m: 2 }}>
            <CardHeader avatar={<Avatar>{comment.username.charAt(0).toUpperCase()}</Avatar>} title={comment.username} />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{comment.text}</Typography>
            </CardContent>
            <Card>
                {comment.replies.map(reply => <CommentItem key={reply.id} comment={reply} />)}
            </Card>
        </Card>
    )
}

export const comment: TCommentItem = {
    id: 1,
    username: "john_doe",
    text: "This is the main comment",
    replies: [
        {
            id: 2,
            username: "jane_smith",
            text: "This is the first reply",
            replies: [
                {
                    id: 3,
                    username: "mike_wilson",
                    text: "This is a reply to the first reply",
                    replies: [
                        {
                            id: 4,
                            username: "sarah_jones",
                            text: "This is a nested reply",
                            replies: [],
                        },
                    ],
                },
                {
                    id: 5,
                    username: "alex_brown",
                    text: "This is another reply to the first reply",
                    replies: [],
                },
            ],
        },
        {
            id: 6,
            username: "emily_davis",
            text: "This is the second reply to the main comment",
            replies: [],
        },
    ],
};
