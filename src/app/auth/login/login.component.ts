import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:any ={};
  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit(): void {
}

login(){
  this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(result=>{
    if(result){
      this.router.navigate(['/user']);
    }
  }).catch(err=>{
    alert("login gagal");
  });
}
}
