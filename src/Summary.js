import React, { Component } from 'react'

class Summary extends Component {

    render() {
        const { summary, currentDate } = this.props;
        return (
            <div className="row">
           
                <div className="newConferm">
                    <h3>New Confirmed</h3>
                    <h1>{summary.NewConfirmed}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>

                <div className="TotalConferm">
                <h3>Total Confirmed</h3>
                <h1>{summary.TotalConfirmed}</h1>
                <h4>{new Date(currentDate).toDateString()}</h4>

                </div>

                <div className="NewDeath">
                <h3>New Death</h3>
                <h1>{summary.NewDeaths}</h1>
                <h4>{new Date(currentDate).toDateString()}</h4>
                

                </div>
                <div className="TotalDeath">
                <h3>Total Death</h3>
                <h1>{summary.TotalDeaths}</h1>
                <h4>{new Date(currentDate).toDateString()}</h4>
                
                </div>

                <div className="TotalRecover">
                <h3>Total Recoverd</h3>
                <h1>{summary.TotalRecovered}</h1>
                <h4>{new Date(currentDate).toDateString()}</h4>
                
                </div>
                


                <h5> Developed by : Irshad </h5>

            </div>
        )
    }
}

export default Summary
