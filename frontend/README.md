import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url ="http://localhost:4000";
  const [token,setToken] = useState("");

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const [food_list, setFood] = useState([])
  const fetchFoodList = async ()=>{
  const response = await axios.get(url+"/api/Food/list");
  setFood(response.data.data)
  }

useEffect(()=>{
  
async function loadData(){
await fetchFoodList();
if(localStorage.getItem("token")){
  setToken(localStorage.getItem("token"))
}
}
loadData();
},[])
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = food_list.find((product) => product._id === items);
        totalAmount += itemInfo.price * cartItems[items];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;

