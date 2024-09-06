from datetime import datetime;

class BlogPost:
    def __init__(self, title: str, description: str, publish_date: str ) -> None:
        self.title = title
        self.description = description
        self.publish_date = publish_date

    def print(self) -> None:
        print("Title: ", self.title)
        print("Description: ", self.description)
        print("Published: ", self.publish_date)


title = "Clean Code Bible"
description = "Actually, writing Clean Code can be pretty fun. You'll see!"
today = datetime.now()
formatted_today = today.strftime('%Y-%m-%d %H:%M')

new_blog_post = BlogPost(title, description, formatted_today )
new_blog_post.print()