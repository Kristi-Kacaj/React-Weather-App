import React, {Component} from 'react' ;
import {Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state={
      chartData:{
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        datasets:[
          {

            label: 'Humidity',
            data:[
              88,
              91,
              87,
              87,
              88,
              89,
              87
            ],

            backgroundColor:[
              'rgba(255,165,0)',
            ]
          }



        ]
      }
    }
  }

  static defaultProps = {
displayTitle: true,
displayLegend: true,
legendPosition:'right'
  }
  
  render(){
    return(
      <div className= "chart">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Humidity % this week ',
              fontSize:25,
             fontColor: 'orange' 
              
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            
          }}
        />
        
        </div>
    )
  }
}

export {Chart};