package com.quizmaster.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.Role;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentRegistration;
import com.quizmaster.entities.User;
import com.quizmaster.services.RoleService;
import com.quizmaster.services.StudentService;
import com.quizmaster.services.UserService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class StudentController {
	
	@Autowired
	StudentService sservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/signup")
	public Student saveStudent(@RequestBody StudentRegistration stud)
	{
		Role r = rservice.getRole(2);
		User u = new User(stud.getUname(),stud.getPwd(),r,true);
		User saved = uservice.save(u);
		
		Student s = new Student(stud.getFname(),stud.getLname(),stud.getBdate(),stud.getEducation(),stud.getContact(),stud.getEmail(),stud.getSubscription(),saved);
		return sservice.saveStudent(s);
		
	}
	
	

}
