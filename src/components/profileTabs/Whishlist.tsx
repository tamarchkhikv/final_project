import React from 'react'

const Whishlist = () => {
    const productArray: any = [
        {
            img: '/images/cartimage1.png',
            title: 'Raw Black T-Shirt Lineup',
            order_time: 'Ordered on: 27 July 2023',
            price: '$70.00'
        },
        {
            img: '/images/cartimage2.png',
            title: 'Raw Black T-Shirt Lineup',
            order_time: 'Ordered on: 27 July 2023',
            price: '$70.00'
        }
    ]
    return (
        <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px]">
            <h2 className="font-semibold text-base text-[#0E1422]">Wishlist</h2>
            <div className='mt-6'>
            {productArray.map((product: any, key: any) => (
                <div key={key} className="flex items-center py-8 px-4 border-b-[1px] hover:bg-[#F6F6F6]">
                    <img src={product.img} alt="photo"/>
                    <div className="ml-8 ">
                        <h2 className="font-medium text-sm text-[#0E1422]">{product.title}</h2>
                        <h4 className="font-medium text-[12px] text-[#5C5F6A]">{product.order_time}</h4>
                        <span className="font-medium text-[12px] text-[#0E1422]">Remove item</span>


                    </div>
                    <h3 className="ml-[134px] font-medium text-sm text-[#0E1422]">{product.price}</h3>

                    <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3 transform transition-transform duration-300 hover:scale-105">Add to cart</button>
                </div>

            ))}
        </div>
        </div >


    )
}

export default Whishlist