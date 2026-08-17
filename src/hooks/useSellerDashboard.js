import { useEffect, useState } from "react";

import { getSellerDashboard } from "../api/orderApi.js";

export const useSellerDashboard = () => {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const res =
                    await getSellerDashboard();

                setDashboard(
                    res.data.data.dashboard
                );

                // console.log(res.data.data.dashboard);
                

            } catch (error) {

                // console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchDashboard();

    }, []);

    return {
        dashboard,
        loading
    };
};