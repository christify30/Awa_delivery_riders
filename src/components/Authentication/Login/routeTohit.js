
 const goTo =(navigation,user)=>{
    const {type} = user
   switch(type){
    case 1 || "1":
    navigation.navigate('Signup2')
    break;
    case 2:
    navigation.navigate('Signup3')
    break;
    case 3:
    navigation.navigate('Signup4')
    break;
    case "4":
    navigation.navigate('Signup5')
    break;
    case "5"  : 
    navigation.navigate('Signup6')
    break;
    case "6":
    navigation.navigate('Signup7')
    break; 
    default:
        navigation.navigate('Login');
    }
}

export default goTo;