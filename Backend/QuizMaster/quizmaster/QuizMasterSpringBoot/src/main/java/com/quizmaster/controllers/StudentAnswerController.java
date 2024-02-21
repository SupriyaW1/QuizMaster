package com.quizmaster.controllers;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.services.StudentAnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/student-answers")
public class StudentAnswerController {

    private final StudentAnswerService studentAnswerService;

    @Autowired
    public StudentAnswerController(StudentAnswerService studentAnswerService) {
        this.studentAnswerService = studentAnswerService;
    }

    @GetMapping("/findByExamStudentAndCategory/{examId}/{studentId}/{categoryId}")
    public List<StudentAnswer> findByExamStudentAndCategory(@PathVariable int examId, @PathVariable int studentId, @PathVariable int categoryId) {
        // Here you would fetch Student and Category objects based on their IDs
        // For demonstration purpose, assuming you have a service to fetch Student and Category objects by ID
        Student student = new Student(); // Fetch student object by ID
        student.setSid(studentId);
        Category category = new Category(); // Fetch category object by ID
        category.setCat_id(categoryId);

        return studentAnswerService.findByExamStudentAndCategory(examId, student, category);
    }
}
