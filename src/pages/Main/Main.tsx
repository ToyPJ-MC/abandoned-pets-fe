import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import Lawdialog from '../../components/Lawdialog';
import Petnotice from '../Petnotice';
import Search from '../Search';

const Main = () => {
   const [open, setOpen] = useState(true);

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <Lawdialog open={open} onClose={handleClose} />
         <div className="h-full w-full flex flex-col">
            <div className="ml-10">
               <h1 className="text-green-700">MJ PET</h1>
            </div>
            <div className="left-1/2 mt-10">
               <Search />
               <Petnotice />
            </div>
         </div>
      </>
   );
};
export default Main;
