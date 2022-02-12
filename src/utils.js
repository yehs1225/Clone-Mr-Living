import { collection, query, where , getDocs} from "firebase/firestore";
import {db} from "./firebase"
export const getUserName = async(user) =>{
    //query user who's email === use.email
    const result=[];
    const userRef = collection(db,"SignedUpUserData");
    const q = query(userRef,where("Email","==",user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      const userData = doc.data();
      result.push(userData.LastName);
      result.push(userData.FirstName);
    })  
    return (result[0]+result[1]);  
  }
export const getAllProducts = async()=>{
  const result=[];
  const querySnapshot = await getDocs(collection(db, "Products"));
  querySnapshot.forEach((doc) => {
    result.push({
      id:doc.id,
      title:doc.data()['Title'],
      price:doc.data()['Price'],
      imageUrl:doc.data()['ImageUrl']
    });
  });
  return (result);
}