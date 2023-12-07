<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>샘플페이지</title>

<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/login.js'/>"></script>

</head>
<body>
	<%@ include file="../common/header.jsp" %><br/>
	<div id="loginForm">
		<div class="loginForm_con1">
			<h1>로그인</h1>
			<h2>로그인 후 서비스를 이용하세요.</h2>
		</div>
		<div class="loginForm_con2">
			<div class="login_txt1">
	            <input type="text" id="LOGIN_ID" name="LOGIN_ID" maxlength="30" value="" placeholder="아이디를 입력하세요.">
	        </div>
	        <div class="login_txt2">
	            <input type="password" id="LOGIN_PW" name="LOGIN_PW" maxlength="30" value="" placeholder="비밀번호를 입력하세요">
	        </div>
	        <div class="login_txt3">
	        	<label><input type="checkbox" name="idSaveCheck" id="idSaveCheck">아이디 저장</label>
	        	<a href="findId.do">아이디 찾기</a>
	        	<a href="findPw.do">비밀번호 찾기</a>
	        </div>
	        <div class="login_txt4">
	        	<input type="button" class="login_but" value="로그인" onclick="javascript:fn_login();">
	        </div>
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>