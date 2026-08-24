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