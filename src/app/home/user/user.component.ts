import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';
import { AngularFirestore } from '@angular/fire/firestore'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  foto: any=[];
  constructor(
    public dialog: MatDialog,
    public firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
  this.getFoto();
  }
  getFoto(){
    this.firestore.collection('photo').valueChanges().subscribe(res =>{
      this.foto = res
    })
  }
  tambahdata(){
    const dialogRef = this.dialog.open(UploadComponent,{
      width: '550px',
    });
  }
  user = [
    {img:"assets/wdh.png"}
  ]
}
