let nodemailer = require('nodemailer');
module.exports = {

  contactmail: (data) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'thebeirutblends360@gmail.com',
        pass: 'beirut@360'
      }
    });
    var mailOptions = {
      from: 'thebeirutblends360@gmail.com',
      to: 'contacttb95@gmail.com',
      subject: data.subject,
      html: '<center><h1>FEEDBACK</h1></center>' + '<h4>Name :' + data.name + "</h4>" + '<h4>Email-id :' + data.email + '</h4><h4>Message :</h4><h5>' + data.message + '</h5>'
    };
    var responseDetails = {
      from: 'contacttb95@gmail.com',
      to: data.email,
      subject: "Greetings",
      html: '<center><h1>THANK YOU!</h1></center>' + '<h3>Hi,' + data.name + '</h3>' + '<h4>Thank you for contacting us.</h4>' + '<h5>We appreciate your feedback. Please feel free reach us with any further comments, concerns, or suggestions you wish to share.</h5>' + '<h4>Warmest regards</h4>' + '<h4>Owner,</h4>' + '<h4>The Beirut Blends</h4>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        transporter.sendMail(responseDetails,function(error,info){
          if(error){
            console.log(error)
          }
          else{
            console.log("Responsemail also sent"+info.response)
          }

        })
        console.log('Email sent: ' + info.response);
      }
    });
  },
  reservationMail:(data)=>{

    var transporterA = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'thebeirutblends360@gmail.com',
        pass: 'beirut@360'
      }
    });
    var transporterB = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'contacttb95@gmail.com',
        pass: 'beirut@360'
      }
    });
   
    var userMail={
      from:'thebeirutblends360@gmail.com',
      to:data.email,
      subject:"Reservation confirmed",
      html:'<center><h1>CONFIRMED!</h1></center>'+'</h4>Hello'+data.name+'<h5>Your booking ID is</h5><h1>'+data.bookID+'</h1></h4><p>Thank you for booking with us. We would like to let you know that The Beirut blends has received your order, and is preparing it for your need. If you would like to make any changes to it, please visit Your Orders on thebeirutblends.com</p>'
    }
    var adminMail={
      from:'contacttb95@gmail.com',
      to:'thebeirutblends360@gmail.com',
      subject:"New Reservation",
      html:'<center><h1>NEW RESERVATION</h1></center>'+'<h4>Demo message</h4>'
    }
    transporterA.sendMail(userMail,function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
    transporterB.sendMail(adminMail,function(error,info){
      if(error){
        console.log(error)
      }
      else{
        console.log("Responsemail also sent"+info.response)
      }

    })

  },
  deleteMail:(data)=>{

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'thebeirutblends360@gmail.com',
        pass: 'beirut@360'
      }
    });
    var details={
      from:'thebeirutblends360@gmail.com',
      to:data.email,
      subject:"Cancellation",
      html:'<center><h1>RESERVATION CANCELLED!</h1></center><h4>Hi, '+data.name+'</h4><h5>We are sad to hear that you would like to cancel your booking with us. As much as we would like your continued patronage, we respect your decision to cease your agreement.<br>Should you have any questions regarding our services, feel free to check our  website.</h5><h4>Sincerely<br>The Beirut Blends,Thiruvalla</h4>'
    }
    transporter.sendMail(details,(error,info)=>{
      if(error){
        console.log(error)
      }
      else{
        console.log("Cancelmail sent successfully"+info.response)
      }
    })
  }
}










