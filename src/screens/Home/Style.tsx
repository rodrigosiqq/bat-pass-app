import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#5a5a5a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    LogoContainer:{
      flexDirection:'column',
      borderColor:'#c4bbbb',
      borderRadius:130,
      borderWidth:2,
      justifyContent:'center',
      alignSelf:'center',
      marginBottom:60,
      paddingTop:20,
      paddingBottom:10,
      backgroundColor:'#4D4D4D'

    },
    inputContainer:{
      width:'80%',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    }
  });

  export default styles