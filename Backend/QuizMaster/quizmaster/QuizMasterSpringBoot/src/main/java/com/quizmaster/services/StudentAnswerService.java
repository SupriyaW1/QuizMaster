package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.repositories.StudentAnswerRepository;

import java.util.List;

@Service
public class StudentAnswerService {

    @Autowired
    private StudentAnswerRepository studentAnswerRepository;

    public List<StudentAnswer> findByExamStudentAndCategory(int examId, Student student, Category category) {
        return studentAnswerRepository.findByExamIdAndSidAndCatId(examId, student, category);
    }

    // Other methods for CRUD operations can be added here
}
