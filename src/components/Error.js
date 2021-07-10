import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div>
                <div className="content text-center" style={{marginTop:"8%", color:"white", padding:"50px", width:"500px"}}>
                    <h2 style={{fontWeight:"bold"}}>XƏTA!</h2>
                    <h3>Belə səhifə mövcut deyil!</h3>
                </div>
            </div>
        )
    }
}
