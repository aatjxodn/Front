/**
 * 게임 js
 */

// 테스트
const apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
// const apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";

var selectedChoice = null;
var local = localStorage.getItem("clientAccessToken");
var jwtParts = local.split('.');
var encodedPayload = jwtParts[1];
var decodedPayload = new TextDecoder().decode(base64UrlDecode(encodedPayload));
var payloadObject = JSON.parse(decodedPayload);
console.log(payloadObject);

$(document).ready(function() {
	
	if (localStorage.getItem('successFlag') == 'true') {
		$(".bat_con > .pointArea").html("정산 중.....");
		$('#battingText').val('');
	    $('#battingText').attr('placeholder', '배팅액');
	} else {
		fn_selectPoint();
	}
	
	startCountdown();

	$("#choiceHol").on("click", function() {
		document.getElementById('choiceHol').disabled = true;

		$('#choiceHol').css('filter', 'brightness(70%)');
		$('#choiceHol').css('border', '3px solid black');

		$('#choiceJjak').css('filter', 'brightness(100%)');
		$('#choiceJjak').css('border', '3px solid #DC143C');
	});

	$("#choiceJjak").on("click", function() {
		document.getElementById('choiceJjak').disabled = true;

		$('#choiceJjak').css('filter', 'brightness(70%)');
		$('#choiceJjak').css('border', '3px solid black');

		$('#choiceHol').css('filter', 'brightness(100%)');
		$('#choiceHol').css('border', '3px solid #1E90FF');
	});

});

// 현재시간 체크 및 게임 시간 체크
function startCountdown() {

	var countdownElement = document.getElementById('countdown');

	function updateCountdown() {
		var currentTime = new Date();
		var seconds = 60 - currentTime.getSeconds();

		if (seconds >= 0) {
			var displaySeconds = (seconds < 10 ? "0" : "") + seconds;
			countdownElement.textContent = "남은 시간: " + displaySeconds + "초";

			if (seconds < 10 || seconds > 50) {
				
				document.getElementById('battingBut').disabled = true;
				document.getElementById('choiceHol').disabled = true;
				document.getElementById('choiceJjak').disabled = true;
				document.getElementById('battingText').disabled = true;
				$('.game1Form_left').css('filter', 'brightness(70%)');
				$('.game1Form_left').css('background-color', '#32CD32');
				$('#choiceHol').css('border', '3px solid #1E90FF');
				$('#choiceJjak').css('border', '3px solid #DC143C');
				
			} else {
				
				document.getElementById('battingBut').disabled = false;
				document.getElementById('choiceHol').disabled = false;
				document.getElementById('choiceJjak').disabled = false;
				document.getElementById('battingText').disabled = false;
				$('.game1Form_left').css('filter', 'brightness(100%)');
				$('.game1Form_left').css('background-color', '#32CD32');
			}

			if (seconds === 1) {
				
				if (localStorage.getItem('gameResult') == "짝" || localStorage.getItem('gameResult') == "홀") {
					setTimeout(function() {
						$("#resultModal").html("게임 결과: " + localStorage.getItem('gameResult') + "! <a class='modal_close_btn'>닫기</a>");
						modal('resultModal');
					}, 1000);
				} else {
					
					const headers = {
						"CCODE" : "COMPANY",
						"TYPE" : "WEB",
						"TR" : "GG00001",
						"Content-Type" : "application/json"
					};

					const bodyData = {
						CHOICE : "",
						GAMEPOINT : "",
						IDX : payloadObject.accessToken.IDX
					};

					$.ajax({
						url : apiUrl,
						type : "POST",
						headers : headers,
						contentType : "application/json",
						data : JSON.stringify(bodyData),
						success : function(data) {

							localStorage.setItem('gameResult', data.gameResult);

						},
						error : function(error) {
							console.error("API 호출 중 오류 발생:", error);
						}
					});
					
					setTimeout(function() {
						$("#resultModal").html("게임 결과: " + localStorage.getItem('gameResult') + "! <a class='modal_close_btn'>닫기</a>");
						modal('resultModal');
					}, 1000);
				}
				
				setTimeout(function() {
					fn_selectPoint()
					localStorage.removeItem('successFlag');
					localStorage.removeItem('gameResult');
				}, 1000);
				
			}

			if (localStorage.getItem('successFlag') === 'true') {
				document.getElementById('battingBut').disabled = true;
				document.getElementById('choiceHol').disabled = true;
				document.getElementById('choiceJjak').disabled = true;
				document.getElementById('battingText').disabled = true;
				$('.game1Form_left').css('filter', 'brightness(70%)');
				$('.game1Form_left').css('background-color', '#32CD32');
			}

		} else {
			countdownElement.textContent = "남은 시간: 00초";
		}
	}

	// 초기 카운트 다운 시작
	updateCountdown();

	// 1초마다 카운트 다운 업데이트
	setInterval(updateCountdown, 1000);
}

// 홀, 짝 선택 시
function selectChoice(choice) {
	selectedChoice = choice;
}

// 배팅할 때
function fn_batting() {
	if (selectedChoice) {
		
		if (selectedChoice == "") {
			alert("홀 또는 짝을 선택해주세요.");
			return;
		}
		if ($('#battingText').val() == "") {
			alert("배팅할 금액을 입력해주세요.");
			return;
		}

		const userConfirm = confirm(selectedChoice + "에 배팅하시겠습니까?");

		if (userConfirm == true) {
			alert(selectedChoice + "에 배팅 성공!")

			const headers = {
				"CCODE" : "COMPANY",
				"TYPE" : "WEB",
				"TR" : "GG00001",
				"Content-Type" : "application/json"
			};

			const bodyData = {
				CHOICE : selectedChoice,
				GAMEPOINT : $('#battingText').val(),
				IDX : payloadObject.accessToken.IDX
			};

			$.ajax({
				url : apiUrl,
				type : "POST",
				headers : headers,
				contentType : "application/json",
				data : JSON.stringify(bodyData),
				success : function(data) {

					localStorage.setItem('successFlag', 'true');
					localStorage.setItem('gameResult', data.gameResult);

					document.getElementById('battingBut').disabled = true;
					document.getElementById('choiceHol').disabled = true;
					document.getElementById('choiceJjak').disabled = true;
					document.getElementById('battingText').disabled = true;
					$('.game1Form_left').css('filter', 'brightness(70%)');
					$('.game1Form_left').css('background-color', '#32CD32');
					$('#choiceJjak').css('border', '3px solid #DC143C');
					$('#choiceHol').css('border', '3px solid #1E90FF');
					
					$(".bat_con > .pointArea").html("정산 중.....");
					$('#battingText').val('');
				    $('#battingText').attr('placeholder', '배팅액');
					
				},
				error : function(error) {
					console.error("API 호출 중 오류 발생:", error);
				}
			});

		} else {
			alert("취소하셨습니다.");
		}

	} else {
		alert("홀 또는 짝 중 하나를 선택해주세요.");
	}
}

// 모달 띄우기
function modal(id) {
	var zIndex = 9999;
	var modal = $('#' + id);

	// 모달 div 뒤에 희끄무레한 레이어
	var bg = $('<div>').css({
		position : 'fixed',
		zIndex : zIndex,
		left : '0px',
		top : '0px',
		width : '100%',
		height : '100%',
		overflow : 'auto',
		// 레이어 색갈은 여기서 바꾸면 됨
		backgroundColor : 'rgba(0,0,0,0.4)'
	}).appendTo('body');
	
	modal
		.css(
			{
				position : 'fixed',
				boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

				// 시꺼먼 레이어 보다 한칸 위에 보이기
				zIndex : zIndex + 1,

				// div center 정렬
				top : '50%',
				left : '50%',
				transform : 'translate(-50%, -50%)',
				msTransform : 'translate(-50%, -50%)',
				webkitTransform : 'translate(-50%, -50%)'
			}).show()
	// 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
	.find('.modal_close_btn').on('click', function() {
		bg.remove();
		modal.hide();
	});
	
	// 5초 후에 모달을 자동으로 닫습니다.
    setTimeout(function () {
        bg.remove();
        modal.hide();
    }, 5000);
}

// 현재 포인트 조회
function fn_selectPoint() {
	const headers = {
		"CCODE" : "COMPANY",
		"TYPE" : "WEB",
		"TR" : "GC00001",
		"Content-Type" : "application/json"
	};

	const bodyData = {
		IDX : payloadObject.accessToken.IDX
	};

	$.ajax({
		url : apiUrl,
		type : "POST",
		headers : headers,
		contentType : "application/json",
		data : JSON.stringify(bodyData),
		success : function(data) {
			
			$(".bat_con > .pointArea").html("보유 포인트 : " + data.currentPoint + "p");
			$('#battingText').val('');
		    $('#battingText').attr('placeholder', '배팅액');
			
		},
		error : function(error) {
			console.error("API 호출 중 오류 발생:", error);
		}
	});
}