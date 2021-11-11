import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public toastController: ToastController) { }



  public registerForm: FormGroup;

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(2), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', Validators.required]
    })
  }

  register() {
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.name).subscribe((resp) => {
      if(resp.is_error) {
        this.presentToast(resp.data);
      } else {
        localStorage.setItem("token", resp.data);
      }
    })
  }

}
