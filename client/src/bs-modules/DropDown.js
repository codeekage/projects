import React, { Component } from 'react'

export default class DropDown extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    showMenu(e){
        e.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(e){
        if(!this.dropdownMenu.contains(e.target)){
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            })
        }
    }



    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Show menu
        </button>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button> Menu item 1 </button>
                                <button> Menu item 2 </button>
                                <button> Menu item 3 </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}
