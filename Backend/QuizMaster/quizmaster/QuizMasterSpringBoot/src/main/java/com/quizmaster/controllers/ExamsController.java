package com.quizmaster.controllers;

import com.quizmaster.entities.Exams;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.services.ExamsService;
import com.quizmaster.services.StudentAnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/exams")
public class ExamsController {

    

        @Autowired
        private ExamsService examsService;

        @GetMapping("/calculateTotalMarks")
        public String calculateTotalMarksForEachExam() {
            examsService.calculateTotalMarksForEachExam();
            return "Total marks calculated for all exams successfully.";
}
}

