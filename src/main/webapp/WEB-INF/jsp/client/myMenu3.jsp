<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>샘플페이지</title>
<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>

</head>
<body>
	<%@ include file="../common/header.jsp" %>
	<div id="signUp1">
		<div class="signUp1_con">
			<div class="signUp1_head">
				<h1>나의메뉴</h1>
				<h2>기본정보 및 비밀번호 변경 및 회원탈퇴를 진행하실 수 있습니다.</h2>
				<table>
					<tr>
						<th><a href="myMenu1.do">기본정보</a></th>
						<th><a href="myMenu2.do">비밀번호변경</a></th>
						<th style="background-color: #014b99; color:white;">회원탈퇴</th>
					</tr>
				</table>
			</div>
			
			<div class="signUp3_but">
				<input type="button" value="탈퇴하기" onclick="javascript:fn_completeJoin();">
				<input type="button" value="취소" onclick="javascript:fn_exit();">
			</div>			
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>