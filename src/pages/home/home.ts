import { Component } from '@angular/core';
import { NavController,NavParams, ToastController, ModalController } from 'ionic-angular';
import { HogariaPg2Page } from '../hogaria-pg2/hogaria-pg2';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import {PerfilPage} from '../perfil/perfil';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private data: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
  public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.data = this.formBuilder.group
      ({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })

  }

Perfilar(){
    this.navCtrl.push(PerfilPage);
  }
public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };

  nextcambio() {
    this.navCtrl.push(HogariaPg2Page);
  }

  
  login() {
    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
      .then((response) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user.emailVerified) {
            user.sendEmailVerification();
          }
        })
        console.log(response)
        this.navCtrl.setRoot(HomePage);

      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  register() {
    this.modalCtrl.create(HogariaPg2Page).present();
  }
  ionViewDidLoad() {

  }

}
