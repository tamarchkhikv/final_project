import React from "react";
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

const Categories = () => {

    return (
        <div className="w-[248px] h-[828px] px-3 pt-6 pb-8 border-[1px] border-[#E6E7E8]">
            <h2 className="font-medium text-sm text-[#0E1422]">Categories</h2>
            <ul>
                <div className="flex px-1 py-3 gap-2 border-b-[1px] border-[#E9E9EB]">
                    <input type='checkbox'></input>
                    <li className="font-normal text-sm text-[#474B57] ">Perfume</li>
                </div>


                <div className="flex px-1 py-3 gap-2 border-b-[1px] border-[#E9E9EB]">
                    <input type='checkbox'></input>
                    <li className="font-normal text-sm text-[#474B57] ">Trousers</li>
                </div>


                <div className="flex px-1 py-3 gap-2 border-b-[1px] border-[#E9E9EB]">
                    <input type='checkbox'></input>
                    <li className="font-normal text-sm text-[#474B57] ">Shoe</li>
                </div>

                <div className="flex px-1 py-3 gap-2 border-b-[1px] border-[#E9E9EB]">
                    <input type='checkbox'></input>
                    <li className="font-normal text-sm text-[#474B57] ">Handbag</li>
                </div>

                <div className="flex px-1 py-3 gap-2 border-b-[1px] border-[#E9E9EB]">
                    <input type='checkbox'></input>
                    <li className="font-normal text-sm text-[#474B57] ">Hat</li>
                </div>

                <div className="flex px-1 py-3 gap-2 border-b-[1px] border-[#E9E9EB]">
                    <input type='checkbox'></input>
                    <li className="font-normal text-sm text-[#474B57] ">Thermos</li>
                </div>
            </ul>

            <div className="flex flex-col gap-3 mt-10 ">
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

            <div className="flex flex-col gap-2 mt-10">
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

                <div className="mt-10"></div>
                <h2 className="font-medium text-sm text-[#0E1422]">Price</h2>
                
            </div>
        



        </div >
    )

}
export default Categories;