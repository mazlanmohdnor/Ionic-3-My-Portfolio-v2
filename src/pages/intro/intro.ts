import { WorkPage } from './../work/work';
import { SeminarPage } from './../seminar/seminar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {


  // public info = new Array();
  public info = {
    "fullname": "Mohd Mazlan Bin Mohd Nor",
    "dob": "17 MEI 1992",
    "ic": "920517-10-5553",
    "gender": "Male",
    "race": "Malay",
    "religion": "Islam",
    "nationality": "Malaysia",
    "status": "Single",
    "language": "Bahasa, English",
    "email": "mazlan04@gmail.com",
    "phone": "0196749632",
    "address": {
      "street": "No 2 Lot 657 Jalan Bukit Rotan",
      "street2": "Batu 1 45000 Kuala Selangor"
    },

    "education": {
      "Bachelor": {
        "title": "Bachelor in Computer Science",
        "place": "Universiti Putra Malaysia (UPM)",
        "major": "Software Engineering",
        "year": "2018",
        "cgpa": "3.xx"
      },
      "Diploma": {
        "title": "Diploma in Programming",
        "place": "Politeknik Sultan Idris Shah (PSIS)",
        "year": "2013",
        "cgpa": "3.xxx"
      },
      "SPM": {
        "title": "Sijil Pelajaran Malaysia",
        "place": "Sek. Men. Keb. Sultan Abdul Aziz Kuala Selangor",
        "year": "2009"
      }
    },
    "seminar": [{
      "title": "Mobile App Development Crash Course (Phonegap)",
      "conduct": "Conducted by Alumni of Computer Science UPM",
      "date": "26 November 2016",
      "img": "assets/phonegap.png"
    },
    {
      "title": "AWS Internet of Things Course (Hilti IOT Competition Program 2017)",
      "conduct": "Conducted by Hilti Instructor",
      "date": "19 November 2016",
      "img": "assets/hilti.jpeg"
    },
    {
      "title": "Joomla 3.0 Crash Course",
      "conduct": "Conducted by Caspian Technology.",
      "date": "23 January 2016",
      "img": "assets/joomla.jpg"
    },
    {
      "title": "Bootstrap Studio Training",
      "conduct": "Conducted by Nasrul Hazim from Cleanique Coders Resources",
      "date": "16 Januari 2016",
      "img": "assets/bootstrap.jpg"
    },
    {
      "title": "Certified in Industrial Level Java Web-Based Application",
      "conduct": "Conducted by MIMOS BHD",
      "date": "",
      "img": "assets/mimos.jpeg"
    },
    {
      "title": "ComTIA A+ Certified CE.",
      "conduct": "",
      "date": "",
      "img": "assets/comptia.jpg"
    }
    ],
    "knowledge": {
      "computer": "C++ Programming, .Net Programming, Java Programming, Web Programming (HTML5, CSS, Javascript, PHP, JSP, MYSQL) including CMS like Wordpress, Joomla and Opencart. Familiar with Bootstrap framework and hybrid mobile app using Ionic Framework, Angular, React Native, Oracle Database, Rational CASE Tool, Adobe  Suite (Graphic & Audio) and Wireframe Tools",
      "personal": "Strive to consistently exceed expectations, remain cool under pressure, team player and multitasker, high energy level, self and highly motivated, commited to perfection, hardworking and can work in team."
    },
    "experience": [{
      "company": "Galeri Ilmu SDN BHD",
      "job": "Web Developer",
      "date": "2013-2014",
      "place": "Kota Damansara",
      "responsibility": [
        "Mantained and customized e-commerce website using opencart.",
        "Developed a back-end application that centralized book`s information so that every departments could access.",
        "Proposed and redesigned network topology of the company."
      ],
      "img": "assets/galeri.JPG"
    },
    {
      "company": "INPENS International College",
      "job": "Programmer",
      "date": "xxx",
      "place": "Kuala Selangor",
      "responsibility": ["Maintained college`s website"],
      "img": "assets/inpens.jpg"
    }
    ],
    "achievement": [
      "Semi Finalist on HILTI IOT Competition 2017",
      "GOLD Winner in 6th Human Computer Interaction Day (HCI Day 2016)",
      "Finalist in Final Year Project Competition Politeknik Sultan Idris Shah"
    ],
    "interest": [
      "Exploring new programming languages such as Angular, React Native, Ionic and many latest technology trends",
      "Following the latest trends and eager to participate in any continuing education opportunities that are available.",
      "Sharing knowledge by making a YouTube video on programming and help others on stakeoverflow.com"
    ],
    "references": [{
      "name": "Profesor Madya Masrah Azrifah Binti Azmi Murad",
      "title": "Academic Advisor",
      "department": "Department of Software Engineering and Information System",
      "uni": "University Putra Malaysia, Serdang, Selangor",
      "tel": "0389471739",
      "email": "masrah@upm.edu.my"
    },
    {
      "name": "Pn Norakma Bt. Nadzari",
      "title": "Academic Advisor",
      "department": "Department of Information Technology and Communication",
      "uni": "Politeknik Sultan Idris Shah, Sabak Bernam, Selangor",
      "tel": "019-3886583",
      "email": ""
    }
    ]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // let localData = http.get('assets/resume.json')
    //   .map(res => res.json());
    // // .map(res => res.details);
    // localData.subscribe(data => {
    //   console.log(data.fullname);
    //   this.info = data;

    //   console.log(this.info);
    // })

  }
  //navigate to SeminarPage
  goSeminar(info) {
    this.navCtrl.push(SeminarPage, {
      'info': this.info
    });
  }

  //navigate to WorkPage
  goWork(info) {
    this.navCtrl.push(WorkPage, {
      'info': this.info
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
