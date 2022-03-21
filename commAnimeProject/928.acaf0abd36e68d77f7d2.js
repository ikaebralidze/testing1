"use strict";(self.webpackChunkanime=self.webpackChunkanime||[]).push([[928],{2928:(qe,x,d)=>{d.r(x),d.d(x,{AuthModule:()=>Oe});var f=d(8583),u=d(5987),e=d(3018),w=d(7556),s=d(3679),C=d(3740);function P(t,a){1&t&&(e.TgZ(0,"div",12),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"EMAIL.REQUIRED")," "))}function O(t,a){1&t&&(e.TgZ(0,"div",13),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"PASSWORD.REQUIRED")," "))}function U(t,a){if(1&t&&(e.ynx(0),e.YNc(1,P,3,3,"div",10),e.YNc(2,O,3,3,"div",11),e.BQk()),2&t){e.oxw();const i=e.MAs(2);e.xp6(1),e.Q6J("ngIf",null==i.controls.email||null==i.controls.email.errors?null:i.controls.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.controls.password||null==i.controls.password.errors?null:i.controls.password.errors.required)}}let q=(()=>{class t{constructor(i,n){this.auth=i,this.router=n}signIn({email:i,password:n}){!i||!n||this.auth.signIn({email:i,password:n}).then(()=>this.router.navigate(["content"]))}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(w.e),e.Y36(u.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sign-in"]],decls:20,vars:13,consts:[[1,"my-container"],[3,"ngSubmit"],["form","ngForm"],[1,"form-floating","mb-2"],["type","email","ngModel","","name","email","required","","id","floatingInput","placeholder"," ",1,"form-control"],["for","floatingInput"],["type","password","ngModel","","required","","name","password","id","floatingPassword","placeholder"," ",1,"form-control"],["for","floatingPassword"],["type","submit",1,"w-100","btn","btn-lg","btn-outline-secondary"],[4,"ngIf"],["class","alert alert-danger mt-3 mb-2","role","alert",4,"ngIf"],["class","alert alert-danger mt-1","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger","mt-3","mb-2"],["role","alert",1,"alert","alert-danger","mt-1"]],template:function(i,n){if(1&i){const o=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"form",1,2),e.NdJ("ngSubmit",function(){e.CHM(o);const l=e.MAs(2);return n.signIn(l.value)}),e.TgZ(3,"h1"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"input",4),e.TgZ(8,"label",5),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.qZA(),e.TgZ(11,"div",3),e._UZ(12,"input",6),e.TgZ(13,"label",7),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.qZA(),e.TgZ(16,"button",8),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.YNc(19,U,3,2,"ng-container",9),e.qZA(),e.qZA()}if(2&i){const o=e.MAs(2);e.xp6(4),e.Oqu(e.lcZ(5,5,"SIGNIN")),e.xp6(5),e.Oqu(e.lcZ(10,7,"EMAIL")),e.xp6(5),e.Oqu(e.lcZ(15,9,"PASSWORD")),e.xp6(3),e.hij(" ",e.lcZ(18,11,"SIGNIN")," "),e.xp6(2),e.Q6J("ngIf",o.submitted&&o.invalid)}},directives:[s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,s.Q7,f.O5],pipes:[C.X$],styles:["form[_ngcontent-%COMP%]{margin-top:5%;position:absolute;left:40%;width:20%}h1[_ngcontent-%COMP%]{text-align:center;color:#f0f8ff;font-size:3rem;border-radius:3%;margin-top:5%;margin-bottom:20%}.my-container[_ngcontent-%COMP%]{width:100%;height:80vh;background-image:url(itachi.eafbd56851efe1bde612.jpg);background-repeat:no-repeat;margin:0}"]}),t})(),Q=(()=>{class t{constructor(){this.mustMatch=[]}validate(i){return function(t,a){return i=>{const n=i.controls[t],o=i.controls[a];return!n||!o||o.errors&&!o.errors.mustMatch||o.setErrors(n.value!==o.value?{mustMatch:!0}:null),null}}(this.mustMatch[0],this.mustMatch[1])(i)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","mustMatch",""]],inputs:{mustMatch:"mustMatch"},features:[e._Bn([{provide:s.Cf,useExisting:t,multi:!0}])]}),t})();function z(t,a){1&t&&(e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"EMAIL.REQUIRED")," "))}function G(t,a){1&t&&(e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"PASSWORD.REQUIRED")," "))}function N(t,a){1&t&&(e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"REPPASSWORD.REQUIRED")," "))}function B(t,a){1&t&&(e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"PASSWORD.MASTMATCH")," "))}function J(t,a){if(1&t&&(e.ynx(0),e.YNc(1,z,3,3,"div",14),e.YNc(2,G,3,3,"div",14),e.YNc(3,N,3,3,"div",14),e.YNc(4,B,3,3,"div",14),e.BQk()),2&t){e.oxw();const i=e.MAs(2);e.xp6(1),e.Q6J("ngIf",null==i.controls.email||null==i.controls.email.errors?null:i.controls.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.controls.password||null==i.controls.password.errors?null:i.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.controls.reppassword||null==i.controls.reppassword.errors?null:i.controls.reppassword.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.controls.reppassword||null==i.controls.reppassword.errors?null:i.controls.reppassword.errors.mustMatch)}}const Y=function(){return["password","reppassword"]},$=[{path:"signin",pathMatch:"full",redirectTo:""},{path:"signup",component:(()=>{class t{constructor(i,n){this.auth=i,this.router=n}signUp(i){i.invalid||this.auth.signUp(i.value).then(()=>this.router.navigate(["content"]))}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(w.e),e.Y36(u.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sign-up"]],decls:27,vars:18,consts:[[1,"my-container"],[3,"mustMatch","ngSubmit"],["form","ngForm"],[1,"form-floating"],["type","email","name","email","id","floatingInput","placeholder","name@example.com","ngModel","","required","",1,"form-control"],["for","floatingInput"],["type","password","name","password","id","floatingPassword","placeholder","Password","ngModel","","required","",1,"form-control"],["password","ngModel"],["for","floatingPassword"],["type","password","name","reppassword","id","floatingRepPassword","placeholder","Password","ngModel","","required","",1,"form-control"],["reppassword","ngModel"],["for","floatingRepPassword"],["type","submit",1,"w-100","btn","btn-lg","btn-outline-secondary"],[4,"ngIf"],["class","alert alert-primary","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-primary"]],template:function(i,n){if(1&i){const o=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"form",1,2),e.NdJ("ngSubmit",function(){e.CHM(o);const l=e.MAs(2);return n.signUp(l)}),e.TgZ(3,"h1"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"input",4),e.TgZ(8,"label",5),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.qZA(),e.TgZ(11,"div",3),e._UZ(12,"input",6,7),e.TgZ(14,"label",8),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.qZA(),e.TgZ(17,"div",3),e._UZ(18,"input",9,10),e.TgZ(20,"label",11),e._uU(21),e.ALo(22,"translate"),e.qZA(),e.qZA(),e.TgZ(23,"button",12),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.YNc(26,J,5,4,"ng-container",13),e.qZA(),e.qZA()}if(2&i){const o=e.MAs(2);e.xp6(1),e.Q6J("mustMatch",e.DdM(17,Y)),e.xp6(3),e.Oqu(e.lcZ(5,7,"SIGNUP")),e.xp6(5),e.hij(" ",e.lcZ(10,9,"EMAIL")," "),e.xp6(6),e.hij(" ",e.lcZ(16,11,"PASSWORD")," "),e.xp6(6),e.hij(" ",e.lcZ(22,13,"REPPASSWORD")," "),e.xp6(3),e.hij(" ",e.lcZ(25,15,"SIGNUP")," "),e.xp6(2),e.Q6J("ngIf",o.submitted&&o.invalid)}},directives:[s._Y,s.JL,s.F,Q,s.Fj,s.JJ,s.On,s.Q7,f.O5],pipes:[C.X$],styles:[".my-container[_ngcontent-%COMP%]{width:100%;height:80vh;background-image:url(itachi.eafbd56851efe1bde612.jpg);background-repeat:no-repeat;margin:0}form[_ngcontent-%COMP%]{margin-top:5%;position:absolute;left:40%;width:20%}h1[_ngcontent-%COMP%]{text-align:center;color:#f0f8ff;font-size:3rem;margin-bottom:20%}.form-floating[_ngcontent-%COMP%]{margin-top:-1px}.form-signin[_ngcontent-%COMP%]{width:20%;max-width:330px;padding:15px}.btn[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;color:#f0f8ff}.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{font-weight:400}.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within{z-index:2}.form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}"]}),t})()},{path:"",component:q}];let W=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild($)],u.Bz]}),t})();var j=d(4466),F=d(9578),h=d(2458);d(9490),d(9765),d(6682),d(8891),d(9796),d(9105),d(8002),d(9761),d(6782),d(5257),d(7238),d(6237),d(946),d(521);let Pe=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.ez,h.BQ,F.Q8],h.BQ]}),t})(),Oe=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.ez,W,Pe,j.m,s.u5]]}),t})()}}]);