/**
 * Created by Ivaylo on 5/20/2018.
 */

function solution(arg) {

    switch (arg) {
        case 'upvote' : this.upvotes ++;
            break;
        case 'downvote' : this.downvotes ++;
            break;
        case 'score' :{
            let greaterVotes = Math.max(this.upvotes, this.downvotes);
            let total = this.upvotes + this.downvotes;
            let balance = this.upvotes - this.downvotes;

            let reportedUpvotes = total > 50 ? this.upvotes + Math.ceil(greaterVotes * 0.25) : this.upvotes;
            let reportedDownvotes = total > 50 ? this.downvotes + Math.ceil(greaterVotes * 0.25) : this.downvotes;

            let rating;
            if(this.upvotes / total > 0.66){
                rating = 'hot';
            }else if(balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)){
                rating = 'controversial';
            }else if(balance < 0){
                rating = 'unpopular';
            }
            if(total < 10 || !rating){
                rating = 'new';
            }

            return [reportedUpvotes, reportedDownvotes, balance, rating];
        }
    }
}


