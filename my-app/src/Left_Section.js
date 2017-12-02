import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import { Subject_Select } from './Subject_Select';
import { Difficulty_Select } from './Difficulty_Select';
import { Quiz_Select } from './Quiz_Select';

export class Left_Section extends React.Component {
    render() {
        return (
        <div className="Left_Section">

          <Subject_Select title="General Knowledge" />

            <Difficulty_Select difficulty="Easy" />
              <Quiz_Select />
          
            <Difficulty_Select difficulty="Intermediate" />
              <Quiz_Select />
          
            <Difficulty_Select difficulty="Hard" />
             <Quiz_Select />
          
          <Subject_Select title="Entertainment" />

            <Difficulty_Select difficulty="Easy" />
              <Quiz_Select />
          
            <Difficulty_Select difficulty="Intermediate" />
              <Quiz_Select />
            
            <Difficulty_Select difficulty="Hard" />
              <Quiz_Select />
            
            <Subject_Select title="Sport" />

            <Difficulty_Select difficulty="Easy" />
              <Quiz_Select />
            
            <Difficulty_Select difficulty="Intermediate" />
              <Quiz_Select />
            
            <Difficulty_Select difficulty="Hard" />
              <Quiz_Select />
        
        </div>
        );
    }
}