import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';


const RadioButton =()=> {
  return (
    <Box sx={{ resize: 'horizontal',  }}>
      <RadioGroup
        aria-labelledby="product-size-attribute"
        defaultValue="M"
        sx={{ gap: 2, mt:1, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {[ 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
  );
}
export default RadioButton;
