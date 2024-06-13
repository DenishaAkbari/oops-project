let sn = document.querySelector(".sn");
let fn = document.querySelector(".fn");
let pn = document.querySelector(".pn");
class School {
    constructor(name, email, contact){

        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    student(){
        sn.innerHTML = this.name + "<br>" + this.email + "<br>" + this.contact + "<br>";
    }
    faclty(){
        fn.innerHTML = this.name + "<br>" + this.email + "<br>" + this.contact + "<br>";
    }
    peon(){
        pn.innerHTML = this.name + "<br>" + this.email + "<br>" + this.contact + "<br>";
    }
}
let s1 = new School ("ravi", "ravipatel@gmail.com" , "8536975234");
s1.student();
let s2 = new School ("rakesh", "rakeshahir@gmail.com" , "75963215412");
s2.faclty();
let s3 = new School ("rakesh", "rakeshahir@gmail.com" , "75963215412");
s2.peon();


