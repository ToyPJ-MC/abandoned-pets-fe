import React, { useEffect, useState } from "react";
import { ProfileAPI } from "../api/auth";
import { useRecoilState } from "recoil";
import { petregistDataState, userDataState } from "../states/atom";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Paper } from "@mui/material";
import { likelistAPI, removelikelistAPI } from "../api/server";

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
    } else {
      setCheckitems([]);
    }
  };
  const singlecheckbtn = (checked: boolean, noticeNo: string) => {
    if (checked) {
      setCheckitems([...checkitems, noticeNo]);
    } else {
      setCheckitems(checkitems.filter((item) => item !== noticeNo));
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
  const deleteclick = async () => {
    await removelikelistAPI(checkitems);
    location.href = "/profile";
  };

  return (
    <div className="overflow-hidden">
      <div className="text-6xl font-bold mt-6 ml-8" onClick={homeClick}>
        MJ PET
      </div>
      <div className="grid grid-cols-1 mt-10 place-items-start ml-8 md:grid-cols-2">
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
              <img src={user.profile} className="h-full mt-6"></img>
              <h1>{user.name}</h1>
              <h3>이메일: {user.email}</h3>
            </div>
          </Paper>
        </div>
        <div className="h-full">
          <h1>
            내가 관심 있는<br></br>유기동물
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <button
              className="btn btn-ghost bg-white text-lg font-bold outline-none"
              onClick={allcheck}
            >
              전체선택
            </button>
            <button
              className="btn btn-ghost bg-white text-lg font-bold outline-none"
              onClick={singlecheck}
            >
              개별선택
            </button>
            <div>
              <button
                onClick={deleteclick}
                className="btn btn-ghost bg-white text-lg font-bold outline-none"
              >
                삭제
              </button>
            </div>
          </div>
          <div className="overflow-y-auto h-96 outline mt-4 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
                      checked={checkitems.length === like.length}
                    />
                  ) : null}
                  <div className="font-bold text-lg">
                    <Card
                      sx={{ minWidth: 300, borderRadius: 5 }}
                      elevation={0}
                      variant="outlined"
                    >
                      <CardContent>
                        <img src={item.popfile} className="h-60"></img>
                        <li>{item.kindCd}</li>
                        <li>{item.colorCd}</li>
                        <li>{item.age}</li>
                        <li>{item.weight}</li>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
