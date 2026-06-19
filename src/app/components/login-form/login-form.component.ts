import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginService = inject(LoginService);
  spinnerAguardando = false;
  mensagemErro = '';

  loginForm = new FormGroup({
    nome: new FormControl<string>('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    senha: new FormControl('', Validators.required),
  });

  async login() {
    const { nome, senha } = this.loginForm.value;

    if (this.loginForm.valid && nome && senha) {
      try {
        this.spinnerAguardando = true;
        await firstValueFrom(this.loginService.fazerLogin(nome, senha));
        alert('Login Efetuado com Sucesso! ' + `Bem vindo, ${nome}!`);
        this.loginForm.reset();
      } catch (error: any) {
        if (error.status === 401) {
          this.mensagemErro = 'Usuário ou Senha incorreto!';
        } else if (error.status === 500 || error.status === 0) {
          this.mensagemErro =
            'Não foi possível se comunicar ao servidor, tente mais tarde!';
        } else {
          this.mensagemErro = 'Erro ao realizar login, tente mais tarde' + error.status + ' ' + error.message;
        }
      } finally {
        this.spinnerAguardando = false;
      }
    } else {
      this.mensagemErro = 'reveja os campos e tente novamente!';
    }
  }
}
