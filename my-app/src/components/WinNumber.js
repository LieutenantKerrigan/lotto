import { useEffect, useState } from "react";

const WinNumber = () => {
  const [lottoNumber, setLottoNumber] = useState({});

  const getData = async (now) => {
    const date = now || "last";
    const res = await fetch(`http://localhost:5000/lottos/${date}`).then(
      (res) => res.json()
    );
    setLottoNumber(res);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(lottoNumber);
  return (
    <div>
      <div>
        {lottoNumber.drwNo}회 당첨결과
        <br /> [{lottoNumber.drwNoDate}]
      </div>
      <div className="WinNumber">
        {lottoNumber.drwtNo1} {lottoNumber.drwtNo2} {lottoNumber.drwtNo3}{" "}
        {lottoNumber.drwtNo4} {lottoNumber.drwtNo5} {lottoNumber.drwtNo6} +{" "}
        {lottoNumber.bnusNo}
      </div>
      <div className="">
        1등 총 당첨금{" "}
        {Math.round(parseInt(lottoNumber.firstAccumamnt) / 10 ** 8)}억원
      </div>
      <div>
        {Math.round(parseInt(lottoNumber.firstWinamnt) / 10 ** 8)}억원{" "}
        {lottoNumber.firstPrzwnerCo}명
      </div>
      <input
        type="button"
        value="이전"
        onClick={() => {
          getData(lottoNumber.drwNo - 1);
        }}
      />
      <input
        type="button"
        value="다음"
        onClick={() => {
          getData(lottoNumber.drwNo + 1);
        }}
      />
    </div>
  );
};

export default WinNumber;
