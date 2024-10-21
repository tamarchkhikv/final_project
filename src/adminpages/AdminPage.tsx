import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Orders from "../adminpagescomponenets/Orders";
import Dashboard from "../adminpagescomponenets/Dashboard";
import Customers from "../adminpagescomponenets/Customers";
import Products from "../adminpagescomponenets/AdminProducts";
import Reviews from "../adminpagescomponenets/Reviews";
import Settings from "../adminpagescomponenets/Settings";

const AdminPage = () => {
  return (



    <TabGroup>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex">
          <div className="w-[260px] h-[925px] mt-4 pb-[359px]">
            <img src='/images/adminlogo.svg' className="w-[116px] h-10 mx-auto" />



            <TabList className="flex flex-col mx-auto mt-16 gap-4 w-[212px] ml-4">


              <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                <img src="/images/dashboard.svg" />
                <button>Dashboard</button>
              </Tab>


              <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                <img src="/images/product.svg" />
                <button>Products</button>
              </Tab>

              <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                <img src="/images/cart.svg" />
                <button>Orders</button>
              </Tab>

              <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                <img src="/images/users.svg" />
                <button>Customers</button>
              </Tab>

              <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                <img src="/images/emptystar.svg" />
                <button>Reviews</button>
              </Tab>

              <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                <img src="/images/settings.svg" />
                <button>Settings</button>
              </Tab>

              <div className="pt-8 flex gap-[10px] px-6 py-2 ml-4 border-t-[1px] mt-[46px]">
                <img src='/images/add.svg' />
                <button>Extras</button>

              </div>



            </TabList>
          </div>



          <div className="bg-[#E9E9EB] w-[1180px] ">
            <TabPanels>


              <TabPanel>
                <Dashboard />

              </TabPanel>

              <TabPanel>
                <Products />

              </TabPanel>


              <TabPanel>
                <Orders />

              </TabPanel>

              <TabPanel>
                <Customers />

              </TabPanel>



              <TabPanel>

                <Reviews />
              </TabPanel>

              <TabPanel>
                <Settings />
              </TabPanel>

            </TabPanels>
          </div>

        </div>

      </div >

    </TabGroup >







  )
}

export default AdminPage;