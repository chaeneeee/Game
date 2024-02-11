//랜덤 번호 지정
// 유저가 번호를 입력 그리고  go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 dowm!!
//  랜덤번호가 > 유저번호  up!!
// reset 버튼을 누르면 게임이 리셋된다.
//  5번의 기회를 다 쓰면 게임이 끝난다. (더이상 추측불가 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지않는다.


let computerNum =0;
let playButton = document.getElementById("play-Button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-aera")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-aera")
let history=[]
// html의 id값을 가져온다 id이름은 play Button 이다
// getElementById: 클래스 이름으로 선택
// qeurySelector:id,class 태그 등 다양한 방법으로 선택가능
// 스펠링 에러 진짜 조심하기 항상 복사 붙여넣기 하기!!
// 히스토리는 arr 값으로 하기 쭉 나왔던 값 여러개 있게하기위해
playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

// 이벤트는 click,focus,mouseover 등등 다양하다. 
// ,뒤 두번째는 이벤트 실행 시 어떤 함수를 부를지 
// 함수를 매개변수처럼 넘긴 것 () 넣으면x 함수는 () 붙이면 실행되는 것
// 우리는 클릭했을 때만 실행되게 하면 되므로 paly() 에 ()붙이지 않는다.
// 함수명()가로로 비워둔 이유 딱히 내용이 없고 userinput에만 잠깐쓰고 말거라 비워둠
function pickRandomNum() {
    computerNum =Math.floor(Math.random()*100)+1 ;
    console.log("정답", computerNum);
    // Math.random 함수는 0~1까지의 숫자를 반환 그래서 소수점으로 나옴
    // Math.floor 소수점 버리는 함수 우리 배웠찌
    // 소수점이 나오는 함수라 100곱해도 0~99까지 밖에 안니온다 우리가 원하는 범위는 100까지
// 그래서 +1 하나씩 범위가 늘어나는 것 그러면 0도 안나오고 100도 나오게 가능
// 1~100까지 랜덤 숫자 뽑기 자바스크립트 라고 치면 나온다 . 여러개 검색해서 보기
}
function play(){
 let userValue =  userInput.value
 if(userValue<1 || userValue>100){
    resultArea.textContent="1과 100사이의 숫자를 입력해주세요."
    return;
    // 1과 100사이로 범위제한 하기
    // return은 강력한 함수 return만 쓰고 끝내면 이 함수를 종료한다는 뜻이다.
    // 그래서 밑에있는  chances --; 함수 실행 x
 }
 if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해주세요"
    return;
 }
//  위에는 유효성검사 이게 1부터 100까지 숫자인가?
// 중복입력된 숫자는 아닌가?
 chances --;
 chanceArea.textContent=`남은기회: ${chances} 번`;
//  ""는 정적인 유동적이지 않은 것만 사용 가능
// 유동적인걸 쓰기 위해선 백틱 ` 사용
// ${chance}면 문자 chance가 아닌 유동적인 값 et chances 의 찬스값이 들어간다.
 console.log("chance",chances);
//  찬스가 -1씩 줄어든다
 console.log(userValue)
 if(userValue < computerNum){
    resultArea.textContent = "UP!!!"}
    else if(userValue > computerNum){
        resultArea.textContent="Down!!!"  
    }else{resultArea.textContent="맞췄습니다!!!"  
    }

    history.push(userValue)
    console.log(history)
    // 앞에서 1과100사이다 등 유효성 검사하고
    //  업다운맞추기 등 패쓰한 값을 히스토리 배열에 저장

    if(chances<1){
        gameOver=true;
    }
    if(gameOver == true){
        playButton.disabled = true;
    }
    if(userValue == computerNum){playButton.disabled = true
        chanceArea.textContent= "축하드립니다";
    }

}

 function reset(){
    userInput.value ="";
    // userinput 창이 깨끗하게 정리되고 "" 안에 아무것도 넣지 않으면 비었다는 뜻
    // 새로운 번호가 생기게 하기
    pickRandomNum();
    resultArea.textContent="결과값이 리셋되었습니다!";
    gameOver = false;
    playButton.disabled =false;
    chances = 5;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    userValueList = [];
  }


pickRandomNum();
