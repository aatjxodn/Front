<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Front</title>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
$(document).ready(function() {
    const apiUrl = "http://192.168.168.41:8081/BackAPI/rest_homepage.do";

    const headers = {
        "CCODE": "COMPANY",
        "TYPE": "WEB",
        "TR": "BR00001",
        "Content-Type": "application/json"
    };

    const bodyData = {
        LIMIT: 5,
        OFFSET: 0,
        TABLE_NAME: "WEB_BOARD_NOTICE"
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
            console.log("서버 응답 데이터:", data);
            console.log("서버 응답 데이터:", data.selectBoardList);
            console.log("서버 응답 데이터:", data.selectBoardListCount);

            renderBoardList(data.selectBoardList);
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });

    function renderBoardList(boardList) {
        // 기존의 목록을 비우고 새로운 목록을 생성
        $("#noticeColumn").empty();
        $("#faqColumn").empty();

        // 받아온 데이터를 반복하여 목록에 추가
        for (let i = 0; i < boardList.length; i++) {
            
        	const boardItem = boardList[i].SUBJECT;
            $("#noticeColumn").append("<p>" + boardItem + "</p>");
        }
    }
});
</script>

</head>
<body>
	<div>
		<div>
			<table>
				<tr>
					<th>공지사항</th>
					<th>자주하는 질문</th>
				</tr>
				<tr>
					<td id="noticeColumn"></td>
					<td id="faqColumn"></td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>