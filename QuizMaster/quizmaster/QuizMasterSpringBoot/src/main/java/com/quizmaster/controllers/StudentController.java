package com.quizmaster.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Role;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentRegistration;
import com.quizmaster.entities.User;
import com.quizmaster.services.QuestionService;
import com.quizmaster.services.RoleService;
import com.quizmaster.services.StudentService;
import com.quizmaster.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {
	
	@Autowired
	StudentService sservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	UserService uservice;
	
	@Autowired
	QuestionService qservice;
	
	@PostMapping("/signup")
	public Student saveStudent(@RequestBody StudentRegistration stud)
	{
		System.out.println(stud);
		Role r = rservice.getRole(2);
		User u = new User(stud.getUname(),stud.getPwd(),r,true);
		User saved = uservice.save(u);
		System.out.println(saved);
		Student s = new Student(stud.getFname(),stud.getLname(),stud.getBdate(),stud.getEducation(),stud.getContact(),stud.getEmail(),stud.getSubscription(),saved);
		System.out.println(s);
		return sservice.saveStudent(s);
		
	}
	
	@GetMapping("/attemptQuiz")
	public List<Question> getAllQuestions()
	{
		return qservice.getQuestions();
		
	}
	
	@GetMapping("/viewQuizBy")
	public List<Question> findBySubIdAndCatid(@RequestParam("cat_id") int cat_id,
			@RequestParam("subject_id") int subject_id) {
		System.out.println(qservice.findBySubIdAndCatid(cat_id, subject_id));
		return qservice.findBySubIdAndCatid(cat_id, subject_id);
	}
 
	@GetMapping("/getStudentByUid")
	public Student getStudentByUid(@RequestParam("uid") int id) {
		return sservice.getStudentByUid(id);
		
	}
	

}
