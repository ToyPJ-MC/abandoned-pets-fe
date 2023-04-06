const Errorpage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  return (
    <div>
      <div>에러페이지</div>
      <div>{code}</div>
    </div>
  );
};
export default Errorpage;
