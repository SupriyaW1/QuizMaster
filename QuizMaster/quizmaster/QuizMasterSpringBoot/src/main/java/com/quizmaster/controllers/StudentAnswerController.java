package com.quizmaster.controllers;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.AddStudentAnswer;
import com.quizmaster.entities.Category;
import com.quizmaster.entities.Exam;
import com.quizmaster.entities.ExamData;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.entities.Subject;
import com.quizmaster.services.ExamService;
import com.quizmaster.services.QuestionService;
import com.quizmaster.services.StudentAnswerService;
import com.quizmaster.services.StudentService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentAnswerController {
	
	@Autowired
	StudentService studservice;
	  
	
	@Autowired
	ExamService eservice;
	
	@Autowired
	QuestionService qservice;
	
	@Autowired
	StudentAnswerService sansservice;
	
	
  @PostMapping("/saveStudentAnswer")
	public StudentAnswer saveAnswer(@RequestBody AddStudentAnswer ads) {
		
	  
		 
	     Exam e = eservice.getExam(ads.getExam_id());
	     Question q = qservice.findByqid(ads.getQid());
	    Student stud=studservice.findStudent(ads.getSid());
	    StudentAnswer studans = new StudentAnswer(ads.getStudent_answer(),e,q,stud);
		
	    //Exam saved = eservice.saveExam(exam);
	    StudentAnswer saved = sansservice.saveStudentAnswer(studans);
	    System.out.println(saved);
		return saved;
	}
	

}
