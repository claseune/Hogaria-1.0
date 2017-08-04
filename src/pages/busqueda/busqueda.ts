import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResultadosPage } from '../resultados/resultados';

/**
 * Generated class for the BusquedaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
  items;
    displayName;  

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
this.initializeItems();  
 afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });

}
buscar(cosa) {
  let Busqued = {
    Cd:cosa
  }
    this.navCtrl.push(ResultadosPage,Busqued);
  }
initializeItems() {
    this.items = [
      'Tampico',
      'Madero',
      'Altamira',
      'Abasolo',
      'Antigua Morelos',
      'Burgos',
      'Bustamante',
      'Camargo',
      'Casas',
      'Cruillas',
      'Gomez Farias',
      'Gonzalez',
      'Guemez',
      'Guerrero',
       'Gustavo Diaz Ordaz',
      'Hidalgo',
      'Jaumave',
      'Jimenez',
      'Llera',
      'Mainero',
      'El Mante',
      'Matamoros',
      'Méndez',
      'Mier',
      'Miguel Alemán',
      'Miquihuana',
      'Nuevo Laredo',
      'Nuevo Morelos',
      'Ocampo',
      'Padilla',
      'Palmillas',
      'Reynosa',
      'Rio Bravo',
      'San Carlos',
      'San Fernando',
      'Soto La Marina',
      'Tula',
      'Valle Hermoso',
      'Victoria',
      'Villagrán',
      'Xicotencatl'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

}
