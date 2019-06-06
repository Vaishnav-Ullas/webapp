import React from 'react';
import './graph.css';

class Graph extends React.Component {
  constructor(props)
    {
      super(props);
  this.state = {
    Numbers: [
      {
        Number: '5'
      },
      {
        Number: '5'
      },
      {
        Number: '5'
      },
      {
        Number: '5'
      },
      {
        Number: '5'
      }
    ],
    isRendered : false
  }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
  }

  handleChange1 = event => {
    var x=this.state.Numbers;
    x[0].Number=event.target.value
    this.setState({
      Numbers : x
    });
  };
  handleChange2 = event => {
    var x=this.state.Numbers;
    x[1].Number=event.target.value
    this.setState({
      Numbers : x
    });
  };
  handleChange3 = event => {
    var x=this.state.Numbers;
    x[2].Number=event.target.value
    this.setState({
      Numbers : x
    });
  };
  handleChange4 = event => {
    var x=this.state.Numbers;
    x[3].Number=event.target.value
    this.setState({
      Numbers : x
    });
  };
  handleChange5 = event => {
    var x=this.state.Numbers;
    x[4].Number=event.target.value
    this.setState({
      Numbers : x
    });
  };
    renderLines() {
        return Array(10).fill(null).map((el, i) => (
          <Line 
            left={i * 10} 
            key={i}
          />
        ))
      }

    renderBars() {
      const  num  = this.state.Numbers;

      return num.map((Numbers) => {
        const percent = (Numbers.Number/ 20) * 100; 
        return (
          <Bar 
            percent={percent}
            key={Numbers.Numbers}
          />
        )
      });
    }

      render() {
        var x;
        if(this.state.isRendered){
          x=<div className="graph-wrapper">
             <h2> Number Graph </h2> 
            
            <div className="graph">
              { <BarTextContent Num={this.state.Numbers} /> }
              
              <div className="bar-lines-container">
                { this.renderLines() }
                { this.renderBars() }
              </div>
              
              <div style={{ width: '12%' }} />
              <Markers />      
            </div>
            
          </div>
        }
        else{
            x=<div className="graph-wrapper">
            <div className="slidecontainer">
              <form>
                <label>
                  Number 1:
                  <input type="range" min="5" value={this.state.Numbers[0].Number} max="20" onChange={this.handleChange1} className="slider" />
                  Value:{this.state.Numbers[0].Number}
                </label>
                <br></br>
                <label>
                  Number 2:
                  <input type="range" min="5" max="20" value={this.state.Numbers[1].Number} onChange={this.handleChange2} className="slider" />
                  Value:{this.state.Numbers[1].Number}
                </label>
                <br></br>
                <label>
                  Number 3:
                  <input type="range" min="5" max="20" value={this.state.Numbers[2].Number} onChange={this.handleChange3} className="slider" />
                  Value:{this.state.Numbers[2].Number}
                </label>
                <br></br>
                <label>
                  Number 4:
                  <input type="range" min="5" max="20" value={this.state.Numbers[3].Number} onChange={this.handleChange4} className="slider" />
                  Value:{this.state.Numbers[3].Number}
                </label>
                <br></br>
                <label>
                  Number 5:
                  <input type="range" min="5" max="20" value={this.state.Numbers[4].Number} onChange={this.handleChange5} className="slider" />
                  Value:{this.state.Numbers[4].Number}
                </label>
                <br></br>
                <button type="button" className="button" onClick={()=>this.setState({isRendered : true})}>Sumbit</button>
              </form>
              </div>
              </div>
        }
        return (
          
         <div> 
         {x}
         </div>
         

        )
      }
    }
    const Markers = () => {
      const markerArr = Array(11).fill(null);
      
      return (
        <div className="markers">
          {
            markerArr.map((el, i) => (
             <span className="marker" style={{ left: `${i * 10}%` }}>
              { i * 2 }
             </span>
            ))
          }
        </div>
      )
    }
    
    const Bar = ({ percent }) => {
      return (
        <div className="bar" style={{ width: `${percent}%` }} />
      )
    }
    
    const BarTextContent = ({ Num }) => {
      return (
        <div className="bar-text-content">
          {
            Num.map((Num) => (
              <div className="text">
                {Num.Number }
              </div>
            ))
          }
        </div>
      )
    }
    
    const Line = ({ left }) => {
      return (
        <div 
          className="line" 
          style={{ left: `${left}%` }}
        />
      )  
    
    
}
export default Graph;