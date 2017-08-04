import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { HogariaPg2Page } from '../hogaria-pg2/hogaria-pg2';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { PerfilPage } from '../perfil/perfil';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BusquedaPage } from '../busqueda/busqueda';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  private data: FormGroup;
  private formexdata: FormGroup;

  //nuevo
  info: any;
  records: FirebaseListObservable<any>;

  displayName;  
  //fb
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public toastCtrl: ToastController, public modalCtrl: ModalController, public alertCtrl: AlertController, db: AngularFireDatabase,afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
 this.items = afDB.list('/cuisines');
    //
   
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
/*
    this.data = this.formBuilder.group
      ({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })

    //nuevo
    this.records = db.list('/usuarios');
    this.formexdata = this.formBuilder.group
      ({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        hobby: ['', Validators.required]
      })
      */

  }
  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res)
      );
       this.navCtrl.push(BusquedaPage);
      
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

eliminar(key){
  //console.log(key);
  this.records.remove(key)

}
  Perfilar() {
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
        this.navCtrl.setRoot(BusquedaPage);
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  register() {
    this.modalCtrl.create(HogariaPg2Page).present();
  }
  guardarForm() {
    if (this.formexdata.valid) {
      this.records.push(this.formexdata.value)
    }
    else {
      console.error('Verifique su informacion')
    }
  }
  ionViewDidLoad() {
    console.log(this.records)

  }

}
