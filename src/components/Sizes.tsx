import React from "react";
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';



const Sizes = () => {
    return (
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
        </div>
    )
}

export default Sizes