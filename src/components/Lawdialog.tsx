import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';

export interface DialogProps {
   open: boolean;
   onClose: (value: boolean) => void;
}

const Lawdialog = (props: DialogProps) => {
   const { onClose, open } = props;
   const handleClose = () => {
      onClose(false);
   };
   return (
      <Dialog onClose={handleClose} open={open}>
         <DialogTitle>공고</DialogTitle>
         <DialogContent dividers>
            <Typography>
               「동물보호법」 제17조, 시행령7조 및 동법 시행규칙 제20조에 따라 유기·유실동물을 보호하고 있는 경우에는
               소유자 등이 보호조치 사실을 알 수 있도록 7일 동안 공고하여야 합니다
            </Typography>
            <Typography>
               공고 중인 동물 소유자는 해당 시군구 및 동물보호센터에 문의하시어 동물을 찾아가시기 바랍니다. 다만,
               「동물보호법」 제19조 및 동법 시행규칙 제21조에 따라 소유자에게 보호비용이 청구될 수 있습니다.
            </Typography>
            <Typography>
               또한 「동물보호법」 제17조에 따른 공고가 있는 날부터 10일이 경과하여도 소유자 등을 알 수 없는 경우에는
               「유실물법」 제12조 및 「민법」 제253조의 규정에도 불구하고 해당 시·도지사 또는 시장·군수·구청장이 그
               동물의 소유권을 취득하게 됩니다.
            </Typography>
         </DialogContent>
      </Dialog>
   );
};
export default Lawdialog;
