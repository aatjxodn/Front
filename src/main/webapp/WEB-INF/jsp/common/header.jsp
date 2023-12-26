<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title></title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/header.js'/>"></script>

</head>
<body>
	<div id="header">
		<div class="header_con">
			<ul class="ul1">
				<li><a href="home.do">로고</a></li>
			</ul>
			<ul class="ul2">
				<li>
					<a href="home.do">주요기능</a>
					<ul>
						<li><a href="#">주요기능1</a></li>
						<li><a href="#">주요기능2</a></li>
					</ul>
				</li>
				<li>
					<a href="home.do">이용안내</a>
					<ul>
						<li><a href="#">사이트소개</a></li>
						<li><a href="#">이용목적</a></li>
					</ul>
				</li>
				<li>
					<a href="selectNotice.do">게시판</a>
					<ul>
						<li><a href="selectNotice.do">공지사항</a></li>
						<li><a href="selectFaq.do">자주하는질문</a></li>
						<li><a style="cursor: pointer;" onclick="javascript:fn_communication();">소통방</a></li>
					</ul>
				</li>
				<li>
					<a href="home.do">고객센터</a>
					<ul>
						<li><a href="#">고객문의</a></li>
						<li><a href="#">오시는길</a></li>
					</ul>
				</li>
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