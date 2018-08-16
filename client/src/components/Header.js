import React, { Component } from 'react'
import { Nav, NavBrand, NavUL, NavItemDD, DropDownItem, Collapse, NavButton, NavItem} from '../bs-modules/NavBar'
export default class Header extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            collapse: true,
        }

        this.handleCollapse = this.handleCollapse.bind(this);
    
    }

  

    handleCollapse(e) {
        const collapse = this.state.collapse;
        if (collapse) {
            this.setState({ collapse: false })
            console.log(collapse);

        } else {
            this.setState({ collapse: true })
            console.log(collapse);
        }
    }


    render() {
        const showing = this.state.collapse
        return (
            <Nav>

                <NavBrand url="./images/icon.png" width="40" height="40" title="Always Forward" />
               <NavButton onClick={this.handleCollapse}/>
                <Collapse showing={showing}>
                    <div className="options pull-right">
                        <NavUL>
                            <NavItem link="/videos" icon="fas fa-video" />
                            <NavItemDD link="/home" icon="fas fa-stream">
                               <DropDownItem link="/somehwe" title="ME"/>
                               <DropDownItem link="/somehwe" title="ME"/>
                               <DropDownItem link="/somehwe" title="ME"/>
                               <DropDownItem link="/somehwe" title="ME"/>
                            </NavItemDD>
                            <NavItemDD link="/home" icon="far fa-bell" badge="badge badge-danger notification" notification="4">
                               <DropDownItem link="/somehwe" title="FE"/>
                               <DropDownItem link="/somehwe" title="FE"/>
                               <DropDownItem link="/somehwe" title="FE"/>
                               <DropDownItem link="/somehwe" title="FE"/>
                            </NavItemDD>
                            <NavItem link="/" icon="fas fa-home"/>
                           
                        </NavUL>
                    </div>
                </Collapse>
            </Nav>
        )
    }
}
