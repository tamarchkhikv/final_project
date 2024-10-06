import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';


const ColorRadioButton = () => {
    return (
        <Box sx={{ resize: 'horizontal', }}>
            <RadioGroup
                aria-labelledby="product-color-attribute"
                defaultValue="warning"
                sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
            >
                {(['primary', 'danger', 'success' ,] as const).map(
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
    );
}
export default ColorRadioButton;
