import { Component,  OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }
  
  userModel = new User ();

  menssagem = ""

  receberDados() {this.loginService.login (this.userModel).subscribe({next:(response) => {
     //creating a blacklist     
    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "--", "#","\"", ";", "\'", "*"]
      listaPalavras.forEach(palavra => {
        if(this.userModel.email?.toLowerCase().includes(palavra)) {
          this.menssagem = "Dados inválidos" + palavra
          
          return;
        }
      })
    
    console.log('Acesso garantido')
      alert('Você irá para página principal GameMania.Boas Compras')
      console.log(this.userModel)
     
      this.router.navigateByUrl('/main')
  }, error:(erro) => {
    
    if (erro.error == "Email and password are required") {
      this.menssagem = "Email e senha são obrigatórios"
    } else if (erro.error == "Email format is invalid") {
       this.menssagem = "Formato de Email inválido" 
    }else if (erro.error =="Cannot find user" ) {
      this.menssagem = "Usuário não Cadastrado"
    } else if (erro.error == "Password is too short") {
      this.menssagem = "Senha inválida"
    }else {
      this.menssagem = erro.error;
    }
  },
     
    complete: () => console.log('completed')

    })
    

  }
  
}


