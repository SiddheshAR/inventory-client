"use client"
import React, { useState } from 'react'
import Header from '../(components)/Header'

function SettingsPage() {

    interface inputInte{
        label:string,
        value:string | boolean,
        type:string
    }

    const InputFormTemp:inputInte[] = [
        {label:"Username", value:'Your Name', type:'text'},
        {label:"Email", value:'Your Email', type:'text'},
        {label:"Notification", value:true, type:'toggle'},
        {label:"Dark Mode", value:false, type:'toggle'},
        {label:"Language", value:'English', type:'text'},        
    ]
    const [inputForm,setInputForm] = useState<inputInte[]>(InputFormTemp);
    const handleToggle = (index:number)=>{
        const currentStatus = inputForm[index].value;
        const formItems = [...inputForm];
        formItems[index].value = !currentStatus;
        setInputForm([...formItems]);
    }

  return (
<div className="max-w-3xl  ">
  <Header name="User Settings" />
  <form className=" my-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
    <table className="min-w-full bg-white rounded-lg">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="p-2 text-[15px]">Settings</th>
          <th className="p-2 text-[15px]">Value</th>
        </tr>
      </thead>
      <tbody>
        {inputForm.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="p-2 text-[15px]">{item.label}</td>
            <td className="p-2 text-[15px]">
              {item.type === "toggle" ? (
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={item.value as boolean}
                    onChange={() => handleToggle(index)}
                  />
                  <div
                    className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-400 peer-focus:ring-4 
                    transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                    after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                    peer-checked:bg-blue-600"
                  ></div>
                </label>
              ) : (
                <input
                  type={item.type}
                  value={item.value as string}
                  onChange={(e) => {
                    const currItems = [...inputForm];
                    currItems[index].value = e.target.value;
                    setInputForm(currItems);
                  }}
                  className="border rounded px-2 py-1 w-full"
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </form>
</div>
  )
}

export default SettingsPage    