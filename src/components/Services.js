import React, {Component} from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaHome} from "react-icons/fa"

export default class Services extends Component{
    state={
        services:[
            {
                icon:<FaCocktail className="icons"/>,
                title:"free cocktails",
                info: "Blah blah blah"
            },
            {
                icon:<FaHiking className="icons"/>,
                title:"endless hiking",
                info: "Blah blah blah"
            },
            {
                icon:<FaShuttleVan className="icons"/>,
                title:"free shuttle",
                info: "Blah blah blah"
            },
            {
                icon:<FaHome className="icons"/>,
                title:"family atmosphere",
                info: "Blah blah blah"
            }
        ]
    }
    render(){
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6 className="titles">{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section >
        )
    }
}