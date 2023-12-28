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
<script type="text/javascript" src="<c:url value='/js/game.js'/>"></script>

</head>

<body>
	<%@ include file="../common/header.jsp" %>
	
	<div id="resultModal"></div>
	
	<div id="game1Form">
		<div class="game1Form_con">
			<div class="game1Form_left">
				<img src="images/games/slot-machine-159972_640.png" id="left_image1">
				<div id="countdown"></div>
				<span><input type="button" id="choiceHol" value="홀" onclick="selectChoice('홀')"></span>
				<span><input type="button" id="choiceJjak" value="짝" onclick="selectChoice('짝')"></span>
				<div class="bat_con">
					<div class="pointArea"></div>
					<input type="text" id="battingText" placeholder="배팅액">
					<input type="button" id="battingBut" value="배팅하기" onclick="fn_batting()">
				</div>
			</div>
			<div class="game1Form_right">
				right
			</div>
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>