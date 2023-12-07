<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>

</head>
<body>
	<div id="header">
		<div class="header_con">
			<ul class="ul1">
				<li><a href="home.do">로고</a></li>
			</ul>
			<ul class="ul2">
				<li><a href="home.do">주요기능</a></li>
				<li><a href="home.do">이용안내</a></li>
				<li><a href="home.do">게시판</a></li>
				<li><a href="home.do">고객센터</a></li>
			</ul>
			<ul class="ul3">
				<li><a href="login.do">로그인</a></li>
				<li><a href="signUp1.do">회원가입</a></li>
			</ul>
		</div>
	</div>
	<div id="header_line"></div>
</body>
</html>