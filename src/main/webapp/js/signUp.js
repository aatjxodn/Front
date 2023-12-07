/**
 *                  회원가입 js
 */

// 다음 버튼 누를 시
function fn_join(){
	if($("input:checkbox[name=terms01]").is(":checked") == false) {
		alert('회원약관에 동의해야 가입이 가능합니다.');
		return;
	}
	if ($("input:checkbox[name=terms02]").is(":checked") == false) {
		alert('개인정보 수집·이용 동의에 동의해야 가입이 가능합니다.');
		return;
	}
	
	location.href="signUp2.do";
	
}

// 취소 버튼 누를 시
function fn_exit(){
	location.href="home.do";
}

//전체 체크 
function all_check(selectAll) {
    const termsCheckboxes = document.querySelectorAll('input[name^="terms"]');
    const noTermsCheckbox1 = document.getElementById('no_terms01');
    const noTermsCheckbox2 = document.getElementById('no_terms02');
    const noTermsCheckbox3 = document.getElementById('no_terms03');
    const noTermsCheckbox4 = document.getElementById('no_terms04');
    const noTermsCheckbox5 = document.getElementById('no_terms05');

    termsCheckboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    });

    if (selectAll.checked) {
        noTermsCheckbox1.checked = false;
        noTermsCheckbox2.checked = false;
        noTermsCheckbox3.checked = false;
        noTermsCheckbox4.checked = false;
        noTermsCheckbox5.checked = false;
    }
}
// 동의에 체크일 때, 동의하지않음에 체크 해제
document.addEventListener('DOMContentLoaded', function () {
	const termsCheckbox1 = document.getElementById('terms01');
    const noTermsCheckbox1 = document.getElementById('no_terms01');
    const termsCheckbox2 = document.getElementById('terms02');
    const noTermsCheckbox2 = document.getElementById('no_terms02');
    const termsCheckbox3 = document.getElementById('terms03');
    const noTermsCheckbox3 = document.getElementById('no_terms03');
    const termsCheckbox4 = document.getElementById('terms04');
    const noTermsCheckbox4 = document.getElementById('no_terms04');
    const termsCheckbox5 = document.getElementById('terms05');
    const noTermsCheckbox5 = document.getElementById('no_terms05');
    const all_check_but = document.getElementById('all_check_but');

    termsCheckbox1.addEventListener('change', function () {
        if (termsCheckbox1.checked) {
            noTermsCheckbox1.checked = false;
        }
    });

    noTermsCheckbox1.addEventListener('change', function () {
        if (noTermsCheckbox1.checked) {
            termsCheckbox1.checked = false;
            all_check_but.checked=false;
        }
    });
    
    termsCheckbox2.addEventListener('change', function () {
        if (termsCheckbox2.checked) {
            noTermsCheckbox2.checked = false;
        }
    });

    noTermsCheckbox2.addEventListener('change', function () {
        if (noTermsCheckbox2.checked) {
            termsCheckbox2.checked = false;
            all_check_but.checked=false;
        }
    });
    
    termsCheckbox3.addEventListener('change', function () {
        if (termsCheckbox3.checked) {
            noTermsCheckbox3.checked = false;
        }
    });

    noTermsCheckbox3.addEventListener('change', function () {
        if (noTermsCheckbox3.checked) {
            termsCheckbox3.checked = false;
            all_check_but.checked=false;
        }
    });
    
    termsCheckbox4.addEventListener('change', function () {
        if (termsCheckbox4.checked) {
            noTermsCheckbox4.checked = false;
        }
    });

    noTermsCheckbox4.addEventListener('change', function () {
        if (noTermsCheckbox4.checked) {
            termsCheckbox4.checked = false;
            all_check_but.checked=false;
        }
    });
    
    termsCheckbox5.addEventListener('change', function () {
        if (termsCheckbox5.checked) {
            noTermsCheckbox5.checked = false;
        }
    });

    noTermsCheckbox5.addEventListener('change', function () {
        if (noTermsCheckbox5.checked) {
            termsCheckbox5.checked = false;
            all_check_but.checked=false;
        }
    });
    
});

// 전체 체크 시 전체 체크 버튼에 체크 표시
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[name^="terms"]');
    const allCheckButton = document.getElementById('all_check_but');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', updateAllCheckButton);
    });

    function updateAllCheckButton() {
        const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
        allCheckButton.checked = allChecked;
    }

    allCheckButton.addEventListener('change', function () {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = allCheckButton.checked;
        });
    });
});







