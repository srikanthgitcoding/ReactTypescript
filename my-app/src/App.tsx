import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndexCallBack from './useCallaBackExamples/Index';
import ReactQueryIndex from './ReactQuery/Index';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
// import Home from './ReactQuery/Home';
// import Collections from './ReactQuery/Collections';
// import Products from './ReactQuery/Products';
// import ProductDetails from './ReactQuery/ProductDetails';
// import {HookForm} from './ReactHookFormZod/Index'
// import {MutationExampleTypescript} from './TypescriptUtility/Index'
import Index from './ReactTestingLibrary/FormComponents/Index';
import ClickEventTest from './ReactTestingLibrary/FormComponents/ClickEventTest';
import Counter from './ReactTestingLibrary/FormComponents/Counter';
import EnableExample from './ReactQuery/EnableExample';
const querclient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={querclient}>
      {/* <ClickEventTest></ClickEventTest> */}
      {/* <Counter></Counter> */}
      {/* <EnableExample></EnableExample> */}
      <IndexCallBack></IndexCallBack>

      {/* <MutationExampleTypescript></MutationExampleTypescript><br/> */}
    {/* <BrowserRouter>
    <ul>
      <Link to="/">Home </Link>
      <Link to="/products">Products  </Link>
      <Link to="/collections">collections  </Link>


    </ul>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="collections" element={<Collections />}/>
        <Route path="products" element={<Products />}/>
        <Route path="products/:id" element={<ProductDetails />}/>



          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */} 
    {/* <Index></Index> */}
    </QueryClientProvider>
  );
}

export default App;
