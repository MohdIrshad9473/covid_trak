import React, { Component } from 'react'

class Countries extends Component {
    render() {
        const {countri}=this.props;
        return (
            <tr>
                <td>{countri.Country}</td>
                <td>{countri.NewConfirmed}</td>
                <td>{countri.TotalRecovered}</td>
                <td>{countri.TotalDeaths}</td>
            </tr>
        )
    }
}

export default Countries
