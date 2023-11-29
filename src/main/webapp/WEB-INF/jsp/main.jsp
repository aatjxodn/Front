<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Front TEST</title>

<!-- <script src="../../css/common.css"></script> -->
<%-- <link rel="stylesheet" type="text/css" href="<c:url value='../../css/common.css' />"> --%>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
$(document).ready(function() {
	
		var local = localStorage.getItem("clientAccessToken");
         
		if (local != null) {
			var jwtParts = local.split('.');
		    var encodedPayload = jwtParts[1];
	        var decodedPayload = atob(encodedPayload);
	        var payloadObject = JSON.parse(decodedPayload);
	        console.log(payloadObject);
	        $("#localStrogeForm").html("<div>" + payloadObject.accessToken.NAME + " 님 로그인 되었습니다</div>");
		}
});

function fn_board() {
	const apiUrl = "http://192.168.168.41:8081/BackAPI/rest_homepage.do";

    const headers = {
        "CCODE": "COMPANY",
        "TYPE": "WEB",
        "TR": "BR00001",
        "Content-Type": "application/json"
    };

    const bodyData = {
        LIMIT: 5,
        OFFSET: 0,
        TABLE_NAME: "WEB_BOARD_NOTICE"
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
            console.log("서버 응답 데이터:", data);
            console.log("서버 응답 데이터:", data.selectBoardList);
            console.log("서버 응답 데이터:", data.selectBoardListCount);

            renderBoardList(data.selectBoardList);
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });

    function renderBoardList(boardList) {
        // 기존의 목록을 비우고 새로운 목록을 생성
        $("#noticeColumn").empty();
        $("#faqColumn").empty();

        // 받아온 데이터를 반복하여 목록에 추가
        for (let i = 0; i < boardList.length; i++) {
        	const boardItem = boardList[i].SUBJECT;
            $("#noticeColumn").append("<p>" + boardItem + "</p>");
        }
    }
}

function fn_login() {
	
	const apiUrl = "http://192.168.168.41:8081/BackAPI/rest_homepage.do";

    const headers = {
        "CCODE": "COMPANY",
        "TYPE": "WEB",
        "TR": "CR00001",
        "Content-Type": "application/json"
    };
    
    const bodyData = {
        LOGIN_ID: document.getElementById("LOGIN_ID").value,
        LOGIN_PW: document.getElementById("LOGIN_PW").value
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
            console.log("서버 응답 데이터:", data);
            
            var jwtToken = data.clientAccessToken;
            var jwtParts = jwtToken.split('.');
	        var encodedPayload = jwtParts[1];
	        var decodedPayload = atob(encodedPayload);
	        var payloadObject = JSON.parse(decodedPayload);
	        console.log(payloadObject);
            
            localStorage.setItem("clientAccessToken", data.clientAccessToken);
			
            $("#localStrogeForm").html("<div>" + payloadObject.accessToken.NAME + " 님 로그인 되었습니다</div>");
            
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });

}

</script>

</head>
<body>
	<div>
		<div>
			<span>Front TEST</span>
			<div id="localStrogeForm">
				<div class="login_txt">
		            <input type="text" id="LOGIN_ID" name="LOGIN_ID" maxlength="30" value="" placeholder="아이디를 입력하세요.">
		        </div>
		        <div class="login_txt">
		            <input type="password" id="LOGIN_PW" name="LOGIN_PW" maxlength="30" value="" placeholder="비밀번호를 입력하세요">
		        </div>
		        <div class="checkbox"><label><input type="checkbox" name="idSaveCheck" id="idSaveCheck">아이디/비밀번호 저장</label></div>
		        <div class="login_txt">
		        	<input type="button" value="로그인" onclick="javascript:fn_login();">
		        </div>
			</div>
			<table>
				<tr>
					<th>공지사항</th>
					<th>자주하는 질문</th>
				</tr>
				<tr>
					<td id="noticeColumn"></td>
					<td id="faqColumn"></td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>