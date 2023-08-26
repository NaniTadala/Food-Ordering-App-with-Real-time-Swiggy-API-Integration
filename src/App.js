import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/navigation/About";
import Contact from "./components/navigation/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ShimmerCard from "./components/shimmer";
import Cart from './components/Cart';
import store from "./components/utils/store";

/*
Header
    Tilte
    nav bar
Body
    Restaurant cards
Footer
    links
    copyright
*/

// JSX expressions must have one parent element.
// <></> == React.Fragment

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const Instamart = lazy(() => import('./components/Instamart'));
// upon on demand loading -> upon  render -> react will suspend loading
const AppLayout = () => {

    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/about/profile",
                element: <Profile />
            },
            {
                path: "/instamart",
                element:
                    <Suspense fallback={<ShimmerCard />}>
                        <Instamart />
                    </Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
