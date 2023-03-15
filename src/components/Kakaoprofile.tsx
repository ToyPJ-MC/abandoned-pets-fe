import { Button } from "@mui/material";

const Kakaoprofile = () => {
  const profile = () => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      data: {
        property_keys: ["kakao_account.email"],
      },
    });
  };
  return (
    <div>
      <Button onClick={profile}>프로필</Button>
    </div>
  );
};
export default Kakaoprofile;
