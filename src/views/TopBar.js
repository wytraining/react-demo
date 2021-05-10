import React from 'react';
import './index.css'
import axios from "axios";
import Button from "antd/lib/button";

function Layout(props) {
    return (
        <div className="layout">
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}


function Left() {
    // mock: get
    function getCompanyList() {
        // this.$http.get("https://www.fastmock.site/mock/bcf4a1b0eda8059aaab99794676b49e9/epcode/api/getCompanyList").then(res=>{
        axios.get("epcode/api/getCompanyList").then(res => {
            console.log(res);
        })
    }

    return (
        <div className="left-bar">
            左<Button onClick={() => getCompanyList()}>获取接口数据</Button>
        </div>
    )
}

function Right() {
    return (
        <div className="right-bar">右</div>
    )
}

export default class TopBar extends React.Component {
    render() {

        const arr = [1, 5, 5, 3];
        const liItem = arr.map((item) => {
            return <li>{item}</li>
        });

        return (
            <div>
                <Layout
                    left={
                        <Left/>
                    }
                    right={
                        <Right/>
                    }
                />

                <p>123456</p>
                <ul>{liItem}</ul>
            </div>

        )
    }
}
