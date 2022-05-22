import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dados: Array<any>;
  constructor() {
    //Criando um método Constructor para passar os dados dos alunos dentro um Array que será implementado no "app.component.ts"
    this.dados = [
      {
        name: 'VINICIUS PEREIRA',
        ru: '3529741',
        curso: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
        dn: '30/12/1998',
      },
      {
        name: 'MARIA APARECIDA',
        ru: '1249658',
        curso: 'ENGENHARIA DA COMPUTAÇÃO',
        dn: '18/02/1972',
      },
      {
        name: 'RAISSA VITÓRIA',
        ru: '2648761',
        curso: 'SISTEMAS DE INFORMAÇÃO',
        dn: '25/02/1996',
      },
      {
        name: 'FERNANDA BORDINHON',
        ru: '1348126',
        curso: 'ODONTOLOGIA',
        dn: '18/02/2002',
      },
      {
        name: 'CLEBER DA SILVA',
        ru: '2013458',
        curso: 'ENGENHEIRO DE PRODUÇÃO',
        dn: '06/09/1985',
      },
      {
        name: 'SUELI REIS',
        ru: '1648310',
        curso: 'ENGENHEIRO CIVIL',
        dn: '23/10/1978',
      },
      {
        name: 'VALDEIR REIS',
        ru: '2468561',
        curso: 'CONTABILIDADE',
        dn: '12/06/1969',
      },
    ];
  }
}
