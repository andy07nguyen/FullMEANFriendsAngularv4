import { Component, OnInit } from '@angular/core';
import { FriendService } from './../friend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _friendService: FriendService) { }
  friends = null;
  errors = null;
  ngOnInit() {
    this.getFriends();
  }

  getFriends(){
    this._friendService.getFriends()
    .then((data)=>{
      console.log("Got data by doing getFriends", data);
      if(data.message == "Success"){
        this.friends = data.friends;
      }
      else {
        this.errors = "There was a problem fetching the friends from the database";
      }
    })
    .catch((err)=>{
      console.log("Got an error by doing getFriends", err);
    })


  }

  delete(id){
    this._friendService.deleteFriend(id)
    .then((data)=>{
      console.log("data from deleting", data);
      if(data.message == "Success"){
        this.getFriends();
      }
      
    })
    .catch((err)=> {
      console.log("error from deleting", err);
      
    })
  }

}
