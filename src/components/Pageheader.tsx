import React from "react";

export default function PageHeader(props) {
    return (
        <div className="page-header text-center bg-[url('/bg1.jpg')]">
            <h2 className="text-white font-semibold text-{42px} leading-{63px}">{props.title}</h2>
            <p className="text-white font-medium text-base leading-{30px}">{props.description}</p>
        </div>
    )
}