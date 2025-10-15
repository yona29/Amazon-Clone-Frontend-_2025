import React, { useEffect, useContext, useState } from "react";
import classes from "./Orders.module.css";
import Layout from "../../Components/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("QuerySnapshot:", snapshot);
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {/* empty order msg */}
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>
              There are no orders placed at the moment{" "}
            </div>
          )}
          <div>
            {orders?.map((eachOrder) => {
              return (
                <div key={eachOrder.id}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  {eachOrder.data.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;

// const Orders = () => {
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     if (!user) {
//       setOrders([]);
//       return;
//     }

//     const ordersRef = collection(db, "users", user.uid, "orders");
//     const q = query(ordersRef, orderBy("created", "desc"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       console.log("QuerySnapshot:", snapshot);
//       const ordersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         data: doc.data(),
//       }));

//       setOrders(ordersData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   return (
//     <Layout>
//       <section className={classes.container}>
//         <div className={classes.orders_container}>
//           <h2>Your Orders</h2>
//           {/* empty order msg */}
//           {orders?.length == 0 && (
//             <div style={{ padding: "20px" }}>
//               There are no orders placed at the moment{" "}
//             </div>
//           )}

//           <div>
//             {orders?.map((eachOrder) => {
//               return (
//                 <div key={eachOrder.id}>
//                   <hr />
//                   <p>Order ID: {eachOrder.id}</p>
//                   {eachOrder.data.basket?.map((order) => {
//                     return (
//                       <ProductCard flex={true} product={order} key={order.id} />
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Orders;
