import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props){
            super(props)
            this.state={
                count : 0
    
            }
    
        }
        incrementCount =() =>{
            this.setState(prevState => {
                // return { count: prevState.count + 1}

                //passing parameter to the hoc function 
                return {count: prevState.count + incrementNumber}
            })
        }
        render (){
            return <OriginalComponent
             count={this.state.count}
              incrementCount={this.incrementCount}
              {...this.props} //passing props to the hoc function
              />

        }
    }
    return NewComponent
}
export default UpdatedComponent