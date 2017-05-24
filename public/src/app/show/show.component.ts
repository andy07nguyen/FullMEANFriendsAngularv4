import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FriendService } from './../friend.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  sub = null;
  showFriendId = null;
  showFriend = null;
  errors = null;
  constructor(private _route: ActivatedRoute, private _friendService: FriendService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((param)=>{
      this.showFriendId = param.id;
    })
    this.getOneFriend();
  }

  getOneFriend(){
    this._friendService.getOneFriend(this.showFriendId)
    .then((data)=>{

      console.log("Got data about one show friend", data);
      if(data.message == "Success"){
        this.showFriend = data.friend;
      }
      else {
        this.errors = data.error.message;
      }
      
    })
    .catch((err)=>{
      console.log("Got an error getting show friend", err);
      
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
