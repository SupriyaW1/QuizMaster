package com.quizmaster.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.dummy.ExpertRegistrationDummy;
import com.quizmaster.entities.Expert;
import com.quizmaster.entities.User;
import com.quizmaster.entities.Role;
import com.quizmaster.services.ExpertService;
import com.quizmaster.services.RoleService;
import com.quizmaster.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExpertController {

	@Autowired
	ExpertService eService;
	@Autowired
	RoleService rService;
	@Autowired
	UserService uService;

	@PostMapping("/expertRegistration")
	public Expert saveExpert(@RequestBody ExpertRegistrationDummy expert) {
		Role role = rService.getRole(4);

		User user = new User(expert.getUname(), expert.getPwd(), role, true);
	    uService.save(user);
       
	    Expert  exp=new Expert(expert.getFname(),expert.getLname(),expert.getQualification(),expert.getSubject(),expert.getContact(),expert.getEmail(),user);
		return eService.saveExpert(exp);
	}
}
