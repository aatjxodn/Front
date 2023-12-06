<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>테스트 웹 메인</title>

<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/board.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/login.js'/>"></script>
<script>

</script>

</head>
<body>
	<%@ include file="common/header.jsp" %><br/>
	<div>
		<div>
			<table>
				<tr>
					<th style="cursor: pointer;" onclick="javascript:fn_notice();">공지사항</th>
					<th style="cursor: pointer;" onclick="javascript:fn_faq();">자주하는 질문</th>
				</tr>
				<tr>
					<td id="noticeColumn"></td>
					<td id="faqColumn"></td>
				</tr>
			</table>
		</div>
	</div>
	<%@ include file="common/footer.jsp" %>
</body>
</html>