import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from 'react-grid-layout';
/*import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';*/
import './grid-layout.css';

function App() {

  var layout = [
    {i: 'kadaipaneer', x: 0, y: 0, w: 1, h: 2, static: false},
    {i: 'cutleryset', x: 0, y: 0, w: 1, h: 2, minW:1, maxW: 1},
    {i: 'curd', x: 0, y: 0, w:1, h: 2},
    {i: 'rice', x: 0, y: 0, w:1, h: 2},
    {i: 'pickle', x: 0, y: 0, w:1, h: 2}

  ];

  return ( 
    <div>   
      <GridLayout className="layout foodplate" layout={layout} cols={10} rowHeight={20} width={1000}>
        <div key="kadaipaneer" className="kadaipaneer">Kadai Paneer</div>
        <div key="cutleryset">Cutlery set</div>
        <div key="curd">Curd</div>   
        <div key="rice">rice</div>   
        <div key="pickle">Pickle</div>     
      </GridLayout >  
          

    </div>     
  );
}

export default App;
