package com.quizmaster.controllers;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Exam;
import com.quizmaster.entities.ExamData;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.Subject;
import com.quizmaster.services.CategoryService;
import com.quizmaster.services.ExamService;
import com.quizmaster.services.StudentService;
import com.quizmaster.services.SubjectService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExamController {
	
	@Autowired
	SubjectService subservice;
	@Autowired
	ExamService eservice;
	@Autowired
	StudentService studservice;
	@Autowired
	CategoryService catservice;
	
	@PostMapping("/saveExam")
    public Exam saveExam(@RequestBody ExamData ex) {
		Subject subject=subservice.getSubject(ex.getSubject_id());
		Student student=studservice.findStudent(ex.getSid());
		Category category=catservice.getCategory(ex.getCat_id());
		LocalDateTime lDate = LocalDateTime.now();
	    Timestamp cdate = Timestamp.valueOf(lDate);
	    Exam  exam = new Exam(cdate,student,subject,category);
		Exam saved = eservice.saveExam(exam);
		System.out.println(saved);
		return saved;
	}

}
