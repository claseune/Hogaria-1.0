import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
private registerData: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
 
 this.registerData = this.formBuilder.group({
      registerMail: ['', Validators.required],
      registerPass: ['', Validators.required]
    })
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
    console.log('ionViewDidLoad RegistroPage');
  }

}
