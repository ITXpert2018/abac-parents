import { Component, OnInit } from '@angular/core';
import { Card } from 'src/interfaces';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.page.html',
  styleUrls: ['./credit-card.page.scss'],
})
export class CreditCardPage implements OnInit {

  cards: Card[] = [];

  constructor() {
    var card: Card = {};
    card.id = "1";
    card.cardnumber = 1234567890123456;
    card.cvv = 777;
    card.expirydate = "12/23";
    this.cards.push(card);
  }

  ngOnInit() {
  }

}
