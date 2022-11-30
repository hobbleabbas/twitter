import { SendTweet } from "./functions";

export class Tweet {
    author: User;
    _likesCount: number;
    _retweetCount: number;
    _replyCount: number;
    text: string;
    published: Date;
    id: string;

    // The parent of the tweet thread, if any
    parentNode: string;
    // The tweet this is replying to, if any (can be parent node)
    higherNode: string;
   
    constructor(author: User, text: string, published: Date, id: string) {
        this.author = author
        this.text = text
        this.published = published
        this.id = id
    }

}

export class User {
    user_id: string;
    username: string;
    name: string;
    profilePic: string;
    bannerPic: string;
    verified: boolean;
    bio: string;
    protectedTweets: boolean;
    _joined: Date
    _followerCount: number;
    _followingCount: number;
   
    constructor(user_id: string, username: string, name: string, profilePic: string, bannerPic: string, verified: boolean, protectedTweets: boolean, bio?: string) {
        this.user_id = user_id;
        this.username = username;
        this.name = name;
        this.profilePic = profilePic;
        this.bannerPic = bannerPic;
        this.protectedTweets = protectedTweets;
        this.verified = verified;
        this.bio = bio ? bio : ""
    }
}

const enum EngagementType {
    TWEET = "tweet",
    REPLY = "reply",
    CLICK = "click",
    LIKE = "like",
    FOLLOW = "follow"
}

export class Engagement {
    engagement_id: string;
    type: EngagementType

    constructor (type: EngagementType, user: User) {
        this.engagement_id = 'randomUUID'
        this.type = type
    }

    log() {}
}

export class APIRequest {

    requestType: EngagementType;
    engagement_: Engagement
    
    constructor (requestType: EngagementType, user: User) {
        const engagement_ = new Engagement(requestType, user)
    }

    async makeRequest() {
        let returnables = [this.engagement_.log()]

        switch (this.requestType) {
            case EngagementType.TWEET:
                returnables.push(SendTweet())
                break
            case EngagementType.REPLY:
                returnables.push(SendTweet())
                break
            default:
                break
        }
        
        const data = await Promise.all(returnables)
        return data[1]
    }
}