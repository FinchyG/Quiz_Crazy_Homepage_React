import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

export class Difficulty_Select extends React.Component {
    render() {
        return (
            <p>{ this.props.difficulty }</p>
        );
    }
}