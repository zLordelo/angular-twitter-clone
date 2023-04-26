import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  tweet: string = ""
  tweetMaxLength: number = 240
  tweetRemain: number = this.tweetMaxLength
  
  sendTweet() {
    alert(this.tweet)
    this.tweet = ""
  }

  changeCountChars() {
    this.tweetRemain = this.tweetMaxLength - this.tweet.length
  }
}
