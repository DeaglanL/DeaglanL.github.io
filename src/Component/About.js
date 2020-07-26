import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
        var name = this.props.data.name;
      }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="https://scontent.fbhx2-1.fna.fbcdn.net/v/t1.0-9/45066140_10155870900733803_1412322264971476992_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=Psj1bB6bzHYAX88Vcq9&_nc_ht=scontent.fbhx2-1.fna&oh=7084ef9b6ccb680bb497f8fca595edf7&oe=5F42515F" alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>"Deaglan is cool and good at programming"</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>[name]</span><br />
						   <span>{}<br />
						         
                   </span><br />
						   <span>{}</span><br />
                     <span>{}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                  {/*<a href={} className="button"><i className="fa fa-download"></i>Download Resume</a>--->*/}
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
