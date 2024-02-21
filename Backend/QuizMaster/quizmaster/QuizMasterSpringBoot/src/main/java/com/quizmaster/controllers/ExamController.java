package com.quizmaster.controllers;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.apache.naming.java.javaURLContextFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.ExtensionAwareQueryMethodEvaluationContextProvider;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.dummy.ExamDummy;
import com.quizmaster.entities.Category;
import com.quizmaster.entities.Exam;
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
	SubjectService subjectService;
	@Autowired
	ExamService eService;
	@Autowired
	StudentService studentService;
	@Autowired
	CategoryService categoryService;
	@PostMapping("/saveExam")
    public Exam saveExam(@RequestBody ExamDummy examDummy) {
		Subject subject=subjectService.getSubject(examDummy.getSubject_id());
		Student student=studentService.findStudent(examDummy.getSid());
		Category category=categoryService.getCategory(examDummy.getCat_id());
		LocalDateTime lDate = LocalDateTime.now();
	    Timestamp cdate = Timestamp.valueOf(lDate);
	    Exam  exam = new Exam(cdate,student,subject,category);
		return eService.saveExam(exam);
	}
}
