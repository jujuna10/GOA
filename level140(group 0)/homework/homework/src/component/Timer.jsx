import React from 'react'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {second: 0 , minute:0 , hour: 0}
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState((prev) => {
                let {second, minute ,hour} = prev
    
                second++
    
                if(second === 60){
                    minute++
                    second = 0
                }
                if(minute === 60){
                    hour++
                    minute = 0
                }


                
            return { second, minute, hour }
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <div>
                <p>{this.state.second}:{this.state.minute}:{this.state.hour}</p>
            </div>
        )
    }
}

export default Timer;
