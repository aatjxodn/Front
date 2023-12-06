<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>

<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/login.js'/>"></script>

</head>
<body>
	<%@ include file="../common/header.jsp" %><br/>
	<div id="loginForm">
		<span>로그인</span>
		<div class="loginForm_con">
			<div class="login_txt">
	            <input type="text" id="LOGIN_ID" name="LOGIN_ID" maxlength="30" value="" placeholder="아이디를 입력하세요.">
	        </div>
	        <div class="login_txt">
	            <input type="password" id="LOGIN_PW" name="LOGIN_PW" maxlength="30" value="" placeholder="비밀번호를 입력하세요">
	        </div>
	        <div class="checkbox"><label><input type="checkbox" name="idSaveCheck" id="idSaveCheck">아이디/비밀번호 저장</label></div>
	        <div class="login_txt">
	        	<input type="button" class="login_but" value="로그인" onclick="javascript:fn_login();">
	        </div>
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>