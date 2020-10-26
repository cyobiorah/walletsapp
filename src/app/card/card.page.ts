import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CardDetailsPage } from "../modals/card-details/card-details.page";

@Component({
  selector: "app-card",
  templateUrl: "./card.page.html",
  styleUrls: ["./card.page.scss"],
})
export class CardPage implements OnInit {
  segmentModel = "dollar";
  dataReturned: any;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  segmentChanged(event) {
    console.log(this.segmentModel);
    console.log(event);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CardDetailsPage,
      componentProps: {
        data: {
          cardname: "Sandra Smith",
          cardnumber: "4056564778045439",
          expiry: "05/23",
          cvv: "944",
          billingaddress: "4325 Todd St, FREMONT, CALIFORNIA",
          zipcode: "99766",
        },
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log("Modal Sent Data: " + dataReturned);
      }
    });
    return await modal.present();
  }
}
