import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileAPI } from "../api/auth";
import { useRecoilState } from "recoil";
import { petregistDataState, userDataState } from "../states/atom";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { likelistAPI } from "../api/server";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userDataState);
  const [like, setLike] = useRecoilState(petregistDataState);
  const [check, setCheck] = useState(false);
  const [scheck, setScheck] = useState(false);
  const [checkitems, setCheckitems] = useState<Array<string>>([]);

  useEffect(() => {
    ProfileAPI(setUser);
  }, []);
  const homeClick = () => {
    navigate("/");
  };
  useEffect(() => {
    likelistAPI(setLike);
  }, []);

  const allcheckbtn = (checked: boolean) => {
    if (checked) {
      const noticeArray: any = [];
      like.map((item) => noticeArray.push(item.noticeNo));
      setCheckitems(noticeArray);
      console.log(checkitems);
    } else {
      setCheckitems([]);
      console.log(checkitems);
    }
  };
  const singlecheckbtn = (checked: boolean, noticeNo: string) => {
    if (checked) {
      setCheckitems([...checkitems, noticeNo]);
      console.log(checkitems);
    } else {
      setCheckitems(checkitems.filter((item) => item !== noticeNo));
      console.log(checkitems);
    }
  };
  const allcheck = () => {
    setScheck(false);
    setCheck(true);
  };
  const singlecheck = () => {
    setCheck(false);
    setScheck(true);
  };
  useEffect(() => {
    console.log(checkitems);
  }, []);
  const testclick = () => {
    console.log(checkitems);
  };

  return (
    <>
      <div className="text-6xl font-bold mt-6 ml-8" onClick={homeClick}>
        MJ PET
      </div>
      <div className="grid grid-cols-2 mt-10 place-items-start ml-36">
        <div className="text-center grid place-items-center">
          <Paper
            sx={{
              height: "600px",
              width: "400px",
              paddingTop: 5,
              paddingBottom: 10,
              borderRadius: "30px",
            }}
            elevation={0}
            variant="outlined"
          >
            <h1>
              {"<"}Profile{">"}
            </h1>
            <div>
              <img src={user.picture} className="h-full mt-6"></img>
              <h1>{user.nickname}</h1>
              <h3>이메일: {user.email}</h3>
            </div>
          </Paper>
        </div>
        <div>
          <h1>내가 관심 있는 유기동물</h1>
          <div className="grid grid-cols-2 gap-6">
            <button className="btn btn-ghost" onClick={allcheck}>
              전체선택
            </button>
            <button className="btn btn-ghost" onClick={singlecheck}>
              개별선택
            </button>
          </div>
          <button onClick={testclick}>TEST</button>
          <div className="grid grid-cols-2 gap-6 mb-8 mt-4">
            {like.map((item, index) => (
              <div key={index} className="list-none">
                {scheck == true ? (
                  <input
                    type="checkbox"
                    value={item.noticeNo}
                    onChange={(e) =>
                      singlecheckbtn(e.target.checked, e.target.value)
                    }
                    checked={checkitems.includes(item.noticeNo)}
                  />
                ) : check == true ? (
                  <input
                    type="checkbox"
                    value={item.noticeNo}
                    onChange={(e) => allcheckbtn(e.target.checked)}
                    defaultChecked={
                      checkitems.length === like.length ? true : false
                    }
                  />
                ) : null}
                {/* <div key={index} className="list-none"> */}
                <img src={item.popfile} className="h-60"></img>
                <li>{item.kindCd}</li>
                <li>{item.colorCd}</li>
                <li>{item.age}</li>
                <li>{item.weight}</li>
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
