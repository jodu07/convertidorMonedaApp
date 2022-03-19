import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'PES']


  constructor() { }

  ngOnInit(): void {
  }

  convertir(){
    
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.82
        }
        if(this.quiero === 'PES'){
          this.total = this.cantidad * 3685
        }
        break;
      case 'EUR':
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.21
        }
        if(this.quiero === 'PES'){
          this.total = this.cantidad * 4476
        }
        break;
      case 'PES':
        if(this.quiero === 'PES'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.00027
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.00022
        }
        break;  
        
    }

  }

}
