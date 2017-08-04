import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { HogariaPg2Page } from '../hogaria-pg2/hogaria-pg2';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { PerfilPage } from '../perfil/perfil';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BusquedaPage } from '../busqueda/busqueda';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the ResultadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  private data: FormGroup;
  private formexdata: FormGroup;

  //nuevo
  info: any;
  records: FirebaseListObservable<any>;
  lista = []
  nlista = []

  displayName;
  //fb

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public toastCtrl: ToastController, public modalCtrl: ModalController,
    public alertCtrl: AlertController, db: AngularFireDatabase, afDB: AngularFireDatabase,
    private afAuth: AngularFireAuth, public navParams: NavParams) {
    this.records = db.list('/usuarios');
    ///nuevo
    this.records = db.list('/usuarios', {
      query: {
        orderByChild: 'size',
        equalTo: 'large'
      }
    });

    this.records.subscribe(dd => {
      for (let c = 0; c < 9; c++) {
        if (dd[c].name == this.navParams.get('Cd')) {
          this.lista.push(dd[c]);
        }
      }
    });
    console.log(this.lista);

    this.records.remove
    this.formexdata = this.formBuilder.group
      ({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        hobby: ['', Validators.required]
      })
  }
  guardarForm() {
    if (this.formexdata.valid) {
      this.records.push(this.formexdata.value)
    }
    else {
      console.error('Verifique su informacion')
    }
  }
  eliminar(key) {
    //console.log(key);
    this.records.remove(key)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
    console.log(this.navParams.get('Cd'));
  }

}
