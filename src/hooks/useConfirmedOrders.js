import { useEffect, useState } from "react";

import { getSellerConfirmedOrders } from "../api/orderApi.js";

export const useConfirmedOrders = () => {


    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchConfirmedOrders = async () => {

            try {

                const response =
                    await getSellerConfirmedOrders();

                    // console.log(response.data);
                    

                setOrders(
                    response.data.data.ConfirmOrders
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchConfirmedOrders();

    }, []);

    return {
        orders,
        setOrders,
        loading
    };


};
