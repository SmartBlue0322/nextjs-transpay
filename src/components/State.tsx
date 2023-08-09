import React from "react";

export default function State(props) {
    return (
        <div className="text-center">
            <div className={(props.active ? "bg-seagreen-900 " : "bg-white-900 ") +" relative mx-auto rounded-full w-[73px] h-[73px] border-2 border-[#93E9BE] mb-[33px]"}>
                <p className=" absolute text-[#F833C0] text-[38px] font-semibold leading-[160%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    { props.number }
                </p>
            </div>
            <p className="text-white-900 text-[20px] font-medium leading-[160%]">{props.children}</p>
        </div>
    )
}