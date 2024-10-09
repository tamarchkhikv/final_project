import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
        ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
        }),
    },
}));




const ChartThree = () => {
    return (
        <div className="w-[328px] h-[187px] border-[1px] rounded-lg bg-white p-6">
            <div className="flex justify-between">
                <div>
                    <h2 className="font-semibold text-base text-[#1C1D22]">Orders</h2>
                    <h3 className="font-medium text-[12px] text-[#5C5F6A] mt-[6px]">Monthly GOALS : 1,000</h3>
                </div>
                <span className="font-bold text-2xl text-[#1C1D22]">734</span>
            </div>
            <div className="mt-11">
                <Stack spacing={2} sx={{ flexGrow: 1 }}>

                    <br />
                    <BorderLinearProgress
                        variant="determinate" value={80} />
                </Stack>
            </div>
        </div>
    );
}
export default ChartThree;