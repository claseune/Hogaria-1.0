import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
  this.registerData = this.formBuilder.group({
      registerMail: ['', Validators.required],
      registerPass: ['', Validators.required]
})
  }

register() {

    firebase.auth().createUserWithEmailAndPassword( this.registerData.controls['registerMail'].value, this.registerData.controls['registerPass'].value)
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
