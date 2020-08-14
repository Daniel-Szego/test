import Metamask from "./layout/Metamask";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Trade from "./pages/Trade";
import Fund from "./pages/Fund";
import FundCreator from "./pages/FundCreator";

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Metamask,
            meta: {
                auth: true
            },
            children: [
                {
                    path: '/',
                    component: Portfolio,
                    meta: {
                        auth: false
                    },
                },
                {
                    path: '/fund/create',
                    component: FundCreator,
                    meta: {
                        auth: false
                    },
                },
                {
                    path: '/fund/:address',
                    props: true,
                    component: Fund,
                    meta: {
                        auth: false
                    },
                },
                {
                    path: '/fund/:address/trade',
                    props: true,
                    component: Trade,
                    meta: {
                        auth: false
                    },
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            meta: {
                auth: false
            }
        }
    ]
};
