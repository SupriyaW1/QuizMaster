package com.quizmaster.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.Expert;
import com.quizmaster.entities.ExpertRegistration;
import com.quizmaster.entities.Role;
import com.quizmaster.entities.User;
import com.quizmaster.services.ExpertService;
import com.quizmaster.services.RoleService;
import com.quizmaster.services.UserService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class ExpertController {

	@Autowired
	ExpertService eservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/expertReg")
	public Expert saveExpert(@RequestBody ExpertRegistration exp)
	{
		Role r = rservice.getRole(4);
		User u = new User(exp.getUname(),exp.getPwd(),r,true);
		User saved = uservice.save(u);
		
		Expert e = new Expert(exp.getFname(),exp.getLname(),exp.getQualification(),exp.getSubject(),exp.getContact(),exp.getEmail(),saved);
		return eservice.saveExpert(e);
		
		
	}
}
	