import Timer from "./present"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Action_Creator } from "../../reducer";

// mapStateToProps , mapDispatchToProps 

function mapStateToProps(state){
    const{
        Play,
        Elapse,
        Timer
    } = state
    return {
        Play,
        Elapse,
        Timer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Start : bindActionCreators(Action_Creator.Start , dispatch),
        Restart : bindActionCreators(Action_Creator.Restart , dispatch),
        Add : bindActionCreators(Action_Creator.Add , dispatch)
    }
}

// Export connet

export default connect(mapStateToProps,mapDispatchToProps)(Timer)