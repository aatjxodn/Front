/**
 *       기본 js
 */


$(document).ready(function() {
	
		// fn_notice();
	
		var local = localStorage.getItem("clientAccessToken");
         
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
