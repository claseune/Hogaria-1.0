import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//nose si haya que dejar esto
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HomePage} from '../home/home'
/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

slides = [
    {
      title: "Bienvenido a Hogaria!",
      description: "Te ayudamos a <b>localizar esa casa o departamento que deseas rentar o comprar </b>  <p> Con tu ubicacion la app te mostrarà las mejores opciones cerca de ti, o puedes usar el mapa para moverte por zonas y encontrar tu hogar ideal.</p>",
      image: "assets/img/hgmanos.jpg",
    },
    {
      title: "¿Eres un Vendedor?",
      description: "<b>Has encontrado tu mejor herramienta!</b> <p>Con <b>Hogaria</b> podras publicar esa casa o departamento que quieres rentar o vender </p><b>Te ayudaremos a crear la mejor publicidad a tu hogar</b></p> .</p>",
      image: "assets/img/agente.jpg",
    },
    {
      title: "Google Maps",
      description: "Gracias a <b>Google Maps</b> podras saber que hay cerca de el hogar que encontraste, asi podras determinar cual es tu mejor opciòn.",
      image: "assets/img/maps.gif",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Login(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }



}
