import React, { Component } from 'react';
import { Card } from 'antd';
import { Divider } from 'antd';


class Portfolio extends Component {


  render() {
      const mystyle = {
          width: 600,
          padding:30,
          background: '#ffffff'
      }
      const gridStyle = {
          width: '25%',
          textAlign: 'center',
        };

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+ projects.image;
        return <div className="site-card-border-less-wrapper">
           <Card  style={mystyle} bordered={true}>
                <Divider dashed > <br /> </Divider>
               <p>
               <h5>{projects.title}</h5>
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
                </a></p>
        </Card>

        </div>
      })
    }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div >
                {projects}

            </div>
          </div>
      </div>
   </section>
    );
  }
}
export default Portfolio;
