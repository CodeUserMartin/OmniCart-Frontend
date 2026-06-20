import { useEffect, useState } from "react";
import { getSellerCancelledOrders } from "../api/orderApi.js";

export const useCancelledOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchCancelledOrders = async () => {
            try {
                const res = await getSellerCancelledOrders();

                setOrders(res.data.data.cancelledOrders);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCancelledOrders();

    }, []);

    return { orders, setOrders, loading };
};