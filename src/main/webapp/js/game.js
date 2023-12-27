/**
 *            게임 js
 */


// 테스트
const apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
// const apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";
 

var selectedChoice = null;

function selectChoice(choice) {
  selectedChoice = choice;
  console.log("선택된 값:", selectedChoice);
}

function fn_batting() {
  if (selectedChoice) {
    console.log("배팅 값:", selectedChoice);
    
    const userConfirm = confirm(selectedChoice + "에 배팅하시겠습니까?");
    
    if (userConfirm == true){
    	alert (selectedChoice + "에 배팅 성공!")
    	
    	const headers = {
    	    "CCODE": "COMPANY",
    	    "TYPE": "WEB",
    	    "TR": "GG00001",
    	    "Content-Type": "application/json"
    	};

    	const bodyData = {
    	    choice: selectedChoice
    	};
    	
    	$.ajax({
            url: apiUrl,
            type: "POST",
            headers: headers,
            contentType: "application/json",
            data: JSON.stringify(bodyData),
            success: function(data) {
            	
                console.log("서버 응답 데이터:", data);
                console.log("서버 응답 데이터:", data.gameResult);

            },
            error: function(error) {
                console.error("API 호출 중 오류 발생:", error);
            }
        });
    	
    } else {
    	alert ("취소하셨습니다.")
    }
    	
  } else {
	  alert("홀 또는 짝 중 하나를 선택해주세요.");
  }
}

$(document).ready(function() {
	function startCountdown() {
	      var countdownElement = document.getElementById('countdown');

	      function updateCountdown() {
	        var currentTime = new Date();
	        var seconds = 60 - currentTime.getSeconds();

	        if (seconds >= 0) {
	          var displaySeconds = (seconds < 10 ? "0" : "") + seconds;
	          countdownElement.textContent = "남은 시간: " + displaySeconds + "초";
	        } else {
	          countdownElement.textContent = "남은 시간: 00초";
	        }
	      }

	      // 초기 카운트 다운 시작
	      updateCountdown();

	      // 1초마다 카운트 다운 업데이트
	      setInterval(updateCountdown, 1000);
	    }
	    // 페이지가 로드될 때 카운트 다운 시작
	    startCountdown();
	
});



