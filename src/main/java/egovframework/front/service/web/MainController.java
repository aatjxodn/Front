package egovframework.front.service.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/home.do")
	public String home() {
		return "main";
	}
	
	@RequestMapping("/signUp.do")
	public String signUp() {
		return "client/signUp";
	}
	
	@RequestMapping("/login.do")
	public String login() {
		return "client/login";
	}
	
	@RequestMapping("/myMenu.do")
	public String myMenu() {
		return "client/myMenu";
	}
}
