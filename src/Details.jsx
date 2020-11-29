import React, { Component } from 'react'
import axios from "axios"
import Summary from './Summary';
import Countries from './Countries';

class Details extends Component {
    state={
        countries: [],
        global: [],
        currentDate:'',
        loading:true

    }
    async componentDidMount(){
        const res = await axios.get("https://api.covid19api.com/summary");
        console.log(res.data);
        this.setState({countries:res.data.Countries});
        this.setState({global:res.data.Global});
        this.setState({currentDate:res.data.Date})
        this.setState({loading: false});

    }
    render() {
        if(this.state.loading){return <h2>Loading...</h2>}
        return (
            <div>
                <Summary  summary = {this.state.global} currentDate = {this.state.currentDate}/>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>New Confirm</th>
                            <th>Total Recover</th>
                            <th>Total Death</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countries.map(contry=>(
                            <Countries countri={contry} key={contry.contry}/>
                        )

                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Details
