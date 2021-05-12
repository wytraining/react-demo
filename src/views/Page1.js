import React from 'react'
import Button from 'antd/lib/button'

export default class Page1 extends React.Component {
    render() {
        return(
            <div>
                <span>this is page1：</span>
                <Button onClick={()=> {
                    this.props.history.push('/page1/page3')
                }}>跳转page3</Button>
            </div>
        )
    }
}


