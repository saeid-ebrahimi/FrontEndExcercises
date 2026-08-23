import { Card, CardHeader } from "@mui/material";

export type TCommentItem = {
    id: number;
    text: string;
    replies: TCommentItem[]
}
export function CommentItem({ comment }: { comment: TCommentItem }) {
    return (
        <Card sx={{ p: 2, m: 2 }}>
            <CardHeader title={comment.text} />
            <Card>
                {comment.replies.map(reply => <CommentItem key={reply.id} comment={reply} />)}
            </Card>
        </Card>
    )
}