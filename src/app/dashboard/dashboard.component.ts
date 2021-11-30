import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 filterTerm!: string;


 pdfs = [
   {name: "umer",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf4.pdf"},
   {name: "noraiz",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/DilawarHussain.pdf"},
   {name: "usman",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf1.pdf"},
   {name: "ammar",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf2.pdf"},
   {name: "salman",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf3.pdf"},
   {name: "umer",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf4.pdf"},
   {name: "noraiz",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf5.pdf"},
   {name: "usman",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf1.pdf"},
   {name: "ammar",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf3.pdf"},
   {name: "salman",  code: "1212", price:"2121", checked: false, disabled: true, fileUrl: "assets/pdf2.pdf"},

 ];
 
 constructor(private sanitise: DomSanitizer) { }
 
 ngOnInit() {
 }
 
   checkAllCheckBox(ev: any) {
   this.pdfs.forEach(x => x.checked = ev.target.checked);

 }

 isAllCheckBoxChecked() {
   return this.pdfs.every(p => p.checked);
 }

 fileUrl = "";
 openFilePreview (index: number) {
     this.fileUrl = this.pdfs[index].fileUrl;
 }
 cleanUrl(url: any){
   return this.sanitise.bypassSecurityTrustResourceUrl(url);
 }


}
