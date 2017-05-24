import { Component, OnInit } from '@angular/core';
import { Friend } from './../friend';
import { FriendService } from './../friend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors = null;
  newfriend = new Friend();
  constructor(private _friendService: FriendService, private _router: Router) { }

  ngOnInit() {
  }
  createFriend(){
    console.log(this.newfriend);
    this._friendService.createFriend(this.newfriend)
    .then((data)=>{
      console.log("After creating a friend!", data);
      if(data.message == "Success"){
        this.errors = null;
        this._router.navigate(['/dashboard'])
      }
      else {
        this.errors = "Could not create your friend, please try again."
      }
      // this.newfriend = new Friend()
      
    })
    .catch((err)=>{
      console.log("Something went wrong with the creation!", err);
    })
    
  }

}
