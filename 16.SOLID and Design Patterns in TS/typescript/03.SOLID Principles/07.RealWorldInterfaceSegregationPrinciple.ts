// creating posts
// commenting posts
// sharing posts
// admin - 3
// regular - 2

interface Post {
    title: string;
    content: string;
}

interface Comment {
    title: string;
    content: string;
}

interface PostCreator {
    createPost(post: Post): void;
}

interface CommentCreator {
    createComment(comment: Comment): void;
}

interface PostSharer {
    sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
    createPost(post: Post): void {
        console.log("Admin is creating a post.");
    }
    createComment(comment: Comment): void {
        console.log("Admin is creating a comment.");
    }
    sharePost(post: Post): void {
        console.log("Admin is sharing a post.");
    }
}

class RegularUser implements CommentCreator, PostSharer {
    createComment(comment: Comment): void {
        console.log("RegularUser is creating a comment.");
    }
    sharePost(post: Post): void {
        console.log("RegularUser is sharing a post.");
    }
}