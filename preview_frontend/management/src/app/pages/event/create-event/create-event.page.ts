import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})

export class CreateEventPage implements OnInit {

  //Event ID
  public eventId: number;

  public eventdata: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toastController: ToastController,
    private router: Router
  ) {

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    await toast.present();
  }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    console.log(`EVENT ID: ${this.eventId}`);
    if(this.eventId == undefined) { 
      //TODO: create event setup logic here if needed
    } 
    else
    {
      //Get a pre-existing event
      this.api.getEvent(this.eventId).subscribe((resp) => {
        //TODO: error handling
        if(resp.is_error) {
          this.presentToast("Could not get that event.");
          this.router.navigateByUrl('/event-overview');
          return;
        }
        this.eventdata = resp.data;
      });
    }

  }
}