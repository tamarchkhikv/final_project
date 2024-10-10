import React from 'react'
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';



const AddProducts = () => {
    return (
        <div>
            <div className='flex justify-end py-[22px] ml-12'>
                <img src='/images/logout.svg' className='mr-3' />
            </div>
            <div className="w-[1068px] h-[885px] bg-white ml-[47px]">
                <div className="py-8 border-b-[1px] border-[#E9E9EB]">
                    <h1 className="ml-[47px] font-medium text-[18px] text-[#0E1422]">Add Product</h1>
                </div>
                <div className=" flex mt-16 gap-[74px]">
                    <div className="ml-12 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Title</label>
                            <input type='text' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Price</label>
                            <input type='email' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Category</label>
                            <input type='text' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Slug</label>
                            <input type='text' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>SKU</label>
                            <input type='text' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Description</label>
                            <textarea className='w-80 h-[128px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></textarea>
                        </div>
                        <button className='bg-black text-white w-[144px] h-11 py-3 px-6 rounded-[4px] text-sm mt-[51px]' >Save Product</button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Stock status</label>
                            <input type='text' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Available quantity</label>
                            <input type='text' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Images</label>
                            <div className='flex gap-2 w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px]'>
                                <img src='/images/upload.svg' />
                                <a className="font-medium text-[#878A92] text-sm">Choose product images</a>
                            </div>

                        </div>
                        <div className="flex mt-6 gap-8">
                            <img src='/images/image-x-1.png' />
                            <img src='/images/image-x-2.png' />
                            <img src='/images/image-x-3.png' />
                        </div>
                        <div className="flex flex-col gap-[9px] mt-[17px] ">
                            <h2 className="font-medium text-sm text-[#0E1422]">Color</h2>
                            <Box sx={{ resize: 'horizontal', }}>
                                <RadioGroup
                                    aria-labelledby="product-color-attribute"
                                    defaultValue="warning"
                                    sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
                                >
                                    {(['primary', 'danger', 'success', 'warning'] as const).map(
                                        (color) => (
                                            <Sheet
                                                key={color}
                                                sx={{
                                                    position: 'relative',
                                                    width: 32,
                                                    height: 32,
                                                    flexShrink: 0,
                                                    bgcolor: `${color}.solidBg`,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Radio
                                                    overlay
                                                    variant="solid"
                                                    color={color}

                                                    value={color}
                                                    slotProps={{
                                                        input: { 'aria-label': color },
                                                        radio: {
                                                            sx: {
                                                                display: 'contents',
                                                                '--variant-borderWidth': '2px',
                                                            },
                                                        },
                                                    }}
                                                    sx={{
                                                        '--joy-focus-outlineOffset': '4px',
                                                        '--joy-palette-focusVisible': (theme) =>
                                                            theme.vars.palette[color][500],
                                                        [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                                                            outlineWidth: '2px',
                                                        },
                                                    }}
                                                />
                                            </Sheet>
                                        ),
                                    )}
                                </RadioGroup>
                            </Box>
                        </div>

                        <div className="flex flex-col gap-[9px] mt-6">
                            <h2 className="font-medium text-sm text-[#0E1422]">Size</h2>
                            <Box sx={{ resize: 'horizontal', }}>
                                <RadioGroup
                                    aria-labelledby="product-size-attribute"
                                    defaultValue="M"
                                    sx={{ gap: 2, mt: 1, flexWrap: 'wrap', flexDirection: 'row' }}
                                >
                                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                        <Sheet
                                            key={size}
                                            sx={{
                                                position: 'relative',
                                                width: 40,
                                                height: 40,

                                                borderRadius: '0%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                '--joy-focus-outlineOffset': '4px',
                                                '--joy-palette-focusVisible': (theme) =>
                                                    theme.vars.palette.neutral.outlinedBorder,
                                                [`& .${radioClasses.checked}`]: {
                                                    [`& .${radioClasses.label}`]: {
                                                        fontWeight: 'lg',
                                                    },
                                                    [`& .${radioClasses.action}`]: {
                                                        '--variant-borderWidth': '2px',
                                                        borderColor: 'text.secondary',
                                                    },
                                                },

                                            }}
                                        >
                                            <Radio color="neutral" overlay disableIcon value={size} label={size} />
                                        </Sheet>
                                    ))}
                                </RadioGroup>
                            </Box>

                           
                        </div>



                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddProducts