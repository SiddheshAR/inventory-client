
import { useGetDashboardMetricsQuery } from '@/state/api'
import { ShoppingBag } from 'lucide-react';
import React from 'react'
import Rating from './Rating';

function CardPopularProduct() {
    const {data: dashboardMetrics,isLoading}=useGetDashboardMetricsQuery();
  return (
    <div  className="border row-span-3 xl:row-span-6 overflow-hidden">
        {isLoading?<h2 className='m-5'>Loading..</h2>:<>
            <h2 className='text-lg font-semibold px-7 pt-5  pb-2'>Popular Products</h2>
            <hr/>
            <div className='overflow-auto h-full'>
                {dashboardMetrics?.popularProducts.map((product)=>(
                    <div key={product.productId} className="flex items-center justify-between gap-3 px-4 py-6 border-b">
                        {/* First row */}
                        <div className='flex flex-row gap-3'>
                            <div>Img</div>
                            <div className='flex flex-col '>
                                <h2 className="font-bold text-gray-700">{product?.name}</h2>
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <div className='font-bold text-blue-500 text-md'>₹ {product?.price}</div><div  className="mx-2"><Rating rating={product?.rating || 0}/></div>
                                </div>
                            </div>
                        </div>
                        {/* Second row */}
                        <div className="text-xs flex items-center">
                            <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                                <ShoppingBag className="w-4 h-4" />
                            </button>
                            {Math.round(product.stockQuantity / 1000)} Sold
                        </div>
                    </div>  
                ))}
            </div>
        </>}
    </div>  
  )
}

export default CardPopularProduct