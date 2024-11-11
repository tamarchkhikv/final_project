import React from "react";
import MinimumDistanceSlider from "./RangeSlider";
import { useState, useEffect } from "react";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import Colors from "../components/Colors";
import Sizes from "../components/Sizes";


const Categories = () => {
    const [apiData, setApiData] = useState([])


    const getData = async () => {

        try {
            const res = await fetch('https://fakestoreapi.com/products/categories');

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data: any = await res.json();

            setApiData(data);

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getData()
    }, [])



    return (
        <div className="w-[248px] h-[828px] px-3 pt-6 pb-8 border-[1px] border-[#E6E7E8]">
            <h2 className="font-medium text-sm text-[#0E1422]">Categories</h2>
            <ul className="mt-4">

                <RadioGroup aria-label="Server size">
                    {apiData.map((variant, index) => (
                        <Field key={variant} className="flex gap-2 px-1 py-3  border-b-[1px] border-[#E9E9EB]">
                            <Radio
                                value={variant}
                                className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-gray-400"
                            >
                                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                            </Radio>
                            <Label>{variant}</Label>
                        </Field>
                    ))}
                </RadioGroup>



            </ul >


            <Colors />
            <Sizes />


            <div className="flex flex-col gap-2 mt-10">

                <h2 className="font-medium text-sm text-[#0E1422]">Price</h2>
                <MinimumDistanceSlider />

            </div>




        </div >
    )

}
export default Categories;