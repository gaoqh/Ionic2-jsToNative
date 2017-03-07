import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';
import { HTTP } from 'ionic-native'
/*
  Generated class for the Login page.
*/
import { AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home'
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { TestModel } from "../../models/user";
@Component({
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
    this.form = new FormGroup({
      account: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
 //点击登录按钮
  loginClick() {
    // var data = {
    //   'id' : '' , 
    // }
    // HTTP.post('', data, {}).then(res => {
    //   var json = res.data
    //   console.log(json)
    //   if (res.error == null) {
    //     let alert = this.alertCtrl.create({
    //     title: '登录成功！',
    //   });
    //   alert.present();
    //   this.navCtrl.setPages([HomePage])
    //   }else {
    //     let alert = this.alertCtrl.create({
    //     title: '登录失败！',
    //   });
    //   alert.present();
    //   }
      
    // })


    
  }

  
  
  processForm() {
    let alert = this.alertCtrl.create({
      title: "Account Created",
      message: "Created Account for: " + this.form.value.account + " " + this.form.value.password,
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    }
  }
}
