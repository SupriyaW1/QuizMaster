package com.quizmaster.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.dummy.StudentRegistrationDummy;
import com.quizmaster.entities.Role;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.User;
import com.quizmaster.services.RoleService;
import com.quizmaster.services.StudentService;
import com.quizmaster.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {
	@Autowired
    StudentService sService;
	@Autowired
    RoleService rService;
	@Autowired
	UserService uService;
	
	@PostMapping("/studentRegistration")
	public Student saveStudent(@RequestBody StudentRegistrationDummy dummy)
	{
		Role role = rService.getRole(2);
		User user = new User(dummy.getUname(), dummy.getPwd(), role, true);
	    uService.save(user);
	    Student student=new Student(dummy.getSid(),dummy.getFname(),dummy.getLname(),dummy.getBdate(),dummy.getEducation(),dummy.getContact(),dummy.getEmail(),dummy.getSubscription(),user);
	 System.out.println(student);
	    return sService.saveStudent(student);
	}
}
