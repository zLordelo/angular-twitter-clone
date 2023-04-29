import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  tweet: string = ""
  tweetMaxLength: number = 240
  tweetRemain: number = this.tweetMaxLength
  
  constructor(private service: MessagesService) {

  }

  sendTweet() {
    this.service.addMessage(this.tweet)
    this.tweet = ""
    this.tweetRemain = this.tweetMaxLength
  }

  changeCountChars() {
    this.tweetRemain = this.tweetMaxLength - this.tweet.length
  }
}
