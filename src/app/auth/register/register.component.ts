import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user: any = {};
  constructor(
    public router: Router,
    public auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }
  register(){
    this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((result:any)=>{
    alert("register berhasil");
    }).catch(err=>{
    alert("register gagal");
    })
  }
}
