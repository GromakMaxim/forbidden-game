import {Component} from "react";

export default class Hexagon extends Component {

    clickHandle(event, id){
        this.props.selectHex(event, id)
    }

    render() {
        let id = "x" + this.props.x + "y" + this.props.y;
        let classname = "cell hex x" + this.props.x + " y" + this.props.y + " col" + this.props.col;

        if (id === this.props.activeHex){
            classname = classname + " selected";
        }


        return (
            <div
                className={classname}
                id={id}
                onClick={e=>this.clickHandle(e, id)}>
            </div>
        );
    }
}
