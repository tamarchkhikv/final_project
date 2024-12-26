import React from "react";
import Counter from "./Counter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const CartSectionTwo = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState(0);

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

                const foundProduct = products_data.find((product: any) => product.id === element.productId);
                if (foundProduct) {
                    cart_products_data.push({ foundProduct, ...foundProduct, quantity: 1, });
                }

            }

            setProducts(cart_products_data);

            const newTotalPrice = cart_products_data.reduce((acc, product) => acc + product.price, 0);
            setTotalPrice(newTotalPrice);

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    };



    useEffect(() => {
        getAllProductsAndUserCart()
    }, []);

    const updateProductQuantity = (productId: any, newQuantity: any) => {
        const updatedProducts = products.map(product =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
        );
        setProducts(updatedProducts);

        const newTotalPrice = updatedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setTotalPrice(newTotalPrice);



    };

    const removeProduct = (productId: any) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);

        const newTotalPrice = updatedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setTotalPrice(newTotalPrice);

    }




    return (
        <div>

            <div className="max-w-[1116px] mx-auto flex justify-between mb-[220px]">
                <div>
                    <h3 className="mt-[72px] font-semibold text-base text-[#0E1422]">Your cart</h3>
                    <div className="py-12 space-y-4 ">
                        {isLoading && <p className='text-md text-black'>Loading...</p>}
                        <div className="space-y-10">
                            {products.map((product, index) => (
                                <div className="flex items-center justify-between w-[730px]" key={index}>
                                    <div className="flex">
                                        <img src={product.image} className="w-[80px] h-[80px]" alt="photo" />
                                        <div className="ml-8 mt-2 w-[300px]">
                                            <h2 className="font-medium text-sm text-[#0E1422]">{product.title}</h2>
                                            <div className="flex items-center gap-[6px] mt-[6px]">

                                                <span className="font-medium text-[12px] text-[#5C5F6A]">Color:</span>
                                                <img src="/images/circlegreen.png" className="w-3 h-3" alt="photo" />
                                                <div className="w-3 h-6 flex items-center">
                                                    <img src='/images/line.png' alt="photo" />

                                                </div>

                                                <span className="font-medium text-[12px] text-[#5C5F6A]">Size: M</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex items-center">
                                            <h3 className="text-sm text-[#0E1422] font-medium">${product.price}</h3>
                                            <Counter count={product.quantity} onQuantityChange={(newQuantity: any) => updateProductQuantity(product.id, newQuantity)} />
                                        </div>
                                        <button className="w-[40px] h-[40px] transition hover:scale-110 hover:translate-y-1 duration-500"

                                            onClick={() => removeProduct(product.id)}>
                                            <img src='/images/remove.png' className="ml-4" alt="Remove item" />
                                        </button>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
                {
                    products.length === 0 &&
                    <div className=" pt-4 pb-[131px]">
                        <div className="w-[273px] h-[181px]  mt-[135px]">
                            <img src='/images/empty-state.svg' className="w-16 h-16 mx-auto" />
                            <h4 className="font-normal text-sm text-[#5C5F6A] text-center">Your cart is waiting to be filled.</h4>
                            <Link to='/listing' className="mt-6 bg-[#0E1422] w-[179px] h-[44px] flex items-center 
                         hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105 text-white px-6 text-sm gap-[6px] rounded-md mx-auto">
                                Start Shopping
                                <img src='/images/arrow-right.png' className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                }


                <div className="w-[341px] h-[430px] border-[1px] border-[#E6E7E8] rounded-md mt-14 px-6">
                    <h1 className="font-semibold text-base text-[#0E1422] mt-8">Order Summary</h1>
                    <div className="py-6 mt-4 border-b-[1px]">
                        <div className="flex justify-between">
                            <h4 className="font-medium text-sm text-[#5C5F6A]">Subtotal</h4>
                            <span className="font-medium text-sm text-[#0E1422]" >${totalPrice.toFixed(2)}</span>
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
                        <span className="font-medium text-sm text-[#0E1422]">${(totalPrice + 3).toFixed(2)}</span>
                    </div>
                    <Link to='/checkout'>
                        <button className="w-[296px] h-[44px] py-3 bg-[#0E1422] text-white rounded-md mt-8 transform transition-transform duration-300 hover:scale-105">Checkout</button>
                    </Link>
                    <div className="text-center mt-8 font-medium text-[12px] underline underline-offset-4 text-[#0E1422] hover:text-gray-500">
                        <a href="listing">Continue Shopping</a>
                    </div>



                </div>
            </div>

        </div >

    )
}
export default CartSectionTwo;