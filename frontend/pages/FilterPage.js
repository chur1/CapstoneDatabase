import React, { useState } from 'react';
import Select from 'react-select';
import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from "urql";
import {PRODUCT_QUERY} from '../lib/query';
import Products from '../components/Products';
import { Gallery } from '../styles/Gallery';
import { Description } from '../styles/pageDescription';
import { Input } from '../styles/Input';
import Layout from '../components/Layout';
import { useFetchUser } from '../lib/authContext';
 
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const option = [
    {
      value: "webdev",
      label: "Web Development"
    },
    {
      value: "cyber",
      label: "Cyber Security"
    },
    {
      value: "ml",
      label: "Machine Learning"
    },
    {
      value: "os",
      label: "OS Development"
    },
  ];
 
  // set value for default selection
  const { user, loading } = useFetchUser();
  //Fetch products from strapi
  const [results] = useQuery({query: PRODUCT_QUERY });
  const {data, fetching, error} = results;

  // check for incoming data
  if(fetching) return <p>Loading...</p>
  if(error) return <p>Oh no...</p>
  const products = data.products.data;
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }
 
  return (
    <div className="App">
      <Select
        placeholder="Select Option"
        value={option.find(obj => obj.value === selectedValue)} // set selected value
        options={option} // set list of the data
        onChange={handleChange} // assign onChange function
        multi={true}
      />


      {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b>Selected Value: </b> {selectedValue}</div>
      </div>} */}
        <Gallery>
          {/* search function */}
          {products.filter((product)=> {
            if(selectedValue == ""){
              return product
            } else if (product.attributes.category.toLowerCase().includes(selectedValue.toLowerCase())){
              return product
            }
          }).map((product) => (
            <Products key={product.attributes.slug} product = {product}/>
          ))}
        </Gallery>
    </div>
  );
}
 
export default App;