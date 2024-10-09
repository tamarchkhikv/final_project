import React from 'react'

const Orders = () => {
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
            <h2 className="font-semibold text-base text-[#0E1422]">Orders</h2>


            {productArray.map((product: any, key: any) => (
                <div className="flex items-center mt-14 pb-8 border-b-[1px]">
                    <img src={product.img} />
                    <div className="ml-8 ">
                        <h2 className="font-medium text-sm text-[#0E1422]">{product.title}</h2>
                        <h4 className="font-medium text-[12px] text-[#5C5F6A]">Ordered on: 27 July 2023</h4>
                        <span className="font-medium text-[12px] text-[#0E1422]">$70.00</span>


                    </div>
                    <div className="border-b-[1px] border-[#0E1422] ml-[116px]">
                        <span>Processing</span>
                    </div>

                    <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">View item</button>
                </div>
            ))}


        </div>

    )
}

export default Orders