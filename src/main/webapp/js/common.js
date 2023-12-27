/**
 *       기본 js
 */

var local = localStorage.getItem("clientAccessToken");

$(document).ready(function() {
	
		if (local != null) {
			var jwtParts = local.split('.');
		    var encodedPayload = jwtParts[1];
		    var decodedPayload = new TextDecoder().decode(base64UrlDecode(encodedPayload));
		    var payloadObject = JSON.parse(decodedPayload);
		    console.log(payloadObject);
		    console.log(payloadObject.iat);
	        
	        $(".header_con > .ul3").html("<ul><li><a style='cursor: pointer;' class='logout_but' onclick='javascript:fn_logout();'>로그아웃<a/></li><li><a class='myMenu_but' href='myMenu.do'>나의메뉴<a/></li></ul>");
		}
		
});


//Base64Url 디코딩 함수
function base64UrlDecode(input) {
    input = input.replace(/-/g, '+').replace(/_/g, '/');
    while (input.length % 4) {
        input += '=';
    }
    return new Uint8Array(Array.from(atob(input), c => c.charCodeAt(0)));
}

// 쿠키 확인
function fn_communication() {
	if (local == null) {
		alert("로그인이 필요한 서비스입니다.");
		location.href="login.do";
	} else {
		location.href="communication.do";
	}
}

//쿠키 확인
function fn_game1() {
	if (local == null) {
		alert("로그인이 필요한 서비스입니다.");
		location.href="login.do";
	} else {
		location.href="game1.do";
	}
}

//쿠키 확인
function fn_game2() {
	if (local == null) {
		alert("로그인이 필요한 서비스입니다.");
		location.href="login.do";
	} else {
		location.href="game2.do";
	}
}

