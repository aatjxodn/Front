<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>샘플페이지</title>
</head>
<body>
	<%@ include file="../common/header.jsp" %>
	<div id="communicationForm">
		<div class="communicationForm_con">
			<div class="communicationForm_con1">
				<h1>소통방</h1>
				<h2>"샘플홈페이지"의 회원들과 소통해보세요!</h2>
			</div>
			<div class="communicationForm_con2">
				<h3>회원 로그인 후 서비스를 이용하실 수 있습니다.</h3>
				<div class="login_txt1">
		            <input type="text" id="LOGIN_ID" name="LOGIN_ID" maxlength="30" value="" placeholder="아이디를 입력하세요."><input type="button" class="login_but" value="로그인" onclick="javascript:fn_login();">
		        </div>
			</div>
			<div class="communicationForm_con3">
				<p>- 아직 회원이 아니신가요?<a href="signUp1.do">회원가입</a></p>
				<p>- 로그인 및 회원가입에 문제가 있는 경우 콜센터 (1111-2222) 로 전화주세요.</p>
			</div>
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>