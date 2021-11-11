import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../../shared/auth/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {


  public changeForm: FormGroup;

  private token: string;
  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token");
    this.changeForm = this.formBuilder.group({
      newPass: ['', [Validators.required]],
      newPassRetype: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  update() {
    if(!this.changeForm.value.newPass == this.changeForm.value.newPassRetype) {
      this.presentToast("Passwords don't match! Please retype your password");
      return;
    }
    this.authService.updatePassword(this.changeForm.value.newPass, this.token, this.changeForm.value.email).subscribe((resp) => {
      if(resp.is_error) {
        this.presentToast(resp.data);
      } else {
        this.router.navigate(['/']);
      }
    })
  }

}
