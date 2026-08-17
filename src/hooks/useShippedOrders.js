import { useEffect, useState } from "react";

import { getSellerShippedOrders } from "../api/orderApi.js";

export const useShippedOrders = () => {


    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchShippedOrders = async () => {

            try {

                const response =
                    await getSellerShippedOrders();

                setOrders(
                    response.data.data.shippedOrders
                );

            } catch (error) {

                // console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchShippedOrders();

    }, []);

    return {
        orders,
        setOrders,
        loading
    };


};
