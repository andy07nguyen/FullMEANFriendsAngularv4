import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class FriendService {

  constructor(private _http: Http) { }

  getFriends(){
    return this._http.get('/friends').map((data)=>data.json()).toPromise()
  }

  createFriend(friend){
    return this._http.post('/friends', friend).map((data)=>data.json()).toPromise();
  }
  getOneFriend(id){
    return this._http.get('/friends/'+id).map((data)=>data.json()).toPromise();
  }
  updateFriend(id, friend){
    return this._http.put('/friends/' + id, friend).map((data)=>data.json()).toPromise();
  }
  deleteFriend(id){
    return this._http.delete('/friends/'+id).map((data)=>data.json()).toPromise();
  }

}
