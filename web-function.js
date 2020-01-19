var maincon = {
  setColor: function(color) {
    document.querySelector(".main-content").style.color = color;
  },
  setBackgroundColor: function(color) {
    document.querySelector(".main-content").style.backgroundColor = color;
  }
};
function night(self) {
  if (self.value === "night") {
    maincon.setColor("black");
    maincon.setBackgroundColor("white");
    self.value = "day";
  } else {
    maincon.setColor("white");
    maincon.setBackgroundColor("black");
    self.value = "night";
  }
}
//위에는 color 속성

// 6개의 로또 번호를 저장할 배열
function lotto() {
  var lotto = new Array(6);
  // 추첨된 로또번호의 갯수
  var count = 0;
  // 번호중복 방지용 변수
  var mFlag = true;
  // 6개의 로또번호를 얻을때까지 반복
  while (count < 6) {
    var number;
    // 랜덤번호 추출
    number = parseInt(Math.random() * 45) + 1;
    // 중복확인
    for (var i = 0; i < count; i++) if (lotto[i] == number) mFlag = false;
    // 중복된 번호가 아니면 로또 번호배열에 추가
    if (mFlag) {
      lotto[count] = number;
      count++;
    }
    //변수 초기화
    mFlag = true;
  }
  lotto.sort(function(a, b) {
    return a - b;
  });
  alert("Lotto Number : " + lotto);
}
//로또
