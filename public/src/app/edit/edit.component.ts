import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FriendService } from './../friend.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
   sub = null;
  editFriendId = null;
  editfriend = null;
  errors = null;

  constructor(private _route: ActivatedRoute, private _friendService: FriendService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((param)=>{
      this.editFriendId = param.id;
    })
    this.getOneFriend();
  }
   getOneFriend(){
    this._friendService.getOneFriend(this.editFriendId)
    .then((data)=>{

      console.log("Got data about one edit friend", data);
      if(data.message == "Success"){
        this.editfriend = data.friend;
        this.editfriend.birthday = new Date(this.editfriend.birthday).toDateString()
      }
      else {
        this.errors = data.error.message;
      }
      
    })
    .catch((err)=>{
      console.log("Got an error getting edit friend", err);
      
    })
  }
  updateFriend(){
    console.log("changed our friend", this.editfriend);
    this._friendService.updateFriend(this.editFriendId, this.editfriend)
    .then((data)=>{
      console.log("Got back from updating", data);
      
    })
    .catch((err)=>{
      console.log("Got an error while updating", err);
      
    })
    
  }

  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
