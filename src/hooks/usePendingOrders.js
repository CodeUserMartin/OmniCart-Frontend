import { useEffect, useState } from "react";

import { getSellerPendingOrders } from "../api/orderApi.js";

export const usePendingOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPendingOrders = async () => {

            try {

                const response =
                    await getSellerPendingOrders();

                setOrders(
                    response.data.data.pendingOrders
                );

            } catch (error) {

                // console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchPendingOrders();

    }, []);

    return {
        orders,
        setOrders,
        loading
    };
};