import { StyleSheet} from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20
    },
    welcome: {
        textAlign: 'center'
    },
    mainBlueText:{color:'#1ea1f2', borderColor:'#0066cc'},
    darkBlueText:{color:'#0066cc', borderColor:'#0066cc'},
    lightBlueText:{color:'#0066cc', borderColor:'#0066cc'},
    mainGreyText:{color:'#888888', borderColor:'#0066cc'},
    lightGreyText:{color:'#F5F5F5', borderColor:'#0066cc'},
    darkGreyText:{color:'#555555', borderColor:'#0066cc'},
    blackText:{color:'#0000', borderColor:'#0000'},
    whiteText:{color:'#ffffff', borderColor:'#ffffff'},

    mainBlueBg:{backgroundColor:'#1ea1f2', borderColor:'#0066cc'},
    darkBlueBg:{backgroundColor:'#3c2a77', borderColor:'#0066cc'},
    lightBlueBg:{backgroundColor:'#0066cc', borderColor:'#0066cc'},
    mainGreyBg:{backgroundColor:'#E5E5E5', borderColor:'#0066cc'},
    lightGreyBg:{backgroundColor:'#F5F5F5', borderColor:'#0066cc'},
    darkGreyBg:{backgroundColor:'#888888', borderColor:'#0066cc'},
    blackBg:{backgroundColor:'#0000', borderColor:'#0000'},
    whiteBg:{backgroundColor:'#ffffff', borderColor:'#ffffff'},

    bottomTabBtns:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        paddingTop:15,
    },

});