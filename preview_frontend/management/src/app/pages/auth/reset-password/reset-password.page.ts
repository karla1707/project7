import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  public resetForm: FormGroup;
  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder,
    public toastController: ToastController) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    })
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  reset() {
    this.authService.resetPassword(this.resetForm.value.email).subscribe((resp) => {
      if(resp.is_error) {
        this.presentToast(resp.data);
      } else {
        this.presentToast("Please check your email for further instructions.");
      }
    })
  }

}
