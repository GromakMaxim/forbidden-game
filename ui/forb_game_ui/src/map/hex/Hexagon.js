import {Component} from "react";

export default class Hexagon extends Component {
    render() {
        let classname = "cell hex x" + this.props.x + " y" + this.props.y + " col"+this.props.col
        return (
            <div className={classname}>
                <div>{this.props.x} : {this.props.y} <br/>col{this.props.col}</div>
            </div>
        );
    }
}
