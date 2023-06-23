import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="barra">
      <h2>Encurt</h2>
    </div>
    <main>
      <div class="menu">
      </div>
      <div class="container">
        <section id="urlbox">
          <h1>Cole a URL para ser encurtada</h1>
          <form action="" method="post">
            <div id="formurl">
            <input type="text" [(ngModel)]="url" name="url" size="80" placeholder="Cole o seu link aqui">
              <div id="formbutton">
                <input type="button" (click)="encurtarUrl()" value="Encurtar"/>
              </div>
            </div>
            <p>Encurt é um serviço grátis para encurtar URLs e criar links curtos <br>Crie uma conta premium para encurtar URLs ilimitadas com mais recursos para seus projetos </p>
            <p><small><i><b>Desenvolvido por</b>: Katia Nicolini, Daniel Nicolini</i></small></p>
          </form>
        </section>
      </div>
    </main>
  `,
  styles: [`
    h1 {
    margin: 0;
    font: bold 36px "maven pro",arial;
    color: #fdf7f7;
    letter-spacing: -1px;
    text-align: center;

}

h2 {
    position: center;
    margin-top: auto;
    text-align: center;
    color: #f8e6e6;
    font: bold 30px "maven pro",arial;

}

.barra  {
    background-color:rgb(62, 1, 1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 35px;
    padding: 8px 10px;
    border-bottom: 4px solid #120202;
  }

body {
    background-color:rgb(253, 248, 248);
    margin: 0;
}

div {
    align-items: center;
    align-content: center;
    display: flex;
    justify-content: center;


}

section#urlbox {
    margin: 80;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    color: #212529;
    text-align: left;
    background-color: #230101;
    padding: 30px;



}


p{
    position:static;
    top: 80;
    left: 40;
    right: 40;
    color: azure;
}

.formurl {
    display:table;
    max-width: 600px;
    margin: 0 auto;


}

.formurl input[type=text] {
    display: table-cell;
    width: 100%;
    height: 5px;
    padding: 10px 16px;
    font: 17px lato,arial;
    color: #181818;
    box-shadow: 0 1px 4px #0b0000;
    background: #fff;
    border: 1px solid #828080;
    border-right: 0;
    border-radius: 3px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    box-sizing: border-box;

}

.formurl input[type=button], #formurl input[type=submit]{
    height: 56px;
    padding: 10px 16px;
    font: bold 17px lato,arial;
    color: #fff;
    background-color: #675656;
    text-align: center;
    cursor: pointer;


}


input[type=email], input[type=text], textarea {
    font: 16px "maven pro",arial;
    padding: 10px;
    border-radius: 1px;
    border: 1px solid #b6b6b6;
    box-shadow: 0 1px 4px #0b0000;
    align-content: center;
    height: 55px;
}

.container{
    width: 100%;
    padding: 60px;
    background-color: rgb(62, 1, 1);
    color: #fff;
}

.menu{
    width: 100%;
    padding: 50px;
    background-color: rgb(0, 0, 0);
    color: #fff;
}
  `]
})
export class AppComponent {
  url: string = '';

  encurtarUrl() {
    // Lógica para encurtar a URL
  }
}
