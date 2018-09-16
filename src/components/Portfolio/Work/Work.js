import React, {Component} from 'react';
import './Work.css'

class Work extends Component {
    render() {
        return (
            <div id="project" className="project">
                <img src={this.props.image} alt={this.props.alt} />
                <div className="projectoverlay">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.tech}</p>
                    <div id="learnmore" className="learnmore">Learn More</div>
                </div>
            </div>
        )
    }
}

export default Work;