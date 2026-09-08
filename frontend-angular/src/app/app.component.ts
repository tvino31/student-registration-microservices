import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding:20px">
      <h2>Students (Angular)</h2>
      <ul>
        <li *ngFor="let s of students">{{s.name}} ({{s.email}})</li>
      </ul>

      <h3>Register</h3>
      <form (ngSubmit)="create()">
        <div><input [(ngModel)]="model.name" name="name" placeholder="name" /></div>
        <div><input [(ngModel)]="model.email" name="email" placeholder="email" /></div>
        <div><input [(ngModel)]="model.dob" name="dob" placeholder="YYYY-MM-DD" /></div>
        <button type="submit">Create</button>
      </form>
    </div>
  `
})
export class AppComponent {
  students: any[] = [];
  model: any = {name:'', email:'', dob:''};

  constructor() { this.load(); }

  async load(){
    try{
      const res = await fetch('/api/students');
      this.students = await res.json();
    }catch(e){}
  }

  async create(){
    const res = await fetch('/api/students', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(this.model)});
    const created = await res.json();
    this.students.push(created);
    this.model = {name:'',email:'',dob:''};
  }
}
