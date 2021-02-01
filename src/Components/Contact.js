import React from 'react';
import emailjs from 'emailjs-com';
import {
  MailOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';


export default function ContactUs() {
 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3cytuye', 'template_w9yxpqt', e.target, 'user_O6cIVJD4XA6JetKZIz9HH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

        return (

            <div   style={{paddingTop : '10%', paddingBottom : '8%'}} align={'center'}>
                <h1> <MailOutlined /> {'    '}A CONTACT MESSAGE</h1>
                <form className="contactForm" onSubmit={sendEmail} style={{paddingTop : '5%', paddingBottom : '2%'}}>
                              <div style={{width: '50%', overflow: 'hidden'}}>
                                  <div style={{width: '5%', float: 'left'}}>
                    <label style={{ color : '#ffffff', font: '2px'}}>Name*</label></div><div>
                                  <input type="text" name="name" style={{width : '80%', color : '#000000', paddingRight : '20px'}}/></div></div>

                    <div style={{width: '50%', overflow: 'hidden',paddingTop : '2%'}}>
                                  <div style={{width: '5%', float: 'left'}}>
                    <label style={{ color : '#ffffff'}}>Email*</label></div><div>
                    <input type="email" name="email" style={{width : '80%' , color : '#000000'}}/></div></div>
                    <div style={{width: '50%', overflow: 'hidden',paddingTop : '2%'}}>
                                  <div style={{width: '5%', float: 'left'}}>
                    <label style={{ color : '#ffffff' }}>Message*</label></div><div>
                    <textarea name="feedback" style={{width : '80%', color : '#000000', paddingBottom : '2%'}}/></div></div>
                    <input  type="submit" value="Send" />

                </form>
            </div>
        );

}
