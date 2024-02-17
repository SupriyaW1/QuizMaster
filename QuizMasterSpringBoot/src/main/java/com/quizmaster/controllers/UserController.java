package com.quizmaster.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.User;
import com.quizmaster.entities.UserCheck;
import com.quizmaster.services.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/login")
	public User checkUser(@RequestBody UserCheck ucheck) {
		
	User	user= uservice.getUser(ucheck.getUname(),ucheck.getPwd());
		System.out.println(user);
		return user;
	}

}
