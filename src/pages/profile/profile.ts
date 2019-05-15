import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpProvider } from '../../providers/http/http';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private image:any;
  private picha:string
  private name:any;
  private memberNo:any;
  private memberPhone:any;

  constructor(
    private storage: Storage,
    private http:HttpProvider,
    private camera:Camera,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.storage.get('memberData').then((data) => {
      console.log("MEMBER DATA:",data)
      this.name = data['MB.CUST.NAME..................'].toUpperCase()
      this.memberNo = data['MB.CUST.NO']
      this.memberPhone = data['MB.CELL.NO..']
    })
  }



	onChange(){
		var imgprof;
		var img;
		imgprof = document.getElementById("image");
		img=imgprof.files[0];

		var hidden = document.getElementById("fileDisplayArea");

		
		var reader = new FileReader()
		
		reader.onloadend=()=>{

			hidden.innerHTML="";			
			var img = new Image()
			img.src =  reader.result;
			hidden.appendChild(img).setAttribute("id","picha")			

		}
		reader.readAsDataURL(img);
  }
  
  onAdd() {
    this.picha = document.getElementById("picha").getAttribute("src")
    let profile = {
      image:this.image
    }

    this.http.uploadImage({
      image:this.image,
      membernumber:this.memberNo
    }).then(() => {
      // HANDLE SERVER FEEDBAK
    })
  }



  // call address details modal
  callModal() {
    let modal = this.modalCtrl.create('UpdateProfilePage');
    modal.present();
  } 

    // change Image
  base64Image='assets/img/profile.png';
  accessGallery(){ 
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

    // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

} 
 