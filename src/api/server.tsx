import React from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { API_URL } from '../constants/Constants';
import { SetterOrUpdater } from 'recoil';

const gunurl = '/find/gungu';
const centerurl = '/find/center';
const indexurl = '/find/kind';
const findurl = '/find/abandonded';
const allurl = '/find/all';

const headerConfig = {
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
};
const handleError = (error: any) => {
   if (error.response) {
      error.response.data;
   } else if (error.request) {
      error.request;
   } else {
      error.message;
   }
};

const getgunAPI = async (Si_name: string, setGun: SetterOrUpdater<any>) => {
   await axios
      .post(API_URL + gunurl, null, {
         params: { Si_name },
         headers: headerConfig,
      })
      .then(response => {
         setGun(response.data);
      })
      .catch(error => {
         handleError(error);
      });
};
const getCenterAPI = async (si_name: string, gungu_name: string, setCenter: SetterOrUpdater<any>) => {
   await axios
      .post(API_URL + centerurl, null, {
         params: { si_name, gungu_name },
         headers: headerConfig,
      })
      .then(response => {
         setCenter(response.data);
      })
      .catch(error => {
         handleError(error);
      });
};
const getIndexAPI = async (kind_name: string, setIndex: SetterOrUpdater<any>) => {
   await axios
      .post(API_URL + indexurl, null, {
         params: { kind_name },
         headers: headerConfig,
      })
      .then(response => {
         setIndex(response.data);
      })
      .catch(error => {
         handleError(error);
      });
};
const findAPI = async (
   center: string,
   end_time: string,
   gungu_code: string,
   kind: string,
   kind_code: string,
   neuter: string,
   si_code: string,
   start_time: string,
   state: string,
   setPetindex: SetterOrUpdater<any>,
) => {
   await axios
      .post(API_URL + findurl, null, {
         params: {
            center,
            end_time,
            gungu_code,
            kind,
            kind_code,
            neuter,
            si_code,
            start_time,
            state,
         },
         headers: headerConfig,
      })
      .then(response => {
         console.log(response.data);
         setPetindex(response.data);
      })
      .catch(error => {
         handleError(error);
      });
};
const allAPI = async (
   id: string,
   sexCd: string,
   kindCd: string,
   processState: string,
   careAddr: string,
   noticeSdt: string,
   weight: string,
   chargeNm: string,
   desertionNo: string,
   careNm: string,
   careTel: string,
   happenPlace: string,
   officetel: string,
   orgNm: string,
   filename: string,
   popfile: string,
   noticeEdt: string,
   neuterYn: string,
   specialMark: string,
   colorCd: string,
   happenDt: string,
   age: string,
   setAllData: SetterOrUpdater<Array<any>>,
) => {
   await axios
      .get(API_URL + allurl, {
         params: {
            id,
            sexCd,
            kindCd,
            processState,
            careAddr,
            noticeSdt,
            weight,
            chargeNm,
            desertionNo,
            careNm,
            careTel,
            happenPlace,
            officetel,
            orgNm,
            filename,
            popfile,
            noticeEdt,
            neuterYn,
            specialMark,
            colorCd,
            happenDt,
            age,
         },
         headers: headerConfig,
      })
      .then(async (response: AxiosResponse) => {
         if (response.status === 200) {
            console.log(response.data);
            setAllData(response.data);
         }
      })
      .catch(error => {
         handleError(error);
      });
};
export { getgunAPI, getCenterAPI, getIndexAPI, findAPI, allAPI };
