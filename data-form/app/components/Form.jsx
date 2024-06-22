"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import axios from "axios";
import   "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form() {
        const options = [
            { value: "ITEM-1", label: "Apple" },
            { value: "ITEM-2", label: "Banana" },
            { value: "ITEM-3", label: "Grapes" },
            { value: "ITEM-4", label: "Orange" },
            { value: "ITEM-5", label: "Guava" },
            { value: "ITEM-6", label: "Watermelon" },
            { value: "ITEM-7", label: "Pineapple" },
          ];
          
          const [state,setState] = useState({
            options:"",
            inputbox:""
          })
          const handleForm = (event) => {
            setState({...state ,[event.target.name]:event.target.value} )
          }
          const notifySuc = () => toast("successful!");
          const notifyFail = () => toast("Error Uploading data");
          const handleSubmit =  (event) => {
            event.preventDefault();
            axios.post("https://jsonplaceholdr.typicode.com/posts",{state})
            .then((response) => {console.log(response);
            notifySuc();} )
            .catch((err) => {console.log(err);
           notifyFail(); })
          }
          const customStyles = {
            control: (provided, state) => ({
              ...provided,
              borderColor: state.isFocused ? 'orange' : 'grey',
              '&:hover': {
                borderColor: state.isFocused ? 'orange' : 'grey',
                
              },
            }),
            // Add other custom styles if needed
          };
        
          return (
            <div className='App'>
              <ToastContainer/>
            <img src='https://fervidsmart.com/dist/assets/img/logo/Fervid_Logo_svg.svg' alt='fervidsmartlogo' id='fervid'></img>
            <div className="mainform">
              
              <h2 id='dataentry'>IOT</h2>
              <div className='selectbar'>
              <label className='device'> DEVICE:</label>
              <div className="dropdown">
                <Select options={options} className="itemid" styles={customStyles} name='itemid'placeholder="SELECT ITEM" onChange={(selectedGroup) => {setState ({...state,options:selectedGroup})}}/>
              </div>
              </div>
              <div className='jsoninput'>
              <label className='device'>JSON:</label>
                <textarea placeholder=" ENTER DATA" rows={5} className="inputbox" name='inputbox' onChange={handleForm}></textarea>
                </div>
                
              <button
                type="submit"
                className="submitbutton"
                onClick={ handleSubmit }
              >
                SUBMIT
              </button>
            </div>
            </div>
          
            
    )
}