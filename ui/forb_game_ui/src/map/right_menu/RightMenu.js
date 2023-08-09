import {Component} from "react";
import './css/right_menu.css';

export default class RightMenu extends Component{
    render() {
        let classes = "container right_menu";
        if (this.props.opened) classes = classes + " opened";
        return (
            <div className={classes}>

            </div>
        );
    }
}
