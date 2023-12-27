/**
 *            게임 js
 */


// 테스트
const apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
// const apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";
 
function fn_one() {
	
	const headers = {
	    "CCODE": "COMPANY",
	    "TYPE": "WEB",
	    "TR": "GG00001",
	    "Content-Type": "application/json"
	};

	const bodyData = {
	    choice: document.getElementById("choice").value
	};
	
	$.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
            console.log("서버 응답 데이터:", data);

        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });
	
	
    const userConfirm = confirm("홀에 배팅하시겠습니까?");
    if (userConfirm == true){alert ("홀에 배팅 성공!")} else {alert ("취소하셨습니다.")}
    
}

function fn_two() {
	
	const headers = {
	    "CCODE": "COMPANY",
	    "TYPE": "WEB",
	    "TR": "GG00001",
	    "Content-Type": "application/json"
	};

	const bodyData = {
	    choice: document.getElementById("choice").value
	};
	
	$.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
            console.log("서버 응답 데이터:", data);

        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });
	
	
	const userConfirm = confirm("짝에 배팅하시겠습니까?");
    if (userConfirm == true){alert ("짝에 배팅 성공!")} else {alert ("취소하셨습니다.")}
    
}