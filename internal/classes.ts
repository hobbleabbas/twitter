class Tweet {
    author: User;
    _likesCount: number;
    _retweetCount: number;
    _replyCount: number;
    text: string;
    published: Date;
    id: string;
   
    constructor(author: User, text: string, published: Date, id: string) {
        this.author = author
        this.text = text
        this.published = published
        this.id = id
    }

}

class User {
    user_id: string;
    username: string;
    name: string;
    profilePic: string;
   
    constructor(user_id: string, username: string, name: string, profilePic: string) {
        this.user_id = user_id;
        this.username = username;
        this.name = name;
        this.profilePic;
    }

}