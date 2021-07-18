import React, { Component } from 'react';

/*<p>
<a onClick={this.getNetbeans} className="button"><i className="fa fa-download"></i>Download NetbeansJava</a>
</p>
*/
class About extends Component {
  getResume = () => {
   fetch('http://localhost:2000/resume/', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
   }).then(data => console.log(data))
   window.open('http://localhost:3000/resume/');
  }
  getNetbeans = () => {
   fetch('http://localhost:2000/netbeans/', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
   }).then(data => console.log(data))
   window.open('http://localhost:2000/netbeans/');
  }
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="momodev Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a /*onClick={this.getResume}*/ className="button" href="http://localhost:3000/index.html" download><i className="fa fa-download"></i>Download Resume</a>
                  </p>

               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
