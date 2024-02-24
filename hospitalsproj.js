//creating a class which stores or directs the information for hospitals and their infras.
//user inputs name of hospital
//SEO directs the input to the class
//The return gives an information of the services available.
//Here, a user checks a hospital.
//Being unsatisfied with the results, searches another hospital and gets a dive into a further account.
//Finally decides.

class Hospitals {
    constructor(name, doctors, nurses, patients, beds, beds_available, ambulance_nos, emergency) {
      this.name = name;
      this.doctors = doctors;
      this.nurses = nurses;
      this.patients = patients;
      this.beds = beds;
      this.beds_available = beds_available;
      this.ambulance_nos = ambulance_nos;
      this.emergency = emergency;
    }
    available_beds() {
      console.log(this.name + ' has ' + this.beds_available + ' beds available at this moment.');
    }
  
    ambulance() {
      console.log(this.name + ' has ' + this.ambulance_nos + ' ambulance available.');
    }
  
    emergency_service(){
      console.log(this.name + ' has emergency services ' + this.emergency + '.');
    }
  }
  
  let AMRI = new Hospitals('AMRI', 50, 150, 200, 250, 45, 10, 'AVAILABLE');
  let CMRI = new Hospitals('CMRI', 115, 225, 351, 400, 45, 50, 'AVAILABLE');
  let KOTHARI = new Hospitals('KOTHARI', 75, 135, 269, 300, 31, 15, 'NOT AVAILABLE');
  let FORTIS = new Hospitals('FORTIS', 35, 55, 69, 85, 15, 5, 'AVAILABLE');
  let GLENEAGLES = new Hospitals('GLENEAGLES', 75, 124, 128, 150, 20, 20, 'AVAILABLE');
  
  
  KOTHARI.emergency_service();
  
  CMRI.available_beds();
  CMRI.ambulance();
  CMRI.emergency_service();