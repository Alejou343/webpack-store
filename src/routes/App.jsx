import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@containers/Home';
// import Checkout from '@containers/Checkout';
import Layout from '@components/Layout';
import NotFound from '@containers/NotFound';
import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

const AsyncCheckoutContainer = React.lazy(() => import("@containers/Checkout"))

const App = () => { 
  
  const initialState = useInitialState()
  const isEmpty = Object.keys(initialState).length;
  
  return (
    <>
      {isEmpty ? 
        <Suspense fallback={<div>Loading...</div>}>
          <AppContext.Provider value={initialState}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home products = {initialState.products} />} />
                  <Route path="/checkout" element={<AsyncCheckoutContainer />} />
                  <Route element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter> 
          </AppContext.Provider>
        </Suspense>
        : <h1>Loading...</h1>
      }
    </>
  );
}

export default App;
