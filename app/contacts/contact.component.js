System.register(["angular2/core"],function(t){var e,n,o=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,l=3>i?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(l=(3>i?a(l):i>3?a(e,n,l):a(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},a=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t}],execute:function(){n=function(){function t(){this.contact={}}return t=o([e.Component({selector:"contact",template:'\n        <div>\n            <label for="">First name</label>\n            <input [(ngModel)]="contact.firstName" type="text">\n        </div>\n        <div>\n            <label for="">Last name</label>\n            <input [(ngModel)]="contact.lastName" type="text">\n        </div>\n        <div>\n            <label for="">Phone</label>\n            <input [(ngModel)]="contact.phone" type="text">\n        </div>\n        <div>\n            <label for="">Email</label>\n            <input [(ngModel)]="contact.email" type="text">\n        </div>\n    ',inputs:["contact"],styles:["\n        label {\n            display: inline-block;\n            width: 140px;\n        }\n        input {\n            width: 250px;\n        }\n    "]}),a("design:paramtypes",[])],t)}(),t("ContactComponent",n)}}});