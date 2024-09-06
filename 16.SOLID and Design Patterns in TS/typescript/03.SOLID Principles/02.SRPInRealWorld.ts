class BlogPost {
    constructor(
        private __title: string,
        private __content: string,
    ) {}
    // Methods related to content management
    createPost() {
        // Implementation here
    }

    updatePost() {
        // Implementation here
    }

    deletePost() {
        // Implementation here
    }
    get title(): string {
        return this.__title;
    }
    get content(): string {
        return this.__content;
    }
}

class DisplayBlogPost {
    constructor(private __blogPost: BlogPost) {}
    displayHTML() {
        return `<h1>${this.__blogPost.title}</h1><p>${this.__blogPost.content}</p>`;
    }
    get blogPost(): BlogPost {
        return this.__blogPost;
    }
}

class JSONBlogPost {
    constructor(private __blogPost: BlogPost) {}
    returnJSON() {
        return {
            title: this.__blogPost.title,
            content: this.__blogPost.content,
        };
    }
    get blogPost(): BlogPost {
        return this.__blogPost;
    }
}
