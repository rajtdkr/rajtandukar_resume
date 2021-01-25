import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
    this.state = {
         feedback: '', name: 'Name', email: 'email@example.com'
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

    handleSubmit (event) {
	const templateId = 'template_id';
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }
  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'rajtdkr@gmail.com', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    if(this.props.data){
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>
         <div className="row">
            <div className="twelve columns">
               <form  classname="contactForm" >
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"  onChange={this.handleChange}/>
                  </div>
                  <div>
                     <button value="Submit" onClick={this.handleSubmit}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

                   <div id="message-warning"> Error boy</div>
                           <div id="message-success">
                          <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                           </div>
                   </div>
      </div>
   </section>
    );
  }

    handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit() {
  }
}


export default Contact;
