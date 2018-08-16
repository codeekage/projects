import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white b-shadow">
                {this.props.children}
            </nav>
        )
    }
}

class NavBrand extends Component {
    render() {
        return (
            <a className="navbar-brand" href={this.props.link}>
                <img
                    src={this.props.url}
                    width={this.props.width}
                    height={this.props.height}
                    className="d-inline-block align-top"
                    alt={this.props.alt} />
                {this.props.title}
            </a>
        )
    }
}

class NavButton extends Component {
    render() {
        return (
            <button className="navbar-toggler" type="button" onClick={this.props.onClick}>
                <span className="navbar-toggler-icon"></span>
            </button>
        )
    }
}

class Collapse extends Component {
    render() {
        const collapse = this.props.showing;
        if (collapse) {
            return (

                <div className="collapse navbar-collapse justify-content-right" id="navbarSupportedContent">
                    {this.props.children}
                </div>
            )
        }
        return (

            <div className="navbar-collapse justify-content-right" id="navbarSupportedContent">
                {this.props.children}
            </div>
        )



    }
}

class NavUL extends Component {
    render() {
        return (
          
                <ul className="navbar-nav pull-right">
                    {this.props.children}
                </ul>
          
        )
    }
}

class NavItem extends Component {
    render() {
        return (
            <li className="navbar-item" >
                <Link to={this.props.link} className="nav-link btn btn-rounded btn-sm btn-outline-primary">
                    <span className="fnt-1">
                        <i className={this.props.icon}></i>
                    </span>
                    {this.props.title}
                </Link>
                {this.props.children}
            </li>
        )
    }
}



class NavItemDD extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    showMenu(e) {
        e.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(e) {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            })
        }
    }


    render() {
        return (
            <li className="navbar-item dropdown justify-content-center">
                <Link to={this.props.link} className="nav-link btn btn-rounded btn-sm btn-outline-primary" onClick={this.showMenu} >
                    <span className="fnt-1">
                        <i className={this.props.icon}></i>
                        <span className={this.props.badge}>{this.props.notification}</span>
                    </span>
                    {this.props.title}
                </Link>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="dropdownMenu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                              {this.props.children}
                            </div>
                        )
                        : (
                            null
                        )
                }
            </li>
        )
    }
}


const DropDownItem = (props) => {
    return (
        <Link className="dropdown-item" to={props.link}>{props.title}</Link>
    )
}


export { NavButton, Nav, Collapse, NavBrand, NavItem, NavUL, DropDownItem, NavItemDD }