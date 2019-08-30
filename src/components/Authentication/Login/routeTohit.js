
 const goTo =(navigation,user)=>{
    const {status} = user
   switch(status){
    case 1 || "1":
    navigation.navigate('Signup2')
    break;
    case 2 || "2":
    navigation.navigate('Signup4')
    break;
    case 3 || "3":
    navigation.navigate('Signup5')
    break;
    case 4 || "4":
   // navigation.navigate('HomeIndex')//LoadScreen
    navigation.navigate('LoadScreen')
    break;
    case "5" || 5 : 
    navigation.navigate('Signup7')
    break;
    case "6" || 6:
    navigation.navigate('Signup7')
    break; 
    default:
        navigation.navigate('Login');
    }
}

export default goTo;