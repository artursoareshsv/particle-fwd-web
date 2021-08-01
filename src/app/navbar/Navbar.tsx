import React from "react";

export class Navbar extends React.Component<{ title: string, color: string, close?: () => void }> {
    render() {
        return (
            <nav className={`navbar fixed-top ${this.props.color}`}>
                <div className="container-fluid justify-content-center">
                    <span className="navbar-brand">
                        {this.props?.title}
                    </span>

                    <button type="button" className="btn-close btn-close-white" aria-label="Close" hidden={!this.props.close} onClick={() => this.props.close ? this.props?.close() : null}></button>
                </div>
            </nav >
        );
    }
}