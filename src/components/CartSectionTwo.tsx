import React from "react";
import Counter from "./Counter";
import { useState, useEffect } from "react";


const CartSectionTwo = () => {
    const [products, setProducts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getAllProductsAndUserCart = async () => {
        setIsLoading(true)
        try {
           
            const products_res = await fetch('https://fakestoreapi.com/products')
            const products_data = await products_res.json()
            

        
            const cart_res = await fetch('https://fakestoreapi.com/carts/3')
            const cart_products = await cart_res.json()


            let cart_products_data: any[] = []

            for (let index = 0; index < cart_products.products.length; index++) {
                const element = cart_products.products[index];

                products_data.find((product: any) => {
                    if (product.id === element.productId) {
                        cart_products_data.push(product)
                    }
                })
            }

            let total = 0
            for (let i = 0; i < cart_products_data.length; i++) {
               
                total += cart_products_data[i].price;
              }
            
            

              console.log(total)
            setProducts(cart_products_data)

        } catch (error) {
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    }



    useEffect(() => {
        getAllProductsAndUserCart()
    }, [])

    
    
    return (
        <div>
        
                <div className="max-w-[1116px] mx-auto flex justify-between mb-[220px]">
                    <div>
                        <h3 className="mt-[72px] font-semibold text-base text-[#0E1422]">Your cart</h3>
                        <div className="py-12 space-y-4 ">
                        {isLoading && <p className='text-md text-black'>Loading...</p>}
                            
                                {products.map((product,index) => (
                                <div className="flex items-center" key={index}>
                                    <img src={product.image}className="w-[80px] h-[80px]" alt="photo"/>
                                    <div className="ml-8 mt-2 w-[300px]">
                                        <h2 className="font-medium text-sm text-[#0E1422]">{product.title}</h2>
                                        <div className="flex items-center gap-[6px] mt-[6px]">

                                            <span className="font-medium text-[12px] text-[#5C5F6A]">Color:</span>
                                            <img src="/images/circlegreen.png" className="w-3 h-3" alt="photo"/>
                                            <div className="w-3 h-6 flex items-center">
                                                <img src='/images/line.png' alt="photo"/>

                                            </div>

                                            <span className="font-medium text-[12px] text-[#5C5F6A]">Size: M</span>
                                        </div>

                                    </div>
                                    <h3 className="text-sm text-[#0E1422] font-medium">${product.price}</h3>
                                    <Counter />
                                    <img src='/images/remove.png' className="ml-4" alt="photo"/>


                                </div>
                                ))}


                            
                          



                        </div>
                    </div>

                    <div className="w-[341px] h-[430px] border-[1px] border-[#E6E7E8] rounded-md mt-14 px-6">
                        <h1 className="font-semibold text-base text-[#0E1422] mt-8">Order Summary</h1>
                        <div className="py-6 mt-4 border-b-[1px]">
                            <div className="flex justify-between">
                                <h4 className="font-medium text-sm text-[#5C5F6A]">Subtotal</h4>
                                <span className="font-medium text-sm text-[#0E1422]" >$ 90.00</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <h4 className="font-medium text-sm text-[#5C5F6A]">Shipping: </h4>
                                <span className="font-medium text-sm text-[#0E1422]">Free</span>
                            </div>
                            <div className="flex justify-between my-3">
                                <h4 className="font-medium text-sm text-[#5C5F6A]">Tax: </h4>
                                <span className="font-medium text-sm text-[#0E1422]">$ 3.00</span>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <h4 className="font-medium text-sm text-[#0E1422]">Total</h4>
                            <span className="font-medium text-sm text-[#0E1422]">$ 100.00</span>
                        </div>
                        <a href='checkout'>
                            <button className="w-[296px] h-[44px] py-3 bg-[#0E1422] text-white rounded-md mt-8 transform transition-transform duration-300 hover:scale-105">Checkout</button>
                        </a>
                        <div className="text-center mt-8 font-medium text-[12px] underline underline-offset-4 text-[#0E1422] hover:text-gray-500">
                            <a href="listing">Continue Shopping</a>
                        </div>



                    </div>
                </div>
                
        </div>

    )
}
export default CartSectionTwo;