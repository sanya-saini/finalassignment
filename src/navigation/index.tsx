import React from "react";
import AppNav from "./navigation";
import Splash from "../screens/splash";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppNav />
        </QueryClientProvider>
        
    )
};
export default App;
