import { Tweet, User } from "./classes"

export function SendTweet() {
    return
}

export function LikeTweet() {
    return
}

export function SendRetweet() {
    return
}

export function SendDelete() {
    return
}

export function FetchTweetStream(previousFedTweets: Tweet[], user: User) : Tweet[] {
    let tweets: Tweet[] = []

    // Calculate what params for tweets to fetch

    // Build query

    // Return tweets
    return tweets
}

export function SocialGraph(viewingUser: User, targetUser: User) : User[] {
    /**
     * Returns the users that the viewingUser follows, that are following the targetUser
     */
    let socialGraph: User[] = []
    return socialGraph
}