import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {

  loginService = inject(LoginService)

  loginForm = new FormGroup({
    nome: new FormControl<string>('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    senha: new FormControl('', Validators.required),
  });

  async login() {
    const {nome, senha} = this.loginForm.value;
    if (this.loginForm.valid && nome && senha) {
      await this.loginService.fazerLogin(nome, senha);
      this.loginForm.reset();
    }
  }
}
