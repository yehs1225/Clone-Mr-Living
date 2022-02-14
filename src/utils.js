import { collection, query, where , getDocs,doc,updateDoc} from "firebase/firestore";
import {db} from "./firebase";


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
export const getUserCart = async(user)=>{
    //query user who's email === use.email
    const result=[];
    const userRef = collection(db,"SignedUpUserData");
    const q = query(userRef,where("Email","==",user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      const userData = doc.data();
      result.push(userData.Cart);
    })  
    return (result);  
  }
export const setUserCart = async(user,basket)=>{
  const newBasket=[];
  const newBasket1=[];
  basket.forEach(element=>{
    console.log(element.id);
    let itemId=element.id;
    let itemQuantity = element.quantity;
    newBasket.push({[itemId]:itemQuantity});
  })
  console.log(newBasket);
  newBasket.forEach(element=>{
    newBasket1.push(element);
  })
  console.log(newBasket1);
  const userRef = doc(db,"SignedUpUserData",user.uid);
  await updateDoc(userRef,{
    "Cart":newBasket1
  })
}