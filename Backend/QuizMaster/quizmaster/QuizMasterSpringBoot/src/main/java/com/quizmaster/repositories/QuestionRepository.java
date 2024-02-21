package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quizmaster.entities.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
    // Add custom query methods if needed
}
