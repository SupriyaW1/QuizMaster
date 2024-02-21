package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Exams;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.repositories.CategoryRepository;
import com.quizmaster.repositories.ExamsRepository;
import com.quizmaster.repositories.StudentAnswerRepository;
import com.quizmaster.repositories.StudentRepository;

@Service
public class ExamsService {

    @Autowired
    private ExamsRepository examsRepository;

    @Autowired
    private StudentAnswerRepository studentAnswerRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public void calculateTotalMarksForEachExam() {
        // Retrieve all exams from the database
        List<Exams> examsList = examsRepository.findAll();

        // Iterate through each exam
        for (Exams exam : examsList) {
            int totalMarks = calculateTotalMarksForExam(exam.getExam_id(), exam.getStudent().getSid(), exam.getCategory_id().getCat_id());

            exam.setMarks(totalMarks);
            examsRepository.save(exam); // Update and save the exam with total marks
        }
    }

    private int calculateTotalMarksForExam(int examId, int studentId, int categoryId) {
        // Retrieve student and category from the database
        Student student = studentRepository.findById(studentId).orElse(null);
        Category category = categoryRepository.findById(categoryId);

        // Check if student and category are not null before proceeding
        if (student != null && category != null) {
            // Retrieve all student answers for the given criteria
            List<StudentAnswer> studentAnswers = studentAnswerRepository.findByExamIdAndSidAndCatId(examId, student, category);

            int totalMarks = 0;

            // Iterate through each student answer
            for (StudentAnswer studentAnswer : studentAnswers) {
                // Assuming StudentAnswer and Question have the appropriate relationships established
                Question question = studentAnswer.getQuestion();

                if (question != null && studentAnswer.getStudent_answer() == question.getAnswer()) {
                    // If the student's answer matches the correct answer, add 1 mark
                    totalMarks++;
                }
            }

            return totalMarks;
        } else {
            // Handle case where student or category is not found
            return 0; // or throw an exception
        }
    }
}
