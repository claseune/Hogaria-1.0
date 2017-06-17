import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the HogariaPg2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import * as firebase from 'firebase';
@Component({
  selector: 'page-hogaria-pg2',
  templateUrl: 'hogaria-pg2.html',
})
export class HogariaPg2Page {
  private registerData: FormGroup;
  displayName;  
  //fb
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {

    this.items = afDB.list('/cuisines');
    //
    this.registerData = this.formBuilder.group({
      registerMail: ['', Validators.required],
      registerPass: ['', Validators.required]
    })
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  register() {
    firebase.auth().createUserWithEmailAndPassword(this.registerData.controls['registerMail'].value, this.registerData.controls['registerPass'].value)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HogariaPg2Page');
  }

}
