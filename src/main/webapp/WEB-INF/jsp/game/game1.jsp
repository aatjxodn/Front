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
	<%@ include file="../common/header.jsp" %><br/>
	<div id="game1Form">
		<div class="game1Form_con">
			<div class="game1Form_left">
				<div id="countdown"></div>
				<span><input type="button" id="choiceHol" value="홀" onclick="selectChoice('홀')"></span>
				<span><input type="button" id="choiceJjak" value="짝" onclick="selectChoice('짝')"></span>
				<div>
					<input type="button" value="배팅하기" onclick="fn_batting()">
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