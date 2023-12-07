package egovframework.front.service.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	// 메인
	@RequestMapping("/home.do")
	public String home() {
		return "main";
	}
	// 회원가입 절차 1
	@RequestMapping("/signUp1.do")
	public String signUp1() {
		return "client/signUp1";
	}
	// 회원가입 절차 2
	@RequestMapping("/signUp2.do")
	public String signUp2() {
		return "client/signUp2";
	}
	// 회원가입 절차 3
	@RequestMapping("/signUp3.do")
	public String signUp3() {
		return "client/signUp3";
	}
	// 클라이언트 로그인
	@RequestMapping("/login.do")
	public String login() {
		return "client/login";
	}
	// 클라이언트 나의메뉴
	@RequestMapping("/myMenu.do")
	public String myMenu() {
		return "client/myMenu";
	}
	// 관리자 로그인
	@RequestMapping("/admin.do")
	public String admin() {
		return "admin/login";
	}
}
