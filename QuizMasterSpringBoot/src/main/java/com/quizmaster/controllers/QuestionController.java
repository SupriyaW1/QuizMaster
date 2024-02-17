package com.quizmaster.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.AddQuestion;
import com.quizmaster.entities.Category;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Subject;
import com.quizmaster.services.CategoryService;
import com.quizmaster.services.QuestionService;
import com.quizmaster.services.SubjectService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuestionController {
	
	@Autowired
	SubjectService sservice;
	
	@Autowired 
	CategoryService catservice;
	
	@Autowired
	QuestionService qservice;
	
	
	
	@PostMapping("/addQuestion")
	public Question addQuestion(@RequestBody AddQuestion addq)
	{
		Subject s = sservice.getSubject(1);
		
		Category c = catservice.getCategory(addq.getCat_id());
		//Category c = catservice.getCategory(1);
		
		Question q = new Question(addq.getQuestion_text(),addq.getOption1(),addq.getOption2(),addq.getOption3(),addq.getOption4(),addq.getAnswer(),addq.getExplaination(),s,c);
		
		return qservice.saveQuestion(q);
	}
	
	 @GetMapping("/viewQuestions")
	 public List<Question> getQuestions()
		{
		 
		 
		      System.out.println(qservice.getQuestions());
		 
		 
			return qservice.getQuestions();
			
		}
	 
	 
	 

	
	

}
