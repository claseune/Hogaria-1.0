import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PerfilPage } from '../perfil/perfil';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BusquedaPage } from '../busqueda/busqueda';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ResultadosPage } from '../resultados/resultados';
@Component({
  selector: 'page-hogaria-pg2',
  templateUrl: 'hogaria-pg2.html',
})
export class HogariaPg2Page {

  private data: FormGroup;
  private formexdata: FormGroup;

  //nuevo
  info: any;
  records: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public toastCtrl: ToastController, public modalCtrl: ModalController, public alertCtrl: AlertController, db: AngularFireDatabase, afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {

    //nuevo
    this.records = db.list('/usuarios');
    this.formexdata = this.formBuilder.group
      ({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        hobby: ['', Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HogariaPg2Page');
  }

}
