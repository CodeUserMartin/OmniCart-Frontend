import { useEffect, useState } from "react";
import { getSellerDeliveredOrders } from "../api/orderApi.js";

export const useDeliveredOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDeliveredOrders = async () => {

            try {

                const response =
                    await getSellerDeliveredOrders();

                setOrders(
                    response.data.data.deliveredOrders
                );

            } catch (error) {

                // console.log(error);

            } finally {

                setLoading(false);

            }
        };

        fetchDeliveredOrders();

    }, []);

    return {
        orders,
        setOrders,
        loading
    };
};